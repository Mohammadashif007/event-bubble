document.getElementById('section-title').addEventListener('click', (event) => {
    console.log('section title clicked');
    // 
})

document.getElementById('ul-clicked').addEventListener('click', (event) => {
    console.log('ul clicked');
    event.stopPropagation();
})

document.getElementById('item1').addEventListener('click', (event) => {
    console.log('Item1 click');
    
    event.stopImmediatePropagation();
})
document.getElementById('item1').addEventListener('click', (event) => {
    console.log('Item1 click');
    
})
document.getElementById('item1').addEventListener('click', (event) => {
    console.log('Item1 click');
    
})
document.getElementById('item1').addEventListener('click', (event) => {
    console.log('Item1 click');
    
})
document.getElementById('item1').addEventListener('click', (event) => {
    console.log('Item1 click');
    
})

document.getElementById('body').addEventListener('click', () => {
    console.log('body clicked');
})