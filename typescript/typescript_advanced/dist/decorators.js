"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(constructor) {
    console.log(constructor);
}
function Log2(target, prop) {
    console.log(target);
    console.log(prop);
}
function Log3(target, prop, descriptor) {
    console.log(target);
    console.log(prop);
    console.log(descriptor);
}
let ComponentTest = class ComponentTest {
    constructor(name) {
        this.name = name;
    }
    get componentName() {
        return this.name;
    }
    logName() {
        console.log(`Component name; ${this.name}`);
    }
};
__decorate([
    Log2
], ComponentTest.prototype, "name", void 0);
__decorate([
    Log3
], ComponentTest.prototype, "componentName", null);
__decorate([
    Log3
], ComponentTest.prototype, "logName", null);
ComponentTest = __decorate([
    Log
], ComponentTest);
function Component(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const element = document.querySelector(config.selector);
                element.innerHTML = config.template;
            }
        };
    };
}
function Bind(_, _2, descriptor) {
    const originalFunction = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return originalFunction.bind(this);
        }
    };
}
let CardComponent = class CardComponent {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component name; ${this.name}`);
    }
};
__decorate([
    Bind
], CardComponent.prototype, "logName", null);
CardComponent = __decorate([
    Component({
        selector: "#card",
        template: `
    <div class="card">
        <div class="card-content">
            <span class="card-title">Card Component</span>
        </div>
    </div>
   `
    })
], CardComponent);
const card = new CardComponent("My Card Component");
const btnClick = document.querySelector("#btnClickMe");
btnClick.addEventListener("click", card.logName);
const validators = {};
function Required(target, propName) {
    validators[target.constructor.name] = Object.assign(Object.assign({}, validators[target.constructor.name]), { [propName]: "required" });
}
function validate(obj) {
    let isValid = true;
    const objectConfig = validators[obj.constructor.name];
    if (!objectConfig) {
        return true;
    }
    Object.keys(objectConfig).forEach((key) => {
        if (objectConfig[key] === "required") {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
class Form {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    Required
], Form.prototype, "email", void 0);
const form = new Form("n@gmail.com");
if (validate(form)) {
    console.log("Valid:", form);
}
else {
    console.log('Validation Error!');
}
//# sourceMappingURL=decorators.js.map