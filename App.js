// let sum1 = 0;
// const func1 = (id) => {
//     id === 'increment' ? sum1 = sum1 + 1 : sum1 = sum1 - 1
//     document.getElementById("incrementText1").innerText = sum1;
// }
// let sum2 = 0;
// const func2 = (id) => {
//     console.log(id)
//     id === 'increment' ? sum2 = sum2 + 1 : sum2 = sum2 - 1
//     document.getElementById("incrementText2").innerText = sum2;
// }
// let sum3 = 0;
// const func3 = (id) => {
//     console.log(id)
//     id === 'increment' ? sum3 = sum3 + 1 : sum3 = sum3 - 1
//     document.getElementById("incrementText3").innerText = sum3;
// }
// let sum4 = 0;
// const func4 = (id) => {
//     console.log(id)
//     id === 'increment' ? sum4 = sum4 + 1 : sum4 = sum4 - 1
//     document.getElementById("incrementText4").innerText = sum4;
// } 

// function totalClick(click){
//     const incrementText1 = document.getElementById('incrementText1');
//     const sumvalue = parseInt(incrementText1.innerText) + click;
//     incrementText1.innerText = sumvalue;
// }


let incrementButton = document.getElementsByClassName('Increment');
let decrementButton = document.getElementsByClassName('decrement');

// increment
for( let i = 0; i < incrementButton.length; i++){
    let button = incrementButton[i];
    button.addEventListener('click', function(event){
        let buttonClicked = event.target;
        // console.log(buttonClicked)
        let input = buttonClicked.parentElement.children[1];
        // console.log(input)
        let inputValue = input.value;
        let newValue = parseInt(inputValue) + 1;
        input.value = newValue;
        getTotal();
    })   
}
// Decrement
for( let i = 0; i < decrementButton.length; i++){
    let button = decrementButton[i];
    button.addEventListener('click', function(event){
        let buttonClicked = event.target;
        let input = buttonClicked.parentElement.children[1];
        let inputValue = input.value;
        let newValue = parseInt(inputValue) - 1;
        // input.value = newValue;
        if (newValue >=0){
            input.value = newValue;
        }
        getTotal();
    })
} 
// Total 
function  getTotal (){
let inputfields = document.querySelectorAll('.input-field');
let totalval = 0;
for ( let i = 0; i<inputfields.length; i++){
    if (parseInt(inputfields[i].value))
    totalval += parseInt(inputfields[i].value);
}
document.getElementById('totalvalue').value = totalval;
}
