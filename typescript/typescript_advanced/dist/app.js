"use strict";
const btnClickMe = document.getElementById("btnClickMe");
btnClickMe.addEventListener("click", () => {
    console.log("Button clicked!");
});
let anyFlag;
const globalVar = "message";
function logInfo(data, _) {
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}
logInfo("I am log string");
function multiple(a, b) {
    if (a && b) {
        return a * b;
    }
    return 0;
}
//# sourceMappingURL=app.js.map