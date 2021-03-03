import axios from 'axios';
import jsSHA from 'jssha';
require('dotenv').config();

const getAuthorizationHeader = function () {
    
	var AppID = process.env.REACT_APP_APP_ID;
	var AppKey = process.env.REACT_APP_APP_KEY;
    
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