/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-21 20:42:56
 * @version $Id$
 */
 var url = require('url');
 var myUrl = "http://www.nodejs.org:80/some/url/?with=query&param=that&are=awesome#alsoahash";
 console.log(url.parse(myUrl));

 // if we made the second argument is true then the URL modles will call querystring modles
 // to deal with the 'myUrl' 
 console.log(url.parse(myUrl,true));

