

console.log('This is a test');
class People{
  constructor (name){
    this.name = name;
  }
  getName(){ return this.name;}
  setName(name){ this.name = name;}
}//class ends
let p1 = new People('Davis');
console.log(p1.getName() + ';;' + p1.name);
p1.setName('Subra');
console.log(p1.getName() + '...' + p1.name);
