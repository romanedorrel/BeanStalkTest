class calculator {
    constructor(){
        this.id = date.now()
    }
    #log = (value) => {
        console.log(`[calculator : ${this.id}]: ${value}`)
    }

    add(num1, num2){
        const value = num1 + num2
        this.#log(value);
        return value;
    }
}
    module.exports = calculator;

