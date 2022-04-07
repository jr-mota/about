export default function handleProjectsBtns(side, projects) {
  if (side === "right") {
    projects.style.transform = "translateX(-514px)";
  } else if (side === "left") {
  } else {
    return;
  }
}
