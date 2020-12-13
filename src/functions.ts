export const check = (expression: string, count: string) => {
    return count === '0' &&  expression === '0' ? false : true
}

export const mathematicalSymbolExpression = (symbol: string, expression: string) => {
    if (symbol.includes('delete')) return expression === '0' ? '0'+'\u00f7' : '\u00f7';
    if (symbol.includes('multiply')) return expression === '0' ? '0'+'\u00d7' : '\u00d7';
    if (symbol.includes('minus')) return expression === '0' ? '0'+'-' : '-';
    if (symbol.includes('plus'))  return expression === '0' ? '0'+'+' : '+';
    if (symbol.includes('percentage')) return '%';
}

export const returnExpression = (expression: string) => {
    if (expression.slice(-1) === '%') {
        return String(eval(expression
            .replace(new RegExp('%', 'g'), '/100')
            .replace('×', '*')
            .replace('÷', '/')))
    }
    else {
        return  String(eval(expression
            .replace('×', '*')
            .replace(new RegExp('%', 'g'), '/100*')
            .replace('÷', '/')))
    }
}

export const isPercentage = (expression: string) => {
    if (!isNaN(+expression.slice(-1)) || expression.slice(-1) === '%') return true
    if (!isNaN(+expression.slice(-1)) && expression.slice(-1) !== '%') return false
}