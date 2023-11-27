import Stack from "../../stack";
import { ExempleBase } from "../exemple-base";

export abstract class UnbalancedParenthesesStackExemple extends ExempleBase {
    static run() {
        console.log(this.isBalanceParenthese('2 * (5 + 7'));
        console.log(this.isBalanceParenthese('2 * (5 + 7)'));
        console.log(this.isBalanceParenthese('2 * )5 + 7)'));
        console.log(this.isBalanceParenthese('2 * )5 + 7('));
        console.log(this.isBalanceParenthese('2 * (5 + 7)('));
    }

    static isBalanceParenthese(arthmiticExpression : string) : boolean {
        const arthmiticExpressionLength= arthmiticExpression.length;
        const stack = new Stack<string>();
        for( let i = 0; i < arthmiticExpressionLength; i++ ){
            if(arthmiticExpression[i] === '(') {
                stack.push(arthmiticExpression);
            }
            if(arthmiticExpression[i] === ')') {
                if(stack.length() === 0 ){
                    return false;
                }
                stack.pop();
            }
        }
        
        return stack.length() === 0 
    }
} 