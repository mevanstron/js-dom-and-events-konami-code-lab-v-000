const code1 = [65, 65, 65, 65, 65, 65, 65, 65, 65, 65]
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  function onKeyDownHandler(e) {
    const key = parseInt(e.location || e.detail || e.which);
    console.log(key)
    if (key === code[index]) {
        console.log(index)
        index++;

        if (index === code.length) {
          alert("Hurray!")
          console.log("Hurray!");
          index = 0;
      }
    } else {
        index = 0;
    }
   }

   const body = document.querySelector('body');

   body.addEventListener('keydown', onKeyDownHandler)

}
