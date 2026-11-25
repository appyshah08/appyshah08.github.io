// ====== CONFIG: replace with your CleverTap project details ======
var CT_ACCOUNT_ID = "W6K-9ZK-RW7Z"; // CleverTap Dashboard > Settings > Project
var CT_REGION = "eu1";                 // in1 (India), eu1, us1, sg1, aps3, mec1 ... or "" for default
// =================================================================

var clevertap = { event: [], profile: [], account: [], onUserLogin: [], notifications: [], privacy: [] };
if (CT_REGION) {
  clevertap.account.push({ id: CT_ACCOUNT_ID }, CT_REGION);
} else {
  clevertap.account.push({ id: CT_ACCOUNT_ID });
}
clevertap.privacy.push({ optOut: false });
clevertap.privacy.push({ useIP: false });

(function () {
  var wzrk = document.createElement("script");
  wzrk.type = "text/javascript";
  wzrk.async = true;
  wzrk.src =
    ("https:" == document.location.protocol
      ? "https://d2r1yp2w7bby2u.cloudfront.net"
      : "http://static.clevertap.com") + "/js/clevertap.min.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(wzrk, s);
})();

// Small helper so both pages log the same way
function ctTrack(name, props) {
  clevertap.event.push(name, props || {});
  console.log("[CleverTap] event:", name, props || {});
}
