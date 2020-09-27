/* BUSES DATA CONTROL
   This file is used to control the buses' data show in the databox in the left hand side.
 */
var P_Bus5; var Q_Bus5; var V_Bus5;
var P_Bus14; var Q_Bus14; var V_Bus14;
var P_Bus15; var Q_Bus15; var V_Bus15;
var P_Bus21; var Q_Bus21; var V_Bus21;
var P_Bus26; var Q_Bus26; var V_Bus26;
var P_Bus28; var Q_Bus28; var V_Bus28;
var P_Bus30; var Q_Bus30; var V_Bus30;
var P_Bus37; var Q_Bus37; var V_Bus37;
var P_Bus45; var Q_Bus45; var V_Bus45;
var P_Bus58; var Q_Bus58; var V_Bus58;
var P_Bus75; var Q_Bus75; var V_Bus75;
var P_Bus81; var Q_Bus81; var V_Bus81;
var P_Bus93; var Q_Bus93; var V_Bus93;
var P_Bus100; var Q_Bus100; var V_Bus100;
var P_Bus104; var Q_Bus104; var V_Bus104;
var P_Bus115; var Q_Bus115; var V_Bus115;
var P_Bus117; var Q_Bus117; var V_Bus117;
var P_Bus126; var Q_Bus126; var V_Bus126;
var P_Bus132; var Q_Bus132; var V_Bus132;
var P_Bus134; var Q_Bus134; var V_Bus134;
var P_Bus139; var Q_Bus139; var V_Bus139;
var P_Bus153; var Q_Bus153; var V_Bus153;
var P_Bus160; var Q_Bus160; var V_Bus160;
var P_Bus170; var Q_Bus170; var V_Bus170;
var P_Bus180; var Q_Bus180; var V_Bus180;
var P_Bus182; var Q_Bus182; var V_Bus182;
var P_Bus212; var Q_Bus212; var V_Bus212;
var P_Bus227; var Q_Bus227; var V_Bus227;
var P_Bus228; var Q_Bus228; var V_Bus228;
var P_Bus229; var Q_Bus229; var V_Bus229;
var P_Bus235; var Q_Bus235; var V_Bus235;
var P_Bus237; var Q_Bus237; var V_Bus237;
var P_Bus238; var Q_Bus238; var V_Bus238;
var P_Bus247; var Q_Bus247; var V_Bus247;
var P_Bus248; var Q_Bus248; var V_Bus248;
var P_Bus261; var Q_Bus261; var V_Bus261;
var P_Bus265; var Q_Bus265; var V_Bus265;
var P_Bus282; var Q_Bus282; var V_Bus282;
var P_Bus290; var Q_Bus290; var V_Bus290;
var P_Bus291; var Q_Bus291; var V_Bus291;
var P_Bus293; var Q_Bus293; var V_Bus293;
var P_Bus320; var Q_Bus320; var V_Bus320;
var P_Bus323; var Q_Bus323; var V_Bus323;
var P_Bus327; var Q_Bus327; var V_Bus327;
var P_Bus334; var Q_Bus334; var V_Bus334;
var P_Bus340; var Q_Bus340; var V_Bus340;
var P_Bus345; var Q_Bus345; var V_Bus345;
var P_Bus352; var Q_Bus352; var V_Bus352;
var P_Bus359; var Q_Bus359; var V_Bus359;
var P_Bus361; var Q_Bus361; var V_Bus361;
var P_Bus372; var Q_Bus372; var V_Bus372;
var P_Bus400; var Q_Bus400; var V_Bus400;
var P_Bus405; var Q_Bus405; var V_Bus405;
var P_Bus427; var Q_Bus427; var V_Bus427;
var P_Bus433; var Q_Bus433; var V_Bus433;
var P_Bus436; var Q_Bus436; var V_Bus436;
var P_Bus439; var Q_Bus439; var V_Bus439;
var P_Bus441; var Q_Bus441; var V_Bus441;
var P_Bus444; var Q_Bus444; var V_Bus444;
var P_Bus471; var Q_Bus471; var V_Bus471;
var P_Bus479; var Q_Bus479; var V_Bus479;
var P_Bus484; var Q_Bus484; var V_Bus484;
var P_Bus492; var Q_Bus492; var V_Bus492;
var P_Bus499; var Q_Bus499; var V_Bus499;
var P_Bus501; var Q_Bus501; var V_Bus501;
var P_Bus505; var Q_Bus505; var V_Bus505;
var P_Bus506; var Q_Bus506; var V_Bus506;
var P_Bus510; var Q_Bus510; var V_Bus510;
var P_Bus511; var Q_Bus511; var V_Bus511;
var P_Bus517; var Q_Bus517; var V_Bus517;
var P_Bus518; var Q_Bus518; var V_Bus518;
var P_Bus529; var Q_Bus529; var V_Bus529;
var P_Bus530; var Q_Bus530; var V_Bus530;
var P_Bus531; var Q_Bus531; var V_Bus531;
var P_Bus538; var Q_Bus538; var V_Bus538;
var P_Bus540; var Q_Bus540; var V_Bus540;
var P_Bus552; var Q_Bus552; var V_Bus552;
var P_Bus554; var Q_Bus554; var V_Bus554;
var P_Bus568; var Q_Bus568; var V_Bus568;
var P_Bus574; var Q_Bus574; var V_Bus574;
var P_Bus579; var Q_Bus579; var V_Bus579;
var P_Bus587; var Q_Bus587; var V_Bus587;
var P_Bus588; var Q_Bus588; var V_Bus588;
var P_Bus600; var Q_Bus600; var V_Bus600;
var P_Bus607; var Q_Bus607; var V_Bus607;
var P_Bus616; var Q_Bus616; var V_Bus616;
var P_Bus624; var Q_Bus624; var V_Bus624;
var P_Bus643; var Q_Bus643; var V_Bus643;

document.getElementById('Bus5').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus5.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus5.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus5.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 5';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus14').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus14.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus14.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus14.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 14';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus15').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus15.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus15.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus15.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 15';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus21').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus21.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus21.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus21.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 21';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus26').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus26.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus26.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus26.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 26';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus28').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus28.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus28.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus28.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 28';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus30').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus30.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus30.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus30.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 30';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus37').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus37.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus37.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus37.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 37';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus45').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus45.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus45.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus45.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 45';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus58').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus58.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus58.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus58.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 58';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus75').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus75.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus75.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus75.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 75';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus81').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus81.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus81.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus81.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 81';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus93').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus93.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus93.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus93.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 93';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus100').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus100.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus100.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus100.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 100';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus104').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus104.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus104.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus104.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 104';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus115').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus115.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus115.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus115.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 115';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus117').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus117.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus117.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus117.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 117';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus126').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus126.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus126.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus126.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 126';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus132').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus132.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus132.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus132.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 132';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus134').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus134.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus134.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus134.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 134';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus139').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus139.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus139.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus139.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 139';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus153').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus153.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus153.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus153.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 153';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus160').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus160.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus160.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus160.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 160';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus170').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus170.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus170.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus170.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 170';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus180').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus180.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus180.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus180.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 180';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus182').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus182.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus182.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus182.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 182';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus212').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus212.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus212.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus212.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 212';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus227').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus227.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus227.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus227.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 227';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus228').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus228.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus228.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus228.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 228';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus229').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus229.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus229.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus229.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 229';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus235').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus235.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus235.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus235.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 235';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus237').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus237.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus237.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus237.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 237';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus238').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus238.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus238.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus238.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 238';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus247').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus247.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus247.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus247.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 247';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus248').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus248.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus248.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus248.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 248';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus261').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus261.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus261.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus261.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 261';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus265').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus265.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus265.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus265.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 265';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus282').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus282.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus282.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus282.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 282';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus290').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus290.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus290.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus290.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 290';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus291').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus291.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus291.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus291.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 291';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus293').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus293.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus293.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus293.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 293';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus320').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus320.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus320.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus320.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 320';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus323').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus323.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus323.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus323.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 323';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus327').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus327.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus327.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus327.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 327';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus334').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus334.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus334.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus334.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 334';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus340').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus340.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus340.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus340.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 340';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus345').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus345.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus345.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus345.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 345';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus352').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus352.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus352.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus352.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 352';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus359').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus359.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus359.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus359.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 359';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus361').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus361.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus361.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus361.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 361';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus372').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus372.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus372.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus372.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 372';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus400').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus400.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus400.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus400.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 400';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus405').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus405.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus405.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus405.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 405';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus427').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus427.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus427.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus427.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 427';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus433').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus433.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus433.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus433.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 433';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus436').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus436.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus436.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus436.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 436';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus439').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus439.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus439.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus439.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 439';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus441').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus441.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus441.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus441.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 441';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus444').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus444.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus444.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus444.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 444';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus471').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus471.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus471.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus471.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 471';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus479').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus479.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus479.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus479.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 479';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus484').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus484.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus484.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus484.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 484';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus492').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus492.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus492.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus492.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 492';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus499').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus499.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus499.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus499.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 499';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus501').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus501.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus501.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus501.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 501';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus505').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus505.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus505.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus505.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 505';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus506').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus506.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus506.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus506.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 506';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus510').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus510.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus510.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus510.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 510';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus511').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus511.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus511.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus511.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 511';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus517').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus517.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus517.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus517.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 517';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus518').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus518.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus518.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus518.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 518';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus529').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus529.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus529.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus529.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 529';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus530').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus530.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus530.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus530.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 530';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus531').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus531.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus531.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus531.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 531';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus538').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus538.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus538.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus538.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 538';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus540').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus540.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus540.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus540.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 540';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus552').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus552.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus552.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus552.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 552';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus554').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus554.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus554.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus554.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 554';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus568').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus568.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus568.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus568.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 568';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus574').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus574.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus574.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus574.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 574';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus579').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus579.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus579.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus579.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 579';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus587').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus587.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus587.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus587.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 587';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus588').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus588.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus588.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus588.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 588';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus600').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus600.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus600.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus600.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 600';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus607').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus607.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus607.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus607.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 607';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus616').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus616.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus616.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus616.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 616';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus624').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus624.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus624.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus624.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 624';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });
document.getElementById('Bus643').addEventListener('click', function(){
   document.getElementById('P_value').innerHTML=P_Bus643.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Bus643.toFixed(2) + ' kVar';
   document.getElementById('V_value').innerHTML=V_Bus643.toFixed(2) + ' p.u.';
   document.getElementById('ElementID').innerHTML='Bus 643';
   document.getElementById('SwitchableU_V').innerHTML = 'Voltage';
   });