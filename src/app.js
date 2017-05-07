class Human {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('My name is ' + this.name);
  }
}

obj = new Human('Ryo')
console.log(obj.hello)
