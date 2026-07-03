function Experience() {
  const experience = ["Group Practicum", "Class projects"];

  return (
    <section id="skills">
      <h2>Experience</h2>

      <ul>
        {experience.map((exp) => (
          <li key={exp}>{exp}</li>
        ))}
      </ul>
      <br />
      <br />
    </section>
  );
}

export default Experience;
