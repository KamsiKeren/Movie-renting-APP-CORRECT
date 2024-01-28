class Car {
numberOfCar= 12
CarColor ='Pink'
static colorOfCar = 'black'

Driving() {
console.log ('I am driving a car')
}
displayself() {
 console.log(this)
}
displayselfCarColor(){
  console.log(this.CarColor)
}
static accessStatic(){
  console.log(Car.colorOfCar)
}

}


const venza = new Car()
speedOfvenza = 100
venzaColor = 'white'
numberOfvenza = 2
venza.speadOfvenza = 100
venza.numberofvenza =2
//Car.colorOfCar ='green'
console.log (venza, Car)
venza.Driving()
venza.displayself()
venza.displayselfCarColor()
Car.accessStatic()


class Person{
constructor(name, age){
  this.name = name
  this. age = age
}


}

const person = new Person( 'Job', 13)
console.log('Job', 13)
