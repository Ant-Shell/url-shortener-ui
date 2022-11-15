import React from "react"
import "./Card.css"

const Card = ({id, title, short_url, long_url }) => {
  return (
    <div className="card">
      <h3 data-cy="title">{title}</h3>
        <a data-cy="short-url" href={short_url} target="blank">{short_url}</a>
        <p data-cy="long-url">{long_url}</p>
    </div>
  )
}

export default Card