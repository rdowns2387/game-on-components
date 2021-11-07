import React from 'react';
import GameItem from './GameItem';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

export default { 
    title: 'GameItem',
    decorators: [withKnobs]
};

export const standard = () => (
    <GameItem 
        name={text("Name","AI-Powered Automation Challenge with AIOps and WDG")}
        type={text("Type","Demo")}
        players={text("Players","500")}
        // imageUrl={text("ImageUrl","https://source.unsplash.com/tNALoIZhqVM/200x100/")}
    />
);