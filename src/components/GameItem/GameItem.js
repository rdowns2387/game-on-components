import React from 'react';
import '../../carbon-components.min.css';
import './GameItem.css';
import {ReactComponent as UserIcon} from '../Icons/user.svg';

export default function GameItem({ 
    imageUrl, 
    name, 
    type,
    players, 
}) {
  return (
    <div className="gameCard">
       <div className="card" >
            <button className="bx--tag bx--tag--blue">
                <span className="bx--tag__label">{type}</span>
            </button>
            <h5>{name}</h5>
            <div className="playerCount">
                <UserIcon />
                <h6>{players}</h6>
            </div>
        </div>
        
    </div>
     
  );
}