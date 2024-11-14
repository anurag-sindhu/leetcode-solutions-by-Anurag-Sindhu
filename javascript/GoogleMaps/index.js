var request = require('request');
let address;
address =
    'ALTIUS HOSPITAL PVT LTD, #6/63, 59th Cross, 4th Block, Rajajinagar Entrance, Opp. MEI Polytechnic, Bengaluru, Karnataka 560010';
address = `Dr. Agarwal's Eye Hospital, No. XIII/1478, Luke’s Square, Lal Bahadur Shastri Rd, opp. Darshana Academy, Kottayam, Kerala 686001`;
address = `Dr. Sagar Petkars Matoshree Eye & Retina Clinic, Everest shopping centre, Shahid Bhagat Singh Rd, opposite Dom West station, Dombivli East, Maharashtra 421201`;
address = `Dr. Agarwals Eye Hospital, No SCO 833 & 834 Sector 22A, opposite Parade Ground, Sector 17, Chandigarh, 160022`;
address = `No SCO 833  834 Sector 22A, opposite Parade Ground, Sector 17, Chandigarh, 160022`;
// address = `#6/63, 59th Cross, 4th Block, Rajajinagar Entrance, Opp. MEI Polytechnic, Bengaluru, Karnataka 560010`;
const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyASA_OlgkAry-RtG44H7Oh398-MouD_YKw`;
var options = {
    method: 'GET',
    url: encodeURI(url),
    headers: {},
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    const data = JSON.parse(response.body);
    console.log(response.body);
});
