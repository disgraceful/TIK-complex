/* eslint-disable */
export const bdCodeLogic = {
    methods: {
        code(message, decimalCode) {
            console.log(decimalCode);
            decimalCode = decimalCode.split("");
            message = message.split("");
            let bitAnswer = [];
            message.forEach(msg => {
                let remainder = msg;
                decimalCode.forEach(codeValue => {
                    if (codeValue > remainder) bitAnswer.push(0);
                    else {
                        bitAnswer.push(1);
                        remainder = remainder - codeValue;
                    }
                })
            });
            console.log("answer", bitAnswer.join(""));
            return bitAnswer;

        },
        decode(message, decimalCode) {
            decimalCode = decimalCode.split("");
            message = message.split("");
            let counter = 0;
            let answer = [];
            let currentNumber = 0;

            message.forEach(msg => {
                currentNumber += decimalCode[counter] * msg;
                counter++;
                if (counter > 3) {
                    answer.push(currentNumber);
                    counter = 0;
                    currentNumber = 0;
                }
            });
            console.log("answer", answer.join(""));
            return answer;

        },
    }
}


