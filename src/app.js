import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function() {
  //write your code here
let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let extensions = ['.com', '.io', '.net', '.ve', '.es'];

for (let pronombre of pronouns) {
  for (let adjetivo of adjectives) {
    for (let sustantivo of nouns) {
      for (let extension of extensions) {
        console.log(pronombre + adjetivo + sustantivo + extension);
      }
    }
  }
}
  console.log("Hello Rigo from the console!");
};
