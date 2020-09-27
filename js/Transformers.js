/* TRANSFORMERS DATA CONTROL
   This file is used to control the transformers' data show in the databox in the left hand side.
 */
var U_Tr999; var P_Tr999; var Q_Tr999;
var U_Tr651; var P_Tr651; var Q_Tr651;
var U_Tr652; var P_Tr652; var Q_Tr652;
var U_Tr653; var P_Tr653; var Q_Tr653;
var U_Tr654; var P_Tr654; var Q_Tr654;
var U_Tr655; var P_Tr655; var Q_Tr655;
var U_Tr656; var P_Tr656; var Q_Tr656;
var U_Tr657; var P_Tr657; var Q_Tr657;
var U_Tr658; var P_Tr658; var Q_Tr658;
var U_Tr659; var P_Tr659; var Q_Tr659;
var U_Tr660; var P_Tr660; var Q_Tr660;
var U_Tr661; var P_Tr661; var Q_Tr661;
var U_Tr662; var P_Tr662; var Q_Tr662;
var U_Tr663; var P_Tr663; var Q_Tr663;
var U_Tr664; var P_Tr664; var Q_Tr664;
var U_Tr665; var P_Tr665; var Q_Tr665;
var U_Tr666; var P_Tr666; var Q_Tr666;
var U_Tr667; var P_Tr667; var Q_Tr667;
var U_Tr668; var P_Tr668; var Q_Tr668;
var U_Tr669; var P_Tr669; var Q_Tr669;
var U_Tr670; var P_Tr670; var Q_Tr670;
var U_Tr671; var P_Tr671; var Q_Tr671;
var U_Tr672; var P_Tr672; var Q_Tr672;
var U_Tr673; var P_Tr673; var Q_Tr673;
var U_Tr674; var P_Tr674; var Q_Tr674;
var U_Tr675; var P_Tr675; var Q_Tr675;
var U_Tr676; var P_Tr676; var Q_Tr676;
var U_Tr677; var P_Tr677; var Q_Tr677;
var U_Tr678; var P_Tr678; var Q_Tr678;
var U_Tr679; var P_Tr679; var Q_Tr679;
var U_Tr680; var P_Tr680; var Q_Tr680;
var U_Tr681; var P_Tr681; var Q_Tr681;
var U_Tr682; var P_Tr682; var Q_Tr682;
var U_Tr683; var P_Tr683; var Q_Tr683;
var U_Tr684; var P_Tr684; var Q_Tr684;
var U_Tr685; var P_Tr685; var Q_Tr685;
var U_Tr686; var P_Tr686; var Q_Tr686;
var U_Tr687; var P_Tr687; var Q_Tr687;
var U_Tr688; var P_Tr688; var Q_Tr688;
var U_Tr689; var P_Tr689; var Q_Tr689;
var U_Tr690; var P_Tr690; var Q_Tr690;
var U_Tr691; var P_Tr691; var Q_Tr691;
var U_Tr692; var P_Tr692; var Q_Tr692;
var U_Tr693; var P_Tr693; var Q_Tr693;
var U_Tr694; var P_Tr694; var Q_Tr694;
var U_Tr695; var P_Tr695; var Q_Tr695;
var U_Tr696; var P_Tr696; var Q_Tr696;
var U_Tr697; var P_Tr697; var Q_Tr697;
var U_Tr698; var P_Tr698; var Q_Tr698;
var U_Tr699; var P_Tr699; var Q_Tr699;
var U_Tr700; var P_Tr700; var Q_Tr700;
var U_Tr701; var P_Tr701; var Q_Tr701;
var U_Tr702; var P_Tr702; var Q_Tr702;
var U_Tr703; var P_Tr703; var Q_Tr703;
var U_Tr704; var P_Tr704; var Q_Tr704;
var U_Tr705; var P_Tr705; var Q_Tr705;
var U_Tr706; var P_Tr706; var Q_Tr706;
var U_Tr707; var P_Tr707; var Q_Tr707;
var U_Tr708; var P_Tr708; var Q_Tr708;
var U_Tr709; var P_Tr709; var Q_Tr709;
var U_Tr710; var P_Tr710; var Q_Tr710;
var U_Tr711; var P_Tr711; var Q_Tr711;
var U_Tr712; var P_Tr712; var Q_Tr712;
var U_Tr713; var P_Tr713; var Q_Tr713;
var U_Tr714; var P_Tr714; var Q_Tr714;
var U_Tr715; var P_Tr715; var Q_Tr715;
var U_Tr716; var P_Tr716; var Q_Tr716;
var U_Tr717; var P_Tr717; var Q_Tr717;
var U_Tr718; var P_Tr718; var Q_Tr718;
var U_Tr719; var P_Tr719; var Q_Tr719;
var U_Tr720; var P_Tr720; var Q_Tr720;
var U_Tr721; var P_Tr721; var Q_Tr721;
var U_Tr722; var P_Tr722; var Q_Tr722;
var U_Tr723; var P_Tr723; var Q_Tr723;
var U_Tr724; var P_Tr724; var Q_Tr724;
var U_Tr725; var P_Tr725; var Q_Tr725;
var U_Tr726; var P_Tr726; var Q_Tr726;
var U_Tr727; var P_Tr727; var Q_Tr727;
var U_Tr728; var P_Tr728; var Q_Tr728;
var U_Tr729; var P_Tr729; var Q_Tr729;

document.getElementById('Tr999').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr999)*100).toFixed(2)+' %';
   document.getElementById('P_value').innerHTML=P_Tr999.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr999.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 999';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';

    });
document.getElementById('Tr651').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr651)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr651.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr651.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 651';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr652').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr652)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr652.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr652.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 652';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr653').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr653)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr653.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr653.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 653';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr654').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr654)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr654.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr654.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 654';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr655').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr655)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr655.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr655.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 655';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr656').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr656)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr656.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr656.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 656';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr657').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr657)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr657.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr657.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 657';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr658').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr658)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr658.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr658.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 658';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr659').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr659)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr659.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr659.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 659';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr660').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr660)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr660.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr660.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 660';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr661').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr661)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr661.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr661.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 661';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr662').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr662)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr662.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr662.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 662';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr663').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr663)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr663.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr663.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 663';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr664').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr664)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr664.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr664.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 664';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr665').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr665)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr665.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr665.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 665';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr666').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr666)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr666.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr666.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 666';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr667').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr667)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr667.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr667.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 667';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr668').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr668)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr668.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr668.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 668';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr669').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr669)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr669.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr669.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 669';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr670').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr670)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr670.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr670.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 670';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr671').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr671)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr671.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr671.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 671';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr672').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr672)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr672.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr672.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 672';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr673').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr673)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr673.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr673.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 673';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr674').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr674)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr674.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr674.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 674';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr675').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr675)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr675.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr675.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 675';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr676').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr676)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr676.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr676.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 676';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr677').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr677)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr677.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr677.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 677';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr678').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr678)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr678.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr678.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 678';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr679').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr679)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr679.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr679.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 679';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr680').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr680)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr680.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr680.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 680';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr681').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr681)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr681.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr681.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 681';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr682').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr682)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr682.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr682.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 682';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr683').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr683)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr683.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr683.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 683';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr684').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr684)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr684.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr684.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 684';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr685').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr685)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr685.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr685.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 685';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr686').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr686)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr686.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr686.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 686';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr687').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr687)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr687.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr687.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 687';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr688').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr688)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr688.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr688.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 688';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr689').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr689)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr689.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr689.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 689';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr690').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr690)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr690.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr690.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 690';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr691').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr691)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr691.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr691.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 691';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr692').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr692)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr692.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr692.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 692';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr693').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr693)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr693.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr693.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 693';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr694').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr694)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr694.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr694.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 694';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr695').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr695)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr695.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr695.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 695';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr696').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr696)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr696.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr696.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 696';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr697').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr697)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr697.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr697.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 697';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr698').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr698)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr698.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr698.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 698';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr699').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr699)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr699.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr699.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 699';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr700').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr700)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr700.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr700.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 700';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr701').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr701)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr701.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr701.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 701';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr702').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr702)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr702.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr702.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 702';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr703').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr703)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr703.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr703.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 703';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr704').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr704)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr704.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr704.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 704';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr705').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr705)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr705.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr705.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 705';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr706').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr706)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr706.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr706.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 706';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr707').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr707)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr707.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr707.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 707';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr708').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr708)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr708.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr708.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 708';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr709').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr709)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr709.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr709.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 709';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr710').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr710)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr710.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr710.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 710';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr711').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr711)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr711.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr711.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 711';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr712').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr712)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr712.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr712.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 712';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr713').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr713)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr713.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr713.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 713';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr714').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr714)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr714.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr714.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 714';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr715').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr715)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr715.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr715.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 715';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr716').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr716)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr716.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr716.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 716';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr717').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr717)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr717.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr717.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 717';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr718').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr718)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr718.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr718.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 718';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr719').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr719)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr719.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr719.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 719';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr720').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr720)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr720.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr720.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 720';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr721').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr721)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr721.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr721.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 721';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr722').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr722)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr722.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr722.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 722';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr723').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr723)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr723.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr723.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 723';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr724').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr724)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr724.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr724.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 724';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr725').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr725)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr725.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr725.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 725';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr726').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr726)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr726.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr726.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 726';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr727').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr727)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr727.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr727.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 727';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr728').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr728)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr728.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr728.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 728';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });
document.getElementById('Tr729').addEventListener('click', function(){
   document.getElementById('V_value').innerHTML=(parseFloat(U_Tr729)*100).toFixed(2) + ' %';
   document.getElementById('P_value').innerHTML=P_Tr729.toFixed(2) + ' kW';
   document.getElementById('Q_value').innerHTML=Q_Tr729.toFixed(2) + ' kVar';
   document.getElementById('ElementID').innerHTML='Transformer 729';
   document.getElementById('SwitchableU_V').innerHTML = 'Utilization';
    });