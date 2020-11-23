document.getElementById("LineVisibility_On").addEventListener("click", function(){
    document.getElementById("Lines").style.visibility = "hidden";
    document.getElementById("LineVisibility_On").style.visibility="hidden";
});

document.getElementById("LineVisibility").addEventListener("click",function(){
    document.getElementById("Lines").style.visibility = "visible";
    document.getElementById("LineVisibility_On").style.visibility = "visible";
});

document.getElementById("BusVisibility_On").addEventListener("click", function(){
    document.getElementById("Buses").style.visibility = "hidden";
    document.getElementById("BusMask").style.visibility = "visible";
    document.getElementById("BusVisibility_On").style.visibility="hidden";
});

document.getElementById("BusVisibility").addEventListener("click",function(){
    document.getElementById("Buses").style.visibility = "visible";
    document.getElementById("BusMask").style.visibility = "hidden"
    document.getElementById("BusVisibility_On").style.visibility = "visible";
});

document.getElementById("TrVisibility_On").addEventListener("click", function(){
    document.getElementById("Transformers").style.visibility = "hidden";
    document.getElementById("TrVisibility_On").style.visibility="hidden";
});

document.getElementById("TrVisibility").addEventListener("click",function(){
    document.getElementById("Transformers").style.visibility = "visible";
    document.getElementById("TrVisibility_On").style.visibility = "visible";
});


document.getElementById("TrLegend").addEventListener("click", function(){
    document.getElementById("TrLegends").style.visibility = "visible";
    document.getElementById("TrLegend_On").style.visibility="visible";
    document.getElementById("LineLegend_On").style.visibility="hidden";
    document.getElementById("BusLegend_On").style.visibility="hidden";
    document.getElementById("BusLegends").style.visibility = "hidden";
    document.getElementById("LineLegends").style.visibility = "hidden";
});

document.getElementById("TrLegend_On").addEventListener("click",function(){
    document.getElementById("TrLegend_On").style.visibility="hidden";
    document.getElementById("TrLegends").style.visibility = "hidden";
    document.getElementById("BusLegends").style.visibility = "hidden";
    document.getElementById("LineLegends").style.visibility = "hidden";
});

document.getElementById("BusLegend").addEventListener("click", function(){
    document.getElementById("BusLegends").style.visibility = "visible";
    document.getElementById("BusLegend_On").style.visibility="visible";
    document.getElementById("LineLegend_On").style.visibility="hidden";
    document.getElementById("TrLegend_On").style.visibility="hidden";
    document.getElementById("TrLegends").style.visibility = "hidden";
    document.getElementById("LineLegends").style.visibility = "hidden";
});

document.getElementById("BusLegend_On").addEventListener("click",function(){
    document.getElementById("BusLegend_On").style.visibility="hidden";
    document.getElementById("BusLegends").style.visibility = "hidden";
    document.getElementById("TrLegends").style.visibility = "hidden";
    document.getElementById("LineLegends").style.visibility = "hidden";
});

document.getElementById("LineLegend").addEventListener("click", function(){
    document.getElementById("LineLegends").style.visibility = "visible";
    document.getElementById("LineLegend_On").style.visibility="visible";
    document.getElementById("TrLegend_On").style.visibility="hidden";
    document.getElementById("BusLegend_On").style.visibility="hidden";
    document.getElementById("TrLegends").style.visibility = "hidden";
    document.getElementById("BusLegends").style.visibility = "hidden";
});

document.getElementById("LineLegend_On").addEventListener("click",function(){
    document.getElementById("LineLegend_On").style.visibility="hidden";
    document.getElementById("LineLegends").style.visibility = "hidden";
    document.getElementById("TrLegends").style.visibility = "hidden";
    document.getElementById("BusLegends").style.visibility = "hidden";
});

document.getElementById("AniVisibility_On").addEventListener("click",function(){
    document.getElementById("AniVisibility_On").style.visibility="hidden";
});
document.getElementById("AniVisibility").addEventListener("click",function(){
    document.getElementById("AniVisibility_On").style.visibility="visible";
});

document.getElementById("LoadVisibility_On").addEventListener("click",function(){
    document.getElementById("LoadVisibility_On").style.visibility="hidden";
    document.getElementById("Loads").style.visibility="hidden";
});
document.getElementById("LoadVisibility").addEventListener("click",function(){
    document.getElementById("LoadVisibility_On").style.visibility="visible";
    document.getElementById("Loads").style.visibility="visible";
});