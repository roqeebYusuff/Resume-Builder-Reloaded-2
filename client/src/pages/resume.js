import Helmet from "react-helmet";
import { useEffect, useState } from "react";
import { Button, Container } from "reactstrap";
import { useRecoilState } from "recoil";
import {
  personalInfoList,
  educationList,
  experienceList,
  projectList,
  skillList,
  socialLinksList,
} from "../utils/atom";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";
import StepFIve from "../components/StepFIve";
import StepSix from "../components/StepSix";
import StepFinal from "../components/StepFinal";
import axios from "axios";
// import { saveAs } from "file-saver";
import { Loading } from "notiflix/build/notiflix-loading-aio";

export default function Playground() {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useRecoilState(personalInfoList);
  const [educations, setEducations] = useRecoilState(educationList);
  const [experiences, setExpeiences] = useRecoilState(experienceList);
  const [projects, setProjects] = useRecoilState(projectList);
  const [skills, setSkills] = useRecoilState(skillList);
  const [socials, setSocials] = useRecoilState(socialLinksList);

  const NextCLicked = () => {
    setCurrentStep(currentStep + 1);
  };

  const PreviousCLicked = () => {
    setCurrentStep(currentStep - 1);
  };
    // const resumeData = {
    //   personalInfo,
    //   educations,
    //   experiences,
    //   projects,
    //   skills,
    //   socials,
    // };
    


  const download = async () => {
    const resumeData = {
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
    };
    // Show loader
    Loading.standard("Generating Resume...");
    await axios
      .post(`/api/v1/resume/generatepdf`, resumeData)
      .then(async ({ data }) => {
        console.log("Generating data ", data);
        if (data.success) {
          // Change loader message if successfully generated
          Loading.change("Fetching Resuming");
          await axios
            .get(`api/v1/resume/fetchPdf`, { responseType: "blob" })
            .then(({data}) => {
              Loading.change("Downloading Resume");
              // console.log('The result ',res)
              const pdfBlob = new Blob([data], {
                type: "text/pdf;charset-utf-8;",
              });
              const blobURL = URL.createObjectURL(pdfBlob)
              const tag = document.createElement('a')
              tag.href = blobURL
              tag.download = `${personalInfo.lastName} ${personalInfo.firstName} ${personalInfo.middleName}'s Resume.pdf`
              tag.style = 'display: none'
              document.body.appendChild(tag)
              tag.click()
              // saveAs(
              //   pdfBlob,
              //   `${personalInfo.lastName} ${personalInfo.firstName} ${personalInfo.middleName}'s Resume.pdf`
              // );
              // tag.setAttribute('download', `${personalInfo.lastName} ${personalInfo.firstName} ${personalInfo.middleName}'s Resume.pdf`)
              // document.body.removeChild(tag)

              Loading.remove(2000);
            })
            .catch((error) => {
              Loading.remove(2000);
              console.log("Fetching error ", error);
            });
        } else {
          Loading.remove(2000);
        }
      })
      .catch((err) => {
        Loading.remove(2000);
        console.log("Generating error ", err);
      });
  };

  const showComponents = () => {
    switch (currentStep) {
      case 1:
        return <StepOne nextStep={NextCLicked} prevStep={PreviousCLicked} />;

      case 2:
        return <StepTwo nextStep={NextCLicked} prevStep={PreviousCLicked} />;

      case 3:
        return <StepThree nextStep={NextCLicked} prevStep={PreviousCLicked} />;

      case 4:
        return <StepFour nextStep={NextCLicked} prevStep={PreviousCLicked} />;

      case 5:
        return <StepFIve nextStep={NextCLicked} prevStep={PreviousCLicked} />;

      case 6:
        return <StepSix nextStep={NextCLicked} prevStep={PreviousCLicked} />;

      case 7:
        return <StepFinal download={download} prevStep={PreviousCLicked} />;

      default:
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>Resume Builder - By Roqeeb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <main className="resume__builder d-flex justify-content-center">
        <div className="all__wraper w-100">
          <div className="steps">
            <ul className="progressBar">
              <li className="active">Personal Information</li>
              <li className={`${currentStep >= 2 ? "active " : ""}`}>
                Education
              </li>
              <li className={`${currentStep >= 3 ? "active" : ""}`}>
                Experience
              </li>
              <li className={`${currentStep >= 4 ? "active" : ""}`}>
                Projects
              </li>
              <li className={`${currentStep >= 5 ? "active" : ""}`}>Skills</li>
              <li className={`${currentStep >= 6 ? "active" : ""}`}>Socials</li>
            </ul>
          </div>
          {/* <div className="backToHome">
            <Link href="/">
              <a>Resume Builder</a>
            </Link>
          </div> */}
          <section className="comp__wraper">
            <div className="playground m-auto">
              <div className="overflow-hidden">
                <div className="show">{showComponents()}</div>
              </div>
            </div>
          </section>
          <Button onClick={download}>Download</Button>
        </div>
      </main>
    </>
  );
}
