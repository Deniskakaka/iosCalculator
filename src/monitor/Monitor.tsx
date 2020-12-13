import React from 'react';

interface props {
    expression: string
}

class Monitor extends React.Component<props, any> {

    render() {
        return (
            <div className='monitor'>
                <span className={this.props.expression.length > 10
                    ?  'monitor-expression little'
                    : 'monitor-expression'}>
                    {this.props.expression === 'Infinity' || this.props.expression === '-Infinity'
                        ? 'на ноль делить нельзя'
                        :  this.props.expression}
                </span>
            </div>
        )
    }
};

export default Monitor;