import { ProjectItem } from "./ProjectItem";
import { DOMHelper } from "../Utility/DOMhelper";



export class ProjectList {
    projects = [];
    constructor(type, switchHandlerFunction) {
      this.type = type;
      const prjItems = document.querySelectorAll(`#${type}-projects li`);
      // console.log(prjItems)
      for (const projItem of prjItems) {
        this.projects.push(
          new ProjectItem(projItem.id, this.switchProjects.bind(this), this.type)
        );
      }
      console.log(this.projects);
      this.connectDropable();
    }
  
    connectDropable() {
      const list = document.querySelector(`#${this.type}-projects ul`);
      list.addEventListener("dragenter", (event) => {
        if (event.dataTransfer.types[0] === "plain/text") {
          event.preventDefault();
        }
        list.parentElement.classList.add("droppable");
      });
      list.addEventListener("dragover", (event) => {
        event.preventDefault();
        list.parentElement.classList.add("droppable");
      });
      list.addEventListener("dragleave", (event) => {
        if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
          list.parentElement.classList.remove("droppable");
        }
      });
      list.addEventListener("drop", (event) => {
        const proId = event.dataTransfer.getData("text/plain");
        if (this.projects.find((p) => p.id === proId)) {
          return;
        }
        document
          .getElementById(proId)
          .querySelector("button:last-of-type")
          .click();
        list.parentElement.classList.remove("droppable");
      });
    }
  
    settingFunction(switchHandlerFunction) {
      console.log("😁😀", this);
      this.switchHandlerFunction = switchHandlerFunction;
    }
    addProject(project) {
      this.projects.push(project);
      console.log("😂😁", this);
      console.log(project);
      DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
      project.update(this.switchProjects.bind(this), this.type);
    }
    switchProjects(id) {
      // console.log(this);
      // console.log(this.projects);
      // console.log(id)
      // const projectIndex = this.projects.findIndex((pro) => pro.id === id);
      // console.log(projectIndex);
      // this.projects.splice(projectIndex, 1);
      this.switchHandlerFunction(this.projects.find((pro) => pro.id === id));
      this.projects = this.projects.filter((pro) => pro.id !== id);
    }
  }