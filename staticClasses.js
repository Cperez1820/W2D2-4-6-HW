class Animal {
    constructor () {
        this.numLegs = numLegsParams
        this.diet = 'herbivore'
        
    }
    // this is a property
    static isAlive = true

    //this is a method
    static sleeping(){
        console.log('is sleeping')
    }
}

class Mammal extends Animal{

}

//this is logging a property
console.log(Animal.isAlive)

//this is invoking a method
Animal.sleeping()


const sheep = new Animal()
//sheep.sleeping()

Mammal.sleeping()