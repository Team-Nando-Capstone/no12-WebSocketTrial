/* ANIMATION CONTROL
*    this part is using to control the animation motion direction
*    and currently, the decision is made be the difference between
*    the value of P on two side of the line!
*    The control may be changed in the future update version!*/

setInterval("AnimateControl()",10);// every 10 ms check once

function AnimateControl() {
    if (typeof(window.P_f0_l0)=="undefined"){
        document.getElementById('L_Rf0_l0').style.visibility = "hidden";
        document.getElementById('R_Lf0_l0').style.visibility = "hidden";
        document.getElementById('L_Rf0_l1').style.visibility = "hidden";
        document.getElementById('R_Lf0_l1').style.visibility = "hidden";
        document.getElementById('L_Rf0_l2').style.visibility = "hidden";
        document.getElementById('R_Lf0_l2').style.visibility = "hidden";
        document.getElementById('L_Rf0_l3').style.visibility = "hidden";
        document.getElementById('R_Lf0_l3').style.visibility = "hidden";
        document.getElementById('L_Rf0_l4').style.visibility = "hidden";
        document.getElementById('R_Lf0_l4').style.visibility = "hidden";
        document.getElementById('L_Rf0_l5').style.visibility = "hidden";
        document.getElementById('R_Lf0_l5').style.visibility = "hidden";
        document.getElementById('L_Rf0_l6').style.visibility = "hidden";
        document.getElementById('R_Lf0_l6').style.visibility = "hidden";
        document.getElementById('L_Rf0_l7').style.visibility = "hidden";
        document.getElementById('R_Lf0_l7').style.visibility = "hidden";
        document.getElementById('L_Rf0_l8').style.visibility = "hidden";
        document.getElementById('R_Lf0_l8').style.visibility = "hidden";
        document.getElementById('L_Rf0_l9').style.visibility = "hidden";
        document.getElementById('R_Lf0_l9').style.visibility = "hidden";
        document.getElementById('L_Rf0_l10').style.visibility = "hidden";
        document.getElementById('R_Lf0_l10').style.visibility = "hidden";
        document.getElementById('L_Rf0_l11').style.visibility = "hidden";
        document.getElementById('R_Lf0_l11').style.visibility = "hidden";
        document.getElementById('L_Rf0_l12').style.visibility = "hidden";
        document.getElementById('R_Lf0_l12').style.visibility = "hidden";
        document.getElementById('L_Rf0_l13').style.visibility = "hidden";
        document.getElementById('R_Lf0_l13').style.visibility = "hidden";
        document.getElementById('L_Rf0_l14').style.visibility = "hidden";
        document.getElementById('R_Lf0_l14').style.visibility = "hidden";
        document.getElementById('L_Rf0_l15').style.visibility = "hidden";
        document.getElementById('R_Lf0_l15').style.visibility = "hidden";
        document.getElementById('L_Rf0_l16').style.visibility = "hidden";
        document.getElementById('R_Lf0_l16').style.visibility = "hidden";
        document.getElementById('L_Rf0_l17').style.visibility = "hidden";
        document.getElementById('R_Lf0_l17').style.visibility = "hidden";
        document.getElementById('L_Rf0_l18').style.visibility = "hidden";
        document.getElementById('R_Lf0_l18').style.visibility = "hidden";
        document.getElementById('L_Rf0_l19').style.visibility = "hidden";
        document.getElementById('R_Lf0_l19').style.visibility = "hidden";
        document.getElementById('L_Rf0_l20').style.visibility = "hidden";
        document.getElementById('R_Lf0_l20').style.visibility = "hidden";
        document.getElementById('L_Rf0_l21').style.visibility = "hidden";
        document.getElementById('R_Lf0_l21').style.visibility = "hidden";
        document.getElementById('L_Rf0_l22').style.visibility = "hidden";
        document.getElementById('R_Lf0_l22').style.visibility = "hidden";
        document.getElementById('L_Rf0_l23').style.visibility = "hidden";
        document.getElementById('R_Lf0_l23').style.visibility = "hidden";
        document.getElementById('L_Rf0_l24').style.visibility = "hidden";
        document.getElementById('R_Lf0_l24').style.visibility = "hidden";
        document.getElementById('L_Rf0_l25').style.visibility = "hidden";
        document.getElementById('R_Lf0_l25').style.visibility = "hidden";
        document.getElementById('L_Rf0_l26').style.visibility = "hidden";
        document.getElementById('R_Lf0_l26').style.visibility = "hidden";
        document.getElementById('L_Rf0_l27').style.visibility = "hidden";
        document.getElementById('R_Lf0_l27').style.visibility = "hidden";
        document.getElementById('L_Rf0_l28').style.visibility = "hidden";
        document.getElementById('R_Lf0_l28').style.visibility = "hidden";
        document.getElementById('L_Rf0_l29').style.visibility = "hidden";
        document.getElementById('R_Lf0_l29').style.visibility = "hidden";
        document.getElementById('L_Rf0_l30').style.visibility = "hidden";
        document.getElementById('R_Lf0_l30').style.visibility = "hidden";
        document.getElementById('L_Rf0_l31').style.visibility = "hidden";
        document.getElementById('R_Lf0_l31').style.visibility = "hidden";
        document.getElementById('L_Rf0_l32').style.visibility = "hidden";
        document.getElementById('R_Lf0_l32').style.visibility = "hidden";
        document.getElementById('L_Rf0_l33').style.visibility = "hidden";
        document.getElementById('R_Lf0_l33').style.visibility = "hidden";
        document.getElementById('L_Rf0_l34').style.visibility = "hidden";
        document.getElementById('R_Lf0_l34').style.visibility = "hidden";
        document.getElementById('L_Rf0_l35').style.visibility = "hidden";
        document.getElementById('R_Lf0_l35').style.visibility = "hidden";
        document.getElementById('L_Rf0_l36').style.visibility = "hidden";
        document.getElementById('R_Lf0_l36').style.visibility = "hidden";
        document.getElementById('L_Rf0_l37').style.visibility = "hidden";
        document.getElementById('R_Lf0_l37').style.visibility = "hidden";
        document.getElementById('L_Rf0_l38').style.visibility = "hidden";
        document.getElementById('R_Lf0_l38').style.visibility = "hidden";
        document.getElementById('L_Rf0_l39').style.visibility = "hidden";
        document.getElementById('R_Lf0_l39').style.visibility = "hidden";
        document.getElementById('L_Rf0_l40').style.visibility = "hidden";
        document.getElementById('R_Lf0_l40').style.visibility = "hidden";
        document.getElementById('L_Rf0_l41').style.visibility = "hidden";
        document.getElementById('R_Lf0_l41').style.visibility = "hidden";
        document.getElementById('L_Rf0_l42').style.visibility = "hidden";
        document.getElementById('R_Lf0_l42').style.visibility = "hidden";
        document.getElementById('L_Rf0_l43').style.visibility = "hidden";
        document.getElementById('R_Lf0_l43').style.visibility = "hidden";
        document.getElementById('L_Rf0_l44').style.visibility = "hidden";
        document.getElementById('R_Lf0_l44').style.visibility = "hidden";
        document.getElementById('L_Rf0_l45').style.visibility = "hidden";
        document.getElementById('R_Lf0_l45').style.visibility = "hidden";
        document.getElementById('L_Rf0_l46').style.visibility = "hidden";
        document.getElementById('R_Lf0_l46').style.visibility = "hidden";
        document.getElementById('L_Rf0_l47').style.visibility = "hidden";
        document.getElementById('R_Lf0_l47').style.visibility = "hidden";
        document.getElementById('L_Rf0_l48').style.visibility = "hidden";
        document.getElementById('R_Lf0_l48').style.visibility = "hidden";
        document.getElementById('L_Rf0_l49').style.visibility = "hidden";
        document.getElementById('R_Lf0_l49').style.visibility = "hidden";
        document.getElementById('L_Rf0_l50').style.visibility = "hidden";
        document.getElementById('R_Lf0_l50').style.visibility = "hidden";
        document.getElementById('L_Rf0_l51').style.visibility = "hidden";
        document.getElementById('R_Lf0_l51').style.visibility = "hidden";
        document.getElementById('L_Rf0_l52').style.visibility = "hidden";
        document.getElementById('R_Lf0_l52').style.visibility = "hidden";
        document.getElementById('L_Rf0_l53').style.visibility = "hidden";
        document.getElementById('R_Lf0_l53').style.visibility = "hidden";
        document.getElementById('L_Rf0_l54').style.visibility = "hidden";
        document.getElementById('R_Lf0_l54').style.visibility = "hidden";
        document.getElementById('L_Rf0_l55').style.visibility = "hidden";
        document.getElementById('R_Lf0_l55').style.visibility = "hidden";
        document.getElementById('L_Rf0_l56').style.visibility = "hidden";
        document.getElementById('R_Lf0_l56').style.visibility = "hidden";
        document.getElementById('L_Rf0_l57').style.visibility = "hidden";
        document.getElementById('R_Lf0_l57').style.visibility = "hidden";
        document.getElementById('L_Rf0_l58').style.visibility = "hidden";
        document.getElementById('R_Lf0_l58').style.visibility = "hidden";
        document.getElementById('L_Rf0_l59').style.visibility = "hidden";
        document.getElementById('R_Lf0_l59').style.visibility = "hidden";
        document.getElementById('L_Rf0_l60').style.visibility = "hidden";
        document.getElementById('R_Lf0_l60').style.visibility = "hidden";
        document.getElementById('L_Rf0_l61').style.visibility = "hidden";
        document.getElementById('R_Lf0_l61').style.visibility = "hidden";
        document.getElementById('L_Rf0_l62').style.visibility = "hidden";
        document.getElementById('R_Lf0_l62').style.visibility = "hidden";
        document.getElementById('L_Rf0_l63').style.visibility = "hidden";
        document.getElementById('R_Lf0_l63').style.visibility = "hidden";
        document.getElementById('L_Rf0_l64').style.visibility = "hidden";
        document.getElementById('R_Lf0_l64').style.visibility = "hidden";
        document.getElementById('L_Rf0_l65').style.visibility = "hidden";
        document.getElementById('R_Lf0_l65').style.visibility = "hidden";
        document.getElementById('L_Rf0_l66').style.visibility = "hidden";
        document.getElementById('R_Lf0_l66').style.visibility = "hidden";
        document.getElementById('L_Rf0_l67').style.visibility = "hidden";
        document.getElementById('R_Lf0_l67').style.visibility = "hidden";
        document.getElementById('L_Rf0_l68').style.visibility = "hidden";
        document.getElementById('R_Lf0_l68').style.visibility = "hidden";
        document.getElementById('L_Rf0_l69').style.visibility = "hidden";
        document.getElementById('R_Lf0_l69').style.visibility = "hidden";
        document.getElementById('L_Rf0_l70').style.visibility = "hidden";
        document.getElementById('R_Lf0_l70').style.visibility = "hidden";
        document.getElementById('L_Rf0_l71').style.visibility = "hidden";
        document.getElementById('R_Lf0_l71').style.visibility = "hidden";
        document.getElementById('L_Rf0_l72').style.visibility = "hidden";
        document.getElementById('R_Lf0_l72').style.visibility = "hidden";
        document.getElementById('L_Rf0_l73').style.visibility = "hidden";
        document.getElementById('R_Lf0_l73').style.visibility = "hidden";
        document.getElementById('L_Rf0_l74').style.visibility = "hidden";
        document.getElementById('R_Lf0_l74').style.visibility = "hidden";
        document.getElementById('L_Rf0_l75').style.visibility = "hidden";
        document.getElementById('R_Lf0_l75').style.visibility = "hidden";
        document.getElementById('L_Rf0_l76').style.visibility = "hidden";
        document.getElementById('R_Lf0_l76').style.visibility = "hidden";
        document.getElementById('L_Rf0_l77').style.visibility = "hidden";
        document.getElementById('R_Lf0_l77').style.visibility = "hidden";
        document.getElementById('L_Rf0_l78').style.visibility = "hidden";
        document.getElementById('R_Lf0_l78').style.visibility = "hidden";
        document.getElementById('L_Rf0_l79').style.visibility = "hidden";
        document.getElementById('R_Lf0_l79').style.visibility = "hidden";
        document.getElementById('L_Rf1_l0').style.visibility = "hidden";
        document.getElementById('R_Lf1_l0').style.visibility = "hidden";
        document.getElementById('L_Rf1_l1').style.visibility = "hidden";
        document.getElementById('R_Lf1_l1').style.visibility = "hidden";
        document.getElementById('L_Rf1_l2').style.visibility = "hidden";
        document.getElementById('R_Lf1_l2').style.visibility = "hidden";
        document.getElementById('L_Rf1_l3').style.visibility = "hidden";
        document.getElementById('R_Lf1_l3').style.visibility = "hidden";
        document.getElementById('L_Rf1_l4').style.visibility = "hidden";
        document.getElementById('R_Lf1_l4').style.visibility = "hidden";
        document.getElementById('L_Rf1_l5').style.visibility = "hidden";
        document.getElementById('R_Lf1_l5').style.visibility = "hidden";
        document.getElementById('L_Rf1_l6').style.visibility = "hidden";
        document.getElementById('R_Lf1_l6').style.visibility = "hidden";
        document.getElementById('L_Rf1_l7').style.visibility = "hidden";
        document.getElementById('R_Lf1_l7').style.visibility = "hidden";
        document.getElementById('L_Rf1_l8').style.visibility = "hidden";
        document.getElementById('R_Lf1_l8').style.visibility = "hidden";
        document.getElementById('L_Rf1_l9').style.visibility = "hidden";
        document.getElementById('R_Lf1_l9').style.visibility = "hidden";
        document.getElementById('L_Rf1_l10').style.visibility = "hidden";
        document.getElementById('R_Lf1_l10').style.visibility = "hidden";
        document.getElementById('L_Rf1_l11').style.visibility = "hidden";
        document.getElementById('R_Lf1_l11').style.visibility = "hidden";
        document.getElementById('L_Rf1_l12').style.visibility = "hidden";
        document.getElementById('R_Lf1_l12').style.visibility = "hidden";
        document.getElementById('L_Rf1_l13').style.visibility = "hidden";
        document.getElementById('R_Lf1_l13').style.visibility = "hidden";
        document.getElementById('L_Rf1_l14').style.visibility = "hidden";
        document.getElementById('R_Lf1_l14').style.visibility = "hidden";
        document.getElementById('L_Rf1_l15').style.visibility = "hidden";
        document.getElementById('R_Lf1_l15').style.visibility = "hidden";
        document.getElementById('L_Rf1_l16').style.visibility = "hidden";
        document.getElementById('R_Lf1_l16').style.visibility = "hidden";
        document.getElementById('L_Rf1_l17').style.visibility = "hidden";
        document.getElementById('R_Lf1_l17').style.visibility = "hidden";
        document.getElementById('L_Rf1_l18').style.visibility = "hidden";
        document.getElementById('R_Lf1_l18').style.visibility = "hidden";
        document.getElementById('L_Rf1_l19').style.visibility = "hidden";
        document.getElementById('R_Lf1_l19').style.visibility = "hidden";
        document.getElementById('L_Rf1_l20').style.visibility = "hidden";
        document.getElementById('R_Lf1_l20').style.visibility = "hidden";
        document.getElementById('L_Rf1_l21').style.visibility = "hidden";
        document.getElementById('R_Lf1_l21').style.visibility = "hidden";
        document.getElementById('L_Rf1_l22').style.visibility = "hidden";
        document.getElementById('R_Lf1_l22').style.visibility = "hidden";
        document.getElementById('L_Rf1_l23').style.visibility = "hidden";
        document.getElementById('R_Lf1_l23').style.visibility = "hidden";
        document.getElementById('L_Rf1_l24').style.visibility = "hidden";
        document.getElementById('R_Lf1_l24').style.visibility = "hidden";
        document.getElementById('L_Rf1_l25').style.visibility = "hidden";
        document.getElementById('R_Lf1_l25').style.visibility = "hidden";
        document.getElementById('L_Rf1_l26').style.visibility = "hidden";
        document.getElementById('R_Lf1_l26').style.visibility = "hidden";
        document.getElementById('L_Rf1_l27').style.visibility = "hidden";
        document.getElementById('R_Lf1_l27').style.visibility = "hidden";
        document.getElementById('L_Rf1_l28').style.visibility = "hidden";
        document.getElementById('R_Lf1_l28').style.visibility = "hidden";
        document.getElementById('L_Rf1_l29').style.visibility = "hidden";
        document.getElementById('R_Lf1_l29').style.visibility = "hidden";
        document.getElementById('L_Rf1_l30').style.visibility = "hidden";
        document.getElementById('R_Lf1_l30').style.visibility = "hidden";
        document.getElementById('L_Rf1_l31').style.visibility = "hidden";
        document.getElementById('R_Lf1_l31').style.visibility = "hidden";
        document.getElementById('L_Rf1_l32').style.visibility = "hidden";
        document.getElementById('R_Lf1_l32').style.visibility = "hidden";
        document.getElementById('L_Rf1_l33').style.visibility = "hidden";
        document.getElementById('R_Lf1_l33').style.visibility = "hidden";
        document.getElementById('L_Rf1_l34').style.visibility = "hidden";
        document.getElementById('R_Lf1_l34').style.visibility = "hidden";
        document.getElementById('L_Rf1_l35').style.visibility = "hidden";
        document.getElementById('R_Lf1_l35').style.visibility = "hidden";
        document.getElementById('L_Rf1_l36').style.visibility = "hidden";
        document.getElementById('R_Lf1_l36').style.visibility = "hidden";
        document.getElementById('L_Rf1_l37').style.visibility = "hidden";
        document.getElementById('R_Lf1_l37').style.visibility = "hidden";
        document.getElementById('L_Rf1_l38').style.visibility = "hidden";
        document.getElementById('R_Lf1_l38').style.visibility = "hidden";
        document.getElementById('L_Rf1_l39').style.visibility = "hidden";
        document.getElementById('R_Lf1_l39').style.visibility = "hidden";
        document.getElementById('L_Rf1_l40').style.visibility = "hidden";
        document.getElementById('R_Lf1_l40').style.visibility = "hidden";
        document.getElementById('L_Rf1_l41').style.visibility = "hidden";
        document.getElementById('R_Lf1_l41').style.visibility = "hidden";
        document.getElementById('L_Rf1_l42').style.visibility = "hidden";
        document.getElementById('R_Lf1_l42').style.visibility = "hidden";
        document.getElementById('L_Rf1_l43').style.visibility = "hidden";
        document.getElementById('R_Lf1_l43').style.visibility = "hidden";
        document.getElementById('L_Rf1_l44').style.visibility = "hidden";
        document.getElementById('R_Lf1_l44').style.visibility = "hidden";
        document.getElementById('L_Rf1_l45').style.visibility = "hidden";
        document.getElementById('R_Lf1_l45').style.visibility = "hidden";
        document.getElementById('L_Rf1_l46').style.visibility = "hidden";
        document.getElementById('R_Lf1_l46').style.visibility = "hidden";
        document.getElementById('L_Rf1_l47').style.visibility = "hidden";
        document.getElementById('R_Lf1_l47').style.visibility = "hidden";
        document.getElementById('L_Rf1_l48').style.visibility = "hidden";
        document.getElementById('R_Lf1_l48').style.visibility = "hidden";
        document.getElementById('L_Rf1_l49').style.visibility = "hidden";
        document.getElementById('R_Lf1_l49').style.visibility = "hidden";
        document.getElementById('L_Rf1_l50').style.visibility = "hidden";
        document.getElementById('R_Lf1_l50').style.visibility = "hidden";
        document.getElementById('L_Rf1_l51').style.visibility = "hidden";
        document.getElementById('R_Lf1_l51').style.visibility = "hidden";
        document.getElementById('L_Rf1_l52').style.visibility = "hidden";
        document.getElementById('R_Lf1_l52').style.visibility = "hidden";
        document.getElementById('L_Rf1_l53').style.visibility = "hidden";
        document.getElementById('R_Lf1_l53').style.visibility = "hidden";
        document.getElementById('L_Rf1_l54').style.visibility = "hidden";
        document.getElementById('R_Lf1_l54').style.visibility = "hidden";
        document.getElementById('L_Rf1_l55').style.visibility = "hidden";
        document.getElementById('R_Lf1_l55').style.visibility = "hidden";
        document.getElementById('L_Rf1_l56').style.visibility = "hidden";
        document.getElementById('R_Lf1_l56').style.visibility = "hidden";
        document.getElementById('L_Rf1_l57').style.visibility = "hidden";
        document.getElementById('R_Lf1_l57').style.visibility = "hidden";
        document.getElementById('L_Rf1_l58').style.visibility = "hidden";
        document.getElementById('R_Lf1_l58').style.visibility = "hidden";
        document.getElementById('L_Rf1_l59').style.visibility = "hidden";
        document.getElementById('R_Lf1_l59').style.visibility = "hidden";
        document.getElementById('L_Rf1_l60').style.visibility = "hidden";
        document.getElementById('R_Lf1_l60').style.visibility = "hidden";
        document.getElementById('L_Rf1_l61').style.visibility = "hidden";
        document.getElementById('R_Lf1_l61').style.visibility = "hidden";
        document.getElementById('L_Rf1_l62').style.visibility = "hidden";
        document.getElementById('R_Lf1_l62').style.visibility = "hidden";
        document.getElementById('L_Rf1_l63').style.visibility = "hidden";
        document.getElementById('R_Lf1_l63').style.visibility = "hidden";
        document.getElementById('L_Rf1_l64').style.visibility = "hidden";
        document.getElementById('R_Lf1_l64').style.visibility = "hidden";
        document.getElementById('L_Rf1_l65').style.visibility = "hidden";
        document.getElementById('R_Lf1_l65').style.visibility = "hidden";
        document.getElementById('L_Rf1_l66').style.visibility = "hidden";
        document.getElementById('R_Lf1_l66').style.visibility = "hidden";
        document.getElementById('L_Rf1_l67').style.visibility = "hidden";
        document.getElementById('R_Lf1_l67').style.visibility = "hidden";
        document.getElementById('L_Rf1_l68').style.visibility = "hidden";
        document.getElementById('R_Lf1_l68').style.visibility = "hidden";
        document.getElementById('L_Rf1_l69').style.visibility = "hidden";
        document.getElementById('R_Lf1_l69').style.visibility = "hidden";
        document.getElementById('L_Rf1_l70').style.visibility = "hidden";
        document.getElementById('R_Lf1_l70').style.visibility = "hidden";
        document.getElementById('L_Rf1_l71').style.visibility = "hidden";
        document.getElementById('R_Lf1_l71').style.visibility = "hidden";
        document.getElementById('L_Rf1_l72').style.visibility = "hidden";
        document.getElementById('R_Lf1_l72').style.visibility = "hidden";
        document.getElementById('L_Rf1_l73').style.visibility = "hidden";
        document.getElementById('R_Lf1_l73').style.visibility = "hidden";
        document.getElementById('L_Rf1_l74').style.visibility = "hidden";
        document.getElementById('R_Lf1_l74').style.visibility = "hidden";
        document.getElementById('L_Rf1_l75').style.visibility = "hidden";
        document.getElementById('R_Lf1_l75').style.visibility = "hidden";
        document.getElementById('L_Rf1_l76').style.visibility = "hidden";
        document.getElementById('R_Lf1_l76').style.visibility = "hidden";
        document.getElementById('L_Rf1_l77').style.visibility = "hidden";
        document.getElementById('R_Lf1_l77').style.visibility = "hidden";
        document.getElementById('L_Rf1_l78').style.visibility = "hidden";
        document.getElementById('R_Lf1_l78').style.visibility = "hidden";
        document.getElementById('L_Rf1_l79').style.visibility = "hidden";
        document.getElementById('R_Lf1_l79').style.visibility = "hidden";
        document.getElementById('L_Rf2_l0').style.visibility = "hidden";
        document.getElementById('R_Lf2_l0').style.visibility = "hidden";
        document.getElementById('L_Rf2_l1').style.visibility = "hidden";
        document.getElementById('R_Lf2_l1').style.visibility = "hidden";
        document.getElementById('L_Rf2_l2').style.visibility = "hidden";
        document.getElementById('R_Lf2_l2').style.visibility = "hidden";
        document.getElementById('L_Rf2_l3').style.visibility = "hidden";
        document.getElementById('R_Lf2_l3').style.visibility = "hidden";
        document.getElementById('L_Rf2_l4').style.visibility = "hidden";
        document.getElementById('R_Lf2_l4').style.visibility = "hidden";
        document.getElementById('L_Rf2_l5').style.visibility = "hidden";
        document.getElementById('R_Lf2_l5').style.visibility = "hidden";
        document.getElementById('L_Rf2_l6').style.visibility = "hidden";
        document.getElementById('R_Lf2_l6').style.visibility = "hidden";
        document.getElementById('L_Rf2_l7').style.visibility = "hidden";
        document.getElementById('R_Lf2_l7').style.visibility = "hidden";
        document.getElementById('L_Rf2_l8').style.visibility = "hidden";
        document.getElementById('R_Lf2_l8').style.visibility = "hidden";
        document.getElementById('L_Rf2_l9').style.visibility = "hidden";
        document.getElementById('R_Lf2_l9').style.visibility = "hidden";
        document.getElementById('L_Rf2_l10').style.visibility = "hidden";
        document.getElementById('R_Lf2_l10').style.visibility = "hidden";
        document.getElementById('L_Rf2_l11').style.visibility = "hidden";
        document.getElementById('R_Lf2_l11').style.visibility = "hidden";
        document.getElementById('L_Rf2_l12').style.visibility = "hidden";
        document.getElementById('R_Lf2_l12').style.visibility = "hidden";
        document.getElementById('L_Rf2_l13').style.visibility = "hidden";
        document.getElementById('R_Lf2_l13').style.visibility = "hidden";
        document.getElementById('L_Rf2_l14').style.visibility = "hidden";
        document.getElementById('R_Lf2_l14').style.visibility = "hidden";
        document.getElementById('L_Rf2_l15').style.visibility = "hidden";
        document.getElementById('R_Lf2_l15').style.visibility = "hidden";
        document.getElementById('L_Rf2_l16').style.visibility = "hidden";
        document.getElementById('R_Lf2_l16').style.visibility = "hidden";
        document.getElementById('L_Rf2_l17').style.visibility = "hidden";
        document.getElementById('R_Lf2_l17').style.visibility = "hidden";
        document.getElementById('L_Rf2_l18').style.visibility = "hidden";
        document.getElementById('R_Lf2_l18').style.visibility = "hidden";
        document.getElementById('L_Rf2_l19').style.visibility = "hidden";
        document.getElementById('R_Lf2_l19').style.visibility = "hidden";
        document.getElementById('L_Rf2_l20').style.visibility = "hidden";
        document.getElementById('R_Lf2_l20').style.visibility = "hidden";
        document.getElementById('L_Rf2_l21').style.visibility = "hidden";
        document.getElementById('R_Lf2_l21').style.visibility = "hidden";
        document.getElementById('L_Rf2_l22').style.visibility = "hidden";
        document.getElementById('R_Lf2_l22').style.visibility = "hidden";
        document.getElementById('L_Rf2_l23').style.visibility = "hidden";
        document.getElementById('R_Lf2_l23').style.visibility = "hidden";
        document.getElementById('L_Rf2_l24').style.visibility = "hidden";
        document.getElementById('R_Lf2_l24').style.visibility = "hidden";
        document.getElementById('L_Rf2_l25').style.visibility = "hidden";
        document.getElementById('R_Lf2_l25').style.visibility = "hidden";
        document.getElementById('L_Rf2_l26').style.visibility = "hidden";
        document.getElementById('R_Lf2_l26').style.visibility = "hidden";
        document.getElementById('L_Rf2_l27').style.visibility = "hidden";
        document.getElementById('R_Lf2_l27').style.visibility = "hidden";
        document.getElementById('L_Rf2_l28').style.visibility = "hidden";
        document.getElementById('R_Lf2_l28').style.visibility = "hidden";
        document.getElementById('L_Rf2_l29').style.visibility = "hidden";
        document.getElementById('R_Lf2_l29').style.visibility = "hidden";
        document.getElementById('L_Rf2_l30').style.visibility = "hidden";
        document.getElementById('R_Lf2_l30').style.visibility = "hidden";
        document.getElementById('L_Rf2_l31').style.visibility = "hidden";
        document.getElementById('R_Lf2_l31').style.visibility = "hidden";
        document.getElementById('L_Rf2_l32').style.visibility = "hidden";
        document.getElementById('R_Lf2_l32').style.visibility = "hidden";
        document.getElementById('L_Rf2_l33').style.visibility = "hidden";
        document.getElementById('R_Lf2_l33').style.visibility = "hidden";
        document.getElementById('L_Rf2_l34').style.visibility = "hidden";
        document.getElementById('R_Lf2_l34').style.visibility = "hidden";
        document.getElementById('L_Rf2_l35').style.visibility = "hidden";
        document.getElementById('R_Lf2_l35').style.visibility = "hidden";
        document.getElementById('L_Rf2_l36').style.visibility = "hidden";
        document.getElementById('R_Lf2_l36').style.visibility = "hidden";
        document.getElementById('L_Rf2_l37').style.visibility = "hidden";
        document.getElementById('R_Lf2_l37').style.visibility = "hidden";
        document.getElementById('L_Rf2_l38').style.visibility = "hidden";
        document.getElementById('R_Lf2_l38').style.visibility = "hidden";
        document.getElementById('L_Rf2_l39').style.visibility = "hidden";
        document.getElementById('R_Lf2_l39').style.visibility = "hidden";
        document.getElementById('L_Rf2_l40').style.visibility = "hidden";
        document.getElementById('R_Lf2_l40').style.visibility = "hidden";
        document.getElementById('L_Rf2_l41').style.visibility = "hidden";
        document.getElementById('R_Lf2_l41').style.visibility = "hidden";
        document.getElementById('L_Rf2_l42').style.visibility = "hidden";
        document.getElementById('R_Lf2_l42').style.visibility = "hidden";
        document.getElementById('L_Rf2_l43').style.visibility = "hidden";
        document.getElementById('R_Lf2_l43').style.visibility = "hidden";
        document.getElementById('L_Rf2_l44').style.visibility = "hidden";
        document.getElementById('R_Lf2_l44').style.visibility = "hidden";
        document.getElementById('L_Rf2_l45').style.visibility = "hidden";
        document.getElementById('R_Lf2_l45').style.visibility = "hidden";
        document.getElementById('L_Rf2_l46').style.visibility = "hidden";
        document.getElementById('R_Lf2_l46').style.visibility = "hidden";
        document.getElementById('L_Rf2_l47').style.visibility = "hidden";
        document.getElementById('R_Lf2_l47').style.visibility = "hidden";
        document.getElementById('L_Rf2_l48').style.visibility = "hidden";
        document.getElementById('R_Lf2_l48').style.visibility = "hidden";
        document.getElementById('L_Rf2_l49').style.visibility = "hidden";
        document.getElementById('R_Lf2_l49').style.visibility = "hidden";
        document.getElementById('L_Rf2_l50').style.visibility = "hidden";
        document.getElementById('R_Lf2_l50').style.visibility = "hidden";
        document.getElementById('L_Rf2_l51').style.visibility = "hidden";
        document.getElementById('R_Lf2_l51').style.visibility = "hidden";
        document.getElementById('L_Rf2_l52').style.visibility = "hidden";
        document.getElementById('R_Lf2_l52').style.visibility = "hidden";
        document.getElementById('L_Rf2_l53').style.visibility = "hidden";
        document.getElementById('R_Lf2_l53').style.visibility = "hidden";
        document.getElementById('L_Rf2_l54').style.visibility = "hidden";
        document.getElementById('R_Lf2_l54').style.visibility = "hidden";
        document.getElementById('L_Rf2_l55').style.visibility = "hidden";
        document.getElementById('R_Lf2_l55').style.visibility = "hidden";
        document.getElementById('L_Rf2_l56').style.visibility = "hidden";
        document.getElementById('R_Lf2_l56').style.visibility = "hidden";
        document.getElementById('L_Rf2_l57').style.visibility = "hidden";
        document.getElementById('R_Lf2_l57').style.visibility = "hidden";
        document.getElementById('L_Rf2_l58').style.visibility = "hidden";
        document.getElementById('R_Lf2_l58').style.visibility = "hidden";
        document.getElementById('L_Rf2_l59').style.visibility = "hidden";
        document.getElementById('R_Lf2_l59').style.visibility = "hidden";
        document.getElementById('L_Rf2_l60').style.visibility = "hidden";
        document.getElementById('R_Lf2_l60').style.visibility = "hidden";
        document.getElementById('L_Rf2_l61').style.visibility = "hidden";
        document.getElementById('R_Lf2_l61').style.visibility = "hidden";
        document.getElementById('L_Rf2_l62').style.visibility = "hidden";
        document.getElementById('R_Lf2_l62').style.visibility = "hidden";
        document.getElementById('L_Rf2_l63').style.visibility = "hidden";
        document.getElementById('R_Lf2_l63').style.visibility = "hidden";
        document.getElementById('L_Rf2_l64').style.visibility = "hidden";
        document.getElementById('R_Lf2_l64').style.visibility = "hidden";
        document.getElementById('L_Rf2_l65').style.visibility = "hidden";
        document.getElementById('R_Lf2_l65').style.visibility = "hidden";
        document.getElementById('L_Rf2_l66').style.visibility = "hidden";
        document.getElementById('R_Lf2_l66').style.visibility = "hidden";
        document.getElementById('L_Rf2_l67').style.visibility = "hidden";
        document.getElementById('R_Lf2_l67').style.visibility = "hidden";
        document.getElementById('L_Rf2_l68').style.visibility = "hidden";
        document.getElementById('R_Lf2_l68').style.visibility = "hidden";
        document.getElementById('L_Rf2_l69').style.visibility = "hidden";
        document.getElementById('R_Lf2_l69').style.visibility = "hidden";
        document.getElementById('L_Rf2_l70').style.visibility = "hidden";
        document.getElementById('R_Lf2_l70').style.visibility = "hidden";
        document.getElementById('L_Rf2_l71').style.visibility = "hidden";
        document.getElementById('R_Lf2_l71').style.visibility = "hidden";
        document.getElementById('L_Rf2_l72').style.visibility = "hidden";
        document.getElementById('R_Lf2_l72').style.visibility = "hidden";
        document.getElementById('L_Rf2_l73').style.visibility = "hidden";
        document.getElementById('R_Lf2_l73').style.visibility = "hidden";
        document.getElementById('L_Rf2_l74').style.visibility = "hidden";
        document.getElementById('R_Lf2_l74').style.visibility = "hidden";
        document.getElementById('L_Rf2_l75').style.visibility = "hidden";
        document.getElementById('R_Lf2_l75').style.visibility = "hidden";
        document.getElementById('L_Rf2_l76').style.visibility = "hidden";
        document.getElementById('R_Lf2_l76').style.visibility = "hidden";
        document.getElementById('L_Rf2_l77').style.visibility = "hidden";
        document.getElementById('R_Lf2_l77').style.visibility = "hidden";
        document.getElementById('L_Rf2_l78').style.visibility = "hidden";
        document.getElementById('R_Lf2_l78').style.visibility = "hidden";
        document.getElementById('L_Rf2_l79').style.visibility = "hidden";
        document.getElementById('R_Lf2_l79').style.visibility = "hidden";
        document.getElementById('L_Rf3_l0').style.visibility = "hidden";
        document.getElementById('R_Lf3_l0').style.visibility = "hidden";
        document.getElementById('L_Rf3_l1').style.visibility = "hidden";
        document.getElementById('R_Lf3_l1').style.visibility = "hidden";
        document.getElementById('L_Rf3_l2').style.visibility = "hidden";
        document.getElementById('R_Lf3_l2').style.visibility = "hidden";
        document.getElementById('L_Rf3_l3').style.visibility = "hidden";
        document.getElementById('R_Lf3_l3').style.visibility = "hidden";
        document.getElementById('L_Rf3_l4').style.visibility = "hidden";
        document.getElementById('R_Lf3_l4').style.visibility = "hidden";
        document.getElementById('L_Rf3_l5').style.visibility = "hidden";
        document.getElementById('R_Lf3_l5').style.visibility = "hidden";
        document.getElementById('L_Rf3_l6').style.visibility = "hidden";
        document.getElementById('R_Lf3_l6').style.visibility = "hidden";
        document.getElementById('L_Rf3_l7').style.visibility = "hidden";
        document.getElementById('R_Lf3_l7').style.visibility = "hidden";
        document.getElementById('L_Rf3_l8').style.visibility = "hidden";
        document.getElementById('R_Lf3_l8').style.visibility = "hidden";
        document.getElementById('L_Rf3_l9').style.visibility = "hidden";
        document.getElementById('R_Lf3_l9').style.visibility = "hidden";
        return;
    }

    if (window.P_f0_n1 > window.P_f0_n2){
        document.getElementById('R_Lf0_l1').style.visibility = "hidden";
        document.getElementById('L_Rf0_l1').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l1').style.visibility = "visible";
        document.getElementById('L_Rf0_l1').style.visibility = "hidden";
    }
    if (window.P_f0_n3 > window.P_f0_n4){
        document.getElementById('R_Lf0_l3').style.visibility = "hidden";
        document.getElementById('L_Rf0_l3').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l3').style.visibility = "visible";
        document.getElementById('L_Rf0_l3').style.visibility = "hidden";
    }
    if (window.P_f0_n5 > window.P_f0_n6){
        document.getElementById('R_Lf0_l5').style.visibility = "hidden";
        document.getElementById('L_Rf0_l5').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l5').style.visibility = "visible";
        document.getElementById('L_Rf0_l5').style.visibility = "hidden";
    }
    if (window.P_f0_n7 > window.P_f0_n8){
        document.getElementById('R_Lf0_l7').style.visibility = "hidden";
        document.getElementById('L_Rf0_l7').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l7').style.visibility = "visible";
        document.getElementById('L_Rf0_l7').style.visibility = "hidden";
    }
    if (window.P_f0_n9 > window.P_f0_n10){
        document.getElementById('R_Lf0_l9').style.visibility = "hidden";
        document.getElementById('L_Rf0_l9').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l9').style.visibility = "visible";
        document.getElementById('L_Rf0_l9').style.visibility = "hidden";
    }
    if (window.P_f0_n11 > window.P_f0_n12){
        document.getElementById('R_Lf0_l11').style.visibility = "hidden";
        document.getElementById('L_Rf0_l11').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l11').style.visibility = "visible";
        document.getElementById('L_Rf0_l11').style.visibility = "hidden";
    }
    if (window.P_f0_n13 > window.P_f0_n14){
        document.getElementById('R_Lf0_l13').style.visibility = "hidden";
        document.getElementById('L_Rf0_l13').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l13').style.visibility = "visible";
        document.getElementById('L_Rf0_l13').style.visibility = "hidden";
    }
    if (window.P_f0_n15 > window.P_f0_n16){
        document.getElementById('R_Lf0_l15').style.visibility = "hidden";
        document.getElementById('L_Rf0_l15').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l15').style.visibility = "visible";
        document.getElementById('L_Rf0_l15').style.visibility = "hidden";
    }
    if (window.P_f0_n17 > window.P_f0_n18){
        document.getElementById('R_Lf0_l17').style.visibility = "hidden";
        document.getElementById('L_Rf0_l17').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l17').style.visibility = "visible";
        document.getElementById('L_Rf0_l17').style.visibility = "hidden";
    }
    if (window.P_f0_n19 > window.P_f0_n20){
        document.getElementById('R_Lf0_l19').style.visibility = "hidden";
        document.getElementById('L_Rf0_l19').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l19').style.visibility = "visible";
        document.getElementById('L_Rf0_l19').style.visibility = "hidden";
    }
    if (window.P_f0_n21 > window.P_f0_n22){
        document.getElementById('R_Lf0_l21').style.visibility = "hidden";
        document.getElementById('L_Rf0_l21').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l21').style.visibility = "visible";
        document.getElementById('L_Rf0_l21').style.visibility = "hidden";
    }
    if (window.P_f0_n23 > window.P_f0_n24){
        document.getElementById('R_Lf0_l23').style.visibility = "hidden";
        document.getElementById('L_Rf0_l23').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l23').style.visibility = "visible";
        document.getElementById('L_Rf0_l23').style.visibility = "hidden";
    }
    if (window.P_f0_n25 > window.P_f0_n26){
        document.getElementById('R_Lf0_l25').style.visibility = "hidden";
        document.getElementById('L_Rf0_l25').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l25').style.visibility = "visible";
        document.getElementById('L_Rf0_l25').style.visibility = "hidden";
    }
    if (window.P_f0_n27 > window.P_f0_n28){
        document.getElementById('R_Lf0_l27').style.visibility = "hidden";
        document.getElementById('L_Rf0_l27').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l27').style.visibility = "visible";
        document.getElementById('L_Rf0_l27').style.visibility = "hidden";
    }
    if (window.P_f0_n29 > window.P_f0_n30){
        document.getElementById('R_Lf0_l29').style.visibility = "hidden";
        document.getElementById('L_Rf0_l29').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l29').style.visibility = "visible";
        document.getElementById('L_Rf0_l29').style.visibility = "hidden";
    }
    if (window.P_f0_n31 > window.P_f0_n32){
        document.getElementById('R_Lf0_l31').style.visibility = "hidden";
        document.getElementById('L_Rf0_l31').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l31').style.visibility = "visible";
        document.getElementById('L_Rf0_l31').style.visibility = "hidden";
    }
    if (window.P_f0_n33 > window.P_f0_n34){
        document.getElementById('R_Lf0_l33').style.visibility = "hidden";
        document.getElementById('L_Rf0_l33').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l33').style.visibility = "visible";
        document.getElementById('L_Rf0_l33').style.visibility = "hidden";
    }
    if (window.P_f0_n35 > window.P_f0_n36){
        document.getElementById('R_Lf0_l35').style.visibility = "hidden";
        document.getElementById('L_Rf0_l35').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l35').style.visibility = "visible";
        document.getElementById('L_Rf0_l35').style.visibility = "hidden";
    }
    if (window.P_f0_n37 > window.P_f0_n38){
        document.getElementById('R_Lf0_l37').style.visibility = "hidden";
        document.getElementById('L_Rf0_l37').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l37').style.visibility = "visible";
        document.getElementById('L_Rf0_l37').style.visibility = "hidden";
    }
    if (window.P_f0_n39 > window.P_f0_n40){
        document.getElementById('R_Lf0_l39').style.visibility = "hidden";
        document.getElementById('L_Rf0_l39').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l39').style.visibility = "visible";
        document.getElementById('L_Rf0_l39').style.visibility = "hidden";
    }
    if (window.P_f0_n41 > window.P_f0_n42){
        document.getElementById('R_Lf0_l41').style.visibility = "hidden";
        document.getElementById('L_Rf0_l41').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l41').style.visibility = "visible";
        document.getElementById('L_Rf0_l41').style.visibility = "hidden";
    }
    if (window.P_f0_n43 > window.P_f0_n44){
        document.getElementById('R_Lf0_l43').style.visibility = "hidden";
        document.getElementById('L_Rf0_l43').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l43').style.visibility = "visible";
        document.getElementById('L_Rf0_l43').style.visibility = "hidden";
    }
    if (window.P_f0_n45 > window.P_f0_n46){
        document.getElementById('R_Lf0_l45').style.visibility = "hidden";
        document.getElementById('L_Rf0_l45').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l45').style.visibility = "visible";
        document.getElementById('L_Rf0_l45').style.visibility = "hidden";
    }
    if (window.P_f0_n47 > window.P_f0_n48){
        document.getElementById('R_Lf0_l47').style.visibility = "hidden";
        document.getElementById('L_Rf0_l47').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l47').style.visibility = "visible";
        document.getElementById('L_Rf0_l47').style.visibility = "hidden";
    }
    if (window.P_f0_n49 > window.P_f0_n50){
        document.getElementById('R_Lf0_l49').style.visibility = "hidden";
        document.getElementById('L_Rf0_l49').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l49').style.visibility = "visible";
        document.getElementById('L_Rf0_l49').style.visibility = "hidden";
    }
    if (window.P_f0_n51 > window.P_f0_n52){
        document.getElementById('R_Lf0_l51').style.visibility = "hidden";
        document.getElementById('L_Rf0_l51').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l51').style.visibility = "visible";
        document.getElementById('L_Rf0_l51').style.visibility = "hidden";
    }
    if (window.P_f0_n53 > window.P_f0_n54){
        document.getElementById('R_Lf0_l53').style.visibility = "hidden";
        document.getElementById('L_Rf0_l53').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l53').style.visibility = "visible";
        document.getElementById('L_Rf0_l53').style.visibility = "hidden";
    }
    if (window.P_f0_n55 > window.P_f0_n56){
        document.getElementById('R_Lf0_l55').style.visibility = "hidden";
        document.getElementById('L_Rf0_l55').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l55').style.visibility = "visible";
        document.getElementById('L_Rf0_l55').style.visibility = "hidden";
    }
    if (window.P_f0_n57 > window.P_f0_n58){
        document.getElementById('R_Lf0_l57').style.visibility = "hidden";
        document.getElementById('L_Rf0_l57').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l57').style.visibility = "visible";
        document.getElementById('L_Rf0_l57').style.visibility = "hidden";
    }
    if (window.P_f0_n59 > window.P_f0_n60){
        document.getElementById('R_Lf0_l59').style.visibility = "hidden";
        document.getElementById('L_Rf0_l59').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l59').style.visibility = "visible";
        document.getElementById('L_Rf0_l59').style.visibility = "hidden";
    }
    if (window.P_f0_n61 > window.P_f0_n62){
        document.getElementById('R_Lf0_l61').style.visibility = "hidden";
        document.getElementById('L_Rf0_l61').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l61').style.visibility = "visible";
        document.getElementById('L_Rf0_l61').style.visibility = "hidden";
    }
    if (window.P_f0_n63 > window.P_f0_n64){
        document.getElementById('R_Lf0_l63').style.visibility = "hidden";
        document.getElementById('L_Rf0_l63').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l63').style.visibility = "visible";
        document.getElementById('L_Rf0_l63').style.visibility = "hidden";
    }
    if (window.P_f0_n65 > window.P_f0_n66){
        document.getElementById('R_Lf0_l65').style.visibility = "hidden";
        document.getElementById('L_Rf0_l65').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l65').style.visibility = "visible";
        document.getElementById('L_Rf0_l65').style.visibility = "hidden";
    }
    if (window.P_f0_n67 > window.P_f0_n68){
        document.getElementById('R_Lf0_l67').style.visibility = "hidden";
        document.getElementById('L_Rf0_l67').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l67').style.visibility = "visible";
        document.getElementById('L_Rf0_l67').style.visibility = "hidden";
    }
    if (window.P_f0_n69 > window.P_f0_n70){
        document.getElementById('R_Lf0_l69').style.visibility = "hidden";
        document.getElementById('L_Rf0_l69').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l69').style.visibility = "visible";
        document.getElementById('L_Rf0_l69').style.visibility = "hidden";
    }
    if (window.P_f0_n71 > window.P_f0_n72){
        document.getElementById('R_Lf0_l71').style.visibility = "hidden";
        document.getElementById('L_Rf0_l71').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l71').style.visibility = "visible";
        document.getElementById('L_Rf0_l71').style.visibility = "hidden";
    }
    if (window.P_f0_n73 > window.P_f0_n74){
        document.getElementById('R_Lf0_l73').style.visibility = "hidden";
        document.getElementById('L_Rf0_l73').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l73').style.visibility = "visible";
        document.getElementById('L_Rf0_l73').style.visibility = "hidden";
    }
    if (window.P_f0_n75 > window.P_f0_n76){
        document.getElementById('R_Lf0_l75').style.visibility = "hidden";
        document.getElementById('L_Rf0_l75').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l75').style.visibility = "visible";
        document.getElementById('L_Rf0_l75').style.visibility = "hidden";
    }
    if (window.P_f0_n77 > window.P_f0_n78){
        document.getElementById('R_Lf0_l77').style.visibility = "hidden";
        document.getElementById('L_Rf0_l77').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l77').style.visibility = "visible";
        document.getElementById('L_Rf0_l77').style.visibility = "hidden";
    }
    if (window.P_f0_n79 > window.P_f0_n80){
        document.getElementById('R_Lf0_l79').style.visibility = "hidden";
        document.getElementById('L_Rf0_l79').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l79').style.visibility = "visible";
        document.getElementById('L_Rf0_l79').style.visibility = "hidden";
    }
    if (window.P_f1_n1 > window.P_f1_n2){
        document.getElementById('R_Lf1_l1').style.visibility = "hidden";
        document.getElementById('L_Rf1_l1').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l1').style.visibility = "visible";
        document.getElementById('L_Rf1_l1').style.visibility = "hidden";
    }
    if (window.P_f1_n3 > window.P_f1_n4){
        document.getElementById('R_Lf1_l3').style.visibility = "hidden";
        document.getElementById('L_Rf1_l3').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l3').style.visibility = "visible";
        document.getElementById('L_Rf1_l3').style.visibility = "hidden";
    }
    if (window.P_f1_n5 > window.P_f1_n6){
        document.getElementById('R_Lf1_l5').style.visibility = "hidden";
        document.getElementById('L_Rf1_l5').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l5').style.visibility = "visible";
        document.getElementById('L_Rf1_l5').style.visibility = "hidden";
    }
    if (window.P_f1_n7 > window.P_f1_n8){
        document.getElementById('R_Lf1_l7').style.visibility = "hidden";
        document.getElementById('L_Rf1_l7').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l7').style.visibility = "visible";
        document.getElementById('L_Rf1_l7').style.visibility = "hidden";
    }
    if (window.P_f1_n9 > window.P_f1_n10){
        document.getElementById('R_Lf1_l9').style.visibility = "hidden";
        document.getElementById('L_Rf1_l9').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l9').style.visibility = "visible";
        document.getElementById('L_Rf1_l9').style.visibility = "hidden";
    }
    if (window.P_f1_n11 > window.P_f1_n12){
        document.getElementById('R_Lf1_l11').style.visibility = "hidden";
        document.getElementById('L_Rf1_l11').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l11').style.visibility = "visible";
        document.getElementById('L_Rf1_l11').style.visibility = "hidden";
    }
    if (window.P_f1_n13 > window.P_f1_n14){
        document.getElementById('R_Lf1_l13').style.visibility = "hidden";
        document.getElementById('L_Rf1_l13').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l13').style.visibility = "visible";
        document.getElementById('L_Rf1_l13').style.visibility = "hidden";
    }
    if (window.P_f1_n15 > window.P_f1_n16){
        document.getElementById('R_Lf1_l15').style.visibility = "hidden";
        document.getElementById('L_Rf1_l15').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l15').style.visibility = "visible";
        document.getElementById('L_Rf1_l15').style.visibility = "hidden";
    }
    if (window.P_f1_n17 > window.P_f1_n18){
        document.getElementById('R_Lf1_l17').style.visibility = "hidden";
        document.getElementById('L_Rf1_l17').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l17').style.visibility = "visible";
        document.getElementById('L_Rf1_l17').style.visibility = "hidden";
    }
    if (window.P_f1_n19 > window.P_f1_n20){
        document.getElementById('R_Lf1_l19').style.visibility = "hidden";
        document.getElementById('L_Rf1_l19').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l19').style.visibility = "visible";
        document.getElementById('L_Rf1_l19').style.visibility = "hidden";
    }
    if (window.P_f1_n21 > window.P_f1_n22){
        document.getElementById('R_Lf1_l21').style.visibility = "hidden";
        document.getElementById('L_Rf1_l21').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l21').style.visibility = "visible";
        document.getElementById('L_Rf1_l21').style.visibility = "hidden";
    }
    if (window.P_f1_n23 > window.P_f1_n24){
        document.getElementById('R_Lf1_l23').style.visibility = "hidden";
        document.getElementById('L_Rf1_l23').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l23').style.visibility = "visible";
        document.getElementById('L_Rf1_l23').style.visibility = "hidden";
    }
    if (window.P_f1_n25 > window.P_f1_n26){
        document.getElementById('R_Lf1_l25').style.visibility = "hidden";
        document.getElementById('L_Rf1_l25').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l25').style.visibility = "visible";
        document.getElementById('L_Rf1_l25').style.visibility = "hidden";
    }
    if (window.P_f1_n27 > window.P_f1_n28){
        document.getElementById('R_Lf1_l27').style.visibility = "hidden";
        document.getElementById('L_Rf1_l27').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l27').style.visibility = "visible";
        document.getElementById('L_Rf1_l27').style.visibility = "hidden";
    }
    if (window.P_f1_n29 > window.P_f1_n30){
        document.getElementById('R_Lf1_l29').style.visibility = "hidden";
        document.getElementById('L_Rf1_l29').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l29').style.visibility = "visible";
        document.getElementById('L_Rf1_l29').style.visibility = "hidden";
    }
    if (window.P_f1_n31 > window.P_f1_n32){
        document.getElementById('R_Lf1_l31').style.visibility = "hidden";
        document.getElementById('L_Rf1_l31').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l31').style.visibility = "visible";
        document.getElementById('L_Rf1_l31').style.visibility = "hidden";
    }
    if (window.P_f1_n33 > window.P_f1_n34){
        document.getElementById('R_Lf1_l33').style.visibility = "hidden";
        document.getElementById('L_Rf1_l33').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l33').style.visibility = "visible";
        document.getElementById('L_Rf1_l33').style.visibility = "hidden";
    }
    if (window.P_f1_n35 > window.P_f1_n36){
        document.getElementById('R_Lf1_l35').style.visibility = "hidden";
        document.getElementById('L_Rf1_l35').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l35').style.visibility = "visible";
        document.getElementById('L_Rf1_l35').style.visibility = "hidden";
    }
    if (window.P_f1_n37 > window.P_f1_n38){
        document.getElementById('R_Lf1_l37').style.visibility = "hidden";
        document.getElementById('L_Rf1_l37').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l37').style.visibility = "visible";
        document.getElementById('L_Rf1_l37').style.visibility = "hidden";
    }
    if (window.P_f1_n39 > window.P_f1_n40){
        document.getElementById('R_Lf1_l39').style.visibility = "hidden";
        document.getElementById('L_Rf1_l39').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l39').style.visibility = "visible";
        document.getElementById('L_Rf1_l39').style.visibility = "hidden";
    }
    if (window.P_f1_n41 > window.P_f1_n42){
        document.getElementById('R_Lf1_l41').style.visibility = "hidden";
        document.getElementById('L_Rf1_l41').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l41').style.visibility = "visible";
        document.getElementById('L_Rf1_l41').style.visibility = "hidden";
    }
    if (window.P_f1_n43 > window.P_f1_n44){
        document.getElementById('R_Lf1_l43').style.visibility = "hidden";
        document.getElementById('L_Rf1_l43').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l43').style.visibility = "visible";
        document.getElementById('L_Rf1_l43').style.visibility = "hidden";
    }
    if (window.P_f1_n45 > window.P_f1_n46){
        document.getElementById('R_Lf1_l45').style.visibility = "hidden";
        document.getElementById('L_Rf1_l45').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l45').style.visibility = "visible";
        document.getElementById('L_Rf1_l45').style.visibility = "hidden";
    }
    if (window.P_f1_n47 > window.P_f1_n48){
        document.getElementById('R_Lf1_l47').style.visibility = "hidden";
        document.getElementById('L_Rf1_l47').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l47').style.visibility = "visible";
        document.getElementById('L_Rf1_l47').style.visibility = "hidden";
    }
    if (window.P_f1_n49 > window.P_f1_n50){
        document.getElementById('R_Lf1_l49').style.visibility = "hidden";
        document.getElementById('L_Rf1_l49').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l49').style.visibility = "visible";
        document.getElementById('L_Rf1_l49').style.visibility = "hidden";
    }
    if (window.P_f1_n51 > window.P_f1_n52){
        document.getElementById('R_Lf1_l51').style.visibility = "hidden";
        document.getElementById('L_Rf1_l51').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l51').style.visibility = "visible";
        document.getElementById('L_Rf1_l51').style.visibility = "hidden";
    }
    if (window.P_f1_n53 > window.P_f1_n54){
        document.getElementById('R_Lf1_l53').style.visibility = "hidden";
        document.getElementById('L_Rf1_l53').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l53').style.visibility = "visible";
        document.getElementById('L_Rf1_l53').style.visibility = "hidden";
    }
    if (window.P_f1_n55 > window.P_f1_n56){
        document.getElementById('R_Lf1_l55').style.visibility = "hidden";
        document.getElementById('L_Rf1_l55').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l55').style.visibility = "visible";
        document.getElementById('L_Rf1_l55').style.visibility = "hidden";
    }
    if (window.P_f1_n57 > window.P_f1_n58){
        document.getElementById('R_Lf1_l57').style.visibility = "hidden";
        document.getElementById('L_Rf1_l57').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l57').style.visibility = "visible";
        document.getElementById('L_Rf1_l57').style.visibility = "hidden";
    }
    if (window.P_f1_n59 > window.P_f1_n60){
        document.getElementById('R_Lf1_l59').style.visibility = "hidden";
        document.getElementById('L_Rf1_l59').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l59').style.visibility = "visible";
        document.getElementById('L_Rf1_l59').style.visibility = "hidden";
    }
    if (window.P_f1_n61 > window.P_f1_n62){
        document.getElementById('R_Lf1_l61').style.visibility = "hidden";
        document.getElementById('L_Rf1_l61').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l61').style.visibility = "visible";
        document.getElementById('L_Rf1_l61').style.visibility = "hidden";
    }
    if (window.P_f1_n63 > window.P_f1_n64){
        document.getElementById('R_Lf1_l63').style.visibility = "hidden";
        document.getElementById('L_Rf1_l63').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l63').style.visibility = "visible";
        document.getElementById('L_Rf1_l63').style.visibility = "hidden";
    }
    if (window.P_f1_n65 > window.P_f1_n66){
        document.getElementById('R_Lf1_l65').style.visibility = "hidden";
        document.getElementById('L_Rf1_l65').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l65').style.visibility = "visible";
        document.getElementById('L_Rf1_l65').style.visibility = "hidden";
    }
    if (window.P_f1_n67 > window.P_f1_n68){
        document.getElementById('R_Lf1_l67').style.visibility = "hidden";
        document.getElementById('L_Rf1_l67').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l67').style.visibility = "visible";
        document.getElementById('L_Rf1_l67').style.visibility = "hidden";
    }
    if (window.P_f1_n69 > window.P_f1_n70){
        document.getElementById('R_Lf1_l69').style.visibility = "hidden";
        document.getElementById('L_Rf1_l69').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l69').style.visibility = "visible";
        document.getElementById('L_Rf1_l69').style.visibility = "hidden";
    }
    if (window.P_f1_n71 > window.P_f1_n72){
        document.getElementById('R_Lf1_l71').style.visibility = "hidden";
        document.getElementById('L_Rf1_l71').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l71').style.visibility = "visible";
        document.getElementById('L_Rf1_l71').style.visibility = "hidden";
    }
    if (window.P_f1_n73 > window.P_f1_n74){
        document.getElementById('R_Lf1_l73').style.visibility = "hidden";
        document.getElementById('L_Rf1_l73').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l73').style.visibility = "visible";
        document.getElementById('L_Rf1_l73').style.visibility = "hidden";
    }
    if (window.P_f1_n75 > window.P_f1_n76){
        document.getElementById('R_Lf1_l75').style.visibility = "hidden";
        document.getElementById('L_Rf1_l75').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l75').style.visibility = "visible";
        document.getElementById('L_Rf1_l75').style.visibility = "hidden";
    }
    if (window.P_f1_n77 > window.P_f1_n78){
        document.getElementById('R_Lf1_l77').style.visibility = "hidden";
        document.getElementById('L_Rf1_l77').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l77').style.visibility = "visible";
        document.getElementById('L_Rf1_l77').style.visibility = "hidden";
    }
    if (window.P_f1_n79 > window.P_f1_n80){
        document.getElementById('R_Lf1_l79').style.visibility = "hidden";
        document.getElementById('L_Rf1_l79').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l79').style.visibility = "visible";
        document.getElementById('L_Rf1_l79').style.visibility = "hidden";
    }
    if (window.P_f2_n1 > window.P_f2_n2){
        document.getElementById('R_Lf2_l1').style.visibility = "hidden";
        document.getElementById('L_Rf2_l1').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l1').style.visibility = "visible";
        document.getElementById('L_Rf2_l1').style.visibility = "hidden";
    }
    if (window.P_f2_n3 > window.P_f2_n4){
        document.getElementById('R_Lf2_l3').style.visibility = "hidden";
        document.getElementById('L_Rf2_l3').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l3').style.visibility = "visible";
        document.getElementById('L_Rf2_l3').style.visibility = "hidden";
    }
    if (window.P_f2_n5 > window.P_f2_n6){
        document.getElementById('R_Lf2_l5').style.visibility = "hidden";
        document.getElementById('L_Rf2_l5').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l5').style.visibility = "visible";
        document.getElementById('L_Rf2_l5').style.visibility = "hidden";
    }
    if (window.P_f2_n7 > window.P_f2_n8){
        document.getElementById('R_Lf2_l7').style.visibility = "hidden";
        document.getElementById('L_Rf2_l7').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l7').style.visibility = "visible";
        document.getElementById('L_Rf2_l7').style.visibility = "hidden";
    }
    if (window.P_f2_n9 > window.P_f2_n10){
        document.getElementById('R_Lf2_l9').style.visibility = "hidden";
        document.getElementById('L_Rf2_l9').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l9').style.visibility = "visible";
        document.getElementById('L_Rf2_l9').style.visibility = "hidden";
    }
    if (window.P_f2_n11 > window.P_f2_n12){
        document.getElementById('R_Lf2_l11').style.visibility = "hidden";
        document.getElementById('L_Rf2_l11').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l11').style.visibility = "visible";
        document.getElementById('L_Rf2_l11').style.visibility = "hidden";
    }
    if (window.P_f2_n13 > window.P_f2_n14){
        document.getElementById('R_Lf2_l13').style.visibility = "hidden";
        document.getElementById('L_Rf2_l13').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l13').style.visibility = "visible";
        document.getElementById('L_Rf2_l13').style.visibility = "hidden";
    }
    if (window.P_f2_n15 > window.P_f2_n16){
        document.getElementById('R_Lf2_l15').style.visibility = "hidden";
        document.getElementById('L_Rf2_l15').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l15').style.visibility = "visible";
        document.getElementById('L_Rf2_l15').style.visibility = "hidden";
    }
    if (window.P_f2_n17 > window.P_f2_n18){
        document.getElementById('R_Lf2_l17').style.visibility = "hidden";
        document.getElementById('L_Rf2_l17').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l17').style.visibility = "visible";
        document.getElementById('L_Rf2_l17').style.visibility = "hidden";
    }
    if (window.P_f2_n19 > window.P_f2_n20){
        document.getElementById('R_Lf2_l19').style.visibility = "hidden";
        document.getElementById('L_Rf2_l19').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l19').style.visibility = "visible";
        document.getElementById('L_Rf2_l19').style.visibility = "hidden";
    }
    if (window.P_f2_n21 > window.P_f2_n22){
        document.getElementById('R_Lf2_l21').style.visibility = "hidden";
        document.getElementById('L_Rf2_l21').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l21').style.visibility = "visible";
        document.getElementById('L_Rf2_l21').style.visibility = "hidden";
    }
    if (window.P_f2_n23 > window.P_f2_n24){
        document.getElementById('R_Lf2_l23').style.visibility = "hidden";
        document.getElementById('L_Rf2_l23').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l23').style.visibility = "visible";
        document.getElementById('L_Rf2_l23').style.visibility = "hidden";
    }
    if (window.P_f2_n25 > window.P_f2_n26){
        document.getElementById('R_Lf2_l25').style.visibility = "hidden";
        document.getElementById('L_Rf2_l25').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l25').style.visibility = "visible";
        document.getElementById('L_Rf2_l25').style.visibility = "hidden";
    }
    if (window.P_f2_n27 > window.P_f2_n28){
        document.getElementById('R_Lf2_l27').style.visibility = "hidden";
        document.getElementById('L_Rf2_l27').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l27').style.visibility = "visible";
        document.getElementById('L_Rf2_l27').style.visibility = "hidden";
    }
    if (window.P_f2_n29 > window.P_f2_n30){
        document.getElementById('R_Lf2_l29').style.visibility = "hidden";
        document.getElementById('L_Rf2_l29').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l29').style.visibility = "visible";
        document.getElementById('L_Rf2_l29').style.visibility = "hidden";
    }
    if (window.P_f2_n31 > window.P_f2_n32){
        document.getElementById('R_Lf2_l31').style.visibility = "hidden";
        document.getElementById('L_Rf2_l31').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l31').style.visibility = "visible";
        document.getElementById('L_Rf2_l31').style.visibility = "hidden";
    }
    if (window.P_f2_n33 > window.P_f2_n34){
        document.getElementById('R_Lf2_l33').style.visibility = "hidden";
        document.getElementById('L_Rf2_l33').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l33').style.visibility = "visible";
        document.getElementById('L_Rf2_l33').style.visibility = "hidden";
    }
    if (window.P_f2_n35 > window.P_f2_n36){
        document.getElementById('R_Lf2_l35').style.visibility = "hidden";
        document.getElementById('L_Rf2_l35').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l35').style.visibility = "visible";
        document.getElementById('L_Rf2_l35').style.visibility = "hidden";
    }
    if (window.P_f2_n37 > window.P_f2_n38){
        document.getElementById('R_Lf2_l37').style.visibility = "hidden";
        document.getElementById('L_Rf2_l37').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l37').style.visibility = "visible";
        document.getElementById('L_Rf2_l37').style.visibility = "hidden";
    }
    if (window.P_f2_n39 > window.P_f2_n40){
        document.getElementById('R_Lf2_l39').style.visibility = "hidden";
        document.getElementById('L_Rf2_l39').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l39').style.visibility = "visible";
        document.getElementById('L_Rf2_l39').style.visibility = "hidden";
    }
    if (window.P_f2_n41 > window.P_f2_n42){
        document.getElementById('R_Lf2_l41').style.visibility = "hidden";
        document.getElementById('L_Rf2_l41').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l41').style.visibility = "visible";
        document.getElementById('L_Rf2_l41').style.visibility = "hidden";
    }
    if (window.P_f2_n43 > window.P_f2_n44){
        document.getElementById('R_Lf2_l43').style.visibility = "hidden";
        document.getElementById('L_Rf2_l43').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l43').style.visibility = "visible";
        document.getElementById('L_Rf2_l43').style.visibility = "hidden";
    }
    if (window.P_f2_n45 > window.P_f2_n46){
        document.getElementById('R_Lf2_l45').style.visibility = "hidden";
        document.getElementById('L_Rf2_l45').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l45').style.visibility = "visible";
        document.getElementById('L_Rf2_l45').style.visibility = "hidden";
    }
    if (window.P_f2_n47 > window.P_f2_n48){
        document.getElementById('R_Lf2_l47').style.visibility = "hidden";
        document.getElementById('L_Rf2_l47').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l47').style.visibility = "visible";
        document.getElementById('L_Rf2_l47').style.visibility = "hidden";
    }
    if (window.P_f2_n49 > window.P_f2_n50){
        document.getElementById('R_Lf2_l49').style.visibility = "hidden";
        document.getElementById('L_Rf2_l49').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l49').style.visibility = "visible";
        document.getElementById('L_Rf2_l49').style.visibility = "hidden";
    }
    if (window.P_f2_n51 > window.P_f2_n52){
        document.getElementById('R_Lf2_l51').style.visibility = "hidden";
        document.getElementById('L_Rf2_l51').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l51').style.visibility = "visible";
        document.getElementById('L_Rf2_l51').style.visibility = "hidden";
    }
    if (window.P_f2_n53 > window.P_f2_n54){
        document.getElementById('R_Lf2_l53').style.visibility = "hidden";
        document.getElementById('L_Rf2_l53').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l53').style.visibility = "visible";
        document.getElementById('L_Rf2_l53').style.visibility = "hidden";
    }
    if (window.P_f2_n55 > window.P_f2_n56){
        document.getElementById('R_Lf2_l55').style.visibility = "hidden";
        document.getElementById('L_Rf2_l55').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l55').style.visibility = "visible";
        document.getElementById('L_Rf2_l55').style.visibility = "hidden";
    }
    if (window.P_f2_n57 > window.P_f2_n58){
        document.getElementById('R_Lf2_l57').style.visibility = "hidden";
        document.getElementById('L_Rf2_l57').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l57').style.visibility = "visible";
        document.getElementById('L_Rf2_l57').style.visibility = "hidden";
    }
    if (window.P_f2_n59 > window.P_f2_n60){
        document.getElementById('R_Lf2_l59').style.visibility = "hidden";
        document.getElementById('L_Rf2_l59').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l59').style.visibility = "visible";
        document.getElementById('L_Rf2_l59').style.visibility = "hidden";
    }
    if (window.P_f2_n61 > window.P_f2_n62){
        document.getElementById('R_Lf2_l61').style.visibility = "hidden";
        document.getElementById('L_Rf2_l61').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l61').style.visibility = "visible";
        document.getElementById('L_Rf2_l61').style.visibility = "hidden";
    }
    if (window.P_f2_n63 > window.P_f2_n64){
        document.getElementById('R_Lf2_l63').style.visibility = "hidden";
        document.getElementById('L_Rf2_l63').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l63').style.visibility = "visible";
        document.getElementById('L_Rf2_l63').style.visibility = "hidden";
    }
    if (window.P_f2_n65 > window.P_f2_n66){
        document.getElementById('R_Lf2_l65').style.visibility = "hidden";
        document.getElementById('L_Rf2_l65').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l65').style.visibility = "visible";
        document.getElementById('L_Rf2_l65').style.visibility = "hidden";
    }
    if (window.P_f2_n67 > window.P_f2_n68){
        document.getElementById('R_Lf2_l67').style.visibility = "hidden";
        document.getElementById('L_Rf2_l67').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l67').style.visibility = "visible";
        document.getElementById('L_Rf2_l67').style.visibility = "hidden";
    }
    if (window.P_f2_n69 > window.P_f2_n70){
        document.getElementById('R_Lf2_l69').style.visibility = "hidden";
        document.getElementById('L_Rf2_l69').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l69').style.visibility = "visible";
        document.getElementById('L_Rf2_l69').style.visibility = "hidden";
    }
    if (window.P_f2_n71 > window.P_f2_n72){
        document.getElementById('R_Lf2_l71').style.visibility = "hidden";
        document.getElementById('L_Rf2_l71').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l71').style.visibility = "visible";
        document.getElementById('L_Rf2_l71').style.visibility = "hidden";
    }
    if (window.P_f2_n73 > window.P_f2_n74){
        document.getElementById('R_Lf2_l73').style.visibility = "hidden";
        document.getElementById('L_Rf2_l73').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l73').style.visibility = "visible";
        document.getElementById('L_Rf2_l73').style.visibility = "hidden";
    }
    if (window.P_f2_n75 > window.P_f2_n76){
        document.getElementById('R_Lf2_l75').style.visibility = "hidden";
        document.getElementById('L_Rf2_l75').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l75').style.visibility = "visible";
        document.getElementById('L_Rf2_l75').style.visibility = "hidden";
    }
    if (window.P_f2_n77 > window.P_f2_n78){
        document.getElementById('R_Lf2_l77').style.visibility = "hidden";
        document.getElementById('L_Rf2_l77').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l77').style.visibility = "visible";
        document.getElementById('L_Rf2_l77').style.visibility = "hidden";
    }
    if (window.P_f2_n79 > window.P_f2_n80){
        document.getElementById('R_Lf2_l79').style.visibility = "hidden";
        document.getElementById('L_Rf2_l79').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l79').style.visibility = "visible";
        document.getElementById('L_Rf2_l79').style.visibility = "hidden";
    }
    if (window.P_f3_n1 > window.P_f3_n2){
        document.getElementById('R_Lf3_l1').style.visibility = "hidden";
        document.getElementById('L_Rf3_l1').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l1').style.visibility = "visible";
        document.getElementById('L_Rf3_l1').style.visibility = "hidden";
    }
    if (window.P_f3_n3 > window.P_f3_n4){
        document.getElementById('R_Lf3_l3').style.visibility = "hidden";
        document.getElementById('L_Rf3_l3').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l3').style.visibility = "visible";
        document.getElementById('L_Rf3_l3').style.visibility = "hidden";
    }
    if (window.P_f3_n5 > window.P_f3_n6){
        document.getElementById('R_Lf3_l5').style.visibility = "hidden";
        document.getElementById('L_Rf3_l5').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l5').style.visibility = "visible";
        document.getElementById('L_Rf3_l5').style.visibility = "hidden";
    }
    if (window.P_f3_n7 > window.P_f3_n8){
        document.getElementById('R_Lf3_l7').style.visibility = "hidden";
        document.getElementById('L_Rf3_l7').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l7').style.visibility = "visible";
        document.getElementById('L_Rf3_l7').style.visibility = "hidden";
    }
    if (window.P_f3_n9 > window.P_f3_n10){
        document.getElementById('R_Lf3_l9').style.visibility = "hidden";
        document.getElementById('L_Rf3_l9').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l9').style.visibility = "visible";
        document.getElementById('L_Rf3_l9').style.visibility = "hidden";
    }




    if (window.P_f0_n1 > window.P_f0_n3){
        document.getElementById('R_Lf0_l2').style.visibility = "hidden";
        document.getElementById('L_Rf0_l2').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l2').style.visibility = "visible";
        document.getElementById('L_Rf0_l2').style.visibility = "hidden";
    }
    if (window.P_f0_n3 > window.P_f0_n5){
        document.getElementById('R_Lf0_l4').style.visibility = "hidden";
        document.getElementById('L_Rf0_l4').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l4').style.visibility = "visible";
        document.getElementById('L_Rf0_l4').style.visibility = "hidden";
    }
    if (window.P_f0_n5 > window.P_f0_n7){
        document.getElementById('R_Lf0_l6').style.visibility = "hidden";
        document.getElementById('L_Rf0_l6').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l6').style.visibility = "visible";
        document.getElementById('L_Rf0_l6').style.visibility = "hidden";
    }
    if (window.P_f0_n7 > window.P_f0_n9){
        document.getElementById('R_Lf0_l8').style.visibility = "hidden";
        document.getElementById('L_Rf0_l8').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l8').style.visibility = "visible";
        document.getElementById('L_Rf0_l8').style.visibility = "hidden";
    }
    if (window.P_f0_n9 > window.P_f0_n11){
        document.getElementById('R_Lf0_l10').style.visibility = "hidden";
        document.getElementById('L_Rf0_l10').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l10').style.visibility = "visible";
        document.getElementById('L_Rf0_l10').style.visibility = "hidden";
    }
    if (window.P_f0_n11 > window.P_f0_n13){
        document.getElementById('R_Lf0_l12').style.visibility = "hidden";
        document.getElementById('L_Rf0_l12').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l12').style.visibility = "visible";
        document.getElementById('L_Rf0_l12').style.visibility = "hidden";
    }
    if (window.P_f0_n13 > window.P_f0_n15){
        document.getElementById('R_Lf0_l14').style.visibility = "hidden";
        document.getElementById('L_Rf0_l14').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l14').style.visibility = "visible";
        document.getElementById('L_Rf0_l14').style.visibility = "hidden";
    }
    if (window.P_f0_n15 > window.P_f0_n17){
        document.getElementById('R_Lf0_l16').style.visibility = "hidden";
        document.getElementById('L_Rf0_l16').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l16').style.visibility = "visible";
        document.getElementById('L_Rf0_l16').style.visibility = "hidden";
    }
    if (window.P_f0_n17 > window.P_f0_n19){
        document.getElementById('R_Lf0_l18').style.visibility = "hidden";
        document.getElementById('L_Rf0_l18').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l18').style.visibility = "visible";
        document.getElementById('L_Rf0_l18').style.visibility = "hidden";
    }
    if (window.P_f0_n19 > window.P_f0_n21){
        document.getElementById('R_Lf0_l20').style.visibility = "hidden";
        document.getElementById('L_Rf0_l20').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l20').style.visibility = "visible";
        document.getElementById('L_Rf0_l20').style.visibility = "hidden";
    }
    if (window.P_f0_n21 > window.P_f0_n23){
        document.getElementById('R_Lf0_l22').style.visibility = "hidden";
        document.getElementById('L_Rf0_l22').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l22').style.visibility = "visible";
        document.getElementById('L_Rf0_l22').style.visibility = "hidden";
    }
    if (window.P_f0_n23 > window.P_f0_n25){
        document.getElementById('R_Lf0_l24').style.visibility = "hidden";
        document.getElementById('L_Rf0_l24').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l24').style.visibility = "visible";
        document.getElementById('L_Rf0_l24').style.visibility = "hidden";
    }
    if (window.P_f0_n25 > window.P_f0_n27){
        document.getElementById('R_Lf0_l26').style.visibility = "hidden";
        document.getElementById('L_Rf0_l26').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l26').style.visibility = "visible";
        document.getElementById('L_Rf0_l26').style.visibility = "hidden";
    }
    if (window.P_f0_n27 > window.P_f0_n29){
        document.getElementById('R_Lf0_l28').style.visibility = "hidden";
        document.getElementById('L_Rf0_l28').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l28').style.visibility = "visible";
        document.getElementById('L_Rf0_l28').style.visibility = "hidden";
    }
    if (window.P_f0_n29 > window.P_f0_n31){
        document.getElementById('R_Lf0_l30').style.visibility = "hidden";
        document.getElementById('L_Rf0_l30').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l30').style.visibility = "visible";
        document.getElementById('L_Rf0_l30').style.visibility = "hidden";
    }
    if (window.P_f0_n31 > window.P_f0_n33){
        document.getElementById('R_Lf0_l32').style.visibility = "hidden";
        document.getElementById('L_Rf0_l32').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l32').style.visibility = "visible";
        document.getElementById('L_Rf0_l32').style.visibility = "hidden";
    }
    if (window.P_f0_n33 > window.P_f0_n35){
        document.getElementById('R_Lf0_l34').style.visibility = "hidden";
        document.getElementById('L_Rf0_l34').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l34').style.visibility = "visible";
        document.getElementById('L_Rf0_l34').style.visibility = "hidden";
    }
    if (window.P_f0_n35 > window.P_f0_n37){
        document.getElementById('R_Lf0_l36').style.visibility = "hidden";
        document.getElementById('L_Rf0_l36').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l36').style.visibility = "visible";
        document.getElementById('L_Rf0_l36').style.visibility = "hidden";
    }
    if (window.P_f0_n37 > window.P_f0_n39){
        document.getElementById('R_Lf0_l38').style.visibility = "hidden";
        document.getElementById('L_Rf0_l38').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l38').style.visibility = "visible";
        document.getElementById('L_Rf0_l38').style.visibility = "hidden";
    }
    if (window.P_f0_n39 > window.P_f0_n41){
        document.getElementById('R_Lf0_l40').style.visibility = "hidden";
        document.getElementById('L_Rf0_l40').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l40').style.visibility = "visible";
        document.getElementById('L_Rf0_l40').style.visibility = "hidden";
    }
    if (window.P_f0_n41 > window.P_f0_n43){
        document.getElementById('R_Lf0_l42').style.visibility = "hidden";
        document.getElementById('L_Rf0_l42').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l42').style.visibility = "visible";
        document.getElementById('L_Rf0_l42').style.visibility = "hidden";
    }
    if (window.P_f0_n43 > window.P_f0_n45){
        document.getElementById('R_Lf0_l44').style.visibility = "hidden";
        document.getElementById('L_Rf0_l44').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l44').style.visibility = "visible";
        document.getElementById('L_Rf0_l44').style.visibility = "hidden";
    }
    if (window.P_f0_n45 > window.P_f0_n47){
        document.getElementById('R_Lf0_l46').style.visibility = "hidden";
        document.getElementById('L_Rf0_l46').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l46').style.visibility = "visible";
        document.getElementById('L_Rf0_l46').style.visibility = "hidden";
    }
    if (window.P_f0_n47 > window.P_f0_n49){
        document.getElementById('R_Lf0_l48').style.visibility = "hidden";
        document.getElementById('L_Rf0_l48').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l48').style.visibility = "visible";
        document.getElementById('L_Rf0_l48').style.visibility = "hidden";
    }
    if (window.P_f0_n49 > window.P_f0_n51){
        document.getElementById('R_Lf0_l50').style.visibility = "hidden";
        document.getElementById('L_Rf0_l50').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l50').style.visibility = "visible";
        document.getElementById('L_Rf0_l50').style.visibility = "hidden";
    }
    if (window.P_f0_n51 > window.P_f0_n53){
        document.getElementById('R_Lf0_l52').style.visibility = "hidden";
        document.getElementById('L_Rf0_l52').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l52').style.visibility = "visible";
        document.getElementById('L_Rf0_l52').style.visibility = "hidden";
    }
    if (window.P_f0_n53 > window.P_f0_n55){
        document.getElementById('R_Lf0_l54').style.visibility = "hidden";
        document.getElementById('L_Rf0_l54').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l54').style.visibility = "visible";
        document.getElementById('L_Rf0_l54').style.visibility = "hidden";
    }
    if (window.P_f0_n55 > window.P_f0_n57){
        document.getElementById('R_Lf0_l56').style.visibility = "hidden";
        document.getElementById('L_Rf0_l56').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l56').style.visibility = "visible";
        document.getElementById('L_Rf0_l56').style.visibility = "hidden";
    }
    if (window.P_f0_n57 > window.P_f0_n59){
        document.getElementById('R_Lf0_l58').style.visibility = "hidden";
        document.getElementById('L_Rf0_l58').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l58').style.visibility = "visible";
        document.getElementById('L_Rf0_l58').style.visibility = "hidden";
    }
    if (window.P_f0_n59 > window.P_f0_n61){
        document.getElementById('R_Lf0_l60').style.visibility = "hidden";
        document.getElementById('L_Rf0_l60').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l60').style.visibility = "visible";
        document.getElementById('L_Rf0_l60').style.visibility = "hidden";
    }
    if (window.P_f0_n61 > window.P_f0_n63){
        document.getElementById('R_Lf0_l62').style.visibility = "hidden";
        document.getElementById('L_Rf0_l62').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l62').style.visibility = "visible";
        document.getElementById('L_Rf0_l62').style.visibility = "hidden";
    }
    if (window.P_f0_n63 > window.P_f0_n65){
        document.getElementById('R_Lf0_l64').style.visibility = "hidden";
        document.getElementById('L_Rf0_l64').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l64').style.visibility = "visible";
        document.getElementById('L_Rf0_l64').style.visibility = "hidden";
    }
    if (window.P_f0_n65 > window.P_f0_n67){
        document.getElementById('R_Lf0_l66').style.visibility = "hidden";
        document.getElementById('L_Rf0_l66').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l66').style.visibility = "visible";
        document.getElementById('L_Rf0_l66').style.visibility = "hidden";
    }
    if (window.P_f0_n67 > window.P_f0_n69){
        document.getElementById('R_Lf0_l68').style.visibility = "hidden";
        document.getElementById('L_Rf0_l68').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l68').style.visibility = "visible";
        document.getElementById('L_Rf0_l68').style.visibility = "hidden";
    }
    if (window.P_f0_n69 > window.P_f0_n71){
        document.getElementById('R_Lf0_l70').style.visibility = "hidden";
        document.getElementById('L_Rf0_l70').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l70').style.visibility = "visible";
        document.getElementById('L_Rf0_l70').style.visibility = "hidden";
    }
    if (window.P_f0_n71 > window.P_f0_n73){
        document.getElementById('R_Lf0_l72').style.visibility = "hidden";
        document.getElementById('L_Rf0_l72').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l72').style.visibility = "visible";
        document.getElementById('L_Rf0_l72').style.visibility = "hidden";
    }
    if (window.P_f0_n73 > window.P_f0_n75){
        document.getElementById('R_Lf0_l74').style.visibility = "hidden";
        document.getElementById('L_Rf0_l74').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l74').style.visibility = "visible";
        document.getElementById('L_Rf0_l74').style.visibility = "hidden";
    }
    if (window.P_f0_n75 > window.P_f0_n77){
        document.getElementById('R_Lf0_l76').style.visibility = "hidden";
        document.getElementById('L_Rf0_l76').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l76').style.visibility = "visible";
        document.getElementById('L_Rf0_l76').style.visibility = "hidden";
    }
    if (window.P_f0_n77 > window.P_f0_n79){
        document.getElementById('R_Lf0_l78').style.visibility = "hidden";
        document.getElementById('L_Rf0_l78').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l78').style.visibility = "visible";
        document.getElementById('L_Rf0_l78').style.visibility = "hidden";
    }
    if (window.P_f1_n1 > window.P_f1_n3){
        document.getElementById('R_Lf1_l2').style.visibility = "hidden";
        document.getElementById('L_Rf1_l2').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l2').style.visibility = "visible";
        document.getElementById('L_Rf1_l2').style.visibility = "hidden";
    }
    if (window.P_f1_n3 > window.P_f1_n5){
        document.getElementById('R_Lf1_l4').style.visibility = "hidden";
        document.getElementById('L_Rf1_l4').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l4').style.visibility = "visible";
        document.getElementById('L_Rf1_l4').style.visibility = "hidden";
    }
    if (window.P_f1_n5 > window.P_f1_n7){
        document.getElementById('R_Lf1_l6').style.visibility = "hidden";
        document.getElementById('L_Rf1_l6').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l6').style.visibility = "visible";
        document.getElementById('L_Rf1_l6').style.visibility = "hidden";
    }
    if (window.P_f1_n7 > window.P_f1_n9){
        document.getElementById('R_Lf1_l8').style.visibility = "hidden";
        document.getElementById('L_Rf1_l8').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l8').style.visibility = "visible";
        document.getElementById('L_Rf1_l8').style.visibility = "hidden";
    }
    if (window.P_f1_n9 > window.P_f1_n11){
        document.getElementById('R_Lf1_l10').style.visibility = "hidden";
        document.getElementById('L_Rf1_l10').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l10').style.visibility = "visible";
        document.getElementById('L_Rf1_l10').style.visibility = "hidden";
    }
    if (window.P_f1_n11 > window.P_f1_n13){
        document.getElementById('R_Lf1_l12').style.visibility = "hidden";
        document.getElementById('L_Rf1_l12').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l12').style.visibility = "visible";
        document.getElementById('L_Rf1_l12').style.visibility = "hidden";
    }
    if (window.P_f1_n13 > window.P_f1_n15){
        document.getElementById('R_Lf1_l14').style.visibility = "hidden";
        document.getElementById('L_Rf1_l14').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l14').style.visibility = "visible";
        document.getElementById('L_Rf1_l14').style.visibility = "hidden";
    }
    if (window.P_f1_n15 > window.P_f1_n17){
        document.getElementById('R_Lf1_l16').style.visibility = "hidden";
        document.getElementById('L_Rf1_l16').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l16').style.visibility = "visible";
        document.getElementById('L_Rf1_l16').style.visibility = "hidden";
    }
    if (window.P_f1_n17 > window.P_f1_n19){
        document.getElementById('R_Lf1_l18').style.visibility = "hidden";
        document.getElementById('L_Rf1_l18').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l18').style.visibility = "visible";
        document.getElementById('L_Rf1_l18').style.visibility = "hidden";
    }
    if (window.P_f1_n19 > window.P_f1_n21){
        document.getElementById('R_Lf1_l20').style.visibility = "hidden";
        document.getElementById('L_Rf1_l20').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l20').style.visibility = "visible";
        document.getElementById('L_Rf1_l20').style.visibility = "hidden";
    }
    if (window.P_f1_n21 > window.P_f1_n23){
        document.getElementById('R_Lf1_l22').style.visibility = "hidden";
        document.getElementById('L_Rf1_l22').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l22').style.visibility = "visible";
        document.getElementById('L_Rf1_l22').style.visibility = "hidden";
    }
    if (window.P_f1_n23 > window.P_f1_n25){
        document.getElementById('R_Lf1_l24').style.visibility = "hidden";
        document.getElementById('L_Rf1_l24').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l24').style.visibility = "visible";
        document.getElementById('L_Rf1_l24').style.visibility = "hidden";
    }
    if (window.P_f1_n25 > window.P_f1_n27){
        document.getElementById('R_Lf1_l26').style.visibility = "hidden";
        document.getElementById('L_Rf1_l26').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l26').style.visibility = "visible";
        document.getElementById('L_Rf1_l26').style.visibility = "hidden";
    }
    if (window.P_f1_n27 > window.P_f1_n29){
        document.getElementById('R_Lf1_l28').style.visibility = "hidden";
        document.getElementById('L_Rf1_l28').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l28').style.visibility = "visible";
        document.getElementById('L_Rf1_l28').style.visibility = "hidden";
    }
    if (window.P_f1_n29 > window.P_f1_n31){
        document.getElementById('R_Lf1_l30').style.visibility = "hidden";
        document.getElementById('L_Rf1_l30').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l30').style.visibility = "visible";
        document.getElementById('L_Rf1_l30').style.visibility = "hidden";
    }
    if (window.P_f1_n31 > window.P_f1_n33){
        document.getElementById('R_Lf1_l32').style.visibility = "hidden";
        document.getElementById('L_Rf1_l32').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l32').style.visibility = "visible";
        document.getElementById('L_Rf1_l32').style.visibility = "hidden";
    }
    if (window.P_f1_n33 > window.P_f1_n35){
        document.getElementById('R_Lf1_l34').style.visibility = "hidden";
        document.getElementById('L_Rf1_l34').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l34').style.visibility = "visible";
        document.getElementById('L_Rf1_l34').style.visibility = "hidden";
    }
    if (window.P_f1_n35 > window.P_f1_n37){
        document.getElementById('R_Lf1_l36').style.visibility = "hidden";
        document.getElementById('L_Rf1_l36').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l36').style.visibility = "visible";
        document.getElementById('L_Rf1_l36').style.visibility = "hidden";
    }
    if (window.P_f1_n37 > window.P_f1_n39){
        document.getElementById('R_Lf1_l38').style.visibility = "hidden";
        document.getElementById('L_Rf1_l38').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l38').style.visibility = "visible";
        document.getElementById('L_Rf1_l38').style.visibility = "hidden";
    }
    if (window.P_f1_n39 > window.P_f1_n41){
        document.getElementById('R_Lf1_l40').style.visibility = "hidden";
        document.getElementById('L_Rf1_l40').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l40').style.visibility = "visible";
        document.getElementById('L_Rf1_l40').style.visibility = "hidden";
    }
    if (window.P_f1_n41 > window.P_f1_n43){
        document.getElementById('R_Lf1_l42').style.visibility = "hidden";
        document.getElementById('L_Rf1_l42').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l42').style.visibility = "visible";
        document.getElementById('L_Rf1_l42').style.visibility = "hidden";
    }
    if (window.P_f1_n43 > window.P_f1_n45){
        document.getElementById('R_Lf1_l44').style.visibility = "hidden";
        document.getElementById('L_Rf1_l44').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l44').style.visibility = "visible";
        document.getElementById('L_Rf1_l44').style.visibility = "hidden";
    }
    if (window.P_f1_n45 > window.P_f1_n47){
        document.getElementById('R_Lf1_l46').style.visibility = "hidden";
        document.getElementById('L_Rf1_l46').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l46').style.visibility = "visible";
        document.getElementById('L_Rf1_l46').style.visibility = "hidden";
    }
    if (window.P_f1_n47 > window.P_f1_n49){
        document.getElementById('R_Lf1_l48').style.visibility = "hidden";
        document.getElementById('L_Rf1_l48').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l48').style.visibility = "visible";
        document.getElementById('L_Rf1_l48').style.visibility = "hidden";
    }
    if (window.P_f1_n49 > window.P_f1_n51){
        document.getElementById('R_Lf1_l50').style.visibility = "hidden";
        document.getElementById('L_Rf1_l50').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l50').style.visibility = "visible";
        document.getElementById('L_Rf1_l50').style.visibility = "hidden";
    }
    if (window.P_f1_n51 > window.P_f1_n53){
        document.getElementById('R_Lf1_l52').style.visibility = "hidden";
        document.getElementById('L_Rf1_l52').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l52').style.visibility = "visible";
        document.getElementById('L_Rf1_l52').style.visibility = "hidden";
    }
    if (window.P_f1_n53 > window.P_f1_n55){
        document.getElementById('R_Lf1_l54').style.visibility = "hidden";
        document.getElementById('L_Rf1_l54').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l54').style.visibility = "visible";
        document.getElementById('L_Rf1_l54').style.visibility = "hidden";
    }
    if (window.P_f1_n55 > window.P_f1_n57){
        document.getElementById('R_Lf1_l56').style.visibility = "hidden";
        document.getElementById('L_Rf1_l56').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l56').style.visibility = "visible";
        document.getElementById('L_Rf1_l56').style.visibility = "hidden";
    }
    if (window.P_f1_n57 > window.P_f1_n59){
        document.getElementById('R_Lf1_l58').style.visibility = "hidden";
        document.getElementById('L_Rf1_l58').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l58').style.visibility = "visible";
        document.getElementById('L_Rf1_l58').style.visibility = "hidden";
    }
    if (window.P_f1_n59 > window.P_f1_n61){
        document.getElementById('R_Lf1_l60').style.visibility = "hidden";
        document.getElementById('L_Rf1_l60').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l60').style.visibility = "visible";
        document.getElementById('L_Rf1_l60').style.visibility = "hidden";
    }
    if (window.P_f1_n61 > window.P_f1_n63){
        document.getElementById('R_Lf1_l62').style.visibility = "hidden";
        document.getElementById('L_Rf1_l62').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l62').style.visibility = "visible";
        document.getElementById('L_Rf1_l62').style.visibility = "hidden";
    }
    if (window.P_f1_n63 > window.P_f1_n65){
        document.getElementById('R_Lf1_l64').style.visibility = "hidden";
        document.getElementById('L_Rf1_l64').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l64').style.visibility = "visible";
        document.getElementById('L_Rf1_l64').style.visibility = "hidden";
    }
    if (window.P_f1_n65 > window.P_f1_n67){
        document.getElementById('R_Lf1_l66').style.visibility = "hidden";
        document.getElementById('L_Rf1_l66').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l66').style.visibility = "visible";
        document.getElementById('L_Rf1_l66').style.visibility = "hidden";
    }
    if (window.P_f1_n67 > window.P_f1_n69){
        document.getElementById('R_Lf1_l68').style.visibility = "hidden";
        document.getElementById('L_Rf1_l68').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l68').style.visibility = "visible";
        document.getElementById('L_Rf1_l68').style.visibility = "hidden";
    }
    if (window.P_f1_n69 > window.P_f1_n71){
        document.getElementById('R_Lf1_l70').style.visibility = "hidden";
        document.getElementById('L_Rf1_l70').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l70').style.visibility = "visible";
        document.getElementById('L_Rf1_l70').style.visibility = "hidden";
    }
    if (window.P_f1_n71 > window.P_f1_n73){
        document.getElementById('R_Lf1_l72').style.visibility = "hidden";
        document.getElementById('L_Rf1_l72').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l72').style.visibility = "visible";
        document.getElementById('L_Rf1_l72').style.visibility = "hidden";
    }
    if (window.P_f1_n73 > window.P_f1_n75){
        document.getElementById('R_Lf1_l74').style.visibility = "hidden";
        document.getElementById('L_Rf1_l74').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l74').style.visibility = "visible";
        document.getElementById('L_Rf1_l74').style.visibility = "hidden";
    }
    if (window.P_f1_n75 > window.P_f1_n77){
        document.getElementById('R_Lf1_l76').style.visibility = "hidden";
        document.getElementById('L_Rf1_l76').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l76').style.visibility = "visible";
        document.getElementById('L_Rf1_l76').style.visibility = "hidden";
    }
    if (window.P_f1_n77 > window.P_f1_n79){
        document.getElementById('R_Lf1_l78').style.visibility = "hidden";
        document.getElementById('L_Rf1_l78').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l78').style.visibility = "visible";
        document.getElementById('L_Rf1_l78').style.visibility = "hidden";
    }
    if (window.P_f2_n1 > window.P_f2_n3){
        document.getElementById('R_Lf2_l2').style.visibility = "hidden";
        document.getElementById('L_Rf2_l2').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l2').style.visibility = "visible";
        document.getElementById('L_Rf2_l2').style.visibility = "hidden";
    }
    if (window.P_f2_n3 > window.P_f2_n5){
        document.getElementById('R_Lf2_l4').style.visibility = "hidden";
        document.getElementById('L_Rf2_l4').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l4').style.visibility = "visible";
        document.getElementById('L_Rf2_l4').style.visibility = "hidden";
    }
    if (window.P_f2_n5 > window.P_f2_n7){
        document.getElementById('R_Lf2_l6').style.visibility = "hidden";
        document.getElementById('L_Rf2_l6').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l6').style.visibility = "visible";
        document.getElementById('L_Rf2_l6').style.visibility = "hidden";
    }
    if (window.P_f2_n7 > window.P_f2_n9){
        document.getElementById('R_Lf2_l8').style.visibility = "hidden";
        document.getElementById('L_Rf2_l8').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l8').style.visibility = "visible";
        document.getElementById('L_Rf2_l8').style.visibility = "hidden";
    }
    if (window.P_f2_n9 > window.P_f2_n11){
        document.getElementById('R_Lf2_l10').style.visibility = "hidden";
        document.getElementById('L_Rf2_l10').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l10').style.visibility = "visible";
        document.getElementById('L_Rf2_l10').style.visibility = "hidden";
    }
    if (window.P_f2_n11 > window.P_f2_n13){
        document.getElementById('R_Lf2_l12').style.visibility = "hidden";
        document.getElementById('L_Rf2_l12').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l12').style.visibility = "visible";
        document.getElementById('L_Rf2_l12').style.visibility = "hidden";
    }
    if (window.P_f2_n13 > window.P_f2_n15){
        document.getElementById('R_Lf2_l14').style.visibility = "hidden";
        document.getElementById('L_Rf2_l14').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l14').style.visibility = "visible";
        document.getElementById('L_Rf2_l14').style.visibility = "hidden";
    }
    if (window.P_f2_n15 > window.P_f2_n17){
        document.getElementById('R_Lf2_l16').style.visibility = "hidden";
        document.getElementById('L_Rf2_l16').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l16').style.visibility = "visible";
        document.getElementById('L_Rf2_l16').style.visibility = "hidden";
    }
    if (window.P_f2_n17 > window.P_f2_n19){
        document.getElementById('R_Lf2_l18').style.visibility = "hidden";
        document.getElementById('L_Rf2_l18').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l18').style.visibility = "visible";
        document.getElementById('L_Rf2_l18').style.visibility = "hidden";
    }
    if (window.P_f2_n19 > window.P_f2_n21){
        document.getElementById('R_Lf2_l20').style.visibility = "hidden";
        document.getElementById('L_Rf2_l20').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l20').style.visibility = "visible";
        document.getElementById('L_Rf2_l20').style.visibility = "hidden";
    }
    if (window.P_f2_n21 > window.P_f2_n23){
        document.getElementById('R_Lf2_l22').style.visibility = "hidden";
        document.getElementById('L_Rf2_l22').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l22').style.visibility = "visible";
        document.getElementById('L_Rf2_l22').style.visibility = "hidden";
    }
    if (window.P_f2_n23 > window.P_f2_n25){
        document.getElementById('R_Lf2_l24').style.visibility = "hidden";
        document.getElementById('L_Rf2_l24').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l24').style.visibility = "visible";
        document.getElementById('L_Rf2_l24').style.visibility = "hidden";
    }
    if (window.P_f2_n25 > window.P_f2_n27){
        document.getElementById('R_Lf2_l26').style.visibility = "hidden";
        document.getElementById('L_Rf2_l26').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l26').style.visibility = "visible";
        document.getElementById('L_Rf2_l26').style.visibility = "hidden";
    }
    if (window.P_f2_n27 > window.P_f2_n29){
        document.getElementById('R_Lf2_l28').style.visibility = "hidden";
        document.getElementById('L_Rf2_l28').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l28').style.visibility = "visible";
        document.getElementById('L_Rf2_l28').style.visibility = "hidden";
    }
    if (window.P_f2_n29 > window.P_f2_n31){
        document.getElementById('R_Lf2_l30').style.visibility = "hidden";
        document.getElementById('L_Rf2_l30').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l30').style.visibility = "visible";
        document.getElementById('L_Rf2_l30').style.visibility = "hidden";
    }
    if (window.P_f2_n31 > window.P_f2_n33){
        document.getElementById('R_Lf2_l32').style.visibility = "hidden";
        document.getElementById('L_Rf2_l32').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l32').style.visibility = "visible";
        document.getElementById('L_Rf2_l32').style.visibility = "hidden";
    }
    if (window.P_f2_n33 > window.P_f2_n35){
        document.getElementById('R_Lf2_l34').style.visibility = "hidden";
        document.getElementById('L_Rf2_l34').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l34').style.visibility = "visible";
        document.getElementById('L_Rf2_l34').style.visibility = "hidden";
    }
    if (window.P_f2_n35 > window.P_f2_n37){
        document.getElementById('R_Lf2_l36').style.visibility = "hidden";
        document.getElementById('L_Rf2_l36').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l36').style.visibility = "visible";
        document.getElementById('L_Rf2_l36').style.visibility = "hidden";
    }
    if (window.P_f2_n37 > window.P_f2_n39){
        document.getElementById('R_Lf2_l38').style.visibility = "hidden";
        document.getElementById('L_Rf2_l38').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l38').style.visibility = "visible";
        document.getElementById('L_Rf2_l38').style.visibility = "hidden";
    }
    if (window.P_f2_n39 > window.P_f2_n41){
        document.getElementById('R_Lf2_l40').style.visibility = "hidden";
        document.getElementById('L_Rf2_l40').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l40').style.visibility = "visible";
        document.getElementById('L_Rf2_l40').style.visibility = "hidden";
    }
    if (window.P_f2_n41 > window.P_f2_n43){
        document.getElementById('R_Lf2_l42').style.visibility = "hidden";
        document.getElementById('L_Rf2_l42').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l42').style.visibility = "visible";
        document.getElementById('L_Rf2_l42').style.visibility = "hidden";
    }
    if (window.P_f2_n43 > window.P_f2_n45){
        document.getElementById('R_Lf2_l44').style.visibility = "hidden";
        document.getElementById('L_Rf2_l44').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l44').style.visibility = "visible";
        document.getElementById('L_Rf2_l44').style.visibility = "hidden";
    }
    if (window.P_f2_n45 > window.P_f2_n47){
        document.getElementById('R_Lf2_l46').style.visibility = "hidden";
        document.getElementById('L_Rf2_l46').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l46').style.visibility = "visible";
        document.getElementById('L_Rf2_l46').style.visibility = "hidden";
    }
    if (window.P_f2_n47 > window.P_f2_n49){
        document.getElementById('R_Lf2_l48').style.visibility = "hidden";
        document.getElementById('L_Rf2_l48').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l48').style.visibility = "visible";
        document.getElementById('L_Rf2_l48').style.visibility = "hidden";
    }
    if (window.P_f2_n49 > window.P_f2_n51){
        document.getElementById('R_Lf2_l50').style.visibility = "hidden";
        document.getElementById('L_Rf2_l50').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l50').style.visibility = "visible";
        document.getElementById('L_Rf2_l50').style.visibility = "hidden";
    }
    if (window.P_f2_n51 > window.P_f2_n53){
        document.getElementById('R_Lf2_l52').style.visibility = "hidden";
        document.getElementById('L_Rf2_l52').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l52').style.visibility = "visible";
        document.getElementById('L_Rf2_l52').style.visibility = "hidden";
    }
    if (window.P_f2_n53 > window.P_f2_n55){
        document.getElementById('R_Lf2_l54').style.visibility = "hidden";
        document.getElementById('L_Rf2_l54').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l54').style.visibility = "visible";
        document.getElementById('L_Rf2_l54').style.visibility = "hidden";
    }
    if (window.P_f2_n55 > window.P_f2_n57){
        document.getElementById('R_Lf2_l56').style.visibility = "hidden";
        document.getElementById('L_Rf2_l56').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l56').style.visibility = "visible";
        document.getElementById('L_Rf2_l56').style.visibility = "hidden";
    }
    if (window.P_f2_n57 > window.P_f2_n59){
        document.getElementById('R_Lf2_l58').style.visibility = "hidden";
        document.getElementById('L_Rf2_l58').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l58').style.visibility = "visible";
        document.getElementById('L_Rf2_l58').style.visibility = "hidden";
    }
    if (window.P_f2_n59 > window.P_f2_n61){
        document.getElementById('R_Lf2_l60').style.visibility = "hidden";
        document.getElementById('L_Rf2_l60').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l60').style.visibility = "visible";
        document.getElementById('L_Rf2_l60').style.visibility = "hidden";
    }
    if (window.P_f2_n61 > window.P_f2_n63){
        document.getElementById('R_Lf2_l62').style.visibility = "hidden";
        document.getElementById('L_Rf2_l62').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l62').style.visibility = "visible";
        document.getElementById('L_Rf2_l62').style.visibility = "hidden";
    }
    if (window.P_f2_n63 > window.P_f2_n65){
        document.getElementById('R_Lf2_l64').style.visibility = "hidden";
        document.getElementById('L_Rf2_l64').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l64').style.visibility = "visible";
        document.getElementById('L_Rf2_l64').style.visibility = "hidden";
    }
    if (window.P_f2_n65 > window.P_f2_n67){
        document.getElementById('R_Lf2_l66').style.visibility = "hidden";
        document.getElementById('L_Rf2_l66').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l66').style.visibility = "visible";
        document.getElementById('L_Rf2_l66').style.visibility = "hidden";
    }
    if (window.P_f2_n67 > window.P_f2_n69){
        document.getElementById('R_Lf2_l68').style.visibility = "hidden";
        document.getElementById('L_Rf2_l68').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l68').style.visibility = "visible";
        document.getElementById('L_Rf2_l68').style.visibility = "hidden";
    }
    if (window.P_f2_n69 > window.P_f2_n71){
        document.getElementById('R_Lf2_l70').style.visibility = "hidden";
        document.getElementById('L_Rf2_l70').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l70').style.visibility = "visible";
        document.getElementById('L_Rf2_l70').style.visibility = "hidden";
    }
    if (window.P_f2_n71 > window.P_f2_n73){
        document.getElementById('R_Lf2_l72').style.visibility = "hidden";
        document.getElementById('L_Rf2_l72').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l72').style.visibility = "visible";
        document.getElementById('L_Rf2_l72').style.visibility = "hidden";
    }
    if (window.P_f2_n73 > window.P_f2_n75){
        document.getElementById('R_Lf2_l74').style.visibility = "hidden";
        document.getElementById('L_Rf2_l74').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l74').style.visibility = "visible";
        document.getElementById('L_Rf2_l74').style.visibility = "hidden";
    }
    if (window.P_f2_n75 > window.P_f2_n77){
        document.getElementById('R_Lf2_l76').style.visibility = "hidden";
        document.getElementById('L_Rf2_l76').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l76').style.visibility = "visible";
        document.getElementById('L_Rf2_l76').style.visibility = "hidden";
    }
    if (window.P_f2_n77 > window.P_f2_n79){
        document.getElementById('R_Lf2_l78').style.visibility = "hidden";
        document.getElementById('L_Rf2_l78').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l78').style.visibility = "visible";
        document.getElementById('L_Rf2_l78').style.visibility = "hidden";
    }
    if (window.P_f3_n1 > window.P_f3_n3){
        document.getElementById('R_Lf3_l2').style.visibility = "hidden";
        document.getElementById('L_Rf3_l2').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l2').style.visibility = "visible";
        document.getElementById('L_Rf3_l2').style.visibility = "hidden";
    }
    if (window.P_f3_n3 > window.P_f3_n5){
        document.getElementById('R_Lf3_l4').style.visibility = "hidden";
        document.getElementById('L_Rf3_l4').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l4').style.visibility = "visible";
        document.getElementById('L_Rf3_l4').style.visibility = "hidden";
    }
    if (window.P_f3_n5 > window.P_f3_n7){
        document.getElementById('R_Lf3_l6').style.visibility = "hidden";
        document.getElementById('L_Rf3_l6').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l6').style.visibility = "visible";
        document.getElementById('L_Rf3_l6').style.visibility = "hidden";
    }
    if (window.P_f3_n7 > window.P_f3_n9){
        document.getElementById('R_Lf3_l8').style.visibility = "hidden";
        document.getElementById('L_Rf3_l8').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l8').style.visibility = "visible";
        document.getElementById('L_Rf3_l8').style.visibility = "hidden";
    }

}