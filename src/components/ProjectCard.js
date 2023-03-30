import React from "react";


export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={require(`../images/${props.image}`)} alt={props.title} />
      <div class="caption"><h1>{props.title}</h1></div>
    </div>
  );
}