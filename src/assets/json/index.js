const developer = {
  logo: require("../img/ap.png"),
  username: "antorpo",
  email: "antonio.gonzalezr@udea.edu.co",
  role: "Back-end Developer",
  fullname: "Antonio González Restrepo",
  about:
    "Soy amante del desarrollo, sobretodo con lo relacionado a la parte lógica, infraestructura y comunicación de los sistemas de software. \n Aspiro algún dia convertirme en un gran ingeniero Back-end + DevOps",
  age: 23,
  github: "https://github.com/antorpo",
  linkedin: "https://www.linkedin.com/in/antorpo",
  education: [
    {
      name: "Universidad de Antioquia",
      title: "Ingeniería de Sistemas",
      duration: "Enero 2018 - Presente",
    },
    {
      name: "SENA",
      title: "Tecnica Desarrollo de Software",
      duration: "Junio 2018 - Diciembre 2018",
    },
  ],
  skills: [
    {
      name: "C#",
      percentage: 70,
      color: "#8a1e7f",
      image: require("../img/csharp.png"),
    },
    {
      name: "SQL Server",
      percentage: 50,
      color: "#6e6a6d",
      image: require("../img/sql-server.png"),
    },
    {
      name: "JavaScript",
      percentage: 40,
      color: "#d9d02b",
      image: require("../img/javascript.png"),
    },
    {
      name: "React JS",
      percentage: 30,
      color: "#242422",
      image: require("../img/react.png"),
    },
    {
      name: "Azure DevOps",
      percentage: 50,
      color: "#305796",
      image: require("../img/azure.png"),
    },
    {
      name: "Node JS",
      percentage: 60,
      color: "#8a1e7f",
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
    },
    {
      company: "Sistecrédito",
      jobTitle: "Back-end Developer",
      duration: "Sept 2021 - Presente",
      description:
        "Contribución en la migración de servicios OnPremise (ERP) a un módelo de nube. (Lift-n-Shift)",
      image: require("../img/sistecredito.jpg"),
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
  { id: 1, link: "homexds" },
  { id: 2, link: "about" },
  { id: 3, link: "portfolio" },
  { id: 4, link: "experience" },
  { id: 5, link: "contact" },
];

export const JsonInfo = {
  links,
  developer,
};
