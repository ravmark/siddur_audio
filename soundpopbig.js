var UniqueID = 314; // Make each link open in a new window 
var newWinOffset = 0; // Position of first pop-up
var PlayWin;
function PlayerOpenLarge(soundfiledesc, soundfilepath, pageimage) {
    PlayWin = window.open('', UniqueID, 'width=675,height=750,top=' + newWinOffset + ',left=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,menubar=0,status=0,directories=0,personalbar=0');
    PlayWin.focus();

    var winContent = "<html><head><title>" + 'Play Sound Clip' + "</title></head><body onBlur=self.focus() bgcolor='#9999ff'>";

    winContent += "<div align='center'>";
    winContent += "<b style='font-size:18px;font-family:Verdana,sans-serif;line-height:1.5'>" + soundfiledesc + "<p></b>";
    winContent += "</div>";

    winContent += "<div align='center'>";
    //Load HTMl 5 Player
    winContent += "<audio controls autoplay>";
    winContent += "<source src='" + soundfilepath + "' type='audio/mpeg'>";
    winContent += "</audio>";
    winContent += "</div>";
    winContent += "<br>";
    winContent += "<form><div align='center'><input type='button' value='Close this window' onclick='javascript:window.close();'></div></form>";
    winContent += "<div align='center'>";
    winContent += "<b style='font-size:12px;font-family:Verdana,sans-serif;line-height:1.5'> Reprinted from <i>Siddur Sim Shalom for Shabbat and Festivals</i>, &copy;1998, The Rabbinical Assembly<br> (Reprinted with kind permission of the Rabbinical Assembly)<p>" + pageimage + "</b>";
    winContent += "</div>";
    winContent += "<form><DIV align='center'><input type='button' value='Close this window' onclick='javascript:window.close();'></div></form>";

    winContent += "</body></html>";

    PlayWin.document.write(winContent);
    PlayWin.document.close(); // "Finalizes" new window 
    UniqueID = UniqueID + 1; // newWinOffset = newWinOffset + 20 // subsequent pop-ups will be this many pixels lower 
}