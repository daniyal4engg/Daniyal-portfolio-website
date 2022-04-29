// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "I'm Daniyal",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    " Hey, I am Daniyal Shaikh. I have completed my Bachelor of Engineering from North Maharashtra University, Jalgaon (Maharashtra). I am a Full-Stack web developer proficient in MERN stack who is strong in design and integration with intuitive problem-solving skills. Seeking a challenging role in the field of software development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization. ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "Redux",
    // svg: '',
    faClass: "fas fa-database",
  },

  {
    name: "GitHub",
    // svg: '',
    faClass: "fab fa-github",
  },
  {
    name: "Netlify",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "Material UI",
    // svg: '',
    faClass: "fas fa-database",
  },

  {
    name: "Bootstrap",
    // svg: '',
    faClass: "fab fa-bootstrap",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  // {
  //   name: "Bootstrap",
  //   // svg: '',
  //   faClass: "fab fa-bars",
  // },
  // {
  //   name: "Python",
  //   // svg: '',
  //   faClass: "fab fa-python",
  // },
  // {
  //   name: "Java",
  //   // svg: '',
  //   faClass: "fab fa-java",
  // },

  {
    name: "MondoDb",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "npm",
    // svg: '',
    faClass: "fab fa-npm",
  },

  {
    name: "Postman",
    // svg: '',
    faClass: "fas fa-database",
  },

  // {
  //   name: "AWS",
  //   // svg: '',
  //   faClass: "fab fa-aws",
  // },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Zee5.com clone",
    skills: ["HTML, CSS, JS, Express, MongoDB"],
    url: "https://zee5clone.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Mytheresa.com clone",
    skills: ["HTML, CSS, JS"],
    url: "https://mytheresashp.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Dice game",
    skills: ["HTML, CSS, JS"],
    url: "https://dicegameswitch.netlify.app/",
  },
  // {
  //   // Add image in './styles/images.css' in #project4
  //   id: "project4",
  //   name: "Project 4",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/kaustubhai",
  // },
  // {
  //   // Add image in './styles/images.css' in #project5
  //   id: "project5",
  //   name: "Project 5",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/kaustubhai",
  // },
  // {
  //   // Add image in './styles/images.css' in #project6
  //   id: "project6",
  //   name: "Project 6",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/kaustubhai",
  // },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number

// section start

const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Translate app",
    url: "https://daniyal4engg.github.io/Translate-app/",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Stop watch",
    url: "https://stopwatchpracjs.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Text typography",
    url: "https://text-typography.netlify.app/",
  },
];

// section end

// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  // pitch:
  // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Daniyal Shaikh",
  contactUrl: "",
};

// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/daniyal4engg",
  facebook: "https://facebook.com/daniyal.shaikh.543908",
  twitter: "https://twitter.com/daniyal4engg",
  instagram: "https://instagram.com/danny_____13",
  linkedin: "https://linkedin.com/daniyalshaikhcoder",
  resume:
    "https://drive.google.com/file/d/1iFdDH1_84mYTvICleuDiIM2R0bnKbgAM/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
