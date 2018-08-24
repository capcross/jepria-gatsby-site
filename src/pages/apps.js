import React from 'react'

// <!DOCTYPE html>
// <html>
// <script>
// fetch( 
// 	"http://jepria.org/feature-json-jepria-backend/LoginServlet?username=alapygin@yandex.ru&password=jepria2017",
// 	{
// 		method:'GET',
// 		credentials: 'include'
// 	})
// 	.then((auth) => {
// 		console.log("RESPONSE: " + auth);
// 		fetch( 
// 			"http://jepria.org/feature-json-jepria-backend/v1/features",
// 			{
// 				method:'GET',
// 				credentials: 'include',
// 				headers: {
// 					'Accept': 'application/json',
// 					'Access-Control-Request-Method': 'GET',
// 					'Access-Control-Request-Headers': 'Content-Type',
// 					'Content-Type': 'application/json'
// 				}
// 			})
// 			.then((response) => {
// 			console.log("RESPONSE: " + JSON.stringify(response))
// 			response.json().then(function(data) {
// 				document.getElementById("response").innerHTML = JSON.stringify(data);
// 			});
// 			});
// 	});
// </script>
// <body>

// <h1>This is CORS TEST</h1>
// <p id="response"></p>
// </body>
// </html>


const AppsPage = () => (
  <div>
    <h1>Приложения</h1>
    <p>В работе...</p>
  </div>
)

export default AppsPage
