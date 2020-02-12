import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Loremkddjfjfjfjfjfjfjfj</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <p>Posted by the Net Ninja</p>
                <p>3rd September, 2am</p>
            </div>
        </div>
        </div>
    )
}

export default ProjectDetails;