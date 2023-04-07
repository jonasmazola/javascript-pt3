class Person {
    constructor(name) {
        this.name = this.name
        console.log('hello ' + this.name)
    }


    talk() {
        console.log('Hello word ' + this.name)
    }
}

const newPerson = new Person("Jonas")

newPerson.name = "jonas"
newPerson.talk()