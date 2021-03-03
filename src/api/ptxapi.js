import axios from 'axios';
import jsSHA from 'jssha';
require('dotenv').config();

const getAuthorizationHeader = function () {
    
	var AppID = 'ab0d54ef21044704bbc4ef53e9da882e';
	var AppKey = 'jAVypHDzt_q1pEP2VlzsF7_LM1k';
    
	var GMTString = new Date().toGMTString();
	var ShaObj = new jsSHA('SHA-1', 'TEXT');
	ShaObj.setHMACKey(AppKey, 'TEXT');
	ShaObj.update('x-date: ' + GMTString);
	var HMAC = ShaObj.getHMAC('B64');
	var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

	return { 'Authorization': Authorization, 'X-Date': GMTString};
}

export default axios.create({
        baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot',
        headers: getAuthorizationHeader()
    })