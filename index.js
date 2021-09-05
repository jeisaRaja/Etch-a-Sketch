let size =parseInt(prompt("Size")) ;

// console.log(typeof(size));

const container = document.querySelector('#container');
let root = document.documentElement;




function makegrid(size){
    grid_num = 0;
    for(let i=0 ; i<size; i++){
        
        for(let j=0;j<size;j++){
            
            var divs=document.createElement('div');
            grid_num++;
            // divs.textContent=grid_num;
            container.appendChild(divs).className = "grid-item";
            document.documentElement.style.setProperty('--columns-row', size);

        }
    }
}





if(size>1){
    makegrid(size);
}else{
    size=4;
    makegrid(size);
}

let drawStatus = false;
console.log(drawStatus);
container.addEventListener('click', draw)
let divs=document.querySelectorAll('.grid-item');
const grids = document.querySelectorAll('.grid-item');


// divs.forEach(div => div.addEventListener('mouseenter', ()=> div.className='grid-item-hover'));



function check(){
    if(drawStatus==true){
        divs.forEach(div => div.addEventListener('mouseover', ()=> div.className='grid-item-hover'));
        console.log('added!');
    }
    if(drawStatus==false){
        divs.forEach(div => div.addEventListener('mouseover', ()=> div.className='grid-item'));
        console.log('removed!');
    }
}



function draw(){
    if(drawStatus==false){
        drawStatus = true;
        
    }
    else{
        drawStatus=false;
    }
    check();
    console.log('clicked!');
    console.log(drawStatus);
}



    


// THIS IS EXAMPLE
// makegrid(size);

// const container = document.querySelector('#container');

// function makegrid(size) {
//     for (let i = 0; i < size; i++) {
//         // let row = document.createElement('div');
//         // row.className = 'row';
//         document.documentElement.style.setProperty('--columns-row', size);
//         for (let j = 0; j < size; j++) {
//             let grid = document.createElement('div');
//             grid.className = 'grid';
//             container.appendChild(grid);
//         }
//         // container.appendChild(row);
//     }}
