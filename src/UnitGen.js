import React from 'react'

export default function UnitGen(props) {
  const {content} = props
  return (
    <div>
      <img src={content.image} alt=""/>
      {content.tagline && <h3>{content.tagline}</h3>}
      <p>{content.text}</p>
    </div>
  )
}
