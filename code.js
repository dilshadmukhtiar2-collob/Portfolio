const text = "Frontend Web Developer";
let index = 0;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 300);
  }
}

typingEffect();










