
var request = new XMLHttpRequest();
var base_url = 'https://dev.api.shopinsync.com'
if(window.shopInSync.env == "staging"){
  base_url = 'https://staging.api.shopinsync.com'
}else if(window.shopInSync.env == "production"){
  var market = window.shopInSync.market;
  var base = market.split("_")[1]+'-'+market.split("_")[0]
  base_url = 'https://'+base+'.api.shopinsync.com'
}
var url = base_url+'/remote/administration/sdk_version'

request.open('POST', url, true);
request.setRequestHeader("Content-type", "application/json");
request.setRequestHeader("Cache-Control", "no-cache");
request.setRequestHeader("InsyncReferer", window.shopInSync.refererDomain);
if(window.shopInSync.contextParams?.external_session_id)request.setRequestHeader("External-Session-Id", window.shopInSync.contextParams.external_session_id);
if (window.shopInSync.hostedPageRef){
  request.setRequestHeader("InsynchostedPageRef", window.shopInSync.hostedPageRef);
}
request.onload = function () {

  if (request.status == 200) {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if(data && data["result"]){
      if(typeof data["result"] === "string"){
        window.shopInSync.sdk_version = data["result"];
      }else{
        window.shopInSync.clientToken = data["result"]["secret"];
        window.shopInSync.sdk_version = data["result"]["version"];
        if(data["result"]["client_style_guide"])window.shopInSync.clientStyleGuide = data["result"]["client_style_guide"];
      }
      function loadScript(d, s, id,src){
        var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = src;
         fjs.parentNode.insertBefore(js, fjs);
       }
       var src = 'https://dbrd449anfbv4.cloudfront.net/bundle'+window.shopInSync.sdk_version+'.js';
       loadScript(document, 'script', 'sis-jssdk',src);
    }
  } else {
    console.log('Error'+request.status);
  }
}
var source = 'web';
if(typeof window.shopInSync.source !== "undefined")source = window.shopInSync.source;

var appId;
if(window.shopInSync.app_id) appId = window.shopInSync.app_id; // TO BE REMOVED LATER
if(window.shopInSync.appId) appId = window.shopInSync.appId;

var triggerPoint = '';
if(typeof window.shopInSync.triggerPoint !== "undefined")triggerPoint = window.shopInSync.triggerPoint;

var deviceType = typeof window.shopInSync.deviceType !== "undefined" ? window.shopInSync.deviceType : "";
let requestBody = {
  source: source,
  market: window.shopInSync.market,
  env: window.shopInSync.env,
  app_id: appId.toString(),
  trigger_point: triggerPoint.toString(),
  device_type: deviceType
};

if(typeof window.shopInSync.uniqueTabId !== "undefined") requestBody.unique_tab_id = window.shopInSync.uniqueTabId.toString();
if(typeof window.shopInSync.insyncGlobalId !== "undefined") requestBody.insync_global_id = window.shopInSync.insyncGlobalId.toString();
if(typeof window.shopInSync.userId !== "undefined") requestBody.brand_user_id = window.shopInSync.userId.toString();
if(typeof window.shopInSync.contextParams.pagetitle !== "undefined") requestBody.page_title = window.shopInSync.contextParams.pagetitle.toString();
if(typeof window.shopInSync.contextParams.returningOrNewUser !== "") requestBody.returning_or_new_global_user = window.shopInSync.contextParams.returningOrNewUser.toString();

if (window.shopInSync.contextParams && window.shopInSync.contextParams.user) {
  Object.keys(window.shopInSync.contextParams.user).forEach(key => {
    if(window.shopInSync.contextParams.user[key])requestBody['user_' + key] = window.shopInSync.contextParams.user[key].toString();
  });
}

let insyncCustomContextParams = {};
if (window.shopInSync.contextParams) {
  Object.keys(window.shopInSync.contextParams).forEach(key => {
    if (key.startsWith('insync') && window.shopInSync.contextParams[key]) {
      insyncCustomContextParams[key] = window.shopInSync.contextParams[key];
    }
  });
}

if (Object.keys(insyncCustomContextParams).length > 0) {
  requestBody.insync_custom_context_params = insyncCustomContextParams;
}

request.send(JSON.stringify(requestBody));