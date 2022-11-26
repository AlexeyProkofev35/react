// Установил material-ui
// Познакомился с использованием children и паттерном render props
// Узнал, как работает роутинг в приложениях на React
// Научился использовать react-router-dom для настройки роутинга в приложении
// Узнал об использовании URL-параметров
// Познакомился с хуками useMatch и useParams
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Message} from './App';

const element = () => {
    return <div> New my first page</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Message/>);

