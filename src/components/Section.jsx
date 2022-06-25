import React from "react";

function Section({ title, content, headingType = "h3" }) {
  return (
    <section className="section">
      {headingType === "h2" ? <h2>{title}</h2> : <h3>{title}</h3>}

      <p className="content">{content}</p>
    </section>
  );
}

export default Section;
