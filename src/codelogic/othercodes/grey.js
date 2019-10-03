/* eslint-disable */
export const greyCodeLogic = {
    methods: {
        code(message) {
            if (this.checkBinary(message)) {
                console.error('non-binary');
            }

            let split = message.split("").reverse();
            let coded = split.map((e, index) => {
                if (index + 1 >= split.length) return e;
                else return e ^ split[index + 1];
            })
            let answer = coded.reverse().join("")
            console.log("anwer", answer);
            return answer;

        },
        decode(message) {
            if (this.checkBinary(message)) {
                console.error('non-binary');
            }
            let split = message.split("");
            let index = split.length - 1;
            let previous;
            let decoded = split.map((e) => {
                if (index >= split.length - 1) {
                    previous = e
                }
                else {
                    previous = e ^ previous;
                }
                index--;
                return previous;
            })
            let answer = decoded.join("");
            console.log("answer", answer);
            return answer;
        },
        checkBinary(message) {
            return !/^[01]+$/.test(message);
        }
    }
}


