import Code from "../Code"
export const grey = new Code("grey");
grey.code = value => {
    let v = value;
    v.split("");
    let coded = v.map(e => {
        if (v.indexOf(e) >= v.legnth - 1) {
            return e
        } else {
            return e ^ v[v.indexOf(e) + 1];
        }
    });
    return coded.reverse().join("");
}

grey.decode = value => {
    let v = value;
    let decoded = v.map(e => {
        if (v.indexOf(e) >= v.legnth - 1) {
            return e
        } else {
          //????
        }
    })
    return decoded;
}
