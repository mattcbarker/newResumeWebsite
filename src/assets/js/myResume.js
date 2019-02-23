const resume = {
  workExperience: [
    {
      company: "StreetsideAuto.com",
      title: "Front End Web Developer",
      dates: "September 2016 - November 2018",
      desc:
        "Created markup and CSS for the new Warn.com that launched July 2018 after 6 months of development. Creation of the markup to make the StreetsideAuto.com website reactive and mobile ready using HTML5, CSS3, jQuery and Bootstrap, managing and updating nopCommerce powered eCommerce websites, created an Angular-powered form to aid in updating product detail pages."
    },
    {
      company: "Starbucks",
      title: "Shift Manager+Barista",
      dates: "March 2013 - August 2014",
      desc:
        "Everything and anything asked of me from making a sweet cup o joe (or more than likely more sugar than coffee) to making sure that the store is pristine when we closed, making sure everyone on my shifts ate and breaked when appropriate. Even more fun like inventory tracking, order recieveing and managing when food is going out."
    },
    {
      company: "Freelance",
      title: "Independent Production Artist",
      dates: "June 2010 - September 2016",
      desc:
        "Independent logo design (From sketches to Vector images), Independent development in the Unreal engine for the PC and Mac, created designs for 3D printing."
    }
  ],
  projectsList: [
    {
      img: "https://placehold.it/200x200",
      title: "Warn Industries 2018",
      desc:
        "Website for the popular aftermarket winching company, made while employed at KeystoneAuto",
      urldest: "https://www.warn.com/"
    },
    {
      img: "https://placehold.it/200x200",
      title: "test",
      desc: "description",
      urldest: "#"
    },
    {
      img: "https://placehold.it/200x200",
      title: "test",
      desc: "description",
      urldest: "#"
    },
    {
      img: "https://placehold.it/200x200",
      title: "test",
      desc: "description",
      urldest: "#"
    }
  ],
  skills: [
    {
      name: "The Basics",
      skills: [
        { skill: "HTML 5", image: require("@/assets/skills-img/html5.png") , url:"#" },
        { skill: "CSS 3", image: require("@/assets/skills-img/css3.png"), url:"#" },
        {skill: "Javascript",image: require("@/assets/skills-img/javascript.png"),url:"#"}
      ]
    },
    {
      name: "Frameworks + Libraries",
      skills: [
        { skill: "Vue.JS", image: require("@/assets/skills-img/vue-logo.png"), url:"https://vuejs.org/" },
        { skill: "NodeJS", image: require("@/assets/skills-img/node.png"), url:"https://nodejs.org/en/" },
        {skill: "Bootstrap 4",image: require("@/assets/skills-img/bootstrap.png"), url:"https://getbootstrap.com/"},
        { skill: "Express", image: require("@/assets/skills-img/express.jpg"), url:"https://expressjs.com/" },
        { skill: "jQuery", image: require("@/assets/skills-img/jquery.gif"), url:"https://jquery.com/" }
      ]
    },
    {
      name: "Backend",
      skills: [
        {skill: "MongoDB Atlas",image: require("@/assets/skills-img/mongodb.jpg"), url:"https://www.mongodb.com/cloud/atlas"}
      ]
    },
    {
      name: "Tools",
      skills: [
        {skill: "Visual Studio Code ",image: require("@/assets/skills-img/visual-studio-code.png"), url:"https://code.visualstudio.com/"},
        { skill: "npm", image: require("@/assets/skills-img/npm.png"), url:"https://www.npmjs.com/"},
        {skill: "Adobe Photoshop",image: require("@/assets/skills-img/photoshop.png"), url:"https://www.adobe.com/products/photoshop.html"},
        { skill: "GitHub", image: require("@/assets/skills-img/github.png"), url:"https://github.com/"},
        { skill: "Atom", image: require("@/assets/skills-img/atom.png"), url:"https://atom.io/"},
        { skill: "Sublime 2", image: require("@/assets/skills-img/sublime.jpg"), url:"https://www.sublimetext.com/2"},
        {skill: "Google Search Console",image: require("@/assets/skills-img/googlesearchconsole.jpg"), url:"https://search.google.com/search-console/about"},
        {skill: "Google Maps API",image: require("@/assets/skills-img/googlemapsapi.png"), url:"https://developers.google.com/maps/documentation/"},
        {skill: "National Weather Service API",image: require("@/assets/skills-img/node.png"), url:"https://www.weather.gov/documentation/services-web-api"}
      ]
    }
  ]
}

export default resume;