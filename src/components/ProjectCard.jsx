import { useState } from "react";

function ProjectCard({
  title,
  description,
  projectImage,
  altText,
  technologies,
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="project-card">
      <h4>{title}</h4>
      <img src={projectImage} alt={altText} className="projectImage" />

      <div
        className="description-toggle"
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span>Description</span>
        <span
          className="triangle"
          style={{
            display: "inline-block",
            transition: "transform 0.3s",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          ▶
        </span>
      </div>

      {open && <p className="project-description">{description}</p>}

      <br />
      <p>
        <strong>Technologies: </strong>
        {technologies}
      </p>
    </article>
  );
}

export default ProjectCard;
