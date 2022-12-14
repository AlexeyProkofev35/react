import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import * as postActions from '../../redux/actions/postAC'

import Form from '../../components/Form/Form'

export default function Post() {

  const inputs = useSelector(store => store.postInputs)
  const dispatch = useDispatch()

  const handlerForm = (event) => {
    event.preventDefault()
    console.log('Submit form')
    axios.post('http://localhost:3001/posts', {
      myId: Math.round(Math.random() * 99),
      title: inputs.title,
      text: inputs.text,
      likes: 0,
      check: inputs.check
    }).then((newPost) => {
      dispatch(postActions.setAllPosts(newPost.data.post))
    });
    dispatch(postActions.clearInputPost())
  }

  const handleInputs = (event) => {
    console.log('event.target',event.target.name, event.target.checked)
    dispatch(postActions.typingPost(event))
  }

  return (
    <>
      <h1>Page - create my post</h1>
      <Form handlerForm={handlerForm} handleInputs={handleInputs} inputs={inputs} />
    </>
  )
}
