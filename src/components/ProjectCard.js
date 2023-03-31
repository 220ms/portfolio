import React from "react";
import {useEffect } from 'react';

export default function ProjectCard(props) {

  useEffect(() => {
    const card = document.getElementById(props.id);
    const popup = document.getElementById('popup-'+ props.id);
    const closeBtn = document.getElementById('close-' + props.id);

    const openCard = () => {
      console.log(`Clicked ${props.description}`);
      popup.style.display = 'flex';
    }

    const closeCard = () => {
      popup.style.display = 'none';
    }

    card.addEventListener('click', openCard);

    closeBtn.addEventListener('click', closeCard)

    return () => {
      card.removeEventListener('click', openCard);
      closeBtn.removeEventListener('click', closeCard);
    };
  }, [props.title,props.id]);


  return (
    <div>
      <div className="project-card" id={props.id}>
        <img src={require(`../images/${props.image}`)} alt={props.title} />
        <div className="caption"><h1>{props.title}</h1></div>
      </div>
      <div className="popup-card" id={"popup-"+props.id}>
        <div className="popup-content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <button className="card-close-btn" id={'close-' + props.id}>Close</button>
        </div>
      </div>
    </div>
  );
}






