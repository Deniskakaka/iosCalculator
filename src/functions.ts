export const check = (expression: string, count: string): boolean => {
    return count === '0' &&  expression === '0' ? false : true
}

export const mathematicalSymbolExpression = (symbol: string, expression: string): string | undefined => {
    if (symbol.includes('delete')) return expression === '0' ? '0'+'\u00f7' : '\u00f7';
    if (symbol.includes('multiply')) return expression === '0' ? '0'+'\u00d7' : '\u00d7';
    if (symbol.includes('minus')) return expression === '0' ? '0'+'-' : '-';
    if (symbol.includes('plus'))  return expression === '0' ? '0'+'+' : '+';
    if (symbol.includes('percentage')) return '%';
}

export const returnExpression = (expression: string): string => {
    if (expression.slice(-1) === '%') {
        return String(eval(expression
            .replace(new RegExp('%', 'g'), '/100')
            .replace(new RegExp('×','g'), '*')
            .replace(new RegExp('÷', 'g'), '/')))
    }
    return  String(eval(expression
        .replace(new RegExp('×','g'), '*')
        .replace(new RegExp('%', 'g'), '/100*')
        .replace(new RegExp('÷', 'g'), '/')))
}

export const isPercentage = (expression: string): boolean | undefined => {
    if (!isNaN(+expression.slice(-1)) || expression.slice(-1) === '%') return true
    if (!isNaN(+expression.slice(-1)) && expression.slice(-1) !== '%') return false
}

export const isPoint = (expression: string): boolean => {
   let point = expression.match(/\d+\.\d+/g);
   if(point !== null) {
       if (point[point.length - 1].slice(-2) === expression.slice(-2)) return false
       else return true
   }
    else return true
}