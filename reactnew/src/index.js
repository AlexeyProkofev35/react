// Узнал о контексте в React
// Познакомился с паттерном “Компонент высшего порядка”
// Познакомился с Redux
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Message} from './App';

const element = () => {
    return <div> New my first page</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Message/>);

