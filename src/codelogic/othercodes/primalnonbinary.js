/* eslint-disable */
const certaincombination = {
    getCombination(alphabet, n) {
        let q = alphabet.length;
        let N = factorial(q) / factorial(q - n) * factorial(n);
        console.log(N);
        alphabet = alphabet.split("");
        let answer = [];
        let allowSimilar, allowDuplicate = false;




        // alphabet.forEach(element => {
        //     alphabet.forEach(second => {
        //         if (allowSimilar && element === second) {
        //             answer.push(element + second);
        //         }
        //         else if (allowDuplicate && (answer.includes(element + second) || answer.includes(second + element))) {
        //             answer.push(element + second);
        //         } else {
        //             answer.push(element + second);
        //         }
        //     })
        // });
        console.log(answer);
        if (answer.length === N) return answer;
    },

    decode() {

    }
}

const accomodation = {
    getCombination() {

    }
}

const transposition = {
    getCombination(alphabet, n) {
        let q = n;
        let N = factorial(q);
        console.log(N);
        alphabet = alphabet.split("");
        let answer = [...alphabet];
        let counter = 0;

        while (counter < n) {
            this.create(answer, alphabet, counter);
            counter++;
        }

        return answer.filter(e => e.length >= n).join(" ");
    },

    create(answer, alphabet, counter) {
        answer.forEach(element => {
            alphabet.forEach(second => {
                if (element !== second && !element.includes(second) && element.length > counter) {
                    answer.push(element + second);
                }
            })
        });
    }

}

const allCombination = {

}

const quality = {

}

export const primalNonBinary = {
    data() {
        return { codes: [{ type: "certaincombination", constant: certaincombination }, { type: "transposition", constant: transposition }] }
    },
    methods: {
        code(alphabet, n, type) {
            let code = this.codes.find(element => element.type === type);
            let result = code.constant.getCombination(alphabet, n);
            console.log(result);
        },
        decode(message) {


        },
    }
}



function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
