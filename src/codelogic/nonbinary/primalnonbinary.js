/* eslint-disable */

const accomodation = {
    getCombination(alphabet, n) {
        let q = alphabet.length;
        if (n >= q) console.error("accomodation require n< q");
        let N = factorial(q) / factorial(q - n);
        let result = combinationMaker(alphabet, n, N, false, false);
        console.log(N, result.length == N);
        return result
    }
}

const transposition = {
    getCombination(alphabet, n) {
        let q = alphabet.length;
        if (n != q) console.error("transposition require n = q", n === q);
        let N = factorial(q);
        let result = combinationMaker(alphabet, n, N, false, false);
        console.log(N, result.length == N);
        return result
    },
}

const allCombination = {
    getCombination(alphabet, n) {
        let q = alphabet.length;
        let N = Math.pow(q, n);
        let result = combinationMaker(alphabet, n, true, true);
        console.log(N, result.length == N);
        return result;
    }
}

const limitedCombination = {
    getCombination(alphabet, n) {
        let q = alphabet.length;
        let N = factorial(q) / (factorial(q - n) * factorial(n));
        let result = combinationMaker(alphabet, n, false, false);

        result = result.split(" ");
        result.forEach((element) => {
            result.forEach((second, index) => {
                if (element !== second && element.split("").every(e => second.includes(e))) {
                    result.splice(index, 1);
                }
            })
        });

        console.log(result)
        console.log(N, result.length == N);
        return result.join(" ");


    },
}

const quality = {
    getCombination(alphabet, n) {
        let q = alphabet.length;
        let N = q * Math.pow(q - 1, n - 1);
        let result = combinationMaker(alphabet, n, true, true);
        result = result.split(" ");
        let r = result.filter(e => {
            e = e.split("");
            let flag = true;
            let counter = 0;
            while (flag) {
                if (counter + 1 >= e.length) {
                    break;
                }
                if (e[counter] == e[counter + 1]) {
                    flag = false;
                    break;
                }
                counter++;
            }
            return flag;

        })
        console.log(N, r.length == N);
        console.log("sorted", r);
        return r;
    }
}

function combinationMaker(alphabet, n, allowSimilar, allowDuplicate) {
    alphabet = alphabet.split("");
    let answer = [...alphabet];
    let counter = 0;

    while (counter < n) {
        answer.forEach(element => {
            alphabet.forEach(second => {
                if (element.length > counter) {
                    if (element !== second && !element.includes(second)) {
                        answer.push(element + second);
                    } else if (allowSimilar || allowDuplicate) {
                        answer.push(element + second);
                    }
                }
            })
        });
        counter++;
    }
    let result = answer.filter(e => e.length == n)


    return result.join(" ");
}


export const primalNonBinary = {
    data() {
        return {
            codes: [{ type: "limitedCombination", constant: limitedCombination },
            { type: "transposition", constant: transposition },
            { type: "accomodation", constant: accomodation },
            { type: "allCombination", constant: allCombination },
            { type: "quality", constant: quality }]
        }
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
