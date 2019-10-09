/* eslint-disable */
export const qCheckLogic = { //NEED FEIGURING OUT
    methods: {
        code(message, q) {
            let msgArray = message.split("");
            msgArray = msgArray.map(v => parseInt(v));
            let sum = msgArray.reduce((accumulator, curValue) => accumulator + curValue);
            sum = sum % q;
            console.log(sum);
            let coded = q - sum;
            let result = message + coded;
            console.log(result);
            return result;
        },

        decode(message, q) {
            let msgArray = message.split("");
            msgArray = msgArray.map(v => parseInt(v));
            let coded = msgArray.pop();
            let sum = msgArray.reduce((accumulator, curValue) => accumulator + curValue);
            console.log(sum);
            let remainder = sum % q;
            console.log(remainder);
            
            console.log(coded == q - remainder);

        }
    }


}


