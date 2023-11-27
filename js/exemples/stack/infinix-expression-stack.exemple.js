"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfinixExpressionStackExemple = void 0;
const exemple_base_1 = require("../exemple-base");
const stack_1 = __importDefault(require("../../stack"));
class InfinixExpressionStackExemple extends exemple_base_1.ExempleBase {
    static run() {
        let postfix = this.infinixExpressionOf('abc+de/*-');
        console.log("result = ", postfix);
        let postfix2 = this.infinixExpressionOf('12+3*45*-');
        console.log("result = ", postfix2);
    }
    static isArithmeticExpression(element) {
        return this.arithmeticExpression.includes(element);
    }
    static infinixExpressionOf(expression) {
        const stack = new stack_1.default();
        const expressionLength = expression.length;
        for (let i = 0; i < expressionLength; i++) {
            if (this.isArithmeticExpression(expression[i])) {
                let rightElement = stack.pop();
                let leftElement = stack.pop();
                let tempExp = "";
                if ((rightElement === null || rightElement === void 0 ? void 0 : rightElement.includes("(")) || (leftElement === null || leftElement === void 0 ? void 0 : leftElement.includes("("))) {
                    tempExp += leftElement;
                    tempExp += expression[i];
                    tempExp += rightElement;
                }
                else {
                    tempExp += "(";
                    tempExp += leftElement;
                    tempExp += expression[i];
                    tempExp += rightElement;
                    tempExp += ")";
                }
                console.log(tempExp);
                stack.push(tempExp);
            }
            else {
                stack.push(expression[i]);
            }
        }
        return stack.peek();
    }
}
InfinixExpressionStackExemple.arithmeticExpression = ["+", "-", "/", "*"];
exports.InfinixExpressionStackExemple = InfinixExpressionStackExemple;
