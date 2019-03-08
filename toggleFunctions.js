function green25(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.remove("green50");
        boxes[b].classList.remove("green75");
        boxes[b].classList.remove("green100");
        boxes[b].classList.add("green25");
}
}

function green50(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.remove("green25");
        boxes[b].classList.remove("green75");
        boxes[b].classList.remove("green100");
         boxes[b].classList.add("green50");
       
}
}


function green75(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.remove("green50");
        boxes[b].classList.remove("green25");
        boxes[b].classList.remove("green100");
        boxes[b].classList.add("green75");      
}
}


function green100(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.add("green100");      
}
}


function smallToggle(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.remove("half_box");
        boxes[b].classList.remove("full_box");
        boxes[b].classList.add("quarter_box");      
}
}


function mediumToggle(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.remove("quarter_box");
        boxes[b].classList.remove("full_box");
        boxes[b].classList.add("half_box");      
}
}


function largeToggle(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.add("full_box");      
}
}
