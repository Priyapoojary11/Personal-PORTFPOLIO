const texts = ['Software Engineer','Automation Tester','Blogger','UI/UX Designer','Manual Tester'];
const typingDelay = 10;
const newTextDelay = 150;
let textIndex = 0;
let charIndex = 0;

const typingTextElement = document.getElementById('typing');

function typeText(){
    if(charIndex < texts[textIndex].length){
        typingTextElement.textContent+= texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, newTextDelay);
    }else{
        setTimeout(deleteText, typeDelay);
    }
}

function deleteText(){
    if(charIndex > 0){
        typingTextElement.textContent = texts[textIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(deleteText,typingDelay);
    }else{
        textIndex = (textIndex +1)% texts.length;
        setTimeout(typeText,typingDelay);
    }
}
typeText()