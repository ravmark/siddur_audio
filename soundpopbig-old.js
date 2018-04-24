var UniqueID = 314 // Make each link open in a new window 
var newWinOffset = 0 // Position of first pop-up

function PlayerOpenLarge(soundfiledesc,soundfilepath,pageimage) { 
PlayWin = window.open('',UniqueID,'width=675,height=595,top=' + newWinOffset +',left=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,menubar=0,status=0,directories=0,personalbar=0');
PlayWin.focus(); 

var winContent = "<html><head><title>" + 'Play Sound Clip' + "</title></head><body onBlur=self.focus() bgcolor='#9999ff'>";

winContent += "<div align='center'>";
winContent += "<b style='font-size:18px;font-family:Verdana,sans-serif;line-height:1.5'>" + soundfiledesc + "<p></b>";
winContent += "</div>";

winContent += "<div align='center'>";
// detect browser for choice of flash or HTML5
if(((navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPhone/i)))) { 
winContent += "<audio controls='controls'>";
winContent += "<source src='" + soundfilepath + "' type='audio/mpeg' />";
winContent += "</audio>";
} else {
winContent += "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='335' height='65' title='"+ soundfiledesc +"'>"; 
winContent += "<param name='movie' value='Audio/Movie.swf?test=" + soundfilepath + "'>";
winContent += "<param name='quality' value='high'>"; 
winContent += "<param name='wmode' value='transparent'>";
winContent += "<embed src='Audio/Movie.swf?test=" + soundfilepath + "' width='335' height='66' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed>";
winContent += "</object>";  
}

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
UniqueID = UniqueID + 1 // newWinOffset = newWinOffset + 20 // subsequent pop-ups will be this many pixels lower 
}