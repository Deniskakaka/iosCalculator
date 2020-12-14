import React from 'react';
import {check, isPoint, mathematicalSymbolExpression} from "../functions";

interface props {
    setExpression: (value: string | undefined) => void,
    expression: string,
    plusMr: (value: string) => void,
    minusMr: (value: string) => void,
    clearMr: () => void
}

class Keyboard extends React.Component<props, any> {

    changeExpression = (event: any): void => {
        if (event.target.className.includes('number') && check(this.props.expression, event.target.innerHTML)) {
                this.props.setExpression(event.target.innerHTML)
        }
        if (event.target.className.includes('point') && !isNaN(+this.props.expression.slice(-1))) {
            if (!isNaN(+this.props.expression.slice(-1)) && isPoint(this.props.expression)) this.props.setExpression('.')
            if (this.props.expression === '0') this.props.setExpression('0.')
        }
        if (event.target.className.includes('plus-minus') && !isNaN(+this.props.expression)) {
            this.props.setExpression('plus-minus')
        }
        if (event.target.className.includes('ac')) {
            this.props.setExpression('ac')
        }
        if (event.target.className.includes('percentage')) {
            this.props.setExpression(mathematicalSymbolExpression(event.target.className, this.props.expression));
        }
        if (event.target.className.includes('mr')) {
            this.props.setExpression('mr')
        }
        if(event.target.className.includes('mc')) {
            this.props.clearMr()
        }
        if (event.target.className.includes('m-') && !isNaN(+this.props.expression.slice(-1))) {
            this.props.minusMr(this.props.expression)
            this.props.setExpression('equal')
        }
    }

    changeResult = (event: any): void | null => {
        if (event.target.className === 'keyboard-right-section') return null
        if(event.target.className.includes('equal')) {
            this.props.setExpression('equal')
        }
        else if(event.target.className.includes('m+') && !isNaN(+this.props.expression.slice(-1))) {
            this.props.plusMr(this.props.expression)
            this.props.setExpression('equal')
        }
        else if(!isNaN(+this.props.expression.slice(-1))) {
           this.props.setExpression(mathematicalSymbolExpression(event.target.className, this.props.expression));
        }
    }

    render() {
        return (
            <section className='keyboard'>
                <div className='keyboard-left-section' onClick={() => this.changeExpression(event)}>
                    <div className='keyboard-left-section__button silver ac'>AC</div>
                    <div className='keyboard-left-section__button silver plus-minus'>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/plus-minus.png" className='plus-minus'/>
                    </div>
                    <div className='keyboard-left-section__button silver percentage'>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/percentage.png" className='percentage'/>
                    </div>
                    <div className='keyboard-left-section__button mc'>mc</div>
                    <div className='keyboard-left-section__button mr'>mr</div>
                    <div className='keyboard-left-section__button m-'>m -</div>
                    <div className='keyboard-left-section__button number'>7</div>
                    <div className='keyboard-left-section__button number'>8</div>
                    <div className='keyboard-left-section__button number'>9</div>
                    <div className='keyboard-left-section__button number'>6</div>
                    <div className='keyboard-left-section__button number'>5</div>
                    <div className='keyboard-left-section__button number'>4</div>
                    <div className='keyboard-left-section__button number'>3</div>
                    <div className='keyboard-left-section__button number'>2</div>
                    <div className='keyboard-left-section__button number'>1</div>
                    <div className='keyboard-left-section__zero number'>0</div>
                    <div className='keyboard-left-section__button point'>.</div>
                </div>
                <div className='keyboard-right-section' onClick={() => this.changeResult(event)}>
                    <div className='keyboard-right-section__button delete'>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/divide.png" className='delete'/>
                    </div>
                    <div className='keyboard-right-section__button m+'>m +</div>
                    <div className='keyboard-right-section__button multiply'>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/multiply.png" className='multiply'/>
                    </div>
                    <div className='keyboard-right-section__button minus'>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/minus-math.png" className='minus'/>
                    </div>
                    <div className='keyboard-right-section__button plus'>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/plus-math.png" className='plus'/>
                    </div>
                    <div className='keyboard-right-section__button equal'>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/equal-sign.png" className='equal'/>
                    </div>
                </div>
            </section>
        )
    }
};

export default Keyboard;