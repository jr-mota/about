const PROJECT_ELEM_WIDTH = 514; // PX
const TRANSFORM_TRANSITION_TIME = 400; // MS

export default function handleProjectsBtns(
  side,
  projectsWrapper,
  projectsData,
  projectsElems,
  getProjectTemplate
) {
  if (side === "right") {
    if (projectsData.currentSlide + 1 > projectsData.list.length - 1) {
    } else {
      const nextSlideProject = projectsData.list[projectsData.currentSlide + 1];

      projectsWrapper.innerHTML =
        projectsWrapper.innerHTML +
        getProjectTemplate(
          nextSlideProject.src,
          nextSlideProject.name,
          nextSlideProject.projectHref
        );

      projectsElems = Array.from(
        document.getElementsByClassName("user-project")
      );

      // setTimeout help
      setTimeout(() => {
        for (let i = 0; i < projectsElems.length; ++i) {
          const project = projectsElems[i];

          project.style.transform = `translateX(-514px)`;
        }
      });

      projectsData.currentSlide += 1;
    }
  } else if (side === "left") {
    projectsData.position.x -= PROJECT_ELEM_WIDTH;

    projectsWrapper.style.transform = `translateX(-${projectsData.position.x}px)`;
  } else {
    return;
  }
}
