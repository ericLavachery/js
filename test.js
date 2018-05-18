// tableau
var array = [
    "John",
    "Paul",
    "Ringo"
];

// TANT QUE
var i = 0;
while (yourString.includes("p") === false) {

    i = i + 1;
    if (i >= 100) {break;}
}

var i = 0;
while (i != array.length) {
    var sayHello = "Hello " + array[i];
    console.log(sayHello);
    i = i + 1;
}

// POUR CHACUN DE
for (var i = 0; i < array.length; i++) {
    var sayHello = "Hello " + array[i];
    console.log(sayHello);
}

// POUR CHACUN DE
array.forEach(function(el,i)){
    console.log("Hello " + el)
}

// objet
var personnage = {
    name : "John",
    age : 28,
    force : 22,
    sayMyName : function(){
        return "Hello, I am " + this.name
    }
};
console.log(personnage.sayMyName());

// FONCTIONS
var position = {
    x: 0,
    y: 0
}

function avancer(posX, posY){
    position.x += posX;
    position.y += posY;
}


// IF else
if (posX == 1) {

}else if (posX == 2) {

}else {

}
