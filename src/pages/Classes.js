import React from "react";

function classesColumn(title, topics) {
  return (
    <div className="column">
      <div className="title">{title}</div>
      <div className="topics-container">
        {topics.map((topic) => (
          <div className="topic" key={topic}>
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Classes() {
  const topicsMath = [
    "Algebra",
    "Geometry",
    "Calculus",
    "Competition Math (MathCounts, AMC)",
    "Undergraduate Math",
  ];

  const topicsCS = [
    "Python",
    "Web Development",
    "AP Computer Science",
    "Interview Prep",
    "Tech Career Consulting",
  ];

  return (
    <div className="page">
      <h1 className="page-header">Tutoring Subjects</h1>
      <div className="double-column">
        {classesColumn("MATH", topicsMath)}
        {classesColumn("COMPUTER SCIENCE", topicsCS)}
      </div>
    </div>
  );
}
