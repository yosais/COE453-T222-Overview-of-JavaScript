class Person {
  name = null;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let p1 = new Person('Ahmad');
console.log(p1.getName());

// Inheritance
class KFUPMer extends Person {
  id = null;

  constructor(name, id) {
    super(name);
    this.id = id;
  }
  getID() {
    return this.id;
  }
}

let st = new KFUPMer('Ali', 21000001);
console.log(st.getName() + ' ' + st.getID());
