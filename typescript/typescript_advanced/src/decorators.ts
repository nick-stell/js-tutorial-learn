// we can add decorators 4 types: for classes, for properties, for methods in classes, for getters, setters

function Log(constructor: Function) {
    console.log(constructor);
}

function Log2(target: any, prop: string | Symbol) {
    console.log(target);
    console.log(prop);
}

function Log3(target: any, prop: string | Symbol, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(prop);
    console.log(descriptor);
}

@Log
class ComponentTest {
    @Log2
    name: string;

    @Log3
    get componentName() {
        return this.name;
    }

    constructor(name: string) {
        this.name = name;
    }

    @Log3
    logName(): void {
        console.log(`Component name; ${this.name}`);
    }
}

// ================= 

interface ComponentDecorator {
    selector: string;
    template: string;
}

function Component(config: ComponentDecorator) {
    return function <T extends { new(...args: any[]): object }>(Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args);

                const element = document.querySelector(config.selector)!;
                element.innerHTML = config.template;
            }
        }
    }
}

function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalFunction = descriptor.value;

    return {
        configurable: true,
        enumerable: false,
        get() {
            return originalFunction.bind(this);
        }
    };
}

@Component({
    selector: "#card",
    template: `
    <div class="card">
        <div class="card-content">
            <span class="card-title">Card Component</span>
        </div>
    </div>
   `
})
class CardComponent {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    @Bind
    logName(): void {
        console.log(`Component name; ${this.name}`);
    }
}

const card = new CardComponent("My Card Component");

// ==================

const btnClick = document.querySelector("#btnClickMe")!;
btnClick.addEventListener("click", card.logName); // we realized decorator Bind because we lost context and context change from CardComponent to click event

// ====================

type ValidatorType = "required" | "email";

interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType
    }
}

const validators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: "required"
    };
}

function validate(obj: any): boolean {
    let isValid = true;
    const objectConfig = validators[obj.constructor.name];

    if (!objectConfig) {
        return true;
    }

    Object.keys(objectConfig).forEach((key) => {
        if (objectConfig[key] === "required") {
            isValid = isValid && !!obj[key];
        }
    })

    return isValid;
}

class Form {
    @Required
    public email: string | void;

    constructor(email?: string) {
        this.email = email;
    }
}

const form = new Form("n@gmail.com");

if (validate(form)) {
    console.log("Valid:", form);
} else {
    console.log('Validation Error!');
}