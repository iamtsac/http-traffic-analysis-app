const login = document.getElementById('loginBut')

login.onclick = () => {

  const username = document.getElementById('username').value
  const password = document.getElementById('pass').value

  let data = {
    "username": username,
    "password": pass
  };

  data = JSON.stringify(data);
  console.log(data);

  options = {
    method: 'POST',
    headers: {  'Content-Type':'application/json'},
    body: JSON.stringify(data) 
  }; 
  fetch('/api',options);
}

/*
but.addEventListener('submit', (event) =>{

  event.preventDefault();
  const xhr = new XMLHttpRequest();

  xhr.open('POST', "localhost/backend/importToDatabase.js");

  let data  = new FormData(data);

  xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('X-Request-With', 'XMLHttpRequest');

  xhr.send(data);

  xhr.onload = function() {

    console.log(xhr.responseText);

  }
});
*/
