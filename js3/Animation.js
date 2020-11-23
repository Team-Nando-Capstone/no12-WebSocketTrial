/* ANIMATION CONTROL
*    this part is using to control the animation motion direction
*    and currently, the decision is made be the difference between
*    the value of P on two side of the line!
*    The control may be changed in the future update version!*/

setInterval("AnimateControl()",10);// every 10 ms check once

function AnimateControl() {
    if (typeof(window.P_rndPV_f0_l0)=="undefined" || document.getElementById("AniVisibility_On").style.visibility === "hidden"){
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

    if (window.P_rndPV_f0_l1 < 0){
        document.getElementById('R_Lf0_l1').style.visibility = "hidden";
        document.getElementById('L_Rf0_l1').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l1').style.visibility = "visible";
        document.getElementById('L_Rf0_l1').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l5 < 0){
        document.getElementById('R_Lf0_l5').style.visibility = "hidden";
        document.getElementById('L_Rf0_l5').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l5').style.visibility = "visible";
        document.getElementById('L_Rf0_l5').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l9 < 0){
        document.getElementById('R_Lf0_l9').style.visibility = "hidden";
        document.getElementById('L_Rf0_l9').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l9').style.visibility = "visible";
        document.getElementById('L_Rf0_l9').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l13 < 0){
        document.getElementById('R_Lf0_l13').style.visibility = "hidden";
        document.getElementById('L_Rf0_l13').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l13').style.visibility = "visible";
        document.getElementById('L_Rf0_l13').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l17 < 0){
        document.getElementById('R_Lf0_l17').style.visibility = "hidden";
        document.getElementById('L_Rf0_l17').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l17').style.visibility = "visible";
        document.getElementById('L_Rf0_l17').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l21 < 0){
        document.getElementById('R_Lf0_l21').style.visibility = "hidden";
        document.getElementById('L_Rf0_l21').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l21').style.visibility = "visible";
        document.getElementById('L_Rf0_l21').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l25 < 0){
        document.getElementById('R_Lf0_l25').style.visibility = "hidden";
        document.getElementById('L_Rf0_l25').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l25').style.visibility = "visible";
        document.getElementById('L_Rf0_l25').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l29 < 0){
        document.getElementById('R_Lf0_l29').style.visibility = "hidden";
        document.getElementById('L_Rf0_l29').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l29').style.visibility = "visible";
        document.getElementById('L_Rf0_l29').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l33 < 0){
        document.getElementById('R_Lf0_l33').style.visibility = "hidden";
        document.getElementById('L_Rf0_l33').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l33').style.visibility = "visible";
        document.getElementById('L_Rf0_l33').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l37 < 0){
        document.getElementById('R_Lf0_l37').style.visibility = "hidden";
        document.getElementById('L_Rf0_l37').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l37').style.visibility = "visible";
        document.getElementById('L_Rf0_l37').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l41 < 0){
        document.getElementById('R_Lf0_l41').style.visibility = "hidden";
        document.getElementById('L_Rf0_l41').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l41').style.visibility = "visible";
        document.getElementById('L_Rf0_l41').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l45 < 0){
        document.getElementById('R_Lf0_l45').style.visibility = "hidden";
        document.getElementById('L_Rf0_l45').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l45').style.visibility = "visible";
        document.getElementById('L_Rf0_l45').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l49 < 0){
        document.getElementById('R_Lf0_l49').style.visibility = "hidden";
        document.getElementById('L_Rf0_l49').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l49').style.visibility = "visible";
        document.getElementById('L_Rf0_l49').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l53 < 0){
        document.getElementById('R_Lf0_l53').style.visibility = "hidden";
        document.getElementById('L_Rf0_l53').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l53').style.visibility = "visible";
        document.getElementById('L_Rf0_l53').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l57 < 0){
        document.getElementById('R_Lf0_l57').style.visibility = "hidden";
        document.getElementById('L_Rf0_l57').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l57').style.visibility = "visible";
        document.getElementById('L_Rf0_l57').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l61 < 0){
        document.getElementById('R_Lf0_l61').style.visibility = "hidden";
        document.getElementById('L_Rf0_l61').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l61').style.visibility = "visible";
        document.getElementById('L_Rf0_l61').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l65 < 0){
        document.getElementById('R_Lf0_l65').style.visibility = "hidden";
        document.getElementById('L_Rf0_l65').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l65').style.visibility = "visible";
        document.getElementById('L_Rf0_l65').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l69 < 0){
        document.getElementById('R_Lf0_l69').style.visibility = "hidden";
        document.getElementById('L_Rf0_l69').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l69').style.visibility = "visible";
        document.getElementById('L_Rf0_l69').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l73 < 0){
        document.getElementById('R_Lf0_l73').style.visibility = "hidden";
        document.getElementById('L_Rf0_l73').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l73').style.visibility = "visible";
        document.getElementById('L_Rf0_l73').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l77 < 0){
        document.getElementById('R_Lf0_l77').style.visibility = "hidden";
        document.getElementById('L_Rf0_l77').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l77').style.visibility = "visible";
        document.getElementById('L_Rf0_l77').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l3 > 0){
        document.getElementById('R_Lf0_l3').style.visibility = "hidden";
        document.getElementById('L_Rf0_l3').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l3').style.visibility = "visible";
        document.getElementById('L_Rf0_l3').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l7 > 0){
        document.getElementById('R_Lf0_l7').style.visibility = "hidden";
        document.getElementById('L_Rf0_l7').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l7').style.visibility = "visible";
        document.getElementById('L_Rf0_l7').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l11 > 0){
        document.getElementById('R_Lf0_l11').style.visibility = "hidden";
        document.getElementById('L_Rf0_l11').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l11').style.visibility = "visible";
        document.getElementById('L_Rf0_l11').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l15 > 0){
        document.getElementById('R_Lf0_l15').style.visibility = "hidden";
        document.getElementById('L_Rf0_l15').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l15').style.visibility = "visible";
        document.getElementById('L_Rf0_l15').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l19 > 0){
        document.getElementById('R_Lf0_l19').style.visibility = "hidden";
        document.getElementById('L_Rf0_l19').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l19').style.visibility = "visible";
        document.getElementById('L_Rf0_l19').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l23 > 0){
        document.getElementById('R_Lf0_l23').style.visibility = "hidden";
        document.getElementById('L_Rf0_l23').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l23').style.visibility = "visible";
        document.getElementById('L_Rf0_l23').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l27 > 0){
        document.getElementById('R_Lf0_l27').style.visibility = "hidden";
        document.getElementById('L_Rf0_l27').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l27').style.visibility = "visible";
        document.getElementById('L_Rf0_l27').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l31 > 0){
        document.getElementById('R_Lf0_l31').style.visibility = "hidden";
        document.getElementById('L_Rf0_l31').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l31').style.visibility = "visible";
        document.getElementById('L_Rf0_l31').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l35 > 0){
        document.getElementById('R_Lf0_l35').style.visibility = "hidden";
        document.getElementById('L_Rf0_l35').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l35').style.visibility = "visible";
        document.getElementById('L_Rf0_l35').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l39 > 0){
        document.getElementById('R_Lf0_l39').style.visibility = "hidden";
        document.getElementById('L_Rf0_l39').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l39').style.visibility = "visible";
        document.getElementById('L_Rf0_l39').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l43 > 0){
        document.getElementById('R_Lf0_l43').style.visibility = "hidden";
        document.getElementById('L_Rf0_l43').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l43').style.visibility = "visible";
        document.getElementById('L_Rf0_l43').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l47 > 0){
        document.getElementById('R_Lf0_l47').style.visibility = "hidden";
        document.getElementById('L_Rf0_l47').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l47').style.visibility = "visible";
        document.getElementById('L_Rf0_l47').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l51 > 0){
        document.getElementById('R_Lf0_l51').style.visibility = "hidden";
        document.getElementById('L_Rf0_l51').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l51').style.visibility = "visible";
        document.getElementById('L_Rf0_l51').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l55 > 0){
        document.getElementById('R_Lf0_l55').style.visibility = "hidden";
        document.getElementById('L_Rf0_l55').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l55').style.visibility = "visible";
        document.getElementById('L_Rf0_l55').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l59 > 0){
        document.getElementById('R_Lf0_l59').style.visibility = "hidden";
        document.getElementById('L_Rf0_l59').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l59').style.visibility = "visible";
        document.getElementById('L_Rf0_l59').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l63 > 0){
        document.getElementById('R_Lf0_l63').style.visibility = "hidden";
        document.getElementById('L_Rf0_l63').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l63').style.visibility = "visible";
        document.getElementById('L_Rf0_l63').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l67 > 0){
        document.getElementById('R_Lf0_l67').style.visibility = "hidden";
        document.getElementById('L_Rf0_l67').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l67').style.visibility = "visible";
        document.getElementById('L_Rf0_l67').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l71 > 0){
        document.getElementById('R_Lf0_l71').style.visibility = "hidden";
        document.getElementById('L_Rf0_l71').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l71').style.visibility = "visible";
        document.getElementById('L_Rf0_l71').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l75 > 0){
        document.getElementById('R_Lf0_l75').style.visibility = "hidden";
        document.getElementById('L_Rf0_l75').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l75').style.visibility = "visible";
        document.getElementById('L_Rf0_l75').style.visibility = "hidden";
    }
    if (window.P_rndPV_f0_l79 > 0){
        document.getElementById('R_Lf0_l79').style.visibility = "hidden";
        document.getElementById('L_Rf0_l79').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf0_l79').style.visibility = "visible";
        document.getElementById('L_Rf0_l79').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l1 < 0){
        document.getElementById('R_Lf1_l1').style.visibility = "hidden";
        document.getElementById('L_Rf1_l1').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l1').style.visibility = "visible";
        document.getElementById('L_Rf1_l1').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l5 < 0){
        document.getElementById('R_Lf1_l5').style.visibility = "hidden";
        document.getElementById('L_Rf1_l5').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l5').style.visibility = "visible";
        document.getElementById('L_Rf1_l5').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l9 < 0){
        document.getElementById('R_Lf1_l9').style.visibility = "hidden";
        document.getElementById('L_Rf1_l9').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l9').style.visibility = "visible";
        document.getElementById('L_Rf1_l9').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l13 < 0){
        document.getElementById('R_Lf1_l13').style.visibility = "hidden";
        document.getElementById('L_Rf1_l13').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l13').style.visibility = "visible";
        document.getElementById('L_Rf1_l13').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l17 < 0){
        document.getElementById('R_Lf1_l17').style.visibility = "hidden";
        document.getElementById('L_Rf1_l17').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l17').style.visibility = "visible";
        document.getElementById('L_Rf1_l17').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l21 < 0){
        document.getElementById('R_Lf1_l21').style.visibility = "hidden";
        document.getElementById('L_Rf1_l21').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l21').style.visibility = "visible";
        document.getElementById('L_Rf1_l21').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l25 < 0){
        document.getElementById('R_Lf1_l25').style.visibility = "hidden";
        document.getElementById('L_Rf1_l25').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l25').style.visibility = "visible";
        document.getElementById('L_Rf1_l25').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l29 < 0){
        document.getElementById('R_Lf1_l29').style.visibility = "hidden";
        document.getElementById('L_Rf1_l29').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l29').style.visibility = "visible";
        document.getElementById('L_Rf1_l29').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l33 < 0){
        document.getElementById('R_Lf1_l33').style.visibility = "hidden";
        document.getElementById('L_Rf1_l33').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l33').style.visibility = "visible";
        document.getElementById('L_Rf1_l33').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l37 < 0){
        document.getElementById('R_Lf1_l37').style.visibility = "hidden";
        document.getElementById('L_Rf1_l37').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l37').style.visibility = "visible";
        document.getElementById('L_Rf1_l37').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l41 < 0){
        document.getElementById('R_Lf1_l41').style.visibility = "hidden";
        document.getElementById('L_Rf1_l41').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l41').style.visibility = "visible";
        document.getElementById('L_Rf1_l41').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l45 < 0){
        document.getElementById('R_Lf1_l45').style.visibility = "hidden";
        document.getElementById('L_Rf1_l45').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l45').style.visibility = "visible";
        document.getElementById('L_Rf1_l45').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l49 < 0){
        document.getElementById('R_Lf1_l49').style.visibility = "hidden";
        document.getElementById('L_Rf1_l49').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l49').style.visibility = "visible";
        document.getElementById('L_Rf1_l49').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l53 < 0){
        document.getElementById('R_Lf1_l53').style.visibility = "hidden";
        document.getElementById('L_Rf1_l53').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l53').style.visibility = "visible";
        document.getElementById('L_Rf1_l53').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l57 < 0){
        document.getElementById('R_Lf1_l57').style.visibility = "hidden";
        document.getElementById('L_Rf1_l57').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l57').style.visibility = "visible";
        document.getElementById('L_Rf1_l57').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l61 < 0){
        document.getElementById('R_Lf1_l61').style.visibility = "hidden";
        document.getElementById('L_Rf1_l61').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l61').style.visibility = "visible";
        document.getElementById('L_Rf1_l61').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l65 < 0){
        document.getElementById('R_Lf1_l65').style.visibility = "hidden";
        document.getElementById('L_Rf1_l65').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l65').style.visibility = "visible";
        document.getElementById('L_Rf1_l65').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l69 < 0){
        document.getElementById('R_Lf1_l69').style.visibility = "hidden";
        document.getElementById('L_Rf1_l69').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l69').style.visibility = "visible";
        document.getElementById('L_Rf1_l69').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l73 < 0){
        document.getElementById('R_Lf1_l73').style.visibility = "hidden";
        document.getElementById('L_Rf1_l73').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l73').style.visibility = "visible";
        document.getElementById('L_Rf1_l73').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l77 < 0){
        document.getElementById('R_Lf1_l77').style.visibility = "hidden";
        document.getElementById('L_Rf1_l77').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l77').style.visibility = "visible";
        document.getElementById('L_Rf1_l77').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l3 > 0){
        document.getElementById('R_Lf1_l3').style.visibility = "hidden";
        document.getElementById('L_Rf1_l3').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l3').style.visibility = "visible";
        document.getElementById('L_Rf1_l3').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l7 > 0){
        document.getElementById('R_Lf1_l7').style.visibility = "hidden";
        document.getElementById('L_Rf1_l7').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l7').style.visibility = "visible";
        document.getElementById('L_Rf1_l7').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l11 > 0){
        document.getElementById('R_Lf1_l11').style.visibility = "hidden";
        document.getElementById('L_Rf1_l11').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l11').style.visibility = "visible";
        document.getElementById('L_Rf1_l11').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l15 > 0){
        document.getElementById('R_Lf1_l15').style.visibility = "hidden";
        document.getElementById('L_Rf1_l15').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l15').style.visibility = "visible";
        document.getElementById('L_Rf1_l15').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l19 > 0){
        document.getElementById('R_Lf1_l19').style.visibility = "hidden";
        document.getElementById('L_Rf1_l19').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l19').style.visibility = "visible";
        document.getElementById('L_Rf1_l19').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l23 > 0){
        document.getElementById('R_Lf1_l23').style.visibility = "hidden";
        document.getElementById('L_Rf1_l23').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l23').style.visibility = "visible";
        document.getElementById('L_Rf1_l23').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l27 > 0){
        document.getElementById('R_Lf1_l27').style.visibility = "hidden";
        document.getElementById('L_Rf1_l27').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l27').style.visibility = "visible";
        document.getElementById('L_Rf1_l27').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l31 > 0){
        document.getElementById('R_Lf1_l31').style.visibility = "hidden";
        document.getElementById('L_Rf1_l31').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l31').style.visibility = "visible";
        document.getElementById('L_Rf1_l31').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l35 > 0){
        document.getElementById('R_Lf1_l35').style.visibility = "hidden";
        document.getElementById('L_Rf1_l35').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l35').style.visibility = "visible";
        document.getElementById('L_Rf1_l35').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l39 > 0){
        document.getElementById('R_Lf1_l39').style.visibility = "hidden";
        document.getElementById('L_Rf1_l39').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l39').style.visibility = "visible";
        document.getElementById('L_Rf1_l39').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l43 > 0){
        document.getElementById('R_Lf1_l43').style.visibility = "hidden";
        document.getElementById('L_Rf1_l43').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l43').style.visibility = "visible";
        document.getElementById('L_Rf1_l43').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l47 > 0){
        document.getElementById('R_Lf1_l47').style.visibility = "hidden";
        document.getElementById('L_Rf1_l47').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l47').style.visibility = "visible";
        document.getElementById('L_Rf1_l47').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l51 > 0){
        document.getElementById('R_Lf1_l51').style.visibility = "hidden";
        document.getElementById('L_Rf1_l51').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l51').style.visibility = "visible";
        document.getElementById('L_Rf1_l51').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l55 > 0){
        document.getElementById('R_Lf1_l55').style.visibility = "hidden";
        document.getElementById('L_Rf1_l55').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l55').style.visibility = "visible";
        document.getElementById('L_Rf1_l55').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l59 > 0){
        document.getElementById('R_Lf1_l59').style.visibility = "hidden";
        document.getElementById('L_Rf1_l59').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l59').style.visibility = "visible";
        document.getElementById('L_Rf1_l59').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l63 > 0){
        document.getElementById('R_Lf1_l63').style.visibility = "hidden";
        document.getElementById('L_Rf1_l63').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l63').style.visibility = "visible";
        document.getElementById('L_Rf1_l63').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l67 > 0){
        document.getElementById('R_Lf1_l67').style.visibility = "hidden";
        document.getElementById('L_Rf1_l67').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l67').style.visibility = "visible";
        document.getElementById('L_Rf1_l67').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l71 > 0){
        document.getElementById('R_Lf1_l71').style.visibility = "hidden";
        document.getElementById('L_Rf1_l71').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l71').style.visibility = "visible";
        document.getElementById('L_Rf1_l71').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l75 > 0){
        document.getElementById('R_Lf1_l75').style.visibility = "hidden";
        document.getElementById('L_Rf1_l75').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l75').style.visibility = "visible";
        document.getElementById('L_Rf1_l75').style.visibility = "hidden";
    }
    if (window.P_rndPV_f1_l79 > 0){
        document.getElementById('R_Lf1_l79').style.visibility = "hidden";
        document.getElementById('L_Rf1_l79').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf1_l79').style.visibility = "visible";
        document.getElementById('L_Rf1_l79').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l1 < 0){
        document.getElementById('R_Lf2_l1').style.visibility = "hidden";
        document.getElementById('L_Rf2_l1').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l1').style.visibility = "visible";
        document.getElementById('L_Rf2_l1').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l5 < 0){
        document.getElementById('R_Lf2_l5').style.visibility = "hidden";
        document.getElementById('L_Rf2_l5').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l5').style.visibility = "visible";
        document.getElementById('L_Rf2_l5').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l9 < 0){
        document.getElementById('R_Lf2_l9').style.visibility = "hidden";
        document.getElementById('L_Rf2_l9').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l9').style.visibility = "visible";
        document.getElementById('L_Rf2_l9').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l13 < 0){
        document.getElementById('R_Lf2_l13').style.visibility = "hidden";
        document.getElementById('L_Rf2_l13').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l13').style.visibility = "visible";
        document.getElementById('L_Rf2_l13').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l17 < 0){
        document.getElementById('R_Lf2_l17').style.visibility = "hidden";
        document.getElementById('L_Rf2_l17').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l17').style.visibility = "visible";
        document.getElementById('L_Rf2_l17').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l21 < 0){
        document.getElementById('R_Lf2_l21').style.visibility = "hidden";
        document.getElementById('L_Rf2_l21').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l21').style.visibility = "visible";
        document.getElementById('L_Rf2_l21').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l25 < 0){
        document.getElementById('R_Lf2_l25').style.visibility = "hidden";
        document.getElementById('L_Rf2_l25').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l25').style.visibility = "visible";
        document.getElementById('L_Rf2_l25').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l29 < 0){
        document.getElementById('R_Lf2_l29').style.visibility = "hidden";
        document.getElementById('L_Rf2_l29').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l29').style.visibility = "visible";
        document.getElementById('L_Rf2_l29').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l33 < 0){
        document.getElementById('R_Lf2_l33').style.visibility = "hidden";
        document.getElementById('L_Rf2_l33').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l33').style.visibility = "visible";
        document.getElementById('L_Rf2_l33').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l37 < 0){
        document.getElementById('R_Lf2_l37').style.visibility = "hidden";
        document.getElementById('L_Rf2_l37').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l37').style.visibility = "visible";
        document.getElementById('L_Rf2_l37').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l41 < 0){
        document.getElementById('R_Lf2_l41').style.visibility = "hidden";
        document.getElementById('L_Rf2_l41').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l41').style.visibility = "visible";
        document.getElementById('L_Rf2_l41').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l45 < 0){
        document.getElementById('R_Lf2_l45').style.visibility = "hidden";
        document.getElementById('L_Rf2_l45').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l45').style.visibility = "visible";
        document.getElementById('L_Rf2_l45').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l49 < 0){
        document.getElementById('R_Lf2_l49').style.visibility = "hidden";
        document.getElementById('L_Rf2_l49').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l49').style.visibility = "visible";
        document.getElementById('L_Rf2_l49').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l53 < 0){
        document.getElementById('R_Lf2_l53').style.visibility = "hidden";
        document.getElementById('L_Rf2_l53').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l53').style.visibility = "visible";
        document.getElementById('L_Rf2_l53').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l57 < 0){
        document.getElementById('R_Lf2_l57').style.visibility = "hidden";
        document.getElementById('L_Rf2_l57').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l57').style.visibility = "visible";
        document.getElementById('L_Rf2_l57').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l61 < 0){
        document.getElementById('R_Lf2_l61').style.visibility = "hidden";
        document.getElementById('L_Rf2_l61').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l61').style.visibility = "visible";
        document.getElementById('L_Rf2_l61').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l65 < 0){
        document.getElementById('R_Lf2_l65').style.visibility = "hidden";
        document.getElementById('L_Rf2_l65').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l65').style.visibility = "visible";
        document.getElementById('L_Rf2_l65').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l69 < 0){
        document.getElementById('R_Lf2_l69').style.visibility = "hidden";
        document.getElementById('L_Rf2_l69').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l69').style.visibility = "visible";
        document.getElementById('L_Rf2_l69').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l73 < 0){
        document.getElementById('R_Lf2_l73').style.visibility = "hidden";
        document.getElementById('L_Rf2_l73').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l73').style.visibility = "visible";
        document.getElementById('L_Rf2_l73').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l77 < 0){
        document.getElementById('R_Lf2_l77').style.visibility = "hidden";
        document.getElementById('L_Rf2_l77').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l77').style.visibility = "visible";
        document.getElementById('L_Rf2_l77').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l3 > 0){
        document.getElementById('R_Lf2_l3').style.visibility = "hidden";
        document.getElementById('L_Rf2_l3').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l3').style.visibility = "visible";
        document.getElementById('L_Rf2_l3').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l7 > 0){
        document.getElementById('R_Lf2_l7').style.visibility = "hidden";
        document.getElementById('L_Rf2_l7').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l7').style.visibility = "visible";
        document.getElementById('L_Rf2_l7').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l11 > 0){
        document.getElementById('R_Lf2_l11').style.visibility = "hidden";
        document.getElementById('L_Rf2_l11').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l11').style.visibility = "visible";
        document.getElementById('L_Rf2_l11').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l15 > 0){
        document.getElementById('R_Lf2_l15').style.visibility = "hidden";
        document.getElementById('L_Rf2_l15').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l15').style.visibility = "visible";
        document.getElementById('L_Rf2_l15').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l19 > 0){
        document.getElementById('R_Lf2_l19').style.visibility = "hidden";
        document.getElementById('L_Rf2_l19').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l19').style.visibility = "visible";
        document.getElementById('L_Rf2_l19').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l23 > 0){
        document.getElementById('R_Lf2_l23').style.visibility = "hidden";
        document.getElementById('L_Rf2_l23').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l23').style.visibility = "visible";
        document.getElementById('L_Rf2_l23').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l27 > 0){
        document.getElementById('R_Lf2_l27').style.visibility = "hidden";
        document.getElementById('L_Rf2_l27').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l27').style.visibility = "visible";
        document.getElementById('L_Rf2_l27').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l31 > 0){
        document.getElementById('R_Lf2_l31').style.visibility = "hidden";
        document.getElementById('L_Rf2_l31').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l31').style.visibility = "visible";
        document.getElementById('L_Rf2_l31').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l35 > 0){
        document.getElementById('R_Lf2_l35').style.visibility = "hidden";
        document.getElementById('L_Rf2_l35').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l35').style.visibility = "visible";
        document.getElementById('L_Rf2_l35').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l39 > 0){
        document.getElementById('R_Lf2_l39').style.visibility = "hidden";
        document.getElementById('L_Rf2_l39').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l39').style.visibility = "visible";
        document.getElementById('L_Rf2_l39').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l43 > 0){
        document.getElementById('R_Lf2_l43').style.visibility = "hidden";
        document.getElementById('L_Rf2_l43').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l43').style.visibility = "visible";
        document.getElementById('L_Rf2_l43').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l47 > 0){
        document.getElementById('R_Lf2_l47').style.visibility = "hidden";
        document.getElementById('L_Rf2_l47').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l47').style.visibility = "visible";
        document.getElementById('L_Rf2_l47').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l51 > 0){
        document.getElementById('R_Lf2_l51').style.visibility = "hidden";
        document.getElementById('L_Rf2_l51').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l51').style.visibility = "visible";
        document.getElementById('L_Rf2_l51').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l55 > 0){
        document.getElementById('R_Lf2_l55').style.visibility = "hidden";
        document.getElementById('L_Rf2_l55').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l55').style.visibility = "visible";
        document.getElementById('L_Rf2_l55').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l59 > 0){
        document.getElementById('R_Lf2_l59').style.visibility = "hidden";
        document.getElementById('L_Rf2_l59').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l59').style.visibility = "visible";
        document.getElementById('L_Rf2_l59').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l63 > 0){
        document.getElementById('R_Lf2_l63').style.visibility = "hidden";
        document.getElementById('L_Rf2_l63').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l63').style.visibility = "visible";
        document.getElementById('L_Rf2_l63').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l67 > 0){
        document.getElementById('R_Lf2_l67').style.visibility = "hidden";
        document.getElementById('L_Rf2_l67').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l67').style.visibility = "visible";
        document.getElementById('L_Rf2_l67').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l71 > 0){
        document.getElementById('R_Lf2_l71').style.visibility = "hidden";
        document.getElementById('L_Rf2_l71').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l71').style.visibility = "visible";
        document.getElementById('L_Rf2_l71').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l75 > 0){
        document.getElementById('R_Lf2_l75').style.visibility = "hidden";
        document.getElementById('L_Rf2_l75').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l75').style.visibility = "visible";
        document.getElementById('L_Rf2_l75').style.visibility = "hidden";
    }
    if (window.P_rndPV_f2_l79 > 0){
        document.getElementById('R_Lf2_l79').style.visibility = "hidden";
        document.getElementById('L_Rf2_l79').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf2_l79').style.visibility = "visible";
        document.getElementById('L_Rf2_l79').style.visibility = "hidden";
    }
    if (window.P_rndPV_f3_l1 < 0){
        document.getElementById('R_Lf3_l1').style.visibility = "hidden";
        document.getElementById('L_Rf3_l1').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l1').style.visibility = "visible";
        document.getElementById('L_Rf3_l1').style.visibility = "hidden";
    }
    if (window.P_rndPV_f3_l5 < 0){
        document.getElementById('R_Lf3_l5').style.visibility = "hidden";
        document.getElementById('L_Rf3_l5').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l5').style.visibility = "visible";
        document.getElementById('L_Rf3_l5').style.visibility = "hidden";
    }
    if (window.P_rndPV_f3_l9 < 0){
        document.getElementById('R_Lf3_l9').style.visibility = "hidden";
        document.getElementById('L_Rf3_l9').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l9').style.visibility = "visible";
        document.getElementById('L_Rf3_l9').style.visibility = "hidden";
    }
    if (window.P_rndPV_f3_l3 > 0){
        document.getElementById('R_Lf3_l3').style.visibility = "hidden";
        document.getElementById('L_Rf3_l3').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l3').style.visibility = "visible";
        document.getElementById('L_Rf3_l3').style.visibility = "hidden";
    }
    if (window.P_rndPV_f3_l7 > 0){
        document.getElementById('R_Lf3_l7').style.visibility = "hidden";
        document.getElementById('L_Rf3_l7').style.visibility = "visible";
    }else{
        document.getElementById('R_Lf3_l7').style.visibility = "visible";
        document.getElementById('L_Rf3_l7').style.visibility = "hidden";
    }
}