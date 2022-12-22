/*
 You can change anything in these files--HTML tags, CSS styles, JavaScript functions, etc. 
 Do what you need to do to make it suitable for your STEM problem.

 The getInput function will take user input from the textbox with id="input1" on the page. 
 It will run when the user clicks on the GO button.
 You should call your functions from inside the getInput function.

 The writeOutput function will write some given text to the span element that has id="output1" on the page. 
 You can call this function from your code and give it your result.
*/

// This function will get the text entered into the "input" text field.
// Then it calls another function with the input as an argument.
function check() {
  
  let F, S, H, W, P;
    F = document.querySelector("#inputF");
    S = document.querySelector("#inputS");
    H = document.querySelector("#inputH");
    W = document.querySelector("#inputW");
    P = document.querySelector("#inputP");
  
  if(F.value < 1) return false;
  if(S.value < 1) return false;
  if(H.value < 1) return false;
  if(W.value < 3) return false;
  if(P.value < 2) return false;

  return true;

  // do something with the input
  // <-- replace this with YOUR CODE
};

function Amount() {
  let F, S, H, W, P
  F= document.querySelector("#inputF");
  S = document.querySelector("#inputS");
  H = document.querySelector("#inputH");
  W = document.querySelector("#inputW");
  P = document.querySelector("#inputP");

  let amountF = Math.floor(F.value/1);
  let amountS = Math.floor(S.value/1);
  let amountH = Math.floor(H.value/1);
  let amountW = Math.floor(W.value/3);
  let amountP = Math.floor(P.value/2);

  return Math.min(amountF, amountS, amountH, amountW, amountP)
};


// This function will write some text to the output span on the page.
function writeOutput() {
  let outputSpan = document.querySelector("#output1");
  outputSpan.textContent = "You can make " + Amount() + " tricycle (s) !";
};


// document.querySelector("#buttonGo").addEventListener("click", getInput);
function run() {
  if (check()) {
    // let tris = Amount();
    writeOutput()
  } else {
    alert("Nagwa said you can't make tricycle!");
  };  
}

let submitButton = document.querySelector("#a");
submitButton.addEventListener("click", run);
