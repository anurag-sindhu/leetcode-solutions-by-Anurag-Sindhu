class Builder {
    constructor() {
        this.num = [];
    }

    a = (num) => {
        this.num.push(num);
        return this;
    };
    sum() {
        let sm = 0;
        for (const element of this.num) {
            sm += element;
        }
        return sm;
    }
}

const aa = new Builder();
const aaa = aa.a(1);
console.log(aaa.a(1));
console.log(aa.a(1).a(1).a(1).a(1).sum());
