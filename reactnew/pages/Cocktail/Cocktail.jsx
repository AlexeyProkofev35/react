import React from 'react'
import { useEffect } from 'react'

export default function Cocktail () {
 useEffect(() => {
  // const promise = new Promise((resolve, reject) => {
  // if (true) {
  // resolve('Done')
  // } else {
  // reject('Error')
  // }
  // })
  // // console.log('promise', promise)
  // promise.then((res) => {
  // return res + ' Yes'
  // }).then((data) => console.log(data))
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail').then((data) => {
  return data.json()
  }).then((res) => console.log(res))
}, [])

 return (
  <div>
    <h1>Cocktails</h1>
  </div>
 )
  }
  