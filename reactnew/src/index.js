// Познакомился с redux middlewares
// Познакомился с одной из самых популярных библиотек для middlewares 
// Рассмотрел альтернативы redux-thunk - redux-saga и redux-observable
// Познакомился с библиотекой redux-persist
// Научился сохранять данные из стора на стороне клиента
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Message} from './App';

const element = () => {
    return <div> New my first page</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Message/>);

