setInterval("LV_AnimateControl()",10);// every 10 ms check once


function LV_AnimateControl() {
    if (document.getElementById("House1").getAttribute("fill") === "#cc003a" ){
        document.getElementById("line0R-L").style.visibility = "hidden"; document.getElementById("line0L-R").style.visibility = "hidden";
        document.getElementById("line1R-L").style.visibility = "hidden"; document.getElementById("line1L-R").style.visibility = "hidden";
        document.getElementById("line2R-L").style.visibility = "hidden"; document.getElementById("line2L-R").style.visibility = "hidden";
        document.getElementById("line3R-L").style.visibility = "hidden"; document.getElementById("line3L-R").style.visibility = "hidden";
        return;}

    if (window.P_House1 > window.P_Tr719){
       document.getElementById("line1L-R").style.visibility = "hidden";
       document.getElementById("line1R-L").style.visibility = "visible";
    } else{
       document.getElementById("line1R-L").style.visibility = "hidden";
       document.getElementById("line1L-R").style.visibility = "visible";
    }

    if (window.P_House2 > window.P_Tr719){
       document.getElementById("line2L-R").style.visibility = "hidden";
       document.getElementById("line2R-L").style.visibility = "visible";
    } else{
       document.getElementById("line2R-L").style.visibility = "hidden";
       document.getElementById("line2L-R").style.visibility = "visible";
    }

    if (window.P_House3 > window.P_Tr719){
       document.getElementById("line3L-R").style.visibility = "hidden";
       document.getElementById("line3R-L").style.visibility = "visible";
    } else{
       document.getElementById("line3R-L").style.visibility = "hidden";
       document.getElementById("line3L-R").style.visibility = "visible";
    }

    if(window.P_House1+window.P_House2+window.P_House3 > window.P_Tr719){
       document.getElementById("line0L-R").style.visibility = "hidden";
       document.getElementById("line0R-L").style.visibility = "visible";
    } else{
       document.getElementById("line0R-L").style.visibility = "hidden";
       document.getElementById("line0L-R").style.visibility = "visible";
    }
}
