import React from 'react'

let items = null;

fetch( 
	"http://jepria.org/feature-json-jepria-backend/LoginServlet?username=alapygin@yandex.ru&password=jepria2017",
	{
		method:'GET',
		credentials: 'include'
	})
	.then((auth) => {
		console.log("RESPONSE: " + auth);
		fetch( 
			"http://jepria.org/feature-json-jepria-backend/v1/features",
			{
				method:'GET',
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
			response.json().then(function(data) {
				items = JSON.stringify(data);
			});
			});
	});

const AppsPage = () => (
  <div>
    <h1>Приложения</h1>
    <p>В работе...</p>
    <div>{items}</div>
  </div>
)

export default AppsPage
