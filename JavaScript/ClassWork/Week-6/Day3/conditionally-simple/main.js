/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

//long string
let str = 'hey'
function isItLong(str){
if (str.length > 20 ){
return "That's a long string!"
} else {
  return undefined;
}
}
console.log(isItLong(str))

//medium string
function isItMedium(str){
 if (str.length >= 10 && str.length <=20){
return "That's a regular sized string!"
 } else {
  return;
 }
 console.log(isItMedium(str))
}

//short string
function isItShort(str){
  if(str.length<10){ 
    return "That's a small string!" 
} else if (str.length = 10) {
  return "That's not a small string!"
}

 console.log(isItShort(str));

}
//random string size
function howLongIsMyString(str){
  if(str.length > 20){
    return "That's a long string!";
  } else if (str.length >=10 && str.length <=20){ 
    return "That's a regular sized string!";
  } else( str.length < 10)
    return "That's a small string!";
  }
  

  console.log(howLongIsMyString(str))

  
  //persons height
  function personsHeight(str){
    if(str === "Tiana"){
      return(50);
    }
    else if (str === "Shaq"){
      return(85);
    }
    else if (str === "Zooey"){
     return(65);
    }
    else{
    return ("I don't know everyone's height!")}
  }

  console.log(personsHeight("Zooey"))

  


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}