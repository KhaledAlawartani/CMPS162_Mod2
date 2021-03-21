//this pulls the data based on the paragraph tag
//const para = document.querySelector('p');

//this pulls the error based on the div tag
//const para = document.querySelector('div.error');

//one way of pulling data directly from the array
/*
const paras = document.querySelectorAll('p');
console.log(paras[1]);
*/

//this loop access all of the data on the screen
/*
paras.forEach(para => {
    console.log(para);
});
*/

//This is for showing all elements and description values.
/*
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
console.log(errors);
*/

//preforming getelementbyid
const title = document.getElementById('page-title');
const errors = document.getElementsByClassName('error');
//console.log(errors[0]);

//try to do a forEach in this methodolgy should be prohibited
/*
errors.array.forEach(error => {
    console.log(error);
});
*/

//This uses a method to use Innertext and append an existing tag base
/*
const para = document.querySelector('p');
para.innerText += 'Today is an awesome day';
console.log(para.innerText);
*/

//Selects all data with a paragraph tag
/*
const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
})
*/