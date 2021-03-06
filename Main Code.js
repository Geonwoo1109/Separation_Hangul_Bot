var big = "\u200d";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

   if (msg.startsWith(".큰글씨 ")) {
      var real1 = msg.substr(5);
     
     if (real1.length < 6) { // x-1개까지 허용
       try {
       for (i = 0; i < real1.length; i++) {
         replier.reply (real1 [i] + big);
       }
       } catch (e) {
         replire.reply (e);
       }
     } else {
       replier.reply("5글자까지만 허용됩니다.");
     }
   }
   
     
if (msg.startsWith ("..큰글씨 ")) {

   try {
     var a = msg.substr(6).normalize("NFD").split("");
     replier.reply (a[0] + a[2] + a[4] + big);
   
   } catch (e) {
     replier.reply (e);
   }
}
   
}
