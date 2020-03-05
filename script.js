let Apple = function (weight) {
    this.weight = weight;
    this.getWeight = function () {
        return this.weight;
    };
    this.decrease = function () {
        this.weight -=1;
    };
    this.isEmpty = function () {
        if(this.weight >0) {
            return false;
        } else {
            return true;
        }
    };
};

let Human = function (name, gender, weight) {
    this.weight = weight;
    this.name = name;
    this.gender = gender;

    this.getName = function () {
        return this.name;
    };
    this.checkApple = function (apple) {
        if(apple.isEmpty()){
            alert('an het')
        }
    };

    this.eat = function (apple) {
        apple.decrease();
        alert(this.getName()+' vua an');
    };
};

let apple = new Apple(10);
let adam = new Human('Adam', 'Male',60);
let eva = new Human('Eva', 'Female',48);

let adam_eat = function () {
    adam.eat(apple);
    adam.checkApple(apple)
};

let eva_eat = function () {
    eva.eat(apple);
    eva.checkApple(apple)
};

function eat() {
if(apple.isEmpty()===false){
    adam_eat();
    eva_eat();
}
    setTimeout(eat, 100)
}

eat();