/**
 * To hide an internal interface we use either protected or private properties:

Protected fields start with _. That’s a well-known convention, not enforced at the language level. Programmers should only access a field starting with _ from its class and classes inheriting from it.
Private fields start with #. JavaScript makes sure we can only access those from inside the class.
 */


// Protecting “waterAmount”

class coffeeMachine{
    waterAmo=0;
    constructor(power){
        this.power=power;
        alert(`crated a coffee machine power: ${power}`);
    }
}
let cm=new coffeeMachine(200);

coffeeMachine.waterAmo=300;

// Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.