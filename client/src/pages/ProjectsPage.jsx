import '../styles/projects.css'
import React, { useEffect, useState } from 'react';
import Project from '../components/Project';
import projectsData from '../data/projects.json'; // Asegúrate de que la ruta sea correcta

export function ProjectsPage() {
    const experiences = projectsData
    return (
        <div className="projects-container">
            {experiences.map(({ id, name, url }) => (
                <Project key={id} name={name} url={url} />
            ))}
        </div>
    )
}
