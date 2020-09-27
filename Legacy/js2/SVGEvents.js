
var P_House1; var Q_House1; var V_House1;
var P_House2; var Q_House2; var V_House2;
var P_House3; var Q_House3; var V_House3;
var P_Line_LV_0; var Q_Line_LV_0; var P_Line_LV_1; var Q_Line_LV_1;
var P_Line_LV_2; var Q_Line_LV_2; var P_Line_LV_3; var Q_Line_LV_3;

document.getElementById('House1').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_House1;
   document.getElementById('Q_value').innerHTML=Q_House1;
   document.getElementById('V_value').innerHTML=V_House1;
   document.getElementById("Utilization").innerHTML= "Not available";
   document.getElementById('ElementID').innerHTML="House 1";
    });

document.getElementById('House2').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_House2;
   document.getElementById('Q_value').innerHTML=Q_House2;
   document.getElementById('V_value').innerHTML=V_House2;
   document.getElementById("Utilization").innerHTML="Not available";
   document.getElementById('ElementID').innerHTML="House 2";
    });

document.getElementById('House3').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_House3;
   document.getElementById('Q_value').innerHTML=Q_House3;
   document.getElementById('V_value').innerHTML=V_House3;
   document.getElementById("Utilization").innerHTML="Not available";
   document.getElementById('ElementID').innerHTML="House 3";
    });

document.getElementById("Tr719").addEventListener("click", function () {
    document.getElementById("P_value").innerHTML=window.P_Tr719;
    document.getElementById("Q_value").innerHTML=window.Q_Tr719;
    document.getElementById("V_value").innerHTML=window.V_Tr719;
    document.getElementById("Utilization").innerHTML=window.U_Tr719;
    document.getElementById('ElementID').innerHTML="Transformer 719";
});

document.getElementById("Line_LV_1").addEventListener("click",function(){
    P_Line_LV_1 = window.P_House1-window.P_Tr719; Q_Line_LV_1 = Math.abs(parseInt(window.Q_House1)-parseInt(window.Q_Tr719));
    document.getElementById("LineID").innerHTML="LV Line 1";
    document.getElementById("P_value_line").innerHTML=Math.abs(P_Line_LV_1);
    document.getElementById("Q_value_line").innerHTML=Q_Line_LV_1;
    if (P_Line_LV_1 > 0){
      document.getElementById("PFDirection").innerHTML= "↓";
    }else{
      document.getElementById("PFDirection").innerHTML= "↑";
    }
  });

document.getElementById("Line_LV_2").addEventListener("click",function(){
    P_Line_LV_2 = window.P_House2-window.P_Tr719; Q_Line_LV_2 = Math.abs(parseInt(window.Q_House2)-parseInt(window.Q_Tr719));
    document.getElementById("LineID").innerHTML="LV Line 1";
    document.getElementById("P_value_line").innerHTML=Math.abs(P_Line_LV_2);
    document.getElementById("Q_value_line").innerHTML=Q_Line_LV_2;
    if (P_Line_LV_2 > 0){
      document.getElementById("PFDirection").innerHTML= "↓";
    }else{
      document.getElementById("PFDirection").innerHTML= "↑";
    }
  });

document.getElementById("Line_LV_3").addEventListener("click",function(){
    P_Line_LV_3 = window.P_House2-window.P_Tr719; Q_Line_LV_3 = Math.abs(parseInt(window.Q_House2)-parseInt(window.Q_Tr719));
    document.getElementById("LineID").innerHTML="LV Line 1";
    document.getElementById("P_value_line").innerHTML=Math.abs(P_Line_LV_3);
    document.getElementById("Q_value_line").innerHTML=Q_Line_LV_3;
    if (P_Line_LV_3 > 0){
      document.getElementById("PFDirection").innerHTML= "↓";
    }else{
      document.getElementById("PFDirection").innerHTML= "↑";
    }
  });