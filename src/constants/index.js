import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";

import project9 from "../assets/projects/project-9.jpg";
import project10 from "../assets/projects/project-10.jpg";


export const HERO_CONTENT = `Innovative Software Engineer with 4+ years of hands-on experience in building scalable applications using Python and React.js. Expertise in cloud integration, machine learning, and continuous integration practices. Skilled in full-stack development with a passion for cutting-edge technologies and problem-solving. Committed to continuous learning and driving impactful solutions for business success.`;

export const ABOUT_TEXT = `I am a dedicated and versatile web developer with a strong foundation in building scalable and efficient web applications. With over 4 years of hands-on experience in technologies such as React.js, Ruby on Rails, Python, and SQL, I have developed a comprehensive understanding of both front-end and back-end development. My journey began with a keen interest in technology, and it has evolved into a career focused on delivering impactful solutions through continuous learning and adaptation. I excel in collaborative settings and enjoy tackling complex problems to create high-quality, user-friendly applications. Beyond coding, I stay engaged with emerging technologies and contribute to open-source projects, reflecting my commitment to growth and innovation.`;

export const EXPERIENCES = [
  {
    year: "February 2025 - Present",
    role: "Web and Database Administrator",
    company: "Jade Scientific",
    description: `I develop and optimize WordPress websites using PHP, HTML5, CSS3, JavaScript, and frameworks like React and Vue.js, focusing on performance, SEO, accessibility, and cross-browser compatibility. I implement custom themes, plugins, and integrations, streamline workflows with tools like Webpack, npm, and Git, and collaborate with marketing teams to align web solutions with business goals. Additionally, I manage NetSuite ERP data, ensuring accuracy and consistency, while conducting testing and debugging to ensure website reliability, security, and compliance.`,
    technologies: ["React.js", "NetSuite", "Vue.js", "HTML","CSS", "JavaScript", "Wordpress"],
  },
  {
    year: "August 2024 - February 2025",
    role: "Software Engineer",
    company: "Info Services",
    description: `In my role as a Software Engineer at Info Services, I work with info Services and iGuroo websites to create seamless user experiences by designing intuitive user flows and wireframes. Using Figma, HTML, CSS, JavaScript, and React, I develop interactive web applications that enhance user engagement. By analyzing user behavior patterns through Pendo analytics, I drive data-driven product improvements and optimize features to ensure a user-friendly platform.`,
    technologies: ["React.js", "Figma", "Miro", "Pendo", "HTML","CSS", "JavaScript", "TypeScript"],
    demoLink: "https://www.infoservices.com/",
  },
  {
    year: "Aug 2022 - May 2024",
    role: "Tech Media Assistant",
    company: "IUPUI",
    description: `Automated surplus item listings with Python, achieving a 70% increase in efficiency. Conducted market research that guided strategic decisions, resulting in a 10% growth in monthly revenue. Developed a data analysis pipeline using Python and SQL, improving inventory management and reporting accuracy by 50%. Enhanced database management with Microsoft Access, and led a team of three in optimizing automation processes, driving project success through effective collaboration.`,
    technologies: ["Python", "SQL", "Microsoft Access", "Excel"],
  },
  {
    year: "Jan 2022 - Jun 2022",
    role: "Software Development Engineer",
    company: "HashedIn by Deloitte",
    description: `Engineered Python scripts with the backend team to enhance item matching and management on the Sodexo project, achieving a 30% reduction in errors and a 20% improvement in data accuracy. Implemented an 87% accurate pre-trained classification model and supported agile backend development, enhancing system functionality and efficiency. Developed scalable APIs with Django and Django REST Framework, integrating machine learning models into production systems. Utilized Apache Spark for large-scale data processing, optimizing performance and scalability for extensive datasets.`,
    technologies: ["Python", "Django", "Apache Spark", "Machine Learning"],
  },
  {
    year: "Jul 2021 - Jan 2022",
    role: "Research Assistant - Deep Learning Project",
    company: "Amrita",
    description: `Orchestrated the use of LSTM, BiLSTM, GRU, and Bidirectional GRU (BiGRU) neural networks to analyze respiratory data for health screening, achieving a notable 70.83% accuracy with the BiGRU model. Co-led the development of a comprehensive pipeline for respiratory health analysis, applying computer vision and deep learning to 900 image pairs. Implemented advanced computer vision algorithms with OpenCV for facial feature detection and used Flir libraries for temperature extraction. Designed a robust preprocessing pipeline for time-series respiratory data, ensuring high data quality and integrity by partitioning datasets into 70% training and 30% testing subsets.`,
    technologies: ["Deep Learning", "OpenCV", "Image Processing", "Python"],
    demoLink: "https://dl.acm.org/doi/10.1145/3549206.3549272",
  },
  {
    year: "May 2021 - Jul 2021",
    role: "Software Development Intern",
    company: "WikiWorks",
    description: `Contributed to an open-source MediaWiki project during Google Summer of Code, mentoring junior developers and enhancing extension functionalities. Refined Page Forms and Cargo with advanced PHP and JavaScript techniques, boosting user satisfaction metrics by 50%. Led the setup and configuration of Jenkins for a CI/CD pipeline, achieving a 20% increase in code quality through automated testing. Orchestrated code reviews via Gerrit, fostering collaboration and ensuring adherence to coding standards.`, 
    technologies: ["PHP", "JavaScript", "Jenkins", "CI/CD"],
    demoLink: "https://phabricator.wikimedia.org/p/Swathi-0901/",
  },

  {
    year: "April 2019 - May 2021",
    role: "Jr. Software Engineer",
    company: "Sarchy.Tech",
    description: `Developed a full-stack application using React.js and Ruby on Rails, designed for college students to share coding projects, discuss errors, and participate in hackathons. Implemented user authentication with Firebase, integrated Redux for front-end state management, and used RESTful APIs for backend communication. Deployed on Heroku with CI/CD pipelines via Git and Jenkins to ensure scalability and code quality.`, 
    technologies: ["React", "RESTful APIs", "BootStrap", "GIT"],
  },
];

export const PROJECTS = [

  {
    title: "Sequence Reinforcement Learning",
    image: project1,
    description:
      "Mastered a heuristic player using Python, NumPy and designed a reinforce- ment learning-based player using TensorFlow within the OpenAI Gym environment, trained against heuristics and human players.",
    technologies: ["Python", "NumPy", "OpenAI", "TensorFlow"],
    githubLink: "https://github.com/imanring/Sequence",
  },

  {
    title: "Shakticon Website",
    image: project7,
    description:
      "Shakticon is a modern, interactive website built with React and JavaScript. It features a sleek user interface, vibrant animations, and seamless navigation between different sections. The website showcases various creative works and services, leveraging React for fast rendering and smooth transitions. The site includes a portfolio section, contact forms, and integrates responsive design, making it mobile-friendly. Shakticon also utilizes dynamic content rendering and API calls for delivering up-to-date information and media. With its engaging UI/UX design, it offers a smooth user experience across devices.",
    technologies: ["React", "JavaScript", "CSS", "React Router", "Axios", "Framer Motion", "Firebase"],
    githubLink: "https://www.shakticon.com/",
  },

  {
    title: "Car Web Application",
    image: project2,
    description: 
      "This is a dynamic car listing web application built using React. Users can browse through various cars, view their specifications, and get detailed information by clicking on individual listings. The application allows users to filter cars based on different criteria such as make, model, price, and year. It also provides an interactive UI with responsive design for both desktop and mobile views. The data for cars is fetched from an API, making the application scalable and dynamic. Additional features include a user-friendly search bar and sorting options to improve the user experience.",
    technologies: ["React", "JavaScript", "CSS", "REST API", "React Router", "Axios", "Material UI"],
    githubLink: "https://drive.google.com/file/d/18d5fGKbtrWHcu5Y70J61kMJisuknIcqG/view?usp=sharing",
  },

  {
    title: "Difference Detection between Two images",
    image: project3,
    description:
      "Created an image difference detection program using Python, SSIM for accurate image comparison, and OpenCV for drawing bounding boxes around differing regions, saving modified images in the system. The program takes 2 almost similar images of the same dimensions, marks their differences, and displays them.",
    technologies: ["Python", "SSIM", "OpenCV"],
    githubLink: "https://docs.google.com/document/d/1ll8nU8M5KCydSERtgxj-MVz_EFAYPRU6XqHUaeeFFds/edit?usp=sharing",
  },
  {
    title: "Predicting Heart Disease Using Machine Learning",
    image: project4,
    description:
      "Developed a classification model to predict heart disease using a Kaggle dataset containing clinical parameters such as age, cholesterol levels, and blood pressure. Leveraged Python libraries like scikit-learn, pandas, and seaborn for data cleaning, feature engineering, and visualization, achieving high classification accuracy to assist in early diagnosis and risk assessment.",
    technologies: ["Python", "scikit-learn", "Pandas"],
    githubLink: "https://drive.google.com/drive/folders/1E7THeeK-lBbBOxfJoC-Vo3cJquw4QylX?usp=sharing",

  },
  {
    title: "Nidar",
    image: project5,
    description:
      "Engineered Nidar, a safety-focused application, with a 4-member team during a hackathon. Utilized React for the frontend, Node.js for the backend, and REST APIs for communication. Integrated features like safety routes with mapping services, SOS alerts, and persistant notification bar.",
    technologies: ["React.js", "RestAPIs", "Node.js", "PostgreSQL" , "JavaScript"],
    githubLink: "https://nidar.netlify.com/",
  },
  {
    title: "UI to Interact with Database",
    image: project6,
    description:
      "Created a database interaction interface using Java and Java Swing with command-line capabilities to create, delete tables/databases, visualize data, supporting 3 relational databases and following OOP adherence.",
    technologies: ["Java", "OOP", "Java Swing", "Database"],
    githubLink: "https://github.com/swathi-0901/Java-Project",
  },

  {
    title: "Portfolio Website",
    image: project8,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    githubLink: "https://swathi-0901.github.io/Portfolio/",
  },

  {
    title: "Dashboard Web Application",
    image: project9,
    description:
      "Designed and developed a comprehensive dashboard web application using Ruby on Rails. Customized views for various user roles and implemented robust role-based access controls. Leveraged ActiveRecord APIs to seamlessly manage and query a PostgreSQL database, handling a substantial volume of data.",
    technologies: ["Ruby On Rails", "Ruby", "ActiveRecord", "PostgreSQL"],
    githubLink: "https://github.com/swathi-0901/connect",
  },
  {
    title: "Jagline App Redesign UI/UX Project",
    image: project10,
    description:
      "Led the redesign using Figma and Adobe XD, creating wireframes and high-fidelity prototypes. Collaborated with classmates via Miro for ideation, conducted usability testing, and refined designs based on user feedback. Developed a responsive design system ensuring consistency.",
    technologies: ["Figma", "Adobe XD"],
    githubLink: "https://drive.google.com/file/d/10w3OWgvzUMooLjZkkLIuqqNyrINGUB2X/view?usp=sharing",
  },
];

export const CONTACT = {
  address: "Canton, Michigan ",
  phoneNo: "+1 (832) 679-4934",
  email: "swathi.kasikala@gmail.com",
};
