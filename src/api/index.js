const { Router } = require("express");
const routes = require("./routes/pdfRoute");
const moment = require('moment')

let router = Router();

router.use("/resume", routes);
router.get("/", (req, res) => {
  res.json({
    route: "Api Version One",
    time: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timestamp: Date.now(),
  });
});

router.get("/pug", (req, res) => {
  res.render("templateOne", {
    personalInfo: {
      email: "roqeebyusuff17@gmail.com",
      firstName: "Roqeeb",
      lastName: "Yusuff",
      middleName: "Oluwatoyin",
      telephone: "2345789",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi quidem aliquid sed impedit nesciunt voluptatem, quasi iure dolores soluta numquam id doloribus ipsa, voluptatum perferendis",
    },
    experiences: [
      {
        description: "Description",
        endDate: "Present",
        organisation: "Reedtech",
        position: "Developer",
        startDate: "2022-07-13",
      },
    ],
    educations: [
      {
        course: "COmputer Science",
        endDate: "Present",
        institution: "FUTA",
        startDate: "2022-07-07",
        study: "B.TEch",
      },
      {
        course: "Cyber Securtiy",
        endDate: "Present",
        institution: "OAU",
        startDate: "2022-07-07",
        study: "B.TEch",
      },
    ],
    projects: [
      {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi quidem aliquid sed impedit nesciunt voluptatem, quasi iure dolores soluta numquam id doloribus ipsa, voluptatum perferendis",
        link: "Link",
        title: "Twitter CLone",
      },
    ],
    skills: ["JS", "PHP", "Others"],
    socials: {
      github: "github",
      linkedin: "linkedin",
      twitter: "twitter",
      website: "https://roqeeb-yusuff.vercel.app/",
    },
  });
});

module.exports = router;
