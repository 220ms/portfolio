import React from "react";


export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={require(`../images/${props.image}`)} alt={props.title} />
    </div>
  );
}