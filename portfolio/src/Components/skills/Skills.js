// import React from "react";
// import Card from "react-bootstrap/Card";

// import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// // skills
// import { skills } from "./dbskills";

// import "./Skills.css";

// const Skills = () => {
//   return (
//     <div className="pt-3 pb-3" id="skills">
//       <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>

//       <div id="skills">
//         <Card className="focus mb-2 ">
//           <Card.Body>
//             <Card.Title className="text-center  card-title">
//               Version Control
//             </Card.Title>
//             <hr />
//             <Card.Text className="card-text d-flex justify-content-evenly">
//               <a
//                 className="text-dark text-decoration-none"
//                 href={skills.versionControl[0].link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Image
//                   src={skills.versionControl[0].imgSrc}
//                   alt={skills.versionControl[0].imgAltText}
//                   rounded
//                   className="image-style m-1"
//                 ></Image>{" "}
//                 {skills.versionControl[0].skillName}
//               </a>
//             </Card.Text>
//           </Card.Body>
//         </Card>

//         <Card className="focus mb-2">
//           <Card.Body>
//             <Card.Title className="text-center  card-title">
//               Database
//             </Card.Title>
//             <hr />
//             <Card.Text className="card-text d-flex justify-content-evenly">
//               {skills.databases.map((skill, index) => (
//                 <span key={index}>
//                   <a
//                     className="text-dark text-decoration-none"
//                     href={skill.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Image
//                       src={skill.imgSrc}
//                       alt={skill.imgAltText}
//                       rounded
//                       className="image-style m-1"
//                     ></Image>{" "}
//                     {skill.skillName}
//                   </a>
//                 </span>
//               ))}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </div>

//       <div>
//         <Card className="focus mb-2">
//           <Card.Body>
//             <Card.Title className="text-center  card-title">
//               Frameworks
//             </Card.Title>
//             <hr />
//             <Card.Text className="card-text d-flex justify-content-evenly">
//               {skills.frameworks.map((skill, index) => (
//                 <span key={index}>
//                   <a
//                     className="text-dark text-decoration-none"
//                     href={skill.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Image
//                       src={skill.imgSrc}
//                       alt={skill.imgAltText}
//                       rounded
//                       className="image-style m-1"
//                     ></Image>{" "}
//                     {skill.skillName}
//                   </a>
//                 </span>
//               ))}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </div>
//       <div>
//         <Card className="focus mb-2">
//           <Card.Body>
//             <Card.Title className="text-center  card-title">
//               Hosting Platform
//             </Card.Title>
//             <hr />
//             <Card.Text className="card-text d-flex justify-content-evenly ">
//               {skills.hostingPlatforms.map((skill, index) => (
//                 <span key={index}>
//                   <a
//                     className="text-dark text-decoration-none"
//                     href={skill.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Image
//                       src={skill.imgSrc}
//                       alt={skill.imgAltText}
//                       rounded
//                       className="image-style m-1"
//                     ></Image>{" "}
//                     {skill.skillName}
//                   </a>
//                 </span>
//               ))}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </div>

//       <div>
//         <Card className="focus mb-2">
//           <Card.Body>
//             <Card.Title className="text-center  card-title">
//               Scripting Languages
//             </Card.Title>
//             <hr />
//             <Card.Text className="card-text d-flex justify-content-evenly">
//               {skills.frontend.map((skill, index) => (
//                 <span key={index}>
//                   <a
//                     className="text-dark text-decoration-none"
//                     href={skill.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Image
//                       src={skill.imgSrc}
//                       alt={skill.imgAltText}
//                       rounded
//                       className="image-style m-1"
//                     ></Image>{" "}
//                     {skill.skillName}
//                   </a>
//                 </span>
//               ))}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import React from "react";
import Card from "react-bootstrap/Card";

import Image from "react-bootstrap/Image";

// skills
import { skills } from "./dbskills";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <div className="card-deck">
        <div>
          <Card className="focus mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">
                Version Control
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                <a
                  className="text-dark text-decoration-none"
                  href={skills.versionControl[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={skills.versionControl[0].imgSrc}
                    alt={skills.versionControl[0].imgAltText}
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  {skills.versionControl[0].skillName}
                </a>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="focus mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">
                Database
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.databases.map((skill, index) => (
                  <span key={index}>
                    <a
                      className="text-dark text-decoration-none"
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skill.skillName}
                    </a>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card className="focus mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">
                Frameworks
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.frameworks.map((skill, index) => (
                  <span key={index}>
                    <a
                      className="text-dark text-decoration-none"
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skill.skillName}
                    </a>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="focus mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">
                Hosting Platform
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.hostingPlatforms.map((skill, index) => (
                  <span key={index}>
                    <a
                      className="text-dark text-decoration-none"
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skill.skillName}
                    </a>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card className="focus mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">
                Scripting Languages
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.frontend.map((skill, index) => (
                  <span key={index}>
                    <a
                      className="text-dark text-decoration-none"
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skill.skillName}
                    </a>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;