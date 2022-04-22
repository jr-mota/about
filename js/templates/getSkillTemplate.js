export default function getSkillTemplate(name, points, index) {
  return `
  <article class="user-skill">
    <div class="user-skill__top">
      <div class="user-skill__name">
        ${name}
      </div>
      <div class="user-skill__points">
        <span>
          lvl ${points}
        </span>  
      </div>
    </div>
    <div class="user-skill__bottom">
      <div class="user-skill__bar">
        <div class="user-skill__bar-inner" style="width: 0%" data-index="${index}"></div>
      </div>
    </div>
  </article>
  `;
}
