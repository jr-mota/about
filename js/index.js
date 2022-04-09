import handleProjectsBtns from "../js/functions/handleProjectBtns.js";
import projectsData from "./data/projectsData.js";

import getProjectTemplate from "./templates/getProjectTemplate.js";

document.addEventListener("DOMContentLoaded", (e) => {
  const projectsWrapper = document.getElementById("projects");
  const projectsLeftBtn = document.getElementById("projectsLeftBtn");
  const projectsRightBtn = document.getElementById("projectsRightBtn");

  for (const project of projectsData.list) {
    projectsWrapper.innerHTML =
      projectsWrapper.innerHTML +
      getProjectTemplate(project.src, project.name, project.projectHref);
  }

  projectsWrapper.innerHTML =
    getProjectTemplate(
      projectsData.list[projectsData.list.length - 1].src,
      projectsData.list[projectsData.list.length - 1].name,
      projectsData.list[projectsData.list.length - 1].projectHref
    ) +
    projectsWrapper.innerHTML +
    getProjectTemplate(
      projectsData.list[0].src,
      projectsData.list[0].name,
      projectsData.list[0].projectHref
    );

  projectsWrapper.style.transform = "translateX(-514px)";

  projectsData.elems = Array.from(
    document.getElementsByClassName("user-project")
  );

  projectsLeftBtn.addEventListener(
    "click",
    handleProjectsBtns.bind(
      this,
      "left",
      projectsWrapper,
      projectsData,
      getProjectTemplate
    )
  );
  projectsRightBtn.addEventListener(
    "click",
    handleProjectsBtns.bind(
      this,
      "right",
      projectsWrapper,
      projectsData,
      getProjectTemplate
    )
  );
});
