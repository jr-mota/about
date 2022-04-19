import handleProjectsBtns from "../js/functions/handleProjectBtns.js";
import initBarMove from "./functions/initBarMove.js";
import projectsData from "./data/projectsData.js";
import skillsData from "./data/skillsData.js";

import getProjectTemplate from "./templates/getProjectTemplate.js";
import getSkillTemplate from "./templates/getSkillTemplate.js";

document.addEventListener("DOMContentLoaded", (e) => {
  const projectsWrapper = document.getElementById("projects");
  const projectsLeftBtn = document.getElementById("projectsLeftBtn");
  const projectsRightBtn = document.getElementById("projectsRightBtn");
  const projectsBar = document.getElementById("projectsBar");
  const skillsWrapper = document.getElementById("skills");

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

  projectsBar.style.width = 100 + "%";

  projectsBar.addEventListener("transitionend", (e) => {
    initBarMove(projectsBar);

    handleProjectsBtns(
      "right",
      projectsWrapper,
      projectsData,
      getProjectTemplate
    );
  });

  projectsLeftBtn.addEventListener("click", (e) => {
    handleProjectsBtns(
      "left",
      projectsWrapper,
      projectsData,
      getProjectTemplate
    );
  });
  projectsRightBtn.addEventListener("click", (e) => {
    handleProjectsBtns(
      "right",
      projectsWrapper,
      projectsData,
      getProjectTemplate
    );
  });

  for (let i = 1; i < skillsData.list.length; ++i) {
    const curr = skillsData.list[i];
    let j = i;

    while (j > 0 && skillsData.list[j - 1].points < curr.points) {
      skillsData.list[j] = skillsData.list[j - 1];

      j--;
    }

    skillsData.list[j] = curr;
  }

  for (const skill of skillsData.list) {
    skillsWrapper.innerHTML =
      skillsWrapper.innerHTML + getSkillTemplate(skill.name, skill.points);
  }

  setTimeout(() => {
    const skillElems = Array.from(
      document.getElementsByClassName("user-skill__bar-inner")
    );

    for (let i = 0; i < skillElems.length; ++i) {
      const skillElem = skillElems[i];

      skillElem.style.width = skillsData.list[i].points * 10 + "%";
    }
  }, 100);
});
