
function getParentDomain() {
  var hostName = window.location.hostname || window.location.host;
  return '.' + hostName.split('.').reverse().splice(0,2).reverse().join('.')
}

function getProfilingDomain() {
  var parentDomain = getParentDomain();
  var isFactory = parentDomain.includes('factory');
  var isProd = parentDomain === ".gap.com" || parentDomain === ".gapfactory.com" || parentDomain === ".gapcanada.ca" || parentDomain === ".gapfactory.ca";
  var isCanada = parentDomain.endsWith(".ca");
  if (isProd && isFactory) {
    return 'content.gapfactory.' + (isCanada ? 'ca' : 'com')
  } else if (isProd) {
    return isCanada ? 'content.gapcanada.ca' : 'content.gap.com'
  } else if (isFactory) {
    return 'content.factory-gaptechol.' + (isCanada ? 'ca' : 'com')
  } else {
    return 'content.gaptechol.' + (isCanada ? 'ca' : 'com')
  }
}
var parentDomain = getParentDomain();
var isProd = parentDomain === ".gap.com" || parentDomain === ".gapfactory.com" || parentDomain === ".gapcanada.ca" || parentDomain === ".gapfactory.ca";
function setCookie(name, value, days) {
  var cookieName = name + '=' + (value || '');
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = cookieName + expires + '; path=/; domain=' + parentDomain + '; Secure; SameSite=None';
}
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999; path=/';
}
function sessionId() {
  var uuid = '',
    i,
    random;
  for (i = 0; i < 32; i++) {
    random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }
  return uuid;
}
// Corresponds to the Cookie Name field in the ThreatMetrix IdP Adapter configuration (must match).
var cookieName = 'tmxSessionID';
eraseCookie(cookieName);
var profilingDomain = getProfilingDomain();
var deviceProfilingDomain = profilingDomain;
const orgId = isProd ? 'e04kqxof' : '9g7u2cwt';
var id = sessionId();
var deviceProfilingScriptUrl =
  'https://' +
  deviceProfilingDomain +
  '/fp/tags.js?' +
  'org_id=' +
  orgId +
  '&session_id=' +
  id;

var deviceProfilingScript = document.createElement('script');
deviceProfilingScript.src = deviceProfilingScriptUrl;
deviceProfilingScript.async = true;
document.getElementsByTagName('head')[0].appendChild(deviceProfilingScript);

setCookie(cookieName, id, 1);