const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ-"

function gameArthack(a){
  if(a == 0) b = "hack0" //Logo
  else if(a == 1) b = "hack1" //WebDev Projects
  else if(a == 2) b = "hack2" //Coding Projects
  else if(a == 3) b = "hack3" //Music Projects
  else b = "hack4" //Contact Info

  document.getElementById(b).onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 27)]
      })
      .join("");

      if(iterations >= event.target.dataset.length) {
       clearInterval(interval);
      }
      iterations+=1 / 3;
    }, 75);
  }
}