/*===============SWIPER JS===============*/
let swiperCards = new Swiper(".certificates-content", {
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

/*===============DARK MODE===============*/
const checkbox = document.getElementById("chk");
checkbox.addEventListener("change", () => {
  document.documentElement.classList.toggle("dark-theme");
  localStorage.setItem("theme", document.documentElement.classList.contains("dark-theme") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark-theme");
  checkbox.checked = true;
}


/*===============SKILLS===============*/
const skills = [
  { name: "Java", img: "assets/images/skills/java-logo.svg"},
  { name: "Spring Boot", img: "assets/images/skills/spring-boot-logo.svg"},
  { name: "NodeJS", img: "assets/images/skills/nodejs-logo.svg"},
  { name: "JavaScript", img: "assets/images/skills/javascript-logo.svg"},
  { name: "TypeScript", img: "assets/images/skills/typescript-logo.svg"},
  {name: "Python", img: "assets/images/skills/python-logo.svg"},
  { name: "HTML", img: "assets/images/skills/html-logo.svg"},
  { name: "CSS", img: "assets/images/skills/css-logo.svg"},
  { name: "MySQL", img: "assets/images/skills/mysql-logo.svg"},
  { name: "Git", img: "assets/images/skills/git-logo.svg"},
  { name: "Postman", img: "assets/images/skills/postman-logo.svg"},
];

const skillsContainer = document.querySelector(".skills-container");

skills.forEach(skill => {
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill");

  const skillImg = document.createElement("img");
  skillImg.src = skill.img;
  skillImg.alt = `${skill.name} logo`; /* descrição para leitores de tela */

  const skillText = document.createElement("p");
  skillText.textContent = skill.name;

  skillDiv.appendChild(skillImg);
  skillDiv.appendChild(skillText);

  skillsContainer.appendChild(skillDiv);
});

/*===============CERTIFICATES===============*/
const certificates = [
  {name: "Java Com Spring Boot", img: "assets/images/certificates/Dio - Claro - Java com Spring Boot.jpg", link: "https://www.dio.me/certificate/JVMRWTVV/share"},
  {name: "Git e Versionamento", img: "assets/images/certificates/Ada Tech - Git e Versionamento.png", link: "https://ada.tech/certificado?code=0676972a-52b5-89f9-50ab-e571745de5b2"},
  {name: "Introdução à plataforma Node.js", img: "assets/images/certificates/Ada Tech - Introdução à plataforma Node.js.png", link: "https://ada.tech/certificado?code=ed6f93ae-e736-aa74-ad8c-58ce8993de4d"},
  {name: "Introdução ao Node.JS com Express", img: "assets/images/certificates/Ada Tech - Introdução ao Node.JS com Express.png", link: "https://ada.tech/certificado?code=ed77e607-4282-a364-7132-5a1bb2548494"},
  {name: "Lógica de programação com Javascript", img: "assets/images/certificates/Ada Tech - Lógica de programação com Javascript (Node.JS).png", link: "https://ada.tech/certificado?code=ed77e50a-796c-afe4-66f3-efdcd343dd86"},
  {name: "Programação orientada a objetos com JavaScript", img: "assets/images/certificates/Ada Tech - Programação orientada a objetos com JavaScript (Node.js).png", link: "https://ada.tech/certificado?code=ed77e511-ca53-a764-2f0c-17488a903441"}
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

certificates.forEach(certificate => {
  const certificateArticle = document.createElement("article");
  certificateArticle.classList.add("certificate-article", "swiper-slide");

  const certificateImage = document.createElement("div");
  certificateImage.classList.add("certificate-image");
  const certificateImg = document.createElement("img");
  certificateImg.src = certificate.img;
  certificateImg.alt = "Imagem do certificado";
  certificateImg.classList.add("certificate-img"); 

  const certificateData = document.createElement("div");
  certificateData.classList.add("certificate-data");
  const certificateName = document.createElement("h3");
  certificateName.classList.add("certificate-name");
  certificateName.textContent = certificate.name;
  const certificateLink = document.createElement("a");
  certificateLink.href = certificate.link;
  certificateLink.className = "certificate-button";
  certificateLink.target = "_blank";
  certificateLink.rel = "noopener noreferrer";
  certificateLink.textContent = "Consultar certificado";

  certificateData.appendChild(certificateName);
  certificateData.appendChild(certificateLink);
  certificateImage.appendChild(certificateImg);
  certificateArticle.appendChild(certificateImage);
  certificateArticle.appendChild(certificateData);
  
  swiperWrapper.appendChild(certificateArticle);
});

/*===============PROJECTS===============*/
const projects = [
  {
    name: "To-Do List API",
    linkVideo: "https://www.youtube.com/embed/PPXdr96KJME?si=2a2oFaWiIAh5Rzyx",
    linkImg: "",
    context: "API de gerenciamento de tarefas",
    description: "Essa API foi desenvolvida como desafio final do Bootcamp: Claro Java com Spring Boot da plataforma DIO. Entre suas principais funcionalidades estão: criação, atualização e deleção de tarefas; listagem de todas as tarefas; além de buscas específicas por ID, nome, status ou data de validade. O projeto tem como finalidade gerenciar tarefas por meio de uma API desenvolvida com Java 17, Spring Boot 3, H2 Database e Swagger UI.",
    linkGithub: "https://github.com/Lucas-LDev/to-do-list-api"
  },
  {
    name: "Chess System",
    linkVideo: "https://www.youtube.com/embed/3jw8K0tFsf4?si=-XlOV0QvQNMeEzXl",
    linkImg: "",
    context: "Jogo de xadrez no terminal utilizando Java",
    description: "Este jogo foi desenvolvido como parte de um desafio no curso 'Java COMPLETO: Programação Orientada a Objetos + Projetos' da plataforma Udemy. O sistema explora os principais conceitos da linguagem Java, como encapsulamento, matrizes, herança, membros estáticos, padrão de camadas, enums, polimorfismo e tratamento de exceções. Desenvolvido em Java puro, o jogo pode ser jogado diretamente pelo terminal por dois jogadores.",
    linkGithub: "https://github.com/Lucas-LDev/Chess-System"
  },
  {
    name: "Portfólio",
    linkVideo: "",
    linkImg: "assets/images/demo-projects/portfolio.png",
    context: "Portfólio de projetos pessoais",
    description: "Este site foi criado como parte do meu processo de aprendizado, testes e desafios no desenvolvimento Front-end. Embora o foco principal desse projeto seja o aprendizado, ele também serve para apresentar um pouco sobre mim, compartilhar conhecimentos e habilidades que adquiri ao longo dos estudos em programação, além de mostrar cursos que realizei na área e alguns dos projetos que desenvolvi. O site foi construído utilizando HTML, CSS e JavaScript.",
    linkGithub: "https://github.com/Lucas-LDev/Lucas-LDev.github.io"
  },
]

const projectsContainer = document.querySelector(".projects-container");

projects.forEach(project => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  const projectName = document.createElement("h3");
  projectName.classList.add("project-name");
  projectName.textContent = project.name;

  const projectContent = document.createElement("div");
  projectContent.classList.add("project-content");
  const projectDemo = document.createElement("div");
  projectDemo.classList.add("project-demo");

  if (project.linkVideo) {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", project.linkVideo);
    iframe.setAttribute("title", "YouTube video player");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    iframe.setAttribute("allowfullscreen", "");

    projectDemo.appendChild(iframe);
  }
  else if (project.linkImg) {
    const img = document.createElement("img");
    img.src = project.linkImg;
    img.alt = "Imagem de demonstração do projeto";

    projectDemo.appendChild(img);
  } else {
    const emptyDemonstration = document.createElement("img");
    emptyDemonstration.src = "assets/images/demo-projects/no-demo.png";
    emptyDemonstration.alt = "Imagem do projeto não disponível";

    projectDemo.appendChild(emptyDemonstration);
  }

  const projectInfo = document.createElement("div");
  projectInfo.classList.add("project-info");
  const projectContext = document.createElement("h4");
  projectContext.textContent = project.context;
  const projectDescription =  document.createElement("p");
  projectDescription.textContent = project.description;

  projectInfo.appendChild(projectContext);
  projectInfo.appendChild(projectDescription);
  projectContent.appendChild(projectDemo);
  projectContent.appendChild(projectInfo);

  const projectLinkGithub = document.createElement("a");
  projectLinkGithub.classList.add("link-github");
  projectLinkGithub.href = project.linkGithub;
  projectLinkGithub.target = "_blank";
  projectLinkGithub.rel = "noopener noreferrer";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
  );
  svg.appendChild(path);

  const githubText = document.createElement("span");
  githubText.textContent = "Ver no GitHub";
  
  projectLinkGithub.appendChild(svg);
  projectLinkGithub.appendChild(githubText);

  projectDiv.appendChild(projectName);
  projectDiv.appendChild(projectContent);
  projectDiv.appendChild(projectLinkGithub);

  projectsContainer.appendChild(projectDiv);
});