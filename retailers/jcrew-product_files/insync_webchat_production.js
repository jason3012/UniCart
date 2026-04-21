function insyncGenerateUuid(){
  // Generate 20 random alphanumeric characters for maximum entropy
  // 36^20 = 13.4 octillion possible combinations - virtually collision-proof
  const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const uuid = Array.from({length: 20}, () =>
    alphanumericChars[Math.floor(Math.random() * 36)]
  ).join('');

  return uuid;
}
function insyncSuffix(insyncMarket, insyncTriggerPoint, insyncEnv){
  let suffix = "";
  if(insyncEnv != "production")suffix = ("_" + insyncMarket + "_" + insyncTriggerPoint + "_" + insyncEnv);
  if(insyncEnv == "production" && insyncTriggerPoint == "jcrewfactory") suffix = "_" + insyncTriggerPoint;
  return suffix;
}
function insyncGetUniqueTabId (insyncMarket, insyncTriggerPoint, insyncEnv){
  let uuid = "insyncai_tab_uuid";
  uuid += insyncSuffix(insyncMarket, insyncTriggerPoint, insyncEnv);
  let insyncTabId = sessionStorage.getItem(uuid);
  if(typeof insyncTabId == "undefined" || insyncTabId == "" || insyncTabId == null){
    insyncTabId = insyncGenerateUuid();
    sessionStorage.setItem(uuid, insyncTabId);
  }
  return insyncTabId;
}

function insyncGetUniqueUserId (insyncMarket, insyncTriggerPoint, insyncEnv, insyncExpiryInDays){
  let cookieName = "insyncai_chat_uuid";
  cookieName += insyncSuffix(insyncMarket, insyncTriggerPoint, insyncEnv);
  let insyncUserId = insyncGetCookie(cookieName);
  if(typeof insyncUserId == "undefined" || insyncUserId == ""){
    insyncUserId = insyncGenerateUuid();
    insyncSetCookie(cookieName, insyncUserId, insyncExpiryInDays);
  }
  return insyncUserId;
}

function insyncGetOrSetUniqueGlobalId (insyncMarket, insyncTriggerPoint, insyncEnv, action, insyncGlobalId, expiryInDaysForGlobalId){
  let cookieName = "insyncai_global_id";
  cookieName += insyncSuffix(insyncMarket, insyncTriggerPoint, insyncEnv);
  if(action == 'get'){
    insyncGlobalId = insyncGetCookie(cookieName);
    if(typeof insyncGlobalId == "undefined" || insyncGlobalId == "" || insyncGlobalId == null){
      localStorage.setItem("insync_global_returning_or_new_user_"+insyncTriggerPoint, 'new');
      insyncGlobalId = insyncGenerateUuid();
    }else{
      localStorage.setItem("insync_global_returning_or_new_user_"+insyncTriggerPoint, "returning");
    }
  }

  if(action == 'set'){
    if(typeof insyncGlobalId != "undefined" && insyncGlobalId != "" && insyncGlobalId != null){
      let insyncGlobalIdExisting = insyncGetCookie(cookieName);
      if(typeof insyncGlobalIdExisting == "undefined" || insyncGlobalIdExisting == "" || insyncGlobalIdExisting == null)insyncSetCookie(cookieName, insyncGlobalId, expiryInDaysForGlobalId);
    }
  }

  return insyncGlobalId;
}

function insyncSetCookie(cookieName, cookieValue, expiryInDays){
  const d = new Date();
  d.setTime(d.getTime() + (expiryInDays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  // let baseDomain = window.location.hostname.split(".").slice(window.location.hostname.split(".").length-2).join(".");
  let baseDomain = window.location.hostname.replace(/^www\./, '');
  let c = cookieName + "=" + cookieValue + ";" + expires + ";domain=." + baseDomain + ";path=/"+";secure";
  document.cookie = c;
}

function insyncGetCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      console.log("Got cookie");
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function insyncHandleEnvCookieParams(cookie_key = 'insyncTestingEnv') {
  const urlParams = new URLSearchParams(window.location.search);
  const setCookieParam = cookie_key === 'insyncTestingEnv' ? 'setInsyncEnvCookie' : 'set' + cookie_key.charAt(0).toUpperCase() + cookie_key.slice(1);
  const clearCookieParam = cookie_key === 'insyncTestingEnv' ? 'clearInsyncEnvCookie' : 'clear' + cookie_key.charAt(0).toUpperCase() + cookie_key.slice(1);

  const setCookieValue = urlParams.get(setCookieParam);
  const clearCookieValue = urlParams.get(clearCookieParam);

  if (setCookieValue) {
    // Set cookie with 6 hours expiry
    const expiryInHours = 6/24; // 6 hours in days
    insyncSetCookie(cookie_key, setCookieValue, expiryInHours);
    console.log(cookie_key + ' cookie set to:', setCookieValue);
  }

  if (clearCookieValue === 'true') {
    // Clear cookie by setting it with negative expiry
    insyncSetCookie(cookie_key, '', -1);
    console.log(cookie_key + ' cookie cleared');
  }
}

function getOrSetDataFromLocalStore(type, userId, key, value="undefined"){
  key = userId.toString()+key.toString();
  if(type == 'set' && typeof value != "undefined"){
    localStorage.setItem(key, value);
  }
  return localStorage.getItem(key);
}
function getLocalStorageItemWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  }

function insyncSetChatEnv(args){
  
  //TO POINT TO DEV/ STAGE FROM PROD FOR TESTING
  // Handle URL parameters for setting/clearing insyncEnv cookie
  insyncHandleEnvCookieParams('insyncTestingEnv');
  // Determine environment from cookie if set
  const insyncTestingEnv = insyncGetCookie('insyncTestingEnv');
  if(insyncTestingEnv && (insyncTestingEnv == "development" || insyncTestingEnv == "staging")){
    console.log("Overriding env to ", insyncTestingEnv, " from cookie");
    args.insyncEnv = insyncTestingEnv;
    args.insyncHostedPageRef += (args.insyncHostedPageRef.includes("?") ? "&" : "?") + "insyncTestingEnv=" + insyncTestingEnv;
  }
  // Handle URL parameters for setting/clearing insyncDetailedDebugModeOn cookie
  insyncHandleEnvCookieParams('insyncDetailedDebugModeOn');
  // Check for detailed debug mode cookie
  const insyncDetailedDebugModeOn = insyncGetCookie('insyncDetailedDebugModeOn');
  if(insyncDetailedDebugModeOn){
    if(!args.insyncContextParams) args.insyncContextParams = {};
    args.insyncContextParams.insyncDetailedDebugModeOn = insyncDetailedDebugModeOn;
  }
  //ENDS

  // Initialize variables and configurations
  let insyncDomain = 'https://dbrd449anfbv4.cloudfront.net';
  let assetsBaseUrl = "https://d2c0xhqyhmtkod.cloudfront.net" + (args.insyncEnv == "production" ? "" : "/sdk-assets/"+args.insyncEnv);
  
  let insyncChatPreviewId = "insync-webchat-js";
  let insyncChatPreviewModuleIconId = "insync-chat-preview-module-icon-id";
  let insyncChatNudgeModuleId = "insync-chat-nudge-module-id";
  let insyncChatNudgeModuleIconId = "insync-chat-nudge-module-icon-id";
  let insyncChatOfflineModuleId = "insync-chat-offline-module-id";
  let insyncPreviewBtnTimeout;
  let insyncAppId;
  if(args.insyncEnv == "development"){
    insyncAppId = typeof args.insyncAppIdDev == "undefined" ? "702c1e15c41a13c70bd2b181f6a98cc1" : args.insyncAppIdDev;
  }else if(args.insyncEnv == "staging"){
    insyncAppId = typeof args.insyncAppIdStage == "undefined" ? "478b2581c1863bac4fab00cf95a39309" : args.insyncAppIdStage;
  }else if(args.insyncEnv == "production"){
      insyncAppId = args.insyncAppIdProd;
  }
  if(!args.hasOwnProperty("insyncTriggerPoint")){
      args.insyncTriggerPoint = window.location.hostname.split(".").slice(window.location.hostname.split(".").length-2)[0]
  }
 
  if((!args.hasOwnProperty("insyncUserId")) || (args.insyncUserId == "" || typeof args.insyncUserId == "undefined")){
    if(!args.hasOwnProperty("insyncUserIdExpiryInDays") || args.insyncUserIdExpiryInDays == ""){
      args.insyncUserIdExpiryInDays = 3;
    }
    args.insyncUserId = insyncGetUniqueUserId(args.insyncMarket, args.insyncTriggerPoint, args.insyncEnv, args.insyncUserIdExpiryInDays);
    if(insyncDetailedDebugModeOn){
      console.log("Detailed debug mode enabled from cookie insyncDetailedDebugModeOn and  Debug log id: ", args.insyncUserId.toString().toLowerCase());
    }
  }

  let insyncSource = "web";
  if(args.hasOwnProperty("insyncSource")){
    insyncSource = args.insyncSource;
  }

   ////////////// CHATBOT CONFIG //////////////

   let insyncChatbotConfig = {
      userId: args.insyncUserId,
      mobile: false,
      market: args.insyncMarket,
      env: args.insyncEnv,
      appId: insyncAppId,
      source: insyncSource,
      triggerPoint: args.insyncTriggerPoint,
      hostedPageRef: args.insyncHostedPageRef,
      trackingEvents: args.insyncTrackingEvents,
      insyncGlobalId: insyncGetOrSetUniqueGlobalId(args.insyncMarket, args.insyncTriggerPoint, args.insyncEnv, 'get'),
      uniqueTabId: insyncGetUniqueTabId(args.insyncMarket, args.insyncTriggerPoint, args.insyncEnv),
      contextParams: {
          isIframe: true,
          iframeParentWidth: document?.documentElement?.clientWidth || window.innerWidth,
          iframeParentHeight: args.windowInnerHeight || document?.documentElement?.clientHeight || window.innerHeight,
          customCssSrc: args.insyncCustomCssSrc,
          returningOrNewUser: localStorage.getItem('insync_global_returning_or_new_user_'+args.insyncTriggerPoint) || localStorage.getItem('insync_global_returning_or_new_user') || '',
          isAccessibilityModeOn: getOrSetDataFromLocalStore('get', args.insyncUserId, 'isAccessibilityModeOn') === 'true',
      }
  }

   //////////////////////////////////////////
   if(document.title){
    insyncChatbotConfig.contextParams.pagetitle = document.title;
   }

  // Merging insyncContextParams
  if(args.hasOwnProperty("insyncContextParams")){
    insyncChatbotConfig.contextParams = {...insyncChatbotConfig.contextParams, ...args.insyncContextParams};
  }

  // Trigger auto open if insyncAutoOpenTimerInSecs is configured or chatAutoOpenTime is being passed in the URL
  var insyncAutoOpenTimerVar;
  let insyncAutoOpen = function(insyncAutoOpenTimerInSecs){
    
    // Configured insyncAutoOpenTimerInSecs on page
    if(typeof insyncAutoOpenTimerInSecs == "undefined" && args.hasOwnProperty("insyncAutoOpenTimerInSecs")){
      insyncAutoOpenTimerInSecs = args.insyncAutoOpenTimerInSecs;
    }

    // Configured chatAutoOpenTime on page URL
    if(typeof insyncAutoOpenTimerInSecs == "undefined" && args.hasOwnProperty("insyncHostedPageRef") && args.insyncHostedPageRef.includes("chatAutoOpenTime=")){
      let chatAutoOpenTimeStr = "chatAutoOpenTime=";
      insyncAutoOpenTimerInSecs = (parseInt(args.insyncHostedPageRef.split(chatAutoOpenTimeStr)[1].split("&")[0]) > 0 ? parseInt(args.insyncHostedPageRef.split(chatAutoOpenTimeStr)[1].split("&")[0]) : null);
    }

    if(insyncAutoOpenTimerInSecs){
      insyncAutoOpenTimerVar = setTimeout(function() {
        if(args.hasOwnProperty("insyncHostedPageRef") && args.insyncHostedPageRef.includes("insyncContext=query")){
          // get the param val of insyncQuery= from args.insyncHostedPageRef
          let queryVal = args.insyncHostedPageRef.split("insyncQuery=")[1].split("&")[0];
          if(queryVal){
            try{
              queryVal = decodeURIComponent(queryVal);
            }catch(e){
              window.console.log("Error decoding queryVal", e);
            }
            args.userMessage = queryVal;
            args.isChatOpenFromExtModule = true;
            args.pushEventDict = {eventOpenChatSource: 'ExternalContextTriggered', eventCtaTitle: queryVal}
          }
        }
        insyncOpenChat('OpenChat', 'timer', args)
      }, insyncAutoOpenTimerInSecs*1000);
    }
  }
  // Google Tracking Events Wrapper
  let trackingEventsWrapper = function(eventName, data=null){
    if(typeof ((insyncChatbotConfig.trackingEvents || {}).events) != "undefined"){
      fireTrackingEvents(insyncChatbotConfig.trackingEvents, eventName, data);
    }
  }

  // Google Tracking events
  let fireTrackingEvents = function(insyncTrackingEvents, eventName, data){
    let events = insyncTrackingEvents.events;
    if(events.hasOwnProperty(eventName)){
      let event = (events[eventName] && (events[eventName].eventName || events[eventName].event)) || 'undefined';
      // Either read from eventName key or the event key
      let d = {event: event, eventSource: "InsyncBot", eventSourceGuid: insyncChatbotConfig.insyncGlobalId, ...data}
      
      // If Data is not present and dataKey and dataValue is present then push the whole data value to the data layer
      if(!data && events[eventName]?.dataValue && events[eventName]?.dataKey) {
        const dataValue = events[eventName].dataValue;
        d[events[eventName].dataKey] = dataValue;
      }
      if(insyncTrackingEvents.target == "GoogleDataLayer"){
        
        console.log("Push to dataLayer", d);
        if(window.hasOwnProperty("dataLayer")){
          window.dataLayer.push(d);
        }else{
          console.warn("window.hasOwnProperty(dataLayer) is false");
        }
      }else if(insyncTrackingEvents.target == "gtag"){
        console.log("Push to gtag", event, d);
        if(typeof gtag != "undefined"){
          delete d.event; // gtag does not accept event key in 3rd param
          gtag("event", event, d);
        }
      }
    }
  }

  //Send Tracking data
  let insyncTrackData = function(data) {
    // Make sure you are sending a string, and to stringify JSON
    let dict = {type: "TrackEvents", eventsData: JSON.stringify(data)};
    insyncIframeEl.contentWindow.postMessage(dict, insyncDomain);
  };
  
  let loadScript = function(d, s, id, src, callback){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = src;
      js.async = true;
      js.onload = callback;
      fjs.parentNode.insertBefore(js, fjs);
  }

  // Get iFrame element
  let insyncIframeEl;
  let counter = 0;
  let insyncIframeElFn = function() {
    insyncIframeEl = document.getElementById(args.insyncIframeId);
    if(!insyncIframeEl && counter <= 50){
      setTimeout(function(){
        insyncIframeElFn();
        counter = counter + 1;
        console.log("trying again. counter: ", counter);
      }, 200)
    } else if (insyncIframeEl) {
      // Make iframe keyboard navigable and part of tab order
      insyncIframeEl.setAttribute('tabindex', '0'); // Make focusable via keyboard tabbing
      insyncIframeEl.setAttribute('title', 'Chat Support Window');
      insyncIframeEl.setAttribute('aria-label', 'Chat Support Window'); // Extra description for screen readers

      // Initialize iframe as hidden
      insyncIframeEl.style.height = "0px";
      insyncIframeEl.style.display = "none";
    }
  };
  if(!insyncIframeEl)insyncIframeElFn();

  // Reload iFrame
  let insyncReloadIframe = function() {
    // Make sure you are sending a string, and to stringify JSON
    let dict = {type: "Reload"};
    insyncIframeEl.contentWindow.postMessage(dict, insyncDomain);
  
  };
  
  let insyncResetSize = function(newHeight) {
    // Make sure you are sending a string, and to stringify JSON
    let dict = {type: "ResetSize", height: newHeight};
    insyncIframeEl.contentWindow.postMessage(dict, insyncDomain);
  
  };

  let matchTitleAndUrl = function(retryCounter=0){
    console.log("matchTitleAndUrl: retryCounter ", retryCounter);
    return new Promise((resolve) => {
          
      let pagetitleToSlug = document.title
        .toLowerCase()
        .replace(/&/g, 'and')       // Convert "&" to "and"
        .replace(/,/g, '')          // Remove commas
        .replace(/\//g, '-')        // Replace slashes with hyphens
        .replace(/\(/g, '')         // Remove "(" character
        .replace(/\s+/g, '-')       // Replace spaces with hyphens
        .replace(/-+/g, '-')        // Collapse multiple hyphens
        .replace(/^-+|-+$/g, '');   // Trim hyphens from start/end

      console.log((pagetitleToSlug), ".includes",window.location.href.split("/product/")[1].substring(0,10) , " condition: ", pagetitleToSlug.includes(window.location.href.split("/product/")[1].substring(0,10)));
      

      if(pagetitleToSlug.includes(window.location.href.split("/product/")[1].substring(0,10))){
        console.log("Page title and URL matched");
        resolve(true);
      }else if(retryCounter < 10){
        console.log("Page title and URL not matched...Retrying");
        clearTimeout(this.matchTitleAndUrlTimeout);
            
        this.matchTitleAndUrlTimeout = setTimeout(function(){
          retryCounter = retryCounter + 1;
          resolve(matchTitleAndUrl(retryCounter));
        }, 1000);
      }else if(retryCounter == 10){
        console.log("Max retries reached. Giving up.");
        resolve(true);
      }
    });
  }
  let isTitleLookupLoopOn = false;
  let handlePageChangesWithoutReload = function(insyncTitleElement){
    let insyncPreviousUrl = window.location.href;
    const insyncObserver = new MutationObserver((mutationsList, observer) => {
        console.log('Title changed:', document.title);
        const insyncCurrentUrl = window.location.href;
        isTitleMatchingWithUrl = true;
        if(insyncChatbotConfig.styleGuide && insyncChatbotConfig.styleGuide.matchTitleAndUrlForSPAEnabled && (insyncCurrentUrl.includes("/product/"))){
          isTitleMatchingWithUrl = false;
          if(!isTitleLookupLoopOn){
            isTitleLookupLoopOn = true;
            matchTitleAndUrl().then((isTitleMatchingWithUrl) => {
              console.log("after matchTitleAndUrl isTitleMatchingWithUrl: ", isTitleMatchingWithUrl);
              if(isTitleMatchingWithUrl){
                isTitleLookupLoopOn = false;
                executeReloadiFrame(observer, insyncPreviousUrl, insyncCurrentUrl);
              }

            });
          }else{
            console.log("Ignoring the matchTitleAndUrl as lookup loop is already on");
          }
          console.log("isTitleMatchingWithUrl: ", isTitleMatchingWithUrl);
        }
        if(isTitleMatchingWithUrl){
          executeReloadiFrame(observer, insyncPreviousUrl, insyncCurrentUrl);
        }else{
          console.log("Ignoring the reload as title and url doesn't match");
        }
        
    });

    // Observe changes to the child list of the <title> element
    insyncObserver.observe(insyncTitleElement, { childList: true });
  }

  function executeReloadiFrame(observer, insyncPreviousUrl, insyncCurrentUrl) {
    console.log("Execute ReloadiFrame");
    if (insyncPreviousUrl.split("?")[0] !== insyncCurrentUrl.split("?")[0]) {
      // Debounce mechanism to prevent multiple rapid calls
      clearTimeout(this.titleChangeTimeout);
      
      this.titleChangeTimeout = setTimeout(() => {
        // Disabling the observer
        observer.disconnect();

        args.insyncHostedPageRef = insyncCurrentUrl;
        // Reset the iframe height if chatbot was open
        if(insyncIframeEl.offsetHeight > 0){
          insyncIframeEl.style.height = "0px";
          insyncIframeEl.style.display = "none";
        }

        // Remove the chat preview module JS if already exists
        let insyncChatPreviewJs = document.getElementById(insyncChatPreviewId);
        if(insyncChatPreviewJs)insyncChatPreviewJs.remove();

        // Remove the chat preview module UI if already exists
        if(typeof insyncChatPreviewModuleIconId != "undefined"){
          let insyncChatPreviewModuleIcon = document.getElementById(insyncChatPreviewModuleIconId);
          if(insyncChatPreviewModuleIcon)insyncChatPreviewModuleIcon.remove();
        }
        // Retaining the lesser window.innerHeight if new page is getting bigger window.innerHeight
        if(insyncChatbotConfig.contextParams.iframeParentHeight < (document?.documentElement?.clientHeight || window.innerHeight)){
          args.windowInnerHeight = insyncChatbotConfig.contextParams.iframeParentHeight;
        }
        
        //Instantiate the chat again
        insyncSetChatEnv(args);

        // Reload iFrame
        insyncReloadIframe();

        if(insyncChatbotConfig.env != "production"){
          let insyncIframeElComputedStyle = window.getComputedStyle(insyncIframeEl);
          let height = parseInt(insyncIframeElComputedStyle.getPropertyValue('height'));
          insyncTrackData(
            {
              utility: {
                event_type: "logs",
                action: "sdk_spa",
                section: "iframe_reload",
                metadata_logs: {iframe_height: height, window_innerHeight: window.innerHeight, screen_height: screen.height, client_height: document?.documentElement?.clientHeight}
              },
            }
          );
        }
      }, 250); // 250ms delay to consolidate rapid changes
    }
  }

  let insyncTitleElement = document.querySelector('title');
  if (insyncTitleElement) {
    handlePageChangesWithoutReload(insyncTitleElement);
  }
  let resizeTimeout;
  function insyncHandleResize(event){
    //console.log("insyncChatbotConfig.contextParams.iframeParentHeight: ", insyncChatbotConfig.contextParams.iframeParentHeight, " window.innerHeight ", window.innerHeight, " insyncIframeEl.style.height: ", insyncIframeEl.style.height, " insyncChatbotConfig.styleGuide.screenHeight ",insyncChatbotConfig.styleGuide.screenHeight)
    if (insyncChatbotConfig.hasOwnProperty("styleGuide") && (
      insyncChatbotConfig.contextParams.iframeParentHeight != (document?.documentElement?.clientHeight || window.innerHeight) || 
      parseInt(insyncIframeEl.style.height) != insyncChatbotConfig.styleGuide.screenHeight
    )) {
      if (typeof insyncResetSize !== "undefined") {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
              
              let insyncIframeElComputedStyle = window.getComputedStyle(insyncIframeEl);
              let height = parseInt(insyncIframeElComputedStyle.getPropertyValue('height'));
              if(height > 0){
                let bottom = parseInt(insyncIframeElComputedStyle.getPropertyValue('bottom'));
                let chatWindowHeight = height+(bottom);

                let maxHeight = document?.documentElement?.clientHeight || window.innerHeight;
                let newHeight;
                // Chat window height is greater than device window height
                if(chatWindowHeight >= maxHeight){
                  newHeight = (maxHeight-bottom);
  
                  // Chat window height is less than device window height AND initial Chat window height is less than device window height
                }else if(chatWindowHeight < maxHeight && insyncChatbotConfig.styleGuide.screenHeight+bottom <= maxHeight){
                  newHeight = insyncChatbotConfig.styleGuide.screenHeight;
                }
  
                // Update only if height is changed
                if(typeof newHeight != "undefined" && height != newHeight){
                  if (insyncChatbotConfig.env != "production" && typeof insyncTrackData !== "undefined" && insyncChatbotConfig.hasOwnProperty("styleGuide")){
                  insyncTrackData(
                    {
                      utility: {
                        event_type: "logs",
                        action: "sdk_height_assignment",
                        section: "resize",
                        metadata_logs: {iframe_height: height, window_innerHeight: window.innerHeight, new_iframe_height: newHeight, bottom: bottom, screen_height: screen.height, client_height: document?.documentElement?.clientHeight}
                      },
                    });
                  }
                  insyncIframeEl.style.height = newHeight.toString()+"px";
                  insyncIframeEl.style.display = "block";
                  //console.log("resetting to  newHeight ",newHeight);
                  insyncResetSize(newHeight);
                }
              }
              
          }, 300);
      }
    } 
  }

  let insyncLoadAndShowChatOfflineModule = function(insyncChatbotConfig){
    let src = "https://dbrd449anfbv4.cloudfront.net/insync_webchat_with_chat_offline_module_" + insyncChatbotConfig.env + ".js";
    //src = "insync_webchat_with_chat_offline_module.js";
    let insyncChatOfflineModuleContainer = document.getElementById(insyncChatOfflineModuleId);
    if(insyncChatOfflineModuleContainer) insyncChatOfflineModuleContainer.remove();
    loadScript(document, 'script', insyncChatOfflineModuleId, src, function(){
      insyncSetChatEnv.trackData = insyncTrackData;
      insyncInsertChatOfflineModule(insyncChatbotConfig, insyncIframeEl, insyncChatOfflineModuleId);
    });
  }

  // Reset preview and nudge modules by clearing timeouts and hiding elements
  let resetPreviewAndNudgeModulesAndOtherVars = function() {
    // Clear any pending timeouts
    [insyncPreviewBtnTimeout, insyncAutoOpenTimerVar].forEach(timeout => {
      if(timeout) {
        clearTimeout(timeout);
      }
    });
    insyncPreviewBtnTimeout = null;
    insyncAutoOpenTimerVar = undefined;

    // Close preview module button and nudge module if available on screen
    [insyncChatPreviewModuleIconId, insyncChatNudgeModuleIconId].forEach(id => {
      if(typeof id != "undefined"){
        const module = document.getElementById(id);
        if(module) module.style.display = 'none';
      }
    });
  }

  // Triggered on the click of chat icon
  let insyncOpenChat = function(type, triggeredBy="user", args={}) {
    //console.log("insyncOpenChat, ", insyncChatbotConfig)

    // Check offline hours and show offline module if needed
    if(insyncChatbotConfig.styleGuide.isChatOffline) {
      insyncLoadAndShowChatOfflineModule(insyncChatbotConfig);
      return;
    }

    // Reset preview and nudge modules
    resetPreviewAndNudgeModulesAndOtherVars();

    // Fire custom events (like GTM, etc) if expected
    if(typeof args.pushEventDict == "undefined"){
      let eventOpenChatSource = "ChatIconClicked";
      if(triggeredBy != "user") eventOpenChatSource = "ChatAutoOpenTriggered";
      if(args.isChatOpenFromNudge) eventOpenChatSource = "NudgeClicked";
      args.pushEventDict = {eventOpenChatSource: eventOpenChatSource};
    }

    if(typeof insyncAutoOpenTimerVar != "undefined")clearTimeout(insyncAutoOpenTimerVar); //remove setTimout if assigned

    // Read cookieName from userIdentifierCookies = {"<COOKIE_NAME>": "<CONTEXT_PARAM_KEY_NAME>"} and verify if the cookie exists and assign CONTEXT_PARAM_KEY_NAME to insyncChatbotConfig contextParams if it doesn't already exist
    insyncReadCookiesToContextParams(insyncChatbotConfig);
   
    // Make sure you are sending a string, and to stringify JSON
    let dict = {type: type, userId: insyncChatbotConfig.userId, triggeredBy: triggeredBy};
    // Send message if user has typed something in the chat preview button module or extra args like skip chat window open
    dict = {...dict, ...args, pagetitle: document.title}

    // Check if event was triggered by keyboard (Enter) or mouse click
    // Access the event info from args if provided
    if (args.interactionType) {
      insyncChatbotConfig["interactionType"] = args.interactionType;
    }
    
    if(insyncChatbotConfig.hasOwnProperty("styleGuide")){
      insyncIframeEl.style.height = insyncChatbotConfig.styleGuide.screenHeight.toString()+"px";
      insyncIframeEl.style.width = insyncChatbotConfig.styleGuide.screenWidth.toString()+"px";
      insyncIframeEl.style.display = "block";
      insyncIframeEl.style.right = insyncChatbotConfig.styleGuide.right.toString()+"px";
      if(insyncChatbotConfig.styleGuide.left && insyncChatbotConfig.styleGuide.left != "auto")insyncIframeEl.style.left = insyncChatbotConfig.styleGuide.left.toString()+"px";
      if(window.innerWidth < 400)insyncIframeEl.style.left = "0px"; // If window width is less than 400px, set left to 0px (fix for mobile devices which has scrollbars included in view port)
      insyncIframeEl.style.bottom = insyncChatbotConfig.styleGuide.bottom.toString()+"px";
    }

    insyncIframeEl.contentWindow.postMessage(dict, insyncDomain);

    // If chat is reopened via keyboard after a minimize, return focus to chat header
    if (insyncChatbotConfig.contextParams.isAccessibilityModeOn && insyncChatbotConfig.chatInitialized) {
      setTimeout(() => {
        let focusDict = {type: "FocusInsyncChatBox", skipInputFocus: true};
        insyncIframeEl.contentWindow.postMessage(focusDict, insyncDomain);
      }, 100);
    }

    trackingEventsWrapper("OpenChat", args.pushEventDict);
    
    if(insyncChatbotConfig.env != "production"){
      insyncTrackData(
        {
          utility: {
            event_type: "logs",
            action: "sdk_height_width_assignment",
            section: "open_chat_clicked",
            metadata_logs: {iframe_height: insyncChatbotConfig.styleGuide.screenHeight, window_innerHeight: window.innerHeight, screen_height: screen.height, client_height: document?.documentElement?.clientHeight, window_innerWidth: window.innerWidth, iframe_width: insyncChatbotConfig.styleGuide.screenWidth,clientWidth: document?.documentElement?.clientWidth}
          },
        });
    }
  };

  //Send Session data
  let insyncSendSessionData = function(data) {
    // Make sure you are sending a string, and to stringify JSON
    let dict = {type: "SendSessionData", sessionData: JSON.stringify(data)};
    insyncIframeEl.contentWindow.postMessage(dict, insyncDomain);
  };
  
  
  //Show Insync Chat Button
  let insyncShowChatBtn = function(button, type){
    if (!button) { console.warn('Element with insyncChatIconId is missing!'); return; }
  
    const sg           = insyncChatbotConfig.styleGuide || {};
    const persistFlag  = !!sg.isChatIconPersistence24hrEnabled;
    const draggableFlg = !!sg.isChatIconDraggable;
  
    // We want dragging if draggableFlag is on, regardless of persistence
    if (draggableFlg) {
      // Store flag on the button so the drag script can read it
      button.setAttribute('data-insync-drag-persist', persistFlag ? "1" : "");
      
      let src = "https://dbrd449anfbv4.cloudfront.net/insync_chat_icon_drag_" + insyncChatbotConfig.env + ".js";
      loadScript(document, 'script', 'insync-chat-icon-drag-js', src, function(){});
    }

    if(sg.sectionIdentifiersToHidePreviewModule?.length > 0){
      let src = "https://dbrd449anfbv4.cloudfront.net/insync_chat_preview_module_config_" + insyncChatbotConfig.env + ".js";
      loadScript(document, 'script', 'insync-chat-preview-module-config-js', src, function(){
          insyncInitChatPreviewToggleVisibility(insyncChatPreviewModuleIconId, sg.sectionIdentifiersToHidePreviewModule)
      });
    }
  
    button.style.display = "block";
    if(type === 'ShowChatPreviewModuleBtn') button.style.animation = "none";
  };

  //Show Insync Nudge Module
  let insyncLoadAndShowNudgeModule = function(insyncChatbotConfig, button){
    
    let src = "https://dbrd449anfbv4.cloudfront.net/insync_webchat_with_chat_nudge_"+insyncChatbotConfig.env+".js";
    //src = "insync_webchat_with_chat_nudge.js"
    loadScript(document, 'script', insyncChatNudgeModuleId, src, function(){
      insyncChatbotConfig.insyncChatNudgeModuleIconId = insyncChatNudgeModuleIconId;
      insyncInitChatNudgeModule(insyncChatbotConfig, button);
    });
    
  }

  //Check Consent Cookie with Timeout - Recursive function with 1 sec delay to override the Proactive module delay duration
  let checkConsentCookieWithTimeout = function(insyncChatbotConfig, elapsedTime){
    return new Promise((resolve) => {
      let consentCookieName = insyncChatbotConfig.styleGuide?.previewModuleArgs?.consentCookieName;
      let consentCookieCheckTimeout = insyncChatbotConfig.styleGuide?.previewModuleArgs?.consentCookieCheckTimeout;

      if(!consentCookieName) {
        resolve();
        return;
      }

      let consentCookie = insyncGetCookie(consentCookieName);

      // If cookie is found, update delay duration to 0 and resolve
      if(consentCookie && consentCookie !== ""){
        insyncChatbotConfig.styleGuide.previewModuleArgs.previewChatIconDelayDuration = 0;
        console.log("Consent cookie found, setting delay to 0");
        resolve();
        return;
      }

      // On first check, if cookie not found, set delay to 0 seconds as delay will be taken care by consentCookieCheckTimeout so that preview module is loaded after consent cookie is found or timeout is reached
      if(elapsedTime === 0){
        insyncChatbotConfig.styleGuide.previewModuleArgs.previewChatIconDelayDuration = 0;
      }

      // If timeout has been reached, stop checking and resolve
      if(elapsedTime >= consentCookieCheckTimeout){
        console.log("Consent cookie check timeout reached");
        resolve();
        return;
      }

      // Check again after 1 second
      setTimeout(function(){
        checkConsentCookieWithTimeout(insyncChatbotConfig, elapsedTime + 1).then(resolve);
      }, 1000);
    });
  }

  //Show Preview Module
  let insyncLoadAndShowPreviewModule = async function(insyncChatbotConfig, button, showButtonAfterLoad = false){
    // Check if consent cookie is required and wait for it or timeout
    if(insyncChatbotConfig.styleGuide?.previewModuleArgs?.consentCookieName){
      await checkConsentCookieWithTimeout(insyncChatbotConfig, 0);
    }

    // Store timeout ID for clearing later if needed. Load chat preview module script
    insyncPreviewBtnTimeout = setTimeout(function(){
      if(insyncIframeEl && parseInt(insyncIframeEl.style.height) > 0) return; // If iframe is already open, do not load preview module
      let src = "https://dbrd449anfbv4.cloudfront.net/insync_webchat_"+insyncChatbotConfig.env+"_with_chat_preview_btn.js";
      loadScript(document, 'script', insyncChatPreviewId, src, function() {
        // Function to be called once the script is loaded
        insyncChatbotConfig.insyncChatPreviewModuleIconId = insyncChatPreviewModuleIconId;
        insertChatPreviewModuleScript(insyncChatbotConfig, insyncIframeEl, button, insyncDomain);
        insyncSetChatEnv.closeChatPreviewModule = insyncCloseChatPreviewModule;
        insyncSetChatEnv.trackData = insyncTrackData;
        
        // Show chat button after loading if specified
        if(showButtonAfterLoad) {
          insyncShowChatBtn(button, 'ShowChatPreviewModuleBtn');
        }
      });
    }, insyncChatbotConfig.styleGuide?.previewModuleArgs?.previewChatIconDelayDuration * 1000);
  }

  // Send Event & data
  let insyncSendEvent = function(type, args) {
    // Make sure you are sending a string, and to stringify JSON
    let dict = {type: type, args: args};
    insyncIframeEl.contentWindow.postMessage(dict, insyncDomain);
  
  };

  function insyncReadCookiesToContextParams(insyncChatbotConfig) {
    let userIdentifierCookies = insyncChatbotConfig.styleGuide.userIdentifierCookies;
    if(!userIdentifierCookies) return;
  
    // userIdentifierCookies = {"<COOKIE_NAME>": "<CONTEXT_PARAM_KEY_NAME>"}
    for(let cookieName in userIdentifierCookies){
        let contextParamKey = userIdentifierCookies[cookieName];
        if(insyncChatbotConfig.contextParams[contextParamKey]) continue; // skip processing if the context parameter already exists
  
        console.log("cookieName: ", cookieName, " contextParamKey: ", contextParamKey);
        let cookieValue = document.cookie.split('; ').find(row => row.startsWith(cookieName + '='));
        if(cookieValue){
          cookieValue = decodeURIComponent(cookieValue.split('=')[1]);
          insyncSendEvent("GetAdditionalContextParams", {[cookieName]: cookieValue});  
        }
    }
  }

  let getChatIconName = function(chatIconStyle){
    let baseChatIconName = "chat_button_icon";
    let chatIconName;
    if(chatIconStyle["trigger_point_based_style"]){
      chatIconName = args.insyncMarket.split("_")[1]+"_"+chatIconStyle["trigger_point_based_style"]+"_"+baseChatIconName
    }else{
      chatIconName = args.insyncMarket.split("_")[1]+"_"+baseChatIconName
    }
    return chatIconName;
  }

  // Insert Chat Icon
  let insertChatIcon = function(chatIconStyle){
    // console.log(" insertChatIcon ", chatIconStyle, assetsBaseUrl)
    // chatIconStyle["chat_icon_default_img_name"] = "asu_chat_button_icon_default.gif";
    // chatIconStyle["chat_icon_img_height"] = 70;

    chatIconStyle["chat_icon_default_img_name"] = getChatIconName(chatIconStyle)+"_default.gif";
    
    // Create and add stylesheet
    let button = document.getElementById(args.insyncChatIconId);
    if(button){
      button.remove();
      console.log("Removed Existing Chat Icon")
    }
    let linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://dbrd449anfbv4.cloudfront.net/insync_chat_button.css';
    document.head.appendChild(linkElement);

    // Create span element
    let spanElement = document.createElement('span');
    spanElement.id = args.insyncChatIconId;
    spanElement.style.display = 'none';
    spanElement.style.borderRadius = chatIconStyle["chat_icon_border_radius"] ? chatIconStyle["chat_icon_border_radius"] : '10%';
    
    // Add focus styles for keyboard navigation
    spanElement.style.lineHeight = '0';// To fix the extra space in the bottom of the icon
    spanElement.onclick = () => {
      if(typeof isDraggingInsyncElement == 'undefined' || !isDraggingInsyncElement){
        insyncChatbotConfig["interactionType"] = "mouse";
        insyncSetChatEnv.openChat('OpenChat', 'user', insyncChatbotConfig);
      }
    };
    
    // Add keyboard event listener for accessibility
    spanElement.tabIndex = 0; // Make element focusable
    spanElement.role = "link"; // To appear in jaws link list
    
    
    spanElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        insyncChatbotConfig["interactionType"] = "keyboard";
        insyncSetChatEnv.openChat('OpenChat', 'user', insyncChatbotConfig);
      }
    });
    
    // Set accessible label with keyboard instructions
    let defaultLabel = "Open chat support";
    let baseLabel = chatIconStyle["chat_icon_tool_tip_text"] || defaultLabel;
    let fullAriaLabel = baseLabel + ". Press Enter to open chat window.";

    spanElement.setAttribute("title", baseLabel);
    spanElement.setAttribute("aria-label", fullAriaLabel);
    spanElement.setAttribute("data-base-label", baseLabel); // Store base label for reuse

    // Create image element
    let imgElement = document.createElement('img');
    imgElement.src = assetsBaseUrl+'/'+chatIconStyle["chat_icon_default_img_name"];
    imgElement.alt = 'Chat button icon';
    imgElement.style.height = "70px";
    if(chatIconStyle["chat_icon_img_height"])imgElement.style.height = chatIconStyle["chat_icon_img_height"]+'px';
    
    if(chatIconStyle["chat_icon_hover_effects"] && chatIconStyle["chat_icon_hover_effects"] == "transition"){
      // Add hover effect to enlarge icon
      imgElement.style.transition = "transform 0.3s ease";
      spanElement.style.overflow = "visible";
      spanElement.addEventListener("mouseenter", function() {
        imgElement.style.transform = "scale(1.1)";
      });
      spanElement.addEventListener("mouseleave", function() {
        imgElement.style.transform = "scale(1)";
      });
    }

    // Append image to span
    spanElement.appendChild(imgElement);

    // Create aria-live region for announcing status changes to screen readers
    let liveRegionId = args.insyncChatIconId + '-status';
    let existingLiveRegion = document.getElementById(liveRegionId);
    if(existingLiveRegion) {
      existingLiveRegion.remove();
    }
    let liveRegion = document.createElement('div');
    liveRegion.id = liveRegionId;
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.setAttribute('role', 'status');
    // Visually hide but keep accessible to screen readers (proper SR-only class)
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    liveRegion.style.clip = 'rect(0, 0, 0, 0)';
    liveRegion.style.whiteSpace = 'nowrap';

    // Append span and live region to body
    document.body.appendChild(spanElement);
    document.body.appendChild(liveRegion);

  }

  // Update Chat Icon
  let updateChatIcon = function(button, loadingState, chatIconStyle){
    // console.log(" updateChatIcon ", loadingState, chatIconStyle, assetsBaseUrl)
    
    let baseChatIconName = getChatIconName(chatIconStyle);
    chatIconStyle["chat_icon_default_img_name"] = baseChatIconName+"_default.gif";
    chatIconStyle["chat_icon_loading_img_name"] = baseChatIconName+"_loading.gif";
    chatIconStyle["chat_icon_loaded_img_name"] = baseChatIconName+"_loaded.gif";
    
    // chatIconStyle["chat_icon_default_img_name"] = "asu_chat_button_icon_default.gif";
    // chatIconStyle["chat_icon_loading_img_name"] = "asu_chat_button_icon_loading.gif";
    // chatIconStyle["chat_icon_loaded_img_name"] = "asu_chat_button_icon_default.gif";
    let imgName = chatIconStyle["chat_icon_default_img_name"];
    if(loadingState == "loading") imgName = chatIconStyle["chat_icon_loading_img_name"];
    if(loadingState == "loaded") imgName = chatIconStyle["chat_icon_loaded_img_name"];
    if(button && imgName){
      let imgElement = button.querySelector('img');
      if(imgElement) {
        imgElement.src = assetsBaseUrl + '/' + imgName ;
      }

      // Update aria-live region for screen reader announcements
      let liveRegion = document.getElementById(args.insyncChatIconId + '-status');

      if(loadingState == "loading") {
        button.setAttribute("aria-busy", "true");
        imgElement.alt = "Chat loading...";
        // Update live region to announce loading state
        if(liveRegion) {
          liveRegion.textContent = "Chat is loading, please wait.";
        }
      }
      if(loadingState == "loaded") {
        button.setAttribute("aria-busy", "false");
        imgElement.alt = "Chat button icon";
        // Update live region to announce loaded state
        if(liveRegion) {
          liveRegion.textContent = "Chat loaded and ready.";
        }
      }
    }
  }


  // Function Assignment
  insyncSetChatEnv.openChat = insyncOpenChat;
  insyncSetChatEnv.sendSessionData = insyncSendSessionData;
  insyncSetChatEnv.sendEvent = insyncSendEvent;
  insyncSetChatEnv.reloadIframe = insyncReloadIframe;

  ////////////// Handle Resize //////////////
  window.addEventListener("resize",insyncHandleResize, false);

  ////////////// Receive Messages from iFrame //////////////
  window.addEventListener("message", insyncReceiveMessage, false);

  function insyncReceiveMessage(event) {
    //console.log("event.origin: "+event.origin)
    //Validating domain
    if (event.origin !== insyncDomain)
    return;
    
    // Event fired on the click of SDK's minimize icon to minimize iframe window
    if(event.data.type =='CloseChat'){
        insyncIframeEl.style.height = "0px";
        insyncIframeEl.style.width = "0px";
        insyncIframeEl.style.display = "none";
        insyncIframeEl.style.borderRadius = "0px";
        insyncIframeEl.style.boxShadow = "none";
        insyncIframeEl.style.outline = "none"; // Remove focus outline when closed

        // Fire custom events (like GTM, etc) if expected
        trackingEventsWrapper("CloseChat");
    }

    // Event fired from iframe to reopen chat (e.g., when agent sends message while minimized)
    if(event.data.type =='ReopenChat'){
        insyncOpenChat('OpenChat', 'agent', {pushEventDict: {eventOpenChatSource: 'AgentMessageAutoOpen'}});
    }

    // Event fired to display the chat icon as SDK is ready 
    if((event.data.type =='ShowChatBtn' || event.data.type =='ShowChatPreviewModuleBtn') && args.hasOwnProperty('insyncChatIconId')){
        if(typeof insyncChatbotConfig.styleGuide == 'undefined')insyncChatbotConfig.styleGuide = {};
        event.data.previewModuleArgs ??= {};
        event.data.previewModuleArgs.previewChatIconDelayDuration ??= 0;
        insyncChatbotConfig.styleGuide = {...insyncChatbotConfig.styleGuide, ...event.data};
        let button = document.getElementById(args.insyncChatIconId);

        // Reset preview and nudge modules from previous events
        resetPreviewAndNudgeModulesAndOtherVars();

        // Event fired to display the new chat icon
        insyncChatbotConfig.isProactiveInsyncDismissedCacheKey = "is_proactive_insync_dismissed"+"_"+insyncChatbotConfig.market+"_"+ insyncChatbotConfig.triggerPoint+"_"+insyncChatbotConfig.env;
        let isProactiveInsyncDismissed = getLocalStorageItemWithExpiry(insyncChatbotConfig.isProactiveInsyncDismissedCacheKey);
        if(event.data.type =='ShowChatPreviewModuleBtn' 
          && (!event.data.restrict_chat_icon_creation_below_screen_size || event.data.restrict_chat_icon_creation_below_screen_size <= window.innerWidth) 
          && (isProactiveInsyncDismissed != "true") 
          && insyncChatbotConfig.contextParams.isAccessibilityModeOn !== true){
          // Load script
          // Scenario when Nudge module is enabled
          if(insyncChatbotConfig.styleGuide?.nudgeModuleArgs?.isNudgeChatModuleEnabled == true){
            // Show Chat button
            insyncShowChatBtn(button, event.data.type);
            
            // Load chat preview module script
            insyncLoadAndShowPreviewModule(insyncChatbotConfig, button);

            // Load Nudge script
            insyncLoadAndShowNudgeModule(insyncChatbotConfig, button)
          }else{
            // Scenario when Nudge module is not enabled and there is a delay configured to show preview module button
            if(insyncChatbotConfig.styleGuide?.previewModuleArgs?.previewChatIconDelayDuration > 0){
              // Show Chat button
              insyncShowChatBtn(button, event.data.type);

              // Load chat preview module script
              insyncLoadAndShowPreviewModule(insyncChatbotConfig, button);
            }else{
              // Check if consent cookie check will cause delay
              let willHaveConsentDelay = insyncChatbotConfig.styleGuide?.previewModuleArgs?.consentCookieName &&
                                          !insyncGetCookie(insyncChatbotConfig.styleGuide.previewModuleArgs.consentCookieName);

              // Show chat button upfront if consent delay will happen
              if(willHaveConsentDelay) {
                insyncShowChatBtn(button, event.data.type);
                insyncLoadAndShowPreviewModule(insyncChatbotConfig, button);
              } else {
                // Load chat preview module script and show chat button after loading
                insyncLoadAndShowPreviewModule(insyncChatbotConfig, button, true);
              }
            } 
          }
        }else{
          // Event fired to display the default chat icon
          insyncShowChatBtn(button, event.data.type); 

          // Load Nudge script
          if(insyncChatbotConfig?.styleGuide?.nudgeModuleArgs?.isNudgeChatModuleEnabled == true)insyncLoadAndShowNudgeModule(insyncChatbotConfig, button);
        }
        // Override the autoOpenTimer from server based on config
        insyncAutoOpen(insyncChatbotConfig.styleGuide.autoOpenTimerOverride);
    }

    // Event fired to position the chat icon 
    if(event.data.type == "StyleChatIcon"){
      insyncChatbotConfig.styleGuide = {...insyncChatbotConfig.styleGuide, ...event.data.chatIconStyle}
      if((event.data.chatIconStyle && event.data.chatIconStyle.dynamic_chat_button_states_enabled && event.data.chatIconStyle.dynamic_chat_button_states_enabled == "v1" && (!event.data.chatIconStyle.restrict_chat_icon_creation_below_screen_size || event.data.chatIconStyle.restrict_chat_icon_creation_below_screen_size <= window.innerWidth))){
        insertChatIcon(event.data.chatIconStyle);
      }
      //console.log("event.data.chatIconStyle: ", event.data.chatIconStyle);
      if(event.data.chatIconStyle){
        let button = document.getElementById(args.insyncChatIconId);
        if(button){
          if(event.data.chatIconStyle.hasOwnProperty("chat_icon_zindex"))button.style.zIndex = event.data.chatIconStyle.chat_icon_zindex;
          if(event.data.chatIconStyle.hasOwnProperty("chat_icon_bottom"))button.style.bottom = event.data.chatIconStyle.chat_icon_bottom.toString()+"px";
          if(event.data.chatIconStyle.hasOwnProperty("chat_icon_left")){
            button.style.left = event.data.chatIconStyle.chat_icon_left.toString()+"px";
          }else if(event.data.chatIconStyle.hasOwnProperty("chat_icon_right")){
            button.style.right = event.data.chatIconStyle.chat_icon_right.toString()+"px";
          }
          if(event.data.chatIconStyle.hasOwnProperty("chat_icon_img_height")){
            const img = button?.querySelector('img');
            if(img)img.style.height = event.data.chatIconStyle.chat_icon_img_height.toString()+"px";
          }
        }
      }
    }

    // Event fired to match the style of iFrame window with SDK 
    if(event.data.type == "StyleIframe"){
        insyncIframeEl.style.borderRadius = insyncChatbotConfig.styleGuide.chatBoxBorderRadius.toString()+"px";
        insyncIframeEl.style.boxShadow = insyncChatbotConfig.styleGuide.chatBoxShadow;
        if(insyncChatbotConfig.styleGuide.chatBoxZIndex)insyncIframeEl.style.zIndex = insyncChatbotConfig.styleGuide.chatBoxZIndex.toString();
    }

    // Event fired when a URL is clicked to be opened outside
    if(event.data.type == "OpenUrl"){
      let target = "_blank";
      if(event.data.target)target = event.data.target
      window.open(event.data.url, event.data.target);
    }

    // Event fired to simulate a click on parent's page btn
    if(event.data.type == "ClickBtn"){
      if(event.data.dict.className){
        let elements = document.getElementsByClassName(event.data.dict.className);
        if(elements)elements[0].click();
      }
      if(event.data.dict.id){
        let element = document.getElementById(event.data.dict.id);
        if(element)element.click();
      }
      if(event.data.dict.dataAttribute){
        const { name, value } = event.data.dict.dataAttribute;
        let elements = document.querySelectorAll(`[data-${name}="${value}"]`);
        if(elements && elements.length > 0)elements[0].click();
      }
    }

    // Event fired when chatbot loading state changes from SDK
    if(event.data.type == "setChatbotInitialLoadingState"){
      if(event.data.chatIconStyle.dynamic_chat_button_states_enabled && event.data.chatIconStyle.dynamic_chat_button_states_enabled == "v1"){
        let button = document.getElementById(args.insyncChatIconId);
        updateChatIcon(button, event.data.dict.loadingState, event.data.chatIconStyle);
      }

      // Focus on chat elements inside iframe if opened via keyboard for accessibility
      if ((insyncChatbotConfig.contextParams.isAccessibilityModeOn) && insyncIframeEl && event.data.dict.loadingState == "loaded") {
        insyncChatbotConfig.chatInitialized = true;
        // Add visible focus outline style
        insyncIframeEl.style.outline = '2px solid #0018FF';
        
        // Send message to iframe to focus on insyncChatBox but with skipInputFocus flag
        setTimeout(() => {
          let dict = {type: "FocusInsyncChatBox", skipInputFocus: true};
          insyncIframeEl.contentWindow.postMessage(dict, insyncDomain);
          // Remove outline when focus moves inside iframe
          insyncIframeEl.style.outline = 'none';
        }, 500);
      } else if (insyncChatbotConfig["interactionType"] !== 'keyboard' && insyncIframeEl) {
        // Remove outline if opened via mouse
        insyncIframeEl.style.outline = 'none';
      }
    }

    // Event fired to save user preferences in localstorage
    if(event.data.type == "setDataInLocalStore"){
      getOrSetDataFromLocalStore('set', args.insyncUserId, event.data.key, event.data.value);
    }

    // Event fired when a email typed by the user
    if(event.data.type == "PushEvent"){
      trackingEventsWrapper(event.data.trackingEventKey, event.data.trackingEventData);
    }

    // Event fired when a global user feature is enabled
    if(event.data.type == "SetInsyncGlobalId"){
      insyncGetOrSetUniqueGlobalId(args.insyncMarket, args.insyncTriggerPoint, args.insyncEnv, 'set', event.data.insyncGlobalId, event.data.expiryInDaysForGlobalId);
    }
    
    // Event fired when iFrame's content is ready
    if(event.data.type == "IframeContentReady"){
        // Send ChatbotConfig to load SDK
        let dict = {type: "ChatbotConfig", chatbotConfig: insyncChatbotConfig};
        try{
          insyncIframeEl.contentWindow.postMessage(dict, insyncDomain);
        }catch(e){
          console.error("Error while posting messge ", e);
          try{
            insyncIframeEl = document.getElementById(args.insyncIframeId);
            insyncIframeEl.contentWindow.postMessage(dict, insyncDomain);
          }catch(e){
            console.error("Error while posting message again: ", e);
          }
        }
        
    }

    // Event Fired for add to Cart
    if(event.data.type == "ClickBtn"){
      // eventName should be sent from the server templates
      if (event.data.dict.eventName === "addToCartClick") {
        trackingEventsWrapper('AddToCart')
      }
    }
  }
}