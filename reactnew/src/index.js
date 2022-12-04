// Продолжил изучать react-redux
// Узнал об action creators и научился передавать в стор данные из компонентов
// Научился хранить данные в нескольких редьюсерах и использовать combineReducers
// Познакомился с connect
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Message} from './App';

const element = () => {
    return <div> New my first page</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Message/>);

