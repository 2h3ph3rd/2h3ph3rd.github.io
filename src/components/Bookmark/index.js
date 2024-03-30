import React from 'react'

export default function ({ url, title }) {
  // Parse the URL to obtain the details
  var parser = document.createElement('a');
  parser.href = url;

  let baseUrl = parser.hostname + (parser.port ? ':' + parser.port : '');
  let favicon = "https://icons.duckduckgo.com/ip3/" + baseUrl + ".ico";
  parser.remove();

  return (
    <a href={url} target="_blank" class="no-link">
      <div class="card shadow--tl zoom-effect">
        <div class="card__header">
          <div class="avatar">
            <img class="avatar__photo" src={favicon} />
            <div class="avatar__intro">
              <div class="avatar__name">{title}</div>
              <small class="avatar__subtitle">
                {url}
              </small>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
