class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWheel: number = 4;

  constructor(model: string) {
    this.model = model;
  }
}

class NewestCar {
  readonly numberOfWheel: number = 4;

  constructor(readonly model: string) {}
}

// ========== Modifier Types

class Animal {
  protected voice: string = "";
  public color: string = "black";

  constructor() {
    this.go();
  }

  private go() {
    console.log("Go!");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice("Test!");
cat.color = "brown";

// ====== Abstract class

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    throw new Error("Method not implemented.");
  }
  info(): string {
    throw new Error("Method not implemented.");
  }
}

const appComponent = new AppComponent();
appComponent.info();
