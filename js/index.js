import handleProjectsBtns from "../js/functions/handleProjectBtns.js";
import projectsData from "../js/data/projects.js";

import getProjectTemplate from "../js/templates/project.js";

document.addEventListener("DOMContentLoaded", (e) => {
  const projects = document.getElementById("projects");
  const projectsLeftBtn = document.getElementById("projectsLeftBtn");
  const projectsRightBtn = document.getElementById("projectsRightBtn");

  for (const project of projectsData) {
    projects.innerHTML =
      projects.innerHTML +
      getProjectTemplate(project.src, project.name, project.projectHref);
  }

  projectsLeftBtn.addEventListener(
    "click",
    handleProjectsBtns.bind(this, "left", projects)
  );
  projectsRightBtn.addEventListener(
    "click",
    handleProjectsBtns.bind(this, "right", projects)
  );
});
