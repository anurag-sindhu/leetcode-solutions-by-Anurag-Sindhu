var classes;

classes = {
    // 1xx - The 1xx (Informational) class of status code indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.
    '1xx': 'Informational',
    '1xx_NAME': 'INFORMATIONAL',
    '1xx_MESSAGE': 'Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.',
    INFORMATIONAL: '1xx',
    // 2xx - The 2xx (Successful) class of status code indicates that the client's request was successfully received, understood, and accepted.
    '2xx': 'Successful',
    '2xx_NAME': 'SUCCESSFUL',
    '2xx_MESSAGE': 'Indicates that the client\'s request was successfully received, understood, and accepted.',
    SUCCESSFUL: '2xx',
    // 3xx - The 3xx (Redirection) class of status code indicates that further action needs to be taken by the user agent in order to fulfill the request.
    '3xx': 'Redirection',
    '3xx_NAME': 'REDIRECTION',
    '3xx_MESSAGE': 'Indicates that further action needs to be taken by the user agent in order to fulfill the request.',
    REDIRECTION: '3xx',
    // 4xx - The 4xx (Client Error) class of status code indicates that the client seems to have erred.
    '4xx': 'Client Error',
    '4xx_NAME': 'CLIENT_ERROR',
    '4xx_MESSAGE': 'Indicates that the client seems to have erred.',
    CLIENT_ERROR: '4xx',
    // 5xx - The 5xx (Server Error) class of status code indicates that the server is aware that it has erred or is incapable of performing the requested method.
    '5xx': 'Server Error',
    '5xx_NAME': 'SERVER_ERROR',
    '5xx_MESSAGE': 'Indicates that the server is aware that it has erred or is incapable of performing the requested method.',
    SERVER_ERROR: '5xx'
};

let codes = {
    "Continue": "100",
    "Switching Protocols": "101",
    "Processing": "102",
    "Early Hints": "103",
    "OK": "200",
    "Created": "201",
    "Accepted": "202",
    "Non-Authoritative Information": "203",
    "No Content": "204",
    "Reset Content": "205",
    "Partial Content": "206",
    "Multi Status": "207",
    "Already Reported": "208",
    "IM Used": "226",
    "Multiple Choices": "300",
    "Moved Permanently": "301",
    "Found": "302",
    "See Other": "303",
    "Not Modified": "304",
    "Use Proxy": "305",
    "Switch Proxy": "306",
    "Temporary Redirect": "307",
    "Permanent Redirect": "308",
    "Bad Request": "400",
    "Unauthorized": "401",
    "Payment Required": "402",
    "Forbidden": "403",
    "Not Found": "404",
    "Method Not Allowed": "405",
    "Not Acceptable": "406",
    "Proxy Authentication Required": "407",
    "Request Time-out": "408",
    "Conflict": "409",
    "Gone": "410",
    "Length Required": "411",
    "Precondition Failed": "412",
    "Request Entity Too Large": "413",
    "Request-URI Too Large": "414",
    "Unsupported Media Type": "415",
    "Requested Range not Satisfiable": "416",
    "Expectation Failed": "417",
    "I'm a teapot": "418",
    "Misdirected Request": "421",
    "Unprocessable Entity": "422",
    "Locked": "423",
    "Failed Dependency": "424",
    "Upgrade Required": "426",
    "Precondition Required": "428",
    "Too Many Requests": "429",
    "Request Header Fields Too Large": "431",
    "Unavailable For Legal Reasons": "451",
    "Internal Server Error": "500",
    "Not Implemented": "501",
    "Bad Gateway": "502",
    "Service Unavailable": "503",
    "Gateway Time-out": "504",
    "HTTP Version not Supported": "505",
    "Variant Also Negotiates": "506",
    "Insufficient Storage": "507",
    "Loop Detected": "508",
    "Not Extended": "510",
    "Network Authentication Required": "511"
};
let replace = {};
var fs = require('fs');
for(let key in codes) {
    let keyy = key.replace(/ /g,"");
    keyy = keyy.replace(/-/g,"");
    keyy = keyy[0].toLowerCase() + keyy.substring(1);
    replace[keyy] = codes[key];
}
fs.writeFile('/home/springrole/projects/angularJs/extras/js/errorHandling/codes.json', JSON.stringify(replace), function (err) {
    if (err) throw err;
    console.log('Saved!');
});

console.log(codes);