"use strict";
var NewForm;
(function (NewForm) {
    class MyForm {
        constructor(email) {
            this.type = "inline";
            this.state = "active";
            this.email = email;
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    NewForm.myForm = new MyForm("n@gmail.com");
})(NewForm || (NewForm = {}));
console.log(NewForm.myForm);
//# sourceMappingURL=namespaces.js.map