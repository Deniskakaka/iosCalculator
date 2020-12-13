import React from 'react';
import Monitor from '../monitor/Monitor';
import Keyboard from '../keyboard/Keyboard';
import {isPercentage, returnExpression} from "../functions";

interface state {
    expression: string,
    mr: string
}

class App extends React.Component<any, state>{

    constructor(props: any) {
        super(props);
        this.state = {
            expression: '0',
            mr: '0'
        }
    }

    plusMr = (expression: string): void => {
        this.setState({mr: returnExpression(expression)})
    }

    minusMr = (expression: string): void => {
        this.setState({mr: String(+this.state.mr - +returnExpression(expression))})
    }

    clearMr = (): void => {
        this.setState({mr: '0'})
    }

    changeExpression = (count: string): void => {
        this.setState({
            expression: this.state.expression === '0'
                ? count
                : this.state.expression + count
        })
        if (count === 'ac') this.setState({ expression: '0' })
        if (count === 'plus-minus') this.setState({ expression: `${+this.state.expression * -1}` })
        if (count === 'equal') this.setState({ expression:  isPercentage(this.state.expression)
                ? returnExpression(this.state.expression)
                : this.state.expression })
        if (this.state.expression === 'Infinity' || this.state.expression === '-Infinity') {
            this.setState({expression: count !== 'equal' ? count : '0'})
        }
        if (count === 'mr') this.setState({ expression: this.state.mr})
    }

    render() {
        return (
            <div className='wrapper'>
                <Monitor
                    expression={this.state.expression}
                />
                <Keyboard
                    setExpression={this.changeExpression}
                    expression={this.state.expression}
                    plusMr={this.plusMr}
                    minusMr={this.minusMr}
                    clearMr={this.clearMr}
                />
            </div>
        )
    }
};

export default App;