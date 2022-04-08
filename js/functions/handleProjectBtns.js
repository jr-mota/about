export default function handleProjectsBtns(side, projects) {
  if (side === "right") {
    projects.style.transform = "translateX(-514px)";
  } else if (side === "left") {
    projects.style.transform = "translateX(0px)";
  } else {
    return;
  }
}
