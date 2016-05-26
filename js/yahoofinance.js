var BASE_URI = 'http://query.yahooapis.com/v1/public/yql?q=';  
var yql_results = "";  
var yql_query = 'select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")';
var yql_query_str = encodeURI(BASE_URI+yql_query);
var query_str_final = yql_query_str + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=myCallback";
script = document.createElement("script");
script.type = "text/javascript";
script.src = query_str_final;
console.log(query_str_final);



function myCallback(dataWeGotViaJsonp){
	console.log("test");
    console.log(dataWeGotViaJsonp);
    var text = '';
    var len = dataWeGotViaJsonp.length;
    for(var i=0;i<len;i++){
        twitterEntry = dataWeGotViaJsonp[i];
        text += '<p><img src = "' + twitterEntry.user.profile_image_url_https +'"/>' + twitterEntry['text'] + '</p>'
    }
    document.getElementById('twitterFeed').innerHTML = text;
}




