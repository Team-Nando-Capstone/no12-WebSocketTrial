var P_data_House1 =[200,300,400]; var Q_data_House1 = [400,200,300]; var V_data_House1 = [300,400,200];
var P_data_House2 =[300,400,200]; var Q_data_House2 = [200,300,400]; var V_data_House2 = [400,200,300];
var P_data_House3 =[400,200,300]; var Q_data_House3 = [300,400,200]; var V_data_House3 = [200,300,400];
var count = 0;

setInterval(function(){
    if (count < P_data_House1.length){
         window.P_House1 = P_data_House1[count]; window.Q_House1 = Q_data_House1[count]; window.V_House1 = V_data_House1[count];
         window.P_House2 = P_data_House2[count]; window.Q_House2 = Q_data_House2[count]; window.V_House2 = V_data_House2[count];
         window.P_House3 = P_data_House3[count]; window.Q_House3 = Q_data_House3[count]; window.V_House3 = V_data_House3[count];
         count += 1;
    }else{
         window.P_House1 = P_data_House1[0]; window.Q_House1 = Q_data_House1[0]; window.V_House1 = V_data_House1[0];
         window.P_House2 = P_data_House2[0]; window.Q_House2 = Q_data_House2[0]; window.V_House2 = V_data_House2[0];
         window.P_House3 = P_data_House3[0]; window.Q_House3 = Q_data_House3[0]; window.V_House3 = V_data_House3[0];
         count = 0;
    }
    LV_SVGColorChange()},3000);