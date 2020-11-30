const texts = ["Hi, I'm Michael."]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
 
(function type(){    
    
    if(count === texts.length){
        count = 0;
    }    
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.port-name').textContent = letter;
        if(letter.length === texts.length) {
            count++ ;
    }
    setTimeout(type, 215);
}());