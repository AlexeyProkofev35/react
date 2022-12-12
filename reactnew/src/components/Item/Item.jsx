import React from 'react'

export default function Item({item}) {
  console.log('Item')
  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        <img src="images/nervo.gif" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title ?? 'Card title'}</h5>
          <p className="card-text">{item.text ?? 'Some quick example'}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}
