const developer = {
  logo: require("../img/ap.png"),
  image: require("../img/profile.jpeg"),
  file: "/cv-antorpo.pdf",
  username: "antorpo",
  email: "antonio.gonzalezr@udea.edu.co",
  role: "Back-end Developer",
  fullname: "Antonio González Restrepo",
  about:
    "Soy amante del desarrollo y el diseño de sistemas, sobretodo lo relacionado a la parte lógica, infraestructura y comunicación de los sistemas de software. \n Aspiro algún dia convertirme en un gran ingeniero Back-end + DevOps.",
  age: 23,
  github: "https://github.com/antorpo",
  linkedin: "https://www.linkedin.com/in/antorpo",
  education: [
    {
      id: 1,
      name: "Universidad de Antioquia",
      title: "Ingeniería de Sistemas",
      duration: "Enero 2018 - Presente",
    },
    {
      id: 2,
      name: "SENA",
      title: "Tecnica Desarrollo de Software",
      duration: "Junio 2018 - Diciembre 2018",
    },
  ],
  skills: [
    {
      id: 1,
      name: "C#",
      percentage: 70,
      color: "shadow-[#8a1e7f]",
      image: require("../img/csharp.png"),
    },
    {
      id: 2,
      name: "SQL Server",
      percentage: 50,
      color: "shadow-[#6e6a6d]",
      image: require("../img/sql-server.png"),
    },
    {
      id: 3,
      name: "JavaScript",
      percentage: 40,
      color: "shadow-[#d9d02b]",
      image: require("../img/javascript.png"),
    },
    {
      id: 4,
      name: "React JS",
      percentage: 30,
      color: "shadow-[#34baeb]",
      image: require("../img/react.png"),
    },
    {
      id: 5,
      name: "Azure DevOps",
      percentage: 50,
      color: "shadow-[#305796]",
      image: require("../img/azure.png"),
    },
    {
      id: 6,
      name: "Node JS",
      percentage: 60,
      color: "shadow-[#45ba4d]",
      image: require("../img/node.png"),
    },
  ],
  experience: [
    {
      company: "XpertGroup",
      jobTitle: "Back-end Developer",
      duration: "Feb 2019 - Ago 2020",
      description:
        "Contribución en mantenimiento de servicios en el lado del front-end y back-end",
      image: require("../img/xpertgroup.jpg"),
      web: "https://xpertgroup.co/",
    },
    {
      company: "Sistecrédito",
      jobTitle: "Back-end Developer",
      duration: "Sept 2021 - Presente",
      description:
        "Contribución en la migración de servicios OnPremise (ERP) a un módelo de nube. (Lift-n-Shift)",
      image: require("../img/sistecredito.jpg"),
      web: "https://www.sistecredito.com/",
    },
  ],
  languageScale: 5,
  languages: [
    {
      language: "Ingles",
      scale: 3,
    },
  ],
  hobbies: [
    {
      hobbie: "Leer",
      image: require("../img/sistecredito.jpg"),
    },
    {
      hobbie: "Comer",
      image: require("../img/sistecredito.jpg"),
    },
    {
      hobbie: "Jugar",
      image: require("../img/sistecredito.jpg"),
    },
    {
      hobbie: "Bailar",
      image: require("../img/sistecredito.jpg"),
    },
  ],
};

const links = [
  { id: 1, link: "Home" },
  { id: 2, link: "Skills" },
  { id: 3, link: "portfolio" },
  { id: 4, link: "experience" },
  { id: 5, link: "contact" },
  { id: 6, link: "Skills" },
  { id: 7, link: "Experience" },
  { id: 8, link: "Languages" },
  { id: 9, link: "Hobbies" },
];

export const JsonInfo = {
  links,
  developer,
};
