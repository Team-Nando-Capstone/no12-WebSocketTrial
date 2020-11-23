document.getElementById('LineVisibility').addEventListener("click", function(){
    document.getElementById('1phline').style.visibility="visible";
    document.getElementById('FeederLine').style.visibility='visible';
    document.getElementById('LineVisibility_On').style.visibility='visible';
});
document.getElementById('LineVisibility_On').addEventListener("click", function(){
    document.getElementById('1phline').style.visibility="hidden";
    document.getElementById('FeederLine').style.visibility='hidden';
    document.getElementById('LineVisibility_On').style.visibility='hidden';
});
document.getElementById('LoadVisibility').addEventListener("click", function(){
    document.getElementById('Load').style.visibility="visible";
    document.getElementById('LoadVisibility_On').style.visibility='visible';
});
document.getElementById('LoadVisibility_On').addEventListener("click", function(){
    document.getElementById('Load').style.visibility="hidden";
    document.getElementById('LoadVisibility_On').style.visibility='hidden';
});
// document.getElementById('NodeVisibility').addEventListener("click", function(){
//     document.getElementById('Nodes').style.visibility="visible";
//     document.getElementById('NodeVisibility_On').style.visibility='visible';
// });
// document.getElementById('NodeVisibility_On').addEventListener("click", function(){
//     document.getElementById('Nodes').style.visibility="hidden";
//     document.getElementById('NodeVisibility_On').style.visibility='hidden';
// });
document.getElementById('PVVisibility').addEventListener("click", function(){
    document.getElementById('PVpanel').style.visibility="visible";
    document.getElementById('PVVisibility_On').style.visibility='visible';
});
document.getElementById('PVVisibility_On').addEventListener("click", function(){
    document.getElementById('PVpanel').style.visibility="hidden";
    document.getElementById('PVVisibility_On').style.visibility='hidden';
});

// document.getElementById('NodeLegend').addEventListener("click", function (){
//     document.getElementById('NodeLegend_On').style.visibility="visible";
//     document.getElementById('NodeLegends').style.visibility="visible";
//     document.getElementById('LoadLegend_On').style.visibility="hidden";
//     document.getElementById('LoadLegends').style.visibility="hidden";
//     document.getElementById('LineLegend_On').style.visibility="hidden";
//     document.getElementById('LineLegends').style.visibility="hidden";
// });
// document.getElementById('NodeLegend_On').addEventListener("click", function (){
//     document.getElementById('NodeLegend_On').style.visibility="hidden";
//     document.getElementById('NodeLegends').style.visibility="hidden";
// });

document.getElementById('LoadLegend').addEventListener("click", function (){
    document.getElementById('LoadLegend_On').style.visibility="visible";
    document.getElementById('LoadLegends').style.visibility="visible";
    // document.getElementById('NodeLegend_On').style.visibility="hidden";
    // document.getElementById('NodeLegends').style.visibility="hidden";
    document.getElementById('LineLegend_On').style.visibility="hidden";
    document.getElementById('LineLegends').style.visibility="hidden";
});
document.getElementById('LoadLegend_On').addEventListener("click", function (){
    document.getElementById('LoadLegend_On').style.visibility="hidden";
    document.getElementById('LoadLegends').style.visibility="hidden";
});

document.getElementById('LineLegend').addEventListener("click", function (){
    document.getElementById('LineLegend_On').style.visibility="visible";
    document.getElementById('LineLegends').style.visibility="visible";
    // document.getElementById('NodeLegend_On').style.visibility="hidden";
    // document.getElementById('NodeLegends').style.visibility="hidden";
    document.getElementById('LoadLegend_On').style.visibility="hidden";
    document.getElementById('LoadLegends').style.visibility="hidden";
});
document.getElementById('LineLegend_On').addEventListener("click", function (){
    document.getElementById('LineLegend_On').style.visibility="hidden";
    document.getElementById('LineLegends').style.visibility="hidden";
});
document.getElementById('AniVisibility').addEventListener('click',function(){
    document.getElementById('AniVisibility_On').style.visibility="visible";
});
document.getElementById('AniVisibility_On').addEventListener('click',function(){
    document.getElementById('AniVisibility_On').style.visibility="hidden";
});