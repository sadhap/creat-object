`use strict`
const value  = document.getElementById('message');

//global variable
 
const nameOne =  {
            name: "ram",
            age: 25,
            yuga: "treta"
};
const nameTwo = {
            name: "ram",
            age: 25,
            yuga: "treta",
};

function older(p1, p2) {
    if (p1.age > p2.age)
        return p1.name;
    else
        return p2.name;
}
const result = older(nameOne,nameTwo);
value.innerHTML =`${result} is oldest`;;
