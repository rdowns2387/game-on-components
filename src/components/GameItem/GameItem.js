import React from 'react';

export default function GameItem({ name, type, imageUrl, joinGame}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={imageUrl} alt=""/>
            <small>{type}</small>
            <button onClick={joinGame}>Join Game</button>
        </div>
    );
}