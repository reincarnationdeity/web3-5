let elements = document.body.childNodes;
let widthInput = document.getElementById('widthField');
let changeableImage = document.getElementById('imageForChange')
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let changeableInput = document.getElementById('changeableInput');
let changeableText = document.getElementById('changeText');
let count = 0;

elements.forEach((i)=>{
    let isExist = !!i.className;
    let isContain = isExist ? i.className.toString().includes('block-') : false;
    if(isContain){
            i.style.width = '180px';
            i.style.height = '180px';
    }
})

let changeWidth = () => {
    let value = widthInput.value + 'px';
    changeableImage.style.width = value;
}

let chooseRandomImage = () => {
    let randValue = Math.floor(Math.random() * 10);
    let finallyPath =  randValue === 0 ? `img/1.jpg` : `img/${randValue}.jpg`;
    changeableImage.src = finallyPath;
}
let setInput1Value = () => {
    input1.value = input2.value;
}
let setInput2Value = () => {
    input2.value = input1.value;
}

let setYellowColor = () => {
    changeableInput.style.color = 'yellow';
}
let setGreenColor = () => {
    changeableInput.style.color = 'lightgreen';
}
let changeCountValue = () => {
    count++;
    changeableText.textContent = 'Нажатий на кнопку: ' + count.toString();
}