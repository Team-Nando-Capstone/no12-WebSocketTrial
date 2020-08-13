function LV_SVGColorChange() {
    if (window.V_House1 == undefined) {
        //?????
    }else{
        if (window.V_House1 < 250) {
            document.getElementById("House1").setAttribute("fill", "#37f800");
        } else if (window.V_House1 < 350) {
            document.getElementById("House1").setAttribute("fill", "#dbf400");
        } else if (window.V_House1 < 450) {
            document.getElementById("House1").setAttribute("fill", "#f99700");
        } else {
            document.getElementById("House1").setAttribute("fill", "#f90001");
        }

        if (window.V_House2 < 250) {
            document.getElementById("House2").setAttribute("fill", "#37f800");
        } else if (window.V_House2 < 350) {
            document.getElementById("House2").setAttribute("fill", "#dbf400");
        } else if (window.V_House2 < 450) {
            document.getElementById("House2").setAttribute("fill", "#f99700");
        } else {
            document.getElementById("House2").setAttribute("fill", "#f90001");
        }

        if (window.V_House3 < 250) {
            document.getElementById("House3").setAttribute("fill", "#37f800");
        } else if (window.V_House3 < 350) {
            document.getElementById("House3").setAttribute("fill", "#dbf400");
        } else if (window.V_House3 < 450) {
            document.getElementById("House3").setAttribute("fill", "#f99700");
        } else {
            document.getElementById("House3").setAttribute("fill", "#f90001");
        }

        if (window.U_Tr719 < 50) {
            document.getElementById("Tr719").setAttribute("fill", "#37f800");
        } else if (window.U_Tr719 < 80) {
            document.getElementById("Tr719").setAttribute("fill", "#dbf400");
        } else if (window.U_Tr719 < 90) {
            document.getElementById("Tr719").setAttribute("fill", "#f99700");
        } else {
            document.getElementById("Tr719").setAttribute("fill", "#f90001");
        }

        // if (Math.abs(window.P_Tr719 - window.P_Bus265) > 100) {
        //     document.getElementById("line54").setAttribute("stroke", "#ff0000");
        // } else {
        //     document.getElementById("line54").setAttribute("stroke", "#474747");
        // }
    }
}
