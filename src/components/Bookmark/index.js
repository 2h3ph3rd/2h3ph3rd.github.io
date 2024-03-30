import React from 'react'

export default function ({ url, title }) {
  let parser = new URL(url);
  let baseUrl = parser.hostname + (parser.port ? ':' + parser.port : '');
  let favicon = "https://icons.duckduckgo.com/ip3/" + baseUrl + ".ico";

  return (
    <a href={url} target="_blank" className="no-link">
      <div className="card shadow--tl zoom-effect">
        <div className="card__header">
          <div className="avatar">
            <img className="avatar__photo" src={favicon} />
            <div className="avatar__intro">
              <div className="avatar__name">{title}</div>
              <small className="avatar__subtitle">
                {url}
              </small>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
