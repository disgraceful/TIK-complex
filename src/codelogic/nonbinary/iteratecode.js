/* eslint-disable */
export const iterateCode = {
    data() {
        return {
            reducer: (accumulator, curValue) => accumulator + curValue
        }
    },
    methods: {
        code(message, matrix, q) {
            let equation = this.makeMatrix(message, matrix, true);
            for (let i = 0; i < matrix; i++) {
                equation[i][matrix] = q - (equation[i].reduce(this.reducer) % q);
                equation[matrix][i] = q - (equation.map(x => x[i]).reduce(this.reducer) % q)
            }
            let row = q - (equation[matrix].reduce(this.reducer) % q);
            let col = q - (equation.map(x => x[matrix]).reduce(this.reducer) % q)
            if (col === row) {
                equation[matrix][matrix] = row;
            }
            return equation;
        },
        decode(message, matrix, q) {
            let equation = this.makeMatrix(message, matrix, false);
            equation = this.fillMatrix(equation);
            for (let i = 0; i < equation.length; i++) {
                equation[i][equation.length - 1] = equation[i].reduce(this.reducer) % q;
                equation[equation.length - 1][i] = equation.map(x => x[i]).reduce(this.reducer) % q;
            }
            console.log(equation);
            return this.isCorrect(equation);
        },
        makeMatrix(message, matrix, coding) {
            let equation = [];
            for (let i = 1; i <= matrix + 1; i++) {
                let row = [];
                for (let j = 1; j <= matrix + 1; j++) {
                    if ((i > matrix || j > matrix) && coding) {
                        row.push(0);
                    }
                    else row.push(parseInt(message[`${i}${j}`]));
                }
                equation.push(row);
            }
            return equation
        }, fillMatrix(oldMatrix) {
            let newRow = [];
            for (let i = 0; i < oldMatrix.length; i++) {
                oldMatrix[i].push(0);
                newRow.push(0);
            }
            newRow.push(0);
            oldMatrix.push(newRow);
            console.log(oldMatrix);
            return oldMatrix;
        },
        isCorrect(matrix) {
            return matrix[matrix.length - 1].reduce(this.reducer) === 0 &&
                matrix.map(x => x[matrix.length - 1]).reduce(this.reducer) === 0;
        }
    }
}
