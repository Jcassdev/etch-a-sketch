const container = document.querySelector(".container");
const clear = document.querySelector('#clear');
const error = document.querySelector(".error-message");
const black = document.querySelector('#black');
const randomColor = document.querySelector('#random');
const containerClass = document.querySelector(".containerclass");
const buttonClass = document.querySelector(".buttonclass");
const headerClass = document.querySelector(".header");
let errorMessage = document.createElement('div');


function createDivs(num) {
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    
    let numOfDivs = num * num;
    for (let i = 0; i < numOfDivs; i++) {
            
        let newDiv = document.createElement('div');
        newDiv.classList.add(".newdivs");
        containerClass.style.backgroundColor = 'red';
        buttonClass.style.backgroundColor = 'red';
        black.addEventListener('click', function() {
            newDiv.addEventListener("mouseover", function() {
                newDiv.style.backgroundColor ='black';
            });
        });
        randomColor.addEventListener('click', function() {
            newDiv.addEventListener("mouseover", function() {
                newDiv.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            });
        });
        clear.addEventListener('click', function() {
            newDiv.style.backgroundColor = 'white';  
        });
        container.append(newDiv);
    } 
      
};
createDivs(16);
function resize() {
    errorMessage.style.backgroundColor = 'red';
    errorMessage.style.textAlign = 'center';
    
    let input = prompt("How many?");
    if (input < 0 || input > 100 || input == "" ) {
        errorMessage.textContent = "Please pick a number between 1 and 100";
        error.append(errorMessage);
    } else {
        errorMessage.textContent = "Lets draw!"
        error.append(errorMessage);
        return input;
    }
};
function reset(){
    let allDivs = document.querySelectorAll("div");
    allDivs.forEach((div) => div.style.backgroundColor = 'white');
    containerClass.style.backgroundColor = 'red';
    buttonClass.style.backgroundColor = 'red';
    headerClass.style.backgroundColor = 'red';
}
const howMany = document.querySelector("#how-many");
howMany.addEventListener('click', function(){
    errorMessage.remove();
    reset();
    num = resize();
    createDivs(num);
});