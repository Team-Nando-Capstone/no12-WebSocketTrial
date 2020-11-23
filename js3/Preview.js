let LV_Phase_Encode = [3, 3, 3, 2, 3, 1, 3, 3, 1, 1, 1, 2, 1, 3, 2, 2, 3, 1, 2, 3, 1, 2, 1, 2, 1, 3, 2, 2, 3, 1, 2, 3, 3, 2, 3, 2, 3, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 1, 3, 2, 3, 2, 1, 1, 3, 2, 1, 2, 2, 3, 1, 2, 1, 2, 3, 1, 2, 2, 1, 1, 2, 3, 1, 2, 3, 3, 3, 1, 3, 2, 3, 2, 3, 1, 3, 1, 2, 1, 3, 1, 1, 3, 2, 3, 3, 3, 1, 2, 3, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 3, 3, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 3];
let LV_House_index = ['f0_n2', 'f0_n4', 'f0_n6', 'f0_n8', 'f0_n10', 'f0_n12', 'f0_n14', 'f0_n16', 'f0_n18', 'f0_n20', 'f0_n22', 'f0_n24', 'f0_n26', 'f0_n28', 'f0_n30', 'f0_n32', 'f0_n34', 'f0_n36', 'f0_n38', 'f0_n40', 'f0_n42', 'f0_n44', 'f0_n46', 'f0_n48', 'f0_n50', 'f0_n52', 'f0_n54', 'f0_n56', 'f0_n58', 'f0_n60', 'f0_n62', 'f0_n64', 'f0_n66', 'f0_n68', 'f0_n70', 'f0_n72', 'f0_n74', 'f0_n76', 'f0_n78', 'f0_n80', 'f1_n2', 'f1_n4', 'f1_n6', 'f1_n8', 'f1_n10', 'f1_n12', 'f1_n14', 'f1_n16', 'f1_n18', 'f1_n20', 'f1_n22', 'f1_n24', 'f1_n26', 'f1_n28', 'f1_n30', 'f1_n32', 'f1_n34', 'f1_n36', 'f1_n38', 'f1_n40', 'f1_n42', 'f1_n44', 'f1_n46', 'f1_n48', 'f1_n50', 'f1_n52', 'f1_n54', 'f1_n56', 'f1_n58', 'f1_n60', 'f1_n62', 'f1_n64', 'f1_n66', 'f1_n68', 'f1_n70', 'f1_n72', 'f1_n74', 'f1_n76', 'f1_n78', 'f1_n80', 'f2_n2', 'f2_n4', 'f2_n6', 'f2_n8', 'f2_n10', 'f2_n12', 'f2_n14', 'f2_n16', 'f2_n18', 'f2_n20', 'f2_n22', 'f2_n24', 'f2_n26', 'f2_n28', 'f2_n30', 'f2_n32', 'f2_n34', 'f2_n36', 'f2_n38', 'f2_n40', 'f2_n42', 'f2_n44', 'f2_n46', 'f2_n48', 'f2_n50', 'f2_n52', 'f2_n54', 'f2_n56', 'f2_n58', 'f2_n60', 'f2_n62', 'f2_n64', 'f2_n66', 'f2_n68', 'f2_n70', 'f2_n72', 'f2_n74', 'f2_n76', 'f2_n78', 'f2_n80', 'f3_n2', 'f3_n4', 'f3_n6', 'f3_n8', 'f3_n10'];
let PV_Encode = [1,10,13,16,19,20,23,24,25,30,35,9,40,41,44,48,52,53,57,62,63,65,70,71,74,77,78,79,104,106,108,115,116,119,81,83,84,86,91,94,95,96,99,120,121,];
Phasecheck('f0_n2');
Phasecheck('f0_n4');
Phasecheck('f0_n6');
Phasecheck('f0_n8');
Phasecheck('f0_n10');
Phasecheck('f0_n12');
Phasecheck('f0_n14');
Phasecheck('f0_n16');
Phasecheck('f0_n18');
Phasecheck('f0_n20');
Phasecheck('f0_n22');
Phasecheck('f0_n24');
Phasecheck('f0_n26');
Phasecheck('f0_n28');
Phasecheck('f0_n30');
Phasecheck('f0_n32');
Phasecheck('f0_n34');
Phasecheck('f0_n36');
Phasecheck('f0_n38');
Phasecheck('f0_n40');
Phasecheck('f0_n42');
Phasecheck('f0_n44');
Phasecheck('f0_n46');
Phasecheck('f0_n48');
Phasecheck('f0_n50');
Phasecheck('f0_n52');
Phasecheck('f0_n54');
Phasecheck('f0_n56');
Phasecheck('f0_n58');
Phasecheck('f0_n60');
Phasecheck('f0_n62');
Phasecheck('f0_n64');
Phasecheck('f0_n66');
Phasecheck('f0_n68');
Phasecheck('f0_n70');
Phasecheck('f0_n72');
Phasecheck('f0_n74');
Phasecheck('f0_n76');
Phasecheck('f0_n78');
Phasecheck('f0_n80');
Phasecheck('f1_n2');
Phasecheck('f1_n4');
Phasecheck('f1_n6');
Phasecheck('f1_n8');
Phasecheck('f1_n10');
Phasecheck('f1_n12');
Phasecheck('f1_n14');
Phasecheck('f1_n16');
Phasecheck('f1_n18');
Phasecheck('f1_n20');
Phasecheck('f1_n22');
Phasecheck('f1_n24');
Phasecheck('f1_n26');
Phasecheck('f1_n28');
Phasecheck('f1_n30');
Phasecheck('f1_n32');
Phasecheck('f1_n34');
Phasecheck('f1_n36');
Phasecheck('f1_n38');
Phasecheck('f1_n40');
Phasecheck('f1_n42');
Phasecheck('f1_n44');
Phasecheck('f1_n46');
Phasecheck('f1_n48');
Phasecheck('f1_n50');
Phasecheck('f1_n52');
Phasecheck('f1_n54');
Phasecheck('f1_n56');
Phasecheck('f1_n58');
Phasecheck('f1_n60');
Phasecheck('f1_n62');
Phasecheck('f1_n64');
Phasecheck('f1_n66');
Phasecheck('f1_n68');
Phasecheck('f1_n70');
Phasecheck('f1_n72');
Phasecheck('f1_n74');
Phasecheck('f1_n76');
Phasecheck('f1_n78');
Phasecheck('f1_n80');
Phasecheck('f2_n2');
Phasecheck('f2_n4');
Phasecheck('f2_n6');
Phasecheck('f2_n8');
Phasecheck('f2_n10');
Phasecheck('f2_n12');
Phasecheck('f2_n14');
Phasecheck('f2_n16');
Phasecheck('f2_n18');
Phasecheck('f2_n20');
Phasecheck('f2_n22');
Phasecheck('f2_n24');
Phasecheck('f2_n26');
Phasecheck('f2_n28');
Phasecheck('f2_n30');
Phasecheck('f2_n32');
Phasecheck('f2_n34');
Phasecheck('f2_n36');
Phasecheck('f2_n38');
Phasecheck('f2_n40');
Phasecheck('f2_n42');
Phasecheck('f2_n44');
Phasecheck('f2_n46');
Phasecheck('f2_n48');
Phasecheck('f2_n50');
Phasecheck('f2_n52');
Phasecheck('f2_n54');
Phasecheck('f2_n56');
Phasecheck('f2_n58');
Phasecheck('f2_n60');
Phasecheck('f2_n62');
Phasecheck('f2_n64');
Phasecheck('f2_n66');
Phasecheck('f2_n68');
Phasecheck('f2_n70');
Phasecheck('f2_n72');
Phasecheck('f2_n74');
Phasecheck('f2_n76');
Phasecheck('f2_n78');
Phasecheck('f2_n80');
Phasecheck('f3_n2');
Phasecheck('f3_n4');
Phasecheck('f3_n6');
Phasecheck('f3_n8');
Phasecheck('f3_n10');

function Phasecheck(elementid){
    var id = elementid.toString();
    var index = LV_House_index.indexOf(id);
    if (index === -1){
        alert("Phase information doesn't exist");
    }else {
        let phaseEncode; let PVEncode;
        let previewid; let hiddenpreview1; let hiddenpreview2; let hiddenpreview3; let hiddenpreview4; let hiddenpreview5;
        phaseEncode = LV_Phase_Encode[index];
        if (phaseEncode === 1){
            if(PV_Encode.indexOf(index) === -1){ // phase 1, but without PV panel
                previewid = "Ph1_L";
                hiddenpreview1 = "Ph2_L";
                hiddenpreview2 = "Ph3_L";
                hiddenpreview3 = "Ph1_PVL";
                hiddenpreview4 = "Ph2_PVL";
                hiddenpreview5 = "Ph3_PVL";
            }else{ // phase 1, and with PV panel
                previewid = "Ph1_PVL";
                hiddenpreview1 = "Ph1_L";
                hiddenpreview2 = "Ph2_L";
                hiddenpreview3 = "Ph3_L";
                hiddenpreview4 = "Ph2_PVL";
                hiddenpreview5 = "Ph3_PVL";
            }
        }
        else if (phaseEncode === 2){
            if(PV_Encode.indexOf(index) === -1) { // phase 2, but without PV panel
                previewid = "Ph2_L";
                hiddenpreview1 = "Ph1_L";
                hiddenpreview2 = "Ph3_L";
                hiddenpreview3 = "Ph1_PVL";
                hiddenpreview4 = "Ph2_PVL";
                hiddenpreview5 = "Ph3_PVL";
            }else{ // phase 2, and with PV panel
                previewid = "Ph2_PVL";
                hiddenpreview1 = "Ph1_L";
                hiddenpreview2 = "Ph2_L";
                hiddenpreview3 = "Ph3_L";
                hiddenpreview4 = "Ph1_PVL";
                hiddenpreview5 = "Ph3_PVL";
            }
        }
        else {
            if (PV_Encode.indexOf(index) === -1) {
                previewid = "Ph3_L";
                hiddenpreview1 = "Ph1_L";
                hiddenpreview2 = "Ph2_L";
                hiddenpreview3 = "Ph1_PVL";
                hiddenpreview4 = "Ph2_PVL";
                hiddenpreview5 = "Ph3_PVL";
            } else { // phase 3, and with PV panel
                previewid = "Ph3_PVL";
                hiddenpreview1 = "Ph1_L";
                hiddenpreview2 = "Ph2_L";
                hiddenpreview3 = "Ph3_L";
                hiddenpreview4 = "Ph1_PVL";
                hiddenpreview5 = "Ph2_PVL";
            }
        }

        document.getElementById(id).addEventListener('click',function(){
            document.getElementById(previewid).style.visibility = 'visible';
            document.getElementById(hiddenpreview1).style.visibility = 'hidden';
            document.getElementById(hiddenpreview2).style.visibility = 'hidden';
            document.getElementById(hiddenpreview3).style.visibility = 'hidden';
            document.getElementById(hiddenpreview4).style.visibility = 'hidden';
            document.getElementById(hiddenpreview5).style.visibility = 'hidden';
            document.getElementById('num').style.visibility='visible';
            document.getElementById('Clear_Button').style.visibility = 'visible';
        })
    }
}