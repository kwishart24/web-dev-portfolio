import ProjectCard from "./ProjectCard";
import TaskTracker from "../assets/task-tracker-api.png";
import NodeHw from "../assets/node-homework-api.png";
import Rolodex from "../assets/rolodex.png";

function Projects() {
  return (
    <section id="projects">
      <div>
        <h3>Projects</h3>
        <ProjectCard
          title="Task Tracker API"
          projectImage={TaskTracker}
          altText="Postman testing of Task Tracker API shows successful user registration."
          description="This is a full-stack task tracking app that runs on Node/Express with a MongoDB database."
          technologies="JavaScript, Node.js, Express.js, MongoDB"
        />
        <ProjectCard
          title="Node Homework"
          projectImage={NodeHw}
          altText="Swagger documentation for the Node Homework API."
          description="This TaskList App is a secure, production-grade backend built with Node.js, Express, Prisma, and PostgreSQL. The API powers a task management system where authenticated users can create, update, search, and analyze their tasks. Its purpose is to demonstrate real-world backend engineering skills."
          technologies="Node.js, Express, PostgreSQL (Neon.tech), Prisma, JWT (HTTP-only cookies), Joi, Helmet, rate limiting, sanitization, Jest, Supertest, Render, Swagger"
        />
        <ProjectCard
          title="Rolodex"
          projectImage={Rolodex}
          altText="Screenshot of contact information in Rolodex app."
          description="Rolodex is a full-stack React application for organizing professional contacts and keeping track of important interactions. It combines a clean, intuitive UI with a real Airtable backend, allowing users to create, update, and manage contacts, upload headshots, and attach notes — all in one place."
          technologies="React + React Router, Airtable API, Cloudinary Upload, Vite"
        />
      </div>
    </section>
  );
}

export default Projects;
