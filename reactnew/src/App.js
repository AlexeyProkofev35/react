import { useEffect, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'

import Form from './components/Form/Form';
import List from './components/List/List';

import { GlobalContext } from './context/GlobalContext'
import { WithClasses } from '../src/HOC/WithClasses'

import style from './AppStyle.module.css'

const MessageListWithClasses = WithClasses(List)

function App () {
  const { title } = useContext(GlobalContext)

  const inputs = useSelector((store) => store.postInputs)
  const dispatch = useDispatch()

  useEffect(() => {
    // axios.get('http://localhost:3001/posts')
    //   .then((postFromServer) => {
    //     console.log(postFromServer)
    //     if (postFromServer.data.allPosts.length) {
    //       console.log(postFromServer.data.allPosts)
    //       const posts = postFromServer.data.allPosts
    //       // setItems(postFromServer.data.allPosts)
    //       dispatch({ type: 'SET_ALL_POSTS', payload: posts })
    //     }
    //   })
  }, [])

  const handleInputs = (event) => {
    dispatch({ type: 'POST_TYPING', payload: { [event.target.name]: event.target.value } })
  }

  const handlerForm = (event) => {
    event.preventDefault()
    console.log('Submit form')
    // axios.post('http://localhost:3001/posts', {
    //   myId: Math.round(Math.random() * 99),
    //   title: inputs.title,
    //   text: inputs.text,
    //   likes: 0,
    // }).then((newPost) => {
    //   console.log('NEW-POST', newPost.data.post)
    //   console.log('12313123', newPost.data.post)
    //   dispatch({ type: 'SET_POST', payload: newPost.data.post })
    // });
    const dataFromForm = {
      myId: Math.round(Math.random() * 99),
      title: inputs.title,
      text: inputs.text,
      likes: 0,
    }
    dispatch({ type: 'SET_POST', payload: dataFromForm })
    dispatch({ type: 'POST_CLEAR_INPUTS', payload: { title: '', text: '' } })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form handlerForm={handlerForm} handleInputs={handleInputs} inputs={inputs} />
      </header>
      <section>
        <div className="container">
          {/* <List title={title} items={items} /> */}
          <MessageListWithClasses title={title} classes={style.border} />
        </div>
      </section>

    </div>
  );
}

export default App;
