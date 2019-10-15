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
            for (let i = 0; i < matrix; i++) {
                equation[i][matrix] = q - (equation[i].reduce(this.reducer) % q);
                equation[matrix][i] = q - (equation.map(x => x[i]).reduce(this.reducer) % q)
            }
            console.log(equation);
            let row = q - (equation[matrix].reduce(this.reducer) % q);
            let col = q - (equation.map(x => x[matrix]).reduce(this.reducer) % q)
            if(col===row){
                equation[matrix][matrix] = row;
            }
            return equation;
        },
        decode(message) {

        },
        makeMatrix(message, matrix) {
            let equation = [];
            for (let i = 1; i <= matrix + 1; i++) {
                let row = [];
                for (let j = 1; j <= matrix + 1; j++) {
                    if (i > matrix || j > matrix) row.push(0);
                    else row.push(parseInt(message[`${i}${j}`]));
                }
                equation.push(row);
            }
            return equation
        }
    }
}
