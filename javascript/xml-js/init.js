var convert = require('xml-js');
var xml =
'<?xml version="1.0" encoding="utf-8"?>' +
'<note importance="high" logged="true">' +
'    <title>Happy</title>' +
'    <todo>Work</todo>' +
'    <todo>Play</todo>' +
'</note>';
var xml =
'<?xml version="1.0" encoding="utf-8"?>\n <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n<soap:Body>\n <m:CapitalCityResponse xmlns:m="http://www.oorsprong.org/websamples.countryinfo">\n<m:CapitalCityResult>New Delhi</m:CapitalCityResult>\n</m:CapitalCityResponse>\n</soap:Body>\n</soap:Envelope>';
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
console.log(result1, '\n', result2);