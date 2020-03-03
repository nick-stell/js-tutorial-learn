const requestURL = "https://jsonplaceholder.typicode.com/users";

const headers = {
  "Content-Type": "application/json"
};

function sendRequest(method, url, body = null) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(error => {
      const err = new Error("Something went wrong...");
      err.data = error;
      throw err;
    });
  });
}

// sendRequest("GET", requestURL)
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

const body = {
  name: "Nick",
  age: 22
};

sendRequest("POST", requestURL, body)
  .then(data => console.log(data))
  .catch(error => console.error(error));
