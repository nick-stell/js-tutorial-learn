/// <reference path="form-namespace.ts" />

namespace NewForm {
    class MyForm {
        private type: FormType = "inline";
        private state: FormState = "active";
        public email: string;

        constructor(email: string) {
            this.email = email;
        }

        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            };
        }
    }

    export const myForm = new MyForm("n@gmail.com");
}

 console.log(NewForm.myForm);