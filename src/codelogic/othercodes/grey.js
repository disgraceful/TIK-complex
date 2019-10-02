/* eslint-disable */
export const greyCodeLogic = {
    methods: {
        code(message) {
            if (!/^[01]+$/.test(message)) {
                console.error('non-binary');
            }

            let split = message.split("").reverse();
            let coded = split.map((e, index) => {
                if (index + 1 >= split.length) return e;
                else return e ^ split[index + 1];


            })
            console.log("anwer", coded.reverse().join(""));

        },
        decode(message) {

        }
    }
}


