import React from 'react';

const Project = ({ name, url }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
        >
            {name}
        </a>
      );
};

export default Project;
