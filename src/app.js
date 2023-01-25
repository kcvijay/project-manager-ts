console.log("PMApp in TS begins...");
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = document.querySelector("#project-input");
        this.hostElement = document.querySelector("#app");
        // this.hostElement = <HTMLDivElement>document.querySelector("#app")!; ** Alternative method
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    };
    return ProjectInput;
}());
var printInput = new ProjectInput();
