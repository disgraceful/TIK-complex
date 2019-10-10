/* eslint-disable */
export const simpleRepeat = {
    methods:{
        code(message){
            return message.concat(message);
        },
        decode(message){
            let length = message.length;
            let sub = message.substring(0,length/2);
            let sub2 = message.substring(length/2,length);
            if(sub===sub2){
                return sub;
            }else{
                console.error('error')
            }
        }
    }
}
