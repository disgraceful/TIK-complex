/* eslint-disable */
export const bergerCodeLogic = {
    methods: {
        code(message) {
            let msgArray = message.split("");
            let r = Math.round(Math.log2(msgArray.length)) + 1; // MATH ROUND
            console.log(r);

            let ones = this.countSymbol(msgArray, 1);
            let binary = ones.toString(2);
            while (binary.length < r) {
                binary = "0" + binary;
            }
            let inverted = this.invert(binary);
            let answer = message + inverted;
            console.log(answer)
            return answer;
        },
        decode(message) {
            let index = message.length - 1;
            let codePart = message.substring(index);
            let remainder = message.substring(0, index);
            do {
                codePart = message.substring(index);
                remainder = message.substring(0, index);
                index--;
            } while (!this.condition(remainder, codePart));
            let answer = remainder;
            console.log(answer);
            return answer
        },
        invert(binary) {
            return [].map.call(binary, e => {
                return e == "1" ? "0" : "1";
            }).join("");
        },
        countSymbol(array, search) {
            let counts = {};
            for (var i = 0; i < array.length; i++) {
                let num = array[i];
                counts[num] = counts[num] ? counts[num] + 1 : 1;
            }
            return counts[search]
        },
        condition(remainder, codePart) {
            let ones = this.countSymbol(remainder.split(""), 1);
            let binary = ones.toString(2);
            let inverted = this.invert(binary);
            return codePart.includes(inverted);
        }
    }
}


