const panels = document.querySelectorAll("section");
const courses = document.querySelectorAll("li");
const labels = ["Finish", "Activate"];

courses.forEach((course) => {
  const [tooltipButton, toggleButton] = course.querySelectorAll("button");

  tooltipButton.onclick = toggleTooltip;
  toggleButton.onclick = moveCourse;
});

function toggleTooltip() {
  if (this.dataset.tooltip === "opened") return;

  const tooltip = document.createElement("div");
  tooltip.className = "card";
  tooltip.textContent = "DUMMY!";
  document.body.append(tooltip);

  this.dataset.tooltip = "opened";

  tooltip.onclick = () => {
    tooltip.remove();
    this.dataset.tooltip = "closed";
  };
}

function moveCourse() {
  const currentCourse = this.parentElement;
  const targetIndex = panels[0].contains(currentCourse) ? 1 : 0;

  this.textContent = labels[targetIndex];
  const targetPanel = panels[targetIndex];
  targetPanel.lastElementChild.append(currentCourse);
}
