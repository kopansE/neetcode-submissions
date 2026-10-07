class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if(tokens.length === 1)
            return tokens[0];

        const pssibleOp = ["+","-","*","/"];

        const stack = [];
        let result = 0;

        for(let i=0; i<tokens.length;i++){
            if(pssibleOp.includes(tokens[i])){
                const second = stack.pop();
                console.log(`poping second element ${second}`);
                const first = stack.pop();
                console.log(`poping first element ${first}`);
                result = this.resultOfOperation(tokens[i],first,second);
                console.log(`pushing result ${result}`);
                stack.push(result);
            }else{
                console.log(`pushing non operation ${tokens[i]}`);
                stack.push(tokens[i]);
            }
        }
        return stack.pop();
    }

    addition(num1,num2){
        const result = Number(num1)+Number(num2);
        return result>0 ? Math.floor(result) : Math.ceil(result);
    }

    substraction(num1,num2){
        const result = Number(num1)-Number(num2);
        return result>0 ? Math.floor(result) : Math.ceil(result);    }
    
    multiply(num1,num2){
        const result = Number(num1)*Number(num2);
        return result>0 ? Math.floor(result) : Math.ceil(result);    }
    
    division(num1,num2){
        const result = Number(num1)/Number(num2);
        return result>0 ? Math.floor(result) : Math.ceil(result);    }

    resultOfOperation(operation,firstNumber,secondNumber){
        switch(operation){
            case "+":
                return this.addition(firstNumber,secondNumber);
            case "-":
                return this.substraction(firstNumber,secondNumber);
            case "*":
                return this.multiply(firstNumber,secondNumber);
            case "/":
                return this.division(firstNumber,secondNumber);
            default:
                console.log("you wrote something wrong");
                console.log(`operation is: ${operation}`);
                console.log(`first number is: ${firstNumber}`);
                console.log(`second number is: ${secondNumber}`);

                break;
        }
    }
}
