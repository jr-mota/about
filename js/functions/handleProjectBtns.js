export default function handleProjectsBtns(
  side,
  projectsWrapper,
  projectsData,
  projectsElems
) {
  const PROJECT_ELEM_WIDTH = 514;

  if (side === "right") {
    if (
      (projectsData.position.x + PROJECT_ELEM_WIDTH) / PROJECT_ELEM_WIDTH >=
      projectsData.list.length
    ) {
      projectsWrapper.appendChild(projectsElems[0]);

      projectsData.position.x += PROJECT_ELEM_WIDTH;
    } else {
      projectsData.position.x += PROJECT_ELEM_WIDTH;
    }

    projectsWrapper.style.transform = `translateX(-${projectsData.position.x}px)`;
  } else if (side === "left") {
    projectsData.position.x -= PROJECT_ELEM_WIDTH;

    projectsWrapper.style.transform = `translateX(-${projectsData.position.x}px)`;
  } else {
    return;
  }
}
