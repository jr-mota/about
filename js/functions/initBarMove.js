export default function initBarMove(projectsBar) {
  projectsBar.classList.remove("user-projects__bar-inner_transition");

  projectsBar.style.width = 0 + "%";

  setTimeout(() => {
    projectsBar.classList.add("user-projects__bar-inner_transition");

    projectsBar.style.width = 100 + "%";
  });
}
