const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
document.querySelector("#year").textContent = new Date().getFullYear();

const filters = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
filters.forEach((filter) =>
  filter.addEventListener("click", () => {
    filters.forEach((button) => {
      const active = button === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    let count = 0;
    projectCards.forEach((card) => {
      card.hidden =
        filter.dataset.filter !== "all" &&
        card.dataset.category !== filter.dataset.filter;
      if (!card.hidden) count++;
    });
    document.querySelector(".project-count").textContent =
      `${String(count).padStart(2, "0")} selected project${count === 1 ? "" : "s"}`;
  }),
);

const contentDialog = document.querySelector("#content-dialog");
const contactDialog = document.querySelector("#contact-dialog");
const dialogContent = document.querySelector("#dialog-content");
const projects = {
  still: {
    title: "The Still House",
    image: "assets/project-residence.jpg",
    alt: "Warm oak and pale stone in a tranquil open-plan residence",
    category: "Residential",
    year: "2026",
    scope: "Full-home concept",
    description:
      "A home designed around the luxury of slowing down. Pale stone, warm oak, and a softly restrained palette allow the light to lead, creating a sense of continuity from one room to the next.",
    detail:
      "Open sightlines connect the everyday spaces, while quiet corners offer a place to retreat. Integrated storage keeps the practical things close and the visual noise low. Every material is chosen to become more beautiful with use.",
  },
  common: {
    title: "Common Ground",
    image: "assets/project-workspace.jpg",
    alt: "Plant-filled workspace with natural light and shared tables",
    category: "Commercial",
    year: "2025",
    scope: "Workspace concept",
    description:
      "A fresh perspective on the working day. Common Ground brings the warmth of a home into a collaborative workplace, with generous communal tables, natural textures, and room to breathe.",
    detail:
      "A flexible plan makes space for both shared ideas and individual focus. Greenery softens the architecture, and daylight becomes part of the material palette. The result is an environment that feels welcoming, productive, and human.",
  },
  soft: {
    title: "Soft Sanctuary",
    image: "assets/studio-detail.jpg",
    alt: "Softly layered interior with natural fabrics and sculptural forms",
    category: "Residential",
    year: "2024",
    scope: "Interiors & styling concept",
    description:
      "A gentle retreat from the pace of the everyday. Soft Sanctuary explores the balance between sculptural forms, tactile fabrics, and a palette borrowed from the natural world.",
    detail:
      "Curved furniture invites conversation, layered textiles add depth, and a few carefully chosen objects give the room its personality. The approach is simple: fewer things, chosen with greater care.",
  },
};
document.querySelectorAll("[data-project]").forEach((button) =>
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];
    dialogContent.innerHTML = `<img class="dialog-hero" src="${project.image}" alt="${project.alt}" /><div class="dialog-copy"><p class="eyebrow">Selected spaces / Concept portfolio</p><h2 id="dialog-title">${project.title}</h2><div class="project-facts"><div><strong>Space</strong>${project.category}</div><div><strong>Year</strong>${project.year}</div><div><strong>Scope</strong>${project.scope}</div></div><p>${project.description}</p><p>${project.detail}</p><button class="button" id="project-contact">Imagine your space <span aria-hidden="true">↗</span></button></div>`;
    contentDialog.showModal();
    document.querySelector("#project-contact").addEventListener("click", () => {
      contentDialog.close();
      openContact();
    });
  }),
);

const articles = {
  materials: {
    label: "Material matters",
    title: "The beauty of honest materials.",
    body: "<p>A grain that never repeats. A surface that softens with time. Natural materials bring something to a room that cannot be manufactured: a sense of life. Timber, linen, clay, and stone each tell their own story, and the most interesting interiors give them room to speak.</p><h3>Start with what you touch</h3><p>Consider the surfaces that meet your hands and feet every day. A solid wood tabletop, a wool rug, or a linen curtain can change the way you experience a space. Choose for the feeling as much as the appearance.</p><h3>Let a palette find its rhythm</h3><p>Begin with one material you love and build around it. Warm oak might lead to chalky walls and a woven textile. Keep the palette restrained, but vary the textures to add depth without clutter.</p><h3>Make peace with a little patina</h3><p>Natural materials change. That is part of their appeal. Before you choose a finish, understand its care needs and decide whether its ageing process suits your life. A home should be lived in, not preserved behind glass.</p>",
  },
  calm: {
    label: "Living well",
    title: "Making room for a slower life.",
    body: "<p>A calmer home does not require an empty room or a whole new set of furniture. Often, it begins with noticing the small things that make your day feel rushed, crowded, or uncomfortable.</p><h3>Give everyday rituals a place</h3><p>A chair beside the morning light. A clear surface for making coffee. Somewhere to leave your keys. Design around the moments that matter to you, and the room begins to support your life rather than interrupt it.</p><h3>Create a little breathing space</h3><p>Try moving a piece of furniture before buying another. Clear a route through the room. Allow a favourite object some space around it. Visual quiet can be as valuable as another storage solution.</p><h3>Keep what feels personal</h3><p>A slower home is not a showroom. It has books you return to, objects with memories, and comfortable places to sit. Keep the things that mean something and let the rest be a little simpler.</p>",
  },
  lighting: {
    label: "The finer details",
    title: "Good light changes everything.",
    body: "<p>The same room can feel energising in the morning and deeply restful in the evening. The difference is often light. A thoughtful lighting scheme works with the day, the room, and the people in it.</p><h3>Think in layers</h3><p>Start with a gentle overall glow, add focused light where you read or work, and finish with a lamp that brings warmth to a quiet corner. One bright overhead light rarely does every job well.</p><h3>Follow the daylight</h3><p>Spend time in your room at different hours before you settle on a layout. Place a reading chair where the daylight is soft and use window treatments that let you adjust glare without losing the connection to the outside.</p><h3>Make evenings feel different</h3><p>Warm lamps and dimmable fittings can help a room shift into a more relaxed mood. Test bulbs in the actual space: colour, shade material, and wall finish all influence the light you see.</p>",
  },
};
document.querySelectorAll("[data-article]").forEach((button) =>
  button.addEventListener("click", () => {
    const article = articles[button.dataset.article];
    dialogContent.innerHTML = `<div class="dialog-copy"><p class="eyebrow">Notes from the studio / ${article.label}</p><h2 id="dialog-title">${article.title}</h2>${article.body}</div>`;
    contentDialog.showModal();
  }),
);
document.querySelector("[data-privacy]").addEventListener("click", () => {
  dialogContent.innerHTML =
    '<div class="dialog-copy"><p class="eyebrow">A little clarity</p><h2 id="dialog-title">Privacy & site information</h2><p>This website is a frontend concept for Interwall Studio. The portfolio presents illustrative design concepts, not commissioned client projects. Photography is sourced from Unsplash.</p><p>The project brief tool only processes the information you enter in this browser. It does not send it to a server or store it in cookies or local storage. A brief is downloaded to your device only when you choose to download it. Closing the project brief clears its fields.</p><p>This site does not use analytics or tracking cookies. Fonts load from Google Fonts, which receives your network request. Project photography is hosted with the site.</p></div>';
  contentDialog.showModal();
});

function openContact() {
  closeMenu();
  contactDialog.showModal();
}
document
  .querySelectorAll("[data-contact]")
  .forEach((button) => button.addEventListener("click", openContact));
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom)
    )
      dialog.close();
  });
});

const briefForm = document.querySelector("#brief-form");
const briefPreview = document.querySelector("#brief-preview");
const briefText = document.querySelector("#brief-text");
briefForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = new FormData(briefForm);
  briefText.textContent = `INTERWALL — MY PROJECT BRIEF\n\nName: ${values.get("name").trim()}\nEmail: ${values.get("email").trim()}\nSpace: ${values.get("space")}\nLocation: ${values.get("location").trim()}\n\nMy vision\n${values.get("vision").trim()}\n\nPersonal copy only. This brief has not been sent to Interwall.`;
  briefForm.hidden = true;
  briefPreview.hidden = false;
  document.querySelector("#download-brief").focus();
});
document.querySelector("#edit-brief").addEventListener("click", () => {
  briefPreview.hidden = true;
  briefForm.hidden = false;
  briefForm.elements.name.focus();
});
document.querySelector("#download-brief").addEventListener("click", () => {
  const url = URL.createObjectURL(
    new Blob([briefText.textContent], { type: "text/plain;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "interwall-project-brief.txt";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
contactDialog.addEventListener("close", () => {
  briefForm.reset();
  briefForm.hidden = false;
  briefPreview.hidden = true;
  briefText.textContent = "";
});
