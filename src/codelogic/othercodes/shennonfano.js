/* eslint-disable */
export const shennonFano = {
    data() {
        return {
            reducer: (accumulator, curValue) => accumulator + curValue,
            first: [],
            second: [],
            temp: [],
            answers: null


        }
    },
    methods: {
        code(values) {
            this.answers = new Map();
            values = values.map(e => Math.round(e * 100));
            this.cycle(values);

            console.log(this.answers);
        },
        cycle(array) {
            for (let i = 0; i < array.length; i++) {
                this.first = array.slice(0, i + 1);
                console.log("first", this.first);
                this.second = array.slice(i + 1);
                console.log("second", this.second);
                let firstSum = this.sumUp(this.first);
                let secondSum = this.sumUp(this.second);
                if (Math.abs(secondSum - firstSum) < array[i + 1] || array.length <= 2) {
                    this.mapValues(this.first, "0");
                    this.mapValues(this.second, "1");
                    break;
                }
            }
            if (!this.getLastMapValue().includes("0") && this.getLastMapValue().length > 1) {
                this.temp = [];
            }
            if (this.first.length > 1 && array.length > 2) {
                this.temp = this.second;
                this.cycle(this.first);
            }
            if (this.second.length > 1 && array.length > 2) {
                this.temp = this.second;
                this.cycle(this.second);
            }
            if (this.temp.length > 1 && array.length > 2) { this.cycle(this.temp); }
        },
        mapValues(array, value) {
            array.forEach(e => {
                let curValue = this.answers.get(e);
                if (curValue === undefined) {
                    this.answers.set(e, value);
                } else {
                    curValue += value;
                    this.answers.set(e, curValue);
                }
            });
        },
        getLastMapValue() {
            return Array.from(this.answers.values()).pop();
        },
        sumUp(array) {
            return array.reduce(this.reducer);
        }
    }
}