"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnbalancedParenthesesStackExemple = void 0;
const stack_1 = __importDefault(require("../../stack"));
const exemple_base_1 = require("../exemple-base");
class UnbalancedParenthesesStackExemple extends exemple_base_1.ExempleBase {
    static run() {
        console.log(this.isBalanceParenthese('2 * (5 + 7'));
        console.log(this.isBalanceParenthese('2 * (5 + 7)'));
        console.log(this.isBalanceParenthese('2 * )5 + 7)'));
        console.log(this.isBalanceParenthese('2 * )5 + 7('));
        console.log(this.isBalanceParenthese('2 * (5 + 7)('));
    }
    static isBalanceParenthese(arthmiticExpression) {
        const arthmiticExpressionLength = arthmiticExpression.length;
        const stack = new stack_1.default();
        for (let i = 0; i < arthmiticExpressionLength; i++) {
            if (arthmiticExpression[i] === '(') {
                stack.push(arthmiticExpression);
            }
            if (arthmiticExpression[i] === ')') {
                if (stack.length() === 0) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length() === 0;
    }
}
exports.UnbalancedParenthesesStackExemple = UnbalancedParenthesesStackExemple;
