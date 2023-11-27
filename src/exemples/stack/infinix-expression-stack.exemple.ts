import { ExempleBase } from "../exemple-base";
import Stack from '../../stack';

export abstract class InfinixExpressionStackExemple extends ExempleBase {
    static arithmeticExpression = ["+","-","/","*"];
    static run() {
        let postfix = this.infinixExpressionOf('abc+de/*-');
            console.log("result = ", postfix);  
        let postfix2 = this.infinixExpressionOf('12+3*45*-');
            console.log("result = ", postfix2);  
    }
    
    static isArithmeticExpression(element : string) : boolean {
        return this.arithmeticExpression.includes(element);
    }

    static infinixExpressionOf(expression : string){
        const stack = new Stack<string>();
        const expressionLength = expression.length;
        for(let i = 0; i< expressionLength; i++) {
            if (this.isArithmeticExpression(expression[i])) {
                let rightElement = stack.pop();
                let leftElement = stack.pop();
                let tempExp = "";
                if(rightElement?.includes("(") || leftElement?.includes("(")) {
                    tempExp += leftElement;
                    tempExp += expression[i];
                    tempExp += rightElement;

                } else {
                    tempExp += "(";
                    tempExp += leftElement;
                    tempExp += expression[i];
                    tempExp += rightElement;
                    tempExp += ")";
                }
                console.log(tempExp);
                stack.push(tempExp);
            } else {
                stack.push(expression[i]);
            }
        }
        return stack.peek();
        
    }
}