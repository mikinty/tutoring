import React from "react";
import myou from "../images/myou.jpg";
import linxie from "../images/linxie.jpg";

function headshot(image, name, description, link) {
  return (
    <div className="headshot column">
      <a className="headshot-image-wrapper" href={link}>
        <img src={image} alt={`headshot of ${name}`} />
      </a>
      <h2>{name}</h2>
      <div className="description">{description}</div>
    </div>
  );
}

export default function Tutors() {
  return (
    <div className="full-page" id="tutors">
      <h1 className="page-header">Meet the Tutors</h1>
      <div className="double-column" id="tutor-container">
        {headshot(
          linxie,
          "Lin Xie",
          "Lin graduated from Cornell University and currently works as a software engineer at Doordash. Lin is a tutor for Rewrite the code, a CS program for girls, and has tutored kids 5-18 as part of Juni learning.",
          "https://www.linkedin.com/in/lin-xie-1b3411151/"
        )}
        {headshot(
          myou,
          "Michael You",
          "Michael graduated from Carnegie Mellon with degrees in computer science and electrical engineering, and currently works at Meta (Facebook). Michael has tutored for over 10 years and has written curriculums, supplementary notes and guides on a variety of academic topics.",
          "https://www.linkedin.com/in/mcyou/"
        )}
      </div>
    </div>
  );
}
