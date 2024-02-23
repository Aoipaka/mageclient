/*****************************************
          |\/| |\  /‾‾  |̲̅ ̲̅
          |  |「‾\ \_‾/  \_
            C L I E N T
__________________________________________
*****************************************/

//                /!\  DISCLAIMER  /!\
// Mage client has no affiliation with the game Mirage Online Classic

// ( Warning: This client will modify the game, which is against the
//           Mirage Online Classic Terms of Service )






mageclient = (() => {
/***************************
   Display start message
____________________________
***************************/
op=[1,1]
KNVJ8(4, " \n \n \n ", "", op[0], op[1])
KNVJ8(4, "|\\/|  |\\    /‾‾   |̲̅  ̲̅ ", "#ED40AF", op[0], op[1])
KNVJ8(4, "|   |「‾\\  \\_‾/  \\_\nC L I E N T", "#ED40AF", op[0], op[1])
KNVJ8(4, "Programmed by BlueHoodie", "#FFFFFF", op[0], op[1])





/*========================= Screenshot Button =====================*/
function tmpss() {
          fetch(document.querySelector('canvas#cvsGame').toDataURL()).then(r=>r.blob()).then(b=>open(URL.createObjectURL(b)))
}
window.ss = tmpss;
// add button
if (!(document.getElementById('ssbtn'))){
          document.querySelector('ul#winPlayerMenu').innerHTML+=`<li id=ssbtn><button type="button" title="SS" onclick="ss()"><img alt="SS" src="data:image/png;base64,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" style="width: 74px; height: 74px;"></button></li>`
}
/*____________________________________________________________________
=====================================================================*/










/*========================= Jukebox Button ==========================*/
function tmpjukebox() {
          function mo(H) {
              tmp_m_url = `https://play.mirageonlineclassic.com/audio/music${H}.ogg`
              fetch(tmp_m_url).then(r=>{
                      if (r.status !== 404) {
                          open(tmp_m_url)
                      } else {
                        KNVJW("Error",
                        "There was an error while attempting to open the track\nPlease check if that track number exists"
                        )
                      }
                  });
          }
          KNVJW(
              "Jukebox",
              "Enter OST track number:",
              "","none",['OPEN','CANCEL'],
              function(I,B){"OPEN" === B && mo(I)}
          );
}
window.jb = tmpjukebox;
// add button
if (!(document.getElementById('jbxbtn'))){
          document.querySelector('ul#winPlayerMenu').innerHTML+=`<li id=jbxbtn><button type="button" title="Jukebox" onclick="jb()"><img alt="Jukebox" src="data:image/png;base64,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" style="width: 74px; height: 74px;"></button></li>`
}
/*____________________________________________________________________
=====================================================================*/













/*========================= Credits Button =========================*/
function tmpcrpopup() {
          KNVJW(
                    "Mage client v0.1",
                    "Programmed by BlueHoodie\nMage Client is not affiliated with Mirage Online Classic",
                    "none","none",["OK"],
                    function(v,B) {
                              "OK" === B && console.log(1)
                    }
          );
}
window.cr = tmpcrpopup;
// add button
if (!(document.getElementById('cbtn'))){
          document.querySelector('ul#winPlayerMenu').innerHTML+=`<li id=cbtn><button type="button" title="Credits" onclick="cr()"><img alt="Credits" src="data:image/png;base64,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" style="width: 74px; height: 74px;"></button></li>`
}
/*____________________________________________________________________
=====================================================================*/
});




// Wait for game to be loaded
i = setInterval(() => {
          if (KNVJ8) {
                    mageclient();
                    clearInterval(i);
          }
});
