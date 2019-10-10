/* eslint-disable */
export const iterateCode = {
    data() {
        return {
            reducer: (accumulator, curValue) => accumulator + curValue
        }
    },
    methods: {
        code(message, matrix, q) {
            let equation = this.makeMatrix(message, matrix);
            for (let i = 0; i < matrix ; i++) {
                let coded = q - (equation[i].reduce(this.reducer) % q);
                equation[i].push(coded);
            }
            for (let i = 0; i < matrix; i++) {
                let r = [];
                for (let j = 0; j < matrix; j++) {
                    r.push(equation[j][i]);
                    
                }
                
                console.log(r);
               
            }

            console.log(equation);
        },
        decode(message) {

        },
        makeMatrix(message, matrix) {
            let equation = [];
            for (let i = 1; i <= matrix; i++) {
                let row = [];
                for (let j = 1; j <= matrix; j++) {
                    row.push(message[`${i}${j}`]);
                }
                equation.push(row);
            }
            return equation
        }
    }
}
