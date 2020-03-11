const btnClickMe: Element = document.getElementById("btnClickMe")!;

// Add Event Listener

btnClickMe.addEventListener("click", () => {
    console.log("Button clicked!");
});

// ===============

let anyFlag;  // any by default
const globalVar = "message"; // global variables can be used in other scripts because of warning but not the error

function logInfo(data: string, _?: number) {
    //const message = "string";  error because unused local variable
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}

logInfo("I am log string");

function multiple(a: number, b: number) {
    if(a && b) {
        return a * b;
    }

    return 0;
}
