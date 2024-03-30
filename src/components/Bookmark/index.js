import React from 'react'

export default function ({ url, title }) {
  // Parse the URL to obtain the details
  var parser = document.createElement('a');
  parser.href = url;

  let baseUrl = parser.hostname + (parser.port ? ':' + parser.port : '');
  let favicon = "https://icons.duckduckgo.com/ip3/" + baseUrl + ".ico";
  parser.remove();

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
