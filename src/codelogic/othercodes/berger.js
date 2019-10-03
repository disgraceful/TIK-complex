/* eslint-disable */
export const bergerCodeLogic = {
    methods: {
        code(message) {
            let msgArray = message.split("");
            let r = Math.round(Math.log2(msgArray.length)) + 1;
            console.log(r);

            let counts = {};
            for (var i = 0; i < msgArray.length; i++) {
                let num = msgArray[i];
                counts[num] = counts[num] ? counts[num] + 1 : 1;
            }

            let ones = counts[1];
            let binary = ones.toString(2);
            while (binary.length < r) {
                binary = "0" + binary;
            }
            let inverted = [].map.call(binary, e => {
                return e == "1" ? "0" : "1";
            })

            let answer = message + inverted.join("");
            console.log(answer)
            return answer;


        },
        decode(message) {

        },
    }
}


