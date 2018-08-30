import React from 'react'
import Link from 'gatsby-link'

let items = null;

const fetch = require('isomorphic-fetch');

fetch(
  "http://jepria.org/feature-json-jepria-backend/LoginServlet?username=alapygin@yandex.ru&password=jepria2017",
  {
    method: 'GET',
    credentials: 'include'
  })
  .then((auth) => {
    console.log("RESPONSE: " + auth);
    fetch(
      "http://jepria.org/feature-json-jepria-backend/v1/features",
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Access-Control-Request-Method': 'GET',
          'Access-Control-Request-Headers': 'Content-Type',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log("RESPONSE: " + JSON.stringify(response))
        response.json().then(function (data) {
          items = data;
        });
      });
  });

const AppsPage = () => {
  return (
    <div>
      <h1>Гибридные приложения</h1>
      <h2><i>Приложение как страница</i></h2>
      <div>
        {
          items && items.map(task => {
            const name = task.name;
            return (
              <Link key={task.id} to={`/task/${task.id}`}>
                <div>{name}</div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default AppsPage
