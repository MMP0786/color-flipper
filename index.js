const colorPicker = document.getElementById('color-flipper');

document.addEventListener('mouseover', (event)=>{
    const {screenX} = event;
    colorPicker.style.width= `${screenX/10}px`;
});