//Course 1
var course1Image = document.getElementById("course1-img");
var course1Title = document.getElementById("course1-title");
var course1Price = document.getElementById("course1-price");
//Course 2
var course2Image = document.getElementById("course2-img");
var course2Title = document.getElementById("course2-title");
var course2Price = document.getElementById("course2-price");
//Course 3
var course3Image = document.getElementById("course3-img");
var course3Title = document.getElementById("course3-title");
var course3Price = document.getElementById("course3-price");

course1Image.setAttribute("src", courses[0].image);
course1Title.innerText = courses[0].title;
course1Price.innerText = courses[0].price;

course2Image.setAttribute("src", courses[1].image);
course2Title.innerText = courses[1].title;
course2Price.innerText = courses[1].price;

course3Image.setAttribute("src", courses[2].image);
course3Title.innerText = courses[2].title;
course3Price.innerText = courses[2].price;