console.log("PMApp in TS begins...");

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElement = document.querySelector(
      "#project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.querySelector("#app")! as HTMLDivElement;
    // this.hostElement = <HTMLDivElement>document.querySelector("#app")!; ** Alternative method

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const printInput = new ProjectInput();
