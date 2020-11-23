/* ANIMATION CONTROL
*    this part is using to control the animation motion direction
*    and currently, the decision is made be the difference between
*    the value of P on two side of the line!
*    The control may be changed in the future update version!*/

setInterval("AnimateControl()",10);// every 10 ms check once


function AnimateControl() {
        /* Animation before data received
           All the animation will be invisible
           The relative code is be written in the index.html file!.*/
       if (typeof(window.U_Tr999)=="undefined" || document.getElementById("AniVisibility_On").style.visibility === "hidden"){
          document.getElementById("line1R-L").style.visibility = "hidden"; document.getElementById("line1L-R").style.visibility = "hidden";
          document.getElementById("line2R-L").style.visibility = "hidden"; document.getElementById("line2L-R").style.visibility = "hidden";
          document.getElementById("line3R-L").style.visibility = "hidden"; document.getElementById("line3L-R").style.visibility = "hidden";
          document.getElementById("line4R-L").style.visibility = "hidden"; document.getElementById("line4L-R").style.visibility = "hidden";
          document.getElementById("line5R-L").style.visibility = "hidden"; document.getElementById("line5L-R").style.visibility = "hidden";
          document.getElementById("line6R-L").style.visibility = "hidden"; document.getElementById("line6L-R").style.visibility = "hidden";
          document.getElementById("line7R-L").style.visibility = "hidden"; document.getElementById("line7L-R").style.visibility = "hidden";
          document.getElementById("line8R-L").style.visibility = "hidden"; document.getElementById("line8L-R").style.visibility = "hidden";
          document.getElementById("line9R-L").style.visibility = "hidden"; document.getElementById("line9L-R").style.visibility = "hidden";
          document.getElementById("line10R-L").style.visibility = "hidden"; document.getElementById("line10L-R").style.visibility = "hidden";
          document.getElementById("line11R-L").style.visibility = "hidden"; document.getElementById("line11L-R").style.visibility = "hidden";
          document.getElementById("line12R-L").style.visibility = "hidden"; document.getElementById("line12L-R").style.visibility = "hidden";
          document.getElementById("line13R-L").style.visibility = "hidden"; document.getElementById("line13L-R").style.visibility = "hidden";
          document.getElementById("line14R-L").style.visibility = "hidden"; document.getElementById("line14L-R").style.visibility = "hidden";
          document.getElementById("line15R-L").style.visibility = "hidden"; document.getElementById("line15L-R").style.visibility = "hidden";
          document.getElementById("line16R-L").style.visibility = "hidden"; document.getElementById("line16L-R").style.visibility = "hidden";
          document.getElementById("line17R-L").style.visibility = "hidden"; document.getElementById("line17L-R").style.visibility = "hidden";
          document.getElementById("line18R-L").style.visibility = "hidden"; document.getElementById("line18L-R").style.visibility = "hidden";
          document.getElementById("line19R-L").style.visibility = "hidden"; document.getElementById("line19L-R").style.visibility = "hidden";
          document.getElementById("line20R-L").style.visibility = "hidden"; document.getElementById("line20L-R").style.visibility = "hidden";
          document.getElementById("line21R-L").style.visibility = "hidden"; document.getElementById("line21L-R").style.visibility = "hidden";
          document.getElementById("line22R-L").style.visibility = "hidden"; document.getElementById("line22L-R").style.visibility = "hidden";
          document.getElementById("line23R-L").style.visibility = "hidden"; document.getElementById("line23L-R").style.visibility = "hidden";
          document.getElementById("line24R-L").style.visibility = "hidden"; document.getElementById("line24L-R").style.visibility = "hidden";
          document.getElementById("line25R-L").style.visibility = "hidden"; document.getElementById("line25L-R").style.visibility = "hidden";
          document.getElementById("line26R-L").style.visibility = "hidden"; document.getElementById("line26L-R").style.visibility = "hidden";
          document.getElementById("line27R-L").style.visibility = "hidden"; document.getElementById("line27L-R").style.visibility = "hidden";
          document.getElementById("line28R-L").style.visibility = "hidden"; document.getElementById("line28L-R").style.visibility = "hidden";
          document.getElementById("line29R-L").style.visibility = "hidden"; document.getElementById("line29L-R").style.visibility = "hidden";
          document.getElementById("line30R-L").style.visibility = "hidden"; document.getElementById("line30L-R").style.visibility = "hidden";
          document.getElementById("line31R-L").style.visibility = "hidden"; document.getElementById("line31L-R").style.visibility = "hidden";
          document.getElementById("line32R-L").style.visibility = "hidden"; document.getElementById("line32L-R").style.visibility = "hidden";
          document.getElementById("line33R-L").style.visibility = "hidden"; document.getElementById("line33L-R").style.visibility = "hidden";
          document.getElementById("line34R-L").style.visibility = "hidden"; document.getElementById("line34L-R").style.visibility = "hidden";
          document.getElementById("line35R-L").style.visibility = "hidden"; document.getElementById("line35L-R").style.visibility = "hidden";
          document.getElementById("line36R-L").style.visibility = "hidden"; document.getElementById("line36L-R").style.visibility = "hidden";
          document.getElementById("line37R-L").style.visibility = "hidden"; document.getElementById("line37L-R").style.visibility = "hidden";
          document.getElementById("line38R-L").style.visibility = "hidden"; document.getElementById("line38L-R").style.visibility = "hidden";
          document.getElementById("line39R-L").style.visibility = "hidden"; document.getElementById("line39L-R").style.visibility = "hidden";
          document.getElementById("line40R-L").style.visibility = "hidden"; document.getElementById("line40L-R").style.visibility = "hidden";
          document.getElementById("line41R-L").style.visibility = "hidden"; document.getElementById("line41L-R").style.visibility = "hidden";
          document.getElementById("line42R-L").style.visibility = "hidden"; document.getElementById("line42L-R").style.visibility = "hidden";
          document.getElementById("line43R-L").style.visibility = "hidden"; document.getElementById("line43L-R").style.visibility = "hidden";
          document.getElementById("line44R-L").style.visibility = "hidden"; document.getElementById("line44L-R").style.visibility = "hidden";
          document.getElementById("line45R-L").style.visibility = "hidden"; document.getElementById("line45L-R").style.visibility = "hidden";
          document.getElementById("line46R-L").style.visibility = "hidden"; document.getElementById("line46L-R").style.visibility = "hidden";
          document.getElementById("line47R-L").style.visibility = "hidden"; document.getElementById("line47L-R").style.visibility = "hidden";
          document.getElementById("line48R-L").style.visibility = "hidden"; document.getElementById("line48L-R").style.visibility = "hidden";
          document.getElementById("line49R-L").style.visibility = "hidden"; document.getElementById("line49L-R").style.visibility = "hidden";
          document.getElementById("line50R-L").style.visibility = "hidden"; document.getElementById("line50L-R").style.visibility = "hidden";
          document.getElementById("line51R-L").style.visibility = "hidden"; document.getElementById("line51L-R").style.visibility = "hidden";
          document.getElementById("line52R-L").style.visibility = "hidden"; document.getElementById("line52L-R").style.visibility = "hidden";
          document.getElementById("line53R-L").style.visibility = "hidden"; document.getElementById("line53L-R").style.visibility = "hidden";
          document.getElementById("line54R-L").style.visibility = "hidden"; document.getElementById("line54L-R").style.visibility = "hidden";
          document.getElementById("line55R-L").style.visibility = "hidden"; document.getElementById("line55L-R").style.visibility = "hidden";
          document.getElementById("line56R-L").style.visibility = "hidden"; document.getElementById("line56L-R").style.visibility = "hidden";
          document.getElementById("line57R-L").style.visibility = "hidden"; document.getElementById("line57L-R").style.visibility = "hidden";
          document.getElementById("line58R-L").style.visibility = "hidden"; document.getElementById("line58L-R").style.visibility = "hidden";
          document.getElementById("line59R-L").style.visibility = "hidden"; document.getElementById("line59L-R").style.visibility = "hidden";
          document.getElementById("line60R-L").style.visibility = "hidden"; document.getElementById("line60L-R").style.visibility = "hidden";
          document.getElementById("line61R-L").style.visibility = "hidden"; document.getElementById("line61L-R").style.visibility = "hidden";
          document.getElementById("line62R-L").style.visibility = "hidden"; document.getElementById("line62L-R").style.visibility = "hidden";
          document.getElementById("line63R-L").style.visibility = "hidden"; document.getElementById("line63L-R").style.visibility = "hidden";
          document.getElementById("line64R-L").style.visibility = "hidden"; document.getElementById("line64L-R").style.visibility = "hidden";
          document.getElementById("line65R-L").style.visibility = "hidden"; document.getElementById("line65L-R").style.visibility = "hidden";
          document.getElementById("line66R-L").style.visibility = "hidden"; document.getElementById("line66L-R").style.visibility = "hidden";
          document.getElementById("line67R-L").style.visibility = "hidden"; document.getElementById("line67L-R").style.visibility = "hidden";
          document.getElementById("line68R-L").style.visibility = "hidden"; document.getElementById("line68L-R").style.visibility = "hidden";
          document.getElementById("line69R-L").style.visibility = "hidden"; document.getElementById("line69L-R").style.visibility = "hidden";
          document.getElementById("line70R-L").style.visibility = "hidden"; document.getElementById("line70L-R").style.visibility = "hidden";
          document.getElementById("line71R-L").style.visibility = "hidden"; document.getElementById("line71L-R").style.visibility = "hidden";
          document.getElementById("line72R-L").style.visibility = "hidden"; document.getElementById("line72L-R").style.visibility = "hidden";
          document.getElementById("line73R-L").style.visibility = "hidden"; document.getElementById("line73L-R").style.visibility = "hidden";
          document.getElementById("line74R-L").style.visibility = "hidden"; document.getElementById("line74L-R").style.visibility = "hidden";
          document.getElementById("line75R-L").style.visibility = "hidden"; document.getElementById("line75L-R").style.visibility = "hidden";
          document.getElementById("line76R-L").style.visibility = "hidden"; document.getElementById("line76L-R").style.visibility = "hidden";
          document.getElementById("line77R-L").style.visibility = "hidden"; document.getElementById("line77L-R").style.visibility = "hidden";
          document.getElementById("line78R-L").style.visibility = "hidden"; document.getElementById("line78L-R").style.visibility = "hidden";
          document.getElementById("line79R-L").style.visibility = "hidden"; document.getElementById("line79L-R").style.visibility = "hidden";
          document.getElementById("line80R-L").style.visibility = "hidden"; document.getElementById("line80L-R").style.visibility = "hidden";
          document.getElementById("line81R-L").style.visibility = "hidden"; document.getElementById("line81L-R").style.visibility = "hidden";
          document.getElementById("line82R-L").style.visibility = "hidden"; document.getElementById("line82L-R").style.visibility = "hidden";
          document.getElementById("line83R-L").style.visibility = "hidden"; document.getElementById("line83L-R").style.visibility = "hidden";
          document.getElementById("line84R-L").style.visibility = "hidden"; document.getElementById("line84L-R").style.visibility = "hidden";
          document.getElementById("line85R-L").style.visibility = "hidden"; document.getElementById("line85L-R").style.visibility = "hidden";
          document.getElementById("line86R-L").style.visibility = "hidden"; document.getElementById("line86L-R").style.visibility = "hidden";
          document.getElementById("line87R-L").style.visibility = "hidden"; document.getElementById("line87L-R").style.visibility = "hidden";
          document.getElementById("line88R-L").style.visibility = "hidden"; document.getElementById("line88L-R").style.visibility = "hidden";
          document.getElementById("line89R-L").style.visibility = "hidden"; document.getElementById("line89L-R").style.visibility = "hidden";
          document.getElementById("line90R-L").style.visibility = "hidden"; document.getElementById("line90L-R").style.visibility = "hidden";
          document.getElementById("line91R-L").style.visibility = "hidden"; document.getElementById("line91L-R").style.visibility = "hidden";
          document.getElementById("line92R-L").style.visibility = "hidden"; document.getElementById("line92L-R").style.visibility = "hidden";
          document.getElementById("line93R-L").style.visibility = "hidden"; document.getElementById("line93L-R").style.visibility = "hidden";
          document.getElementById("line94R-L").style.visibility = "hidden"; document.getElementById("line94L-R").style.visibility = "hidden";
          document.getElementById("line95R-L").style.visibility = "hidden"; document.getElementById("line95L-R").style.visibility = "hidden";
          document.getElementById("line96R-L").style.visibility = "hidden"; document.getElementById("line96L-R").style.visibility = "hidden";
          document.getElementById("line97R-L").style.visibility = "hidden"; document.getElementById("line97L-R").style.visibility = "hidden";
          document.getElementById("line98R-L").style.visibility = "hidden"; document.getElementById("line98L-R").style.visibility = "hidden";
          document.getElementById("line99R-L").style.visibility = "hidden"; document.getElementById("line99L-R").style.visibility = "hidden";
          document.getElementById("line100R-L").style.visibility = "hidden"; document.getElementById("line100L-R").style.visibility = "hidden";
          document.getElementById("line101R-L").style.visibility = "hidden"; document.getElementById("line101L-R").style.visibility = "hidden";
          document.getElementById("line102R-L").style.visibility = "hidden"; document.getElementById("line102L-R").style.visibility = "hidden";
          document.getElementById("line103R-L").style.visibility = "hidden"; document.getElementById("line103L-R").style.visibility = "hidden";
          document.getElementById("line104R-L").style.visibility = "hidden"; document.getElementById("line104L-R").style.visibility = "hidden";
          document.getElementById("line105R-L").style.visibility = "hidden"; document.getElementById("line105L-R").style.visibility = "hidden";
          document.getElementById("line106R-L").style.visibility = "hidden"; document.getElementById("line106L-R").style.visibility = "hidden";
          document.getElementById("line107R-L").style.visibility = "hidden"; document.getElementById("line107L-R").style.visibility = "hidden";
          document.getElementById("line108R-L").style.visibility = "hidden"; document.getElementById("line108L-R").style.visibility = "hidden";
          document.getElementById("line109R-L").style.visibility = "hidden"; document.getElementById("line109L-R").style.visibility = "hidden";
          document.getElementById("line110R-L").style.visibility = "hidden"; document.getElementById("line110L-R").style.visibility = "hidden";
          document.getElementById("line111R-L").style.visibility = "hidden"; document.getElementById("line111L-R").style.visibility = "hidden";
          document.getElementById("line112R-L").style.visibility = "hidden"; document.getElementById("line112L-R").style.visibility = "hidden";
          document.getElementById("line113R-L").style.visibility = "hidden"; document.getElementById("line113L-R").style.visibility = "hidden";
          document.getElementById("line114R-L").style.visibility = "hidden"; document.getElementById("line114L-R").style.visibility = "hidden";
          document.getElementById("line115R-L").style.visibility = "hidden"; document.getElementById("line115L-R").style.visibility = "hidden";
          document.getElementById("line116R-L").style.visibility = "hidden"; document.getElementById("line116L-R").style.visibility = "hidden";
          document.getElementById("line117R-L").style.visibility = "hidden"; document.getElementById("line117L-R").style.visibility = "hidden";
          document.getElementById("line118R-L").style.visibility = "hidden"; document.getElementById("line118L-R").style.visibility = "hidden";
          document.getElementById("line119R-L").style.visibility = "hidden"; document.getElementById("line119L-R").style.visibility = "hidden";
          document.getElementById("line120R-L").style.visibility = "hidden"; document.getElementById("line120L-R").style.visibility = "hidden";
          document.getElementById("line121R-L").style.visibility = "hidden"; document.getElementById("line121L-R").style.visibility = "hidden";
          document.getElementById("line122R-L").style.visibility = "hidden"; document.getElementById("line122L-R").style.visibility = "hidden";
          document.getElementById("line123R-L").style.visibility = "hidden"; document.getElementById("line123L-R").style.visibility = "hidden";
          document.getElementById("line124R-L").style.visibility = "hidden"; document.getElementById("line124L-R").style.visibility = "hidden";
          document.getElementById("line125R-L").style.visibility = "hidden"; document.getElementById("line125L-R").style.visibility = "hidden";
          document.getElementById("line126R-L").style.visibility = "hidden"; document.getElementById("line126L-R").style.visibility = "hidden";
          document.getElementById("line127R-L").style.visibility = "hidden"; document.getElementById("line127L-R").style.visibility = "hidden";
          document.getElementById("line128R-L").style.visibility = "hidden"; document.getElementById("line128L-R").style.visibility = "hidden";
          document.getElementById("line129R-L").style.visibility = "hidden"; document.getElementById("line129L-R").style.visibility = "hidden";
          document.getElementById("line130R-L").style.visibility = "hidden"; document.getElementById("line130L-R").style.visibility = "hidden";
          document.getElementById("line131R-L").style.visibility = "hidden"; document.getElementById("line131L-R").style.visibility = "hidden";
          document.getElementById("line132R-L").style.visibility = "hidden"; document.getElementById("line132L-R").style.visibility = "hidden";
          document.getElementById("line133R-L").style.visibility = "hidden"; document.getElementById("line133L-R").style.visibility = "hidden";
          document.getElementById("line134R-L").style.visibility = "hidden"; document.getElementById("line134L-R").style.visibility = "hidden";
          document.getElementById("line135R-L").style.visibility = "hidden"; document.getElementById("line135L-R").style.visibility = "hidden";
          document.getElementById("line136R-L").style.visibility = "hidden"; document.getElementById("line136L-R").style.visibility = "hidden";
          document.getElementById("line137R-L").style.visibility = "hidden"; document.getElementById("line137L-R").style.visibility = "hidden";
          document.getElementById("line138R-L").style.visibility = "hidden"; document.getElementById("line138L-R").style.visibility = "hidden";
          document.getElementById("line139R-L").style.visibility = "hidden"; document.getElementById("line139L-R").style.visibility = "hidden";
          document.getElementById("line140R-L").style.visibility = "hidden"; document.getElementById("line140L-R").style.visibility = "hidden";
          document.getElementById("line141R-L").style.visibility = "hidden"; document.getElementById("line141L-R").style.visibility = "hidden";
          document.getElementById("line142R-L").style.visibility = "hidden"; document.getElementById("line142L-R").style.visibility = "hidden";
          document.getElementById("line143R-L").style.visibility = "hidden"; document.getElementById("line143L-R").style.visibility = "hidden";
          document.getElementById("line144R-L").style.visibility = "hidden"; document.getElementById("line144L-R").style.visibility = "hidden";
          document.getElementById("line145R-L").style.visibility = "hidden"; document.getElementById("line145L-R").style.visibility = "hidden";
          document.getElementById("line146R-L").style.visibility = "hidden"; document.getElementById("line146L-R").style.visibility = "hidden";
          document.getElementById("line147R-L").style.visibility = "hidden"; document.getElementById("line147L-R").style.visibility = "hidden";
          document.getElementById("line148R-L").style.visibility = "hidden"; document.getElementById("line148L-R").style.visibility = "hidden";
          document.getElementById("line149R-L").style.visibility = "hidden"; document.getElementById("line149L-R").style.visibility = "hidden";
          document.getElementById("line150R-L").style.visibility = "hidden"; document.getElementById("line150L-R").style.visibility = "hidden";
          document.getElementById("line151R-L").style.visibility = "hidden"; document.getElementById("line151L-R").style.visibility = "hidden";
          document.getElementById("line152R-L").style.visibility = "hidden"; document.getElementById("line152L-R").style.visibility = "hidden";
          document.getElementById("line153R-L").style.visibility = "hidden"; document.getElementById("line153L-R").style.visibility = "hidden";
          document.getElementById("line154R-L").style.visibility = "hidden"; document.getElementById("line154L-R").style.visibility = "hidden";
          document.getElementById("line155R-L").style.visibility = "hidden"; document.getElementById("line155L-R").style.visibility = "hidden";
          document.getElementById("line156R-L").style.visibility = "hidden"; document.getElementById("line156L-R").style.visibility = "hidden";
          document.getElementById("line157R-L").style.visibility = "hidden"; document.getElementById("line157L-R").style.visibility = "hidden";
          document.getElementById("line158R-L").style.visibility = "hidden"; document.getElementById("line158L-R").style.visibility = "hidden";
          document.getElementById("line159R-L").style.visibility = "hidden"; document.getElementById("line159L-R").style.visibility = "hidden";
          document.getElementById("line160R-L").style.visibility = "hidden"; document.getElementById("line160L-R").style.visibility = "hidden";
          document.getElementById("line161R-L").style.visibility = "hidden"; document.getElementById("line161L-R").style.visibility = "hidden";
          document.getElementById("line162R-L").style.visibility = "hidden"; document.getElementById("line162L-R").style.visibility = "hidden";
          document.getElementById("line163R-L").style.visibility = "hidden"; document.getElementById("line163L-R").style.visibility = "hidden";
          document.getElementById("line164R-L").style.visibility = "hidden"; document.getElementById("line164L-R").style.visibility = "hidden";
          document.getElementById("line165R-L").style.visibility = "hidden"; document.getElementById("line165L-R").style.visibility = "hidden";
          document.getElementById("line166R-L").style.visibility = "hidden"; document.getElementById("line166L-R").style.visibility = "hidden";
          document.getElementById("line167R-L").style.visibility = "hidden"; document.getElementById("line167L-R").style.visibility = "hidden";
        return;
        }


        /* Animation after first data received
           All the animation will be under control*/
       if (window.P_Tr999 > 0){
       document.getElementById("line1L-R").style.visibility = "hidden";
       document.getElementById("line1R-L").style.visibility = "visible";
    } else{
       document.getElementById("line1R-L").style.visibility = "hidden";
       document.getElementById("line1L-R").style.visibility = "visible";
    }
       if (window.P_Tr686 > 0){
       document.getElementById("line2L-R").style.visibility = "hidden";
       document.getElementById("line2R-L").style.visibility = "visible";
    } else{
       document.getElementById("line2R-L").style.visibility = "hidden";
       document.getElementById("line2L-R").style.visibility = "visible";
    }
       if (window.P_Line1 > 0){
       document.getElementById("line3L-R").style.visibility = "hidden";
       document.getElementById("line3R-L").style.visibility = "visible";
    } else{
       document.getElementById("line3R-L").style.visibility = "hidden";
       document.getElementById("line3L-R").style.visibility = "visible";
    }
       if (window.P_Tr653 > 0){
       document.getElementById("line4L-R").style.visibility = "hidden";
       document.getElementById("line4R-L").style.visibility = "visible";
    } else{
       document.getElementById("line4R-L").style.visibility = "hidden";
       document.getElementById("line4L-R").style.visibility = "visible";
    }
       if (window.P_Line5 > 0){
       document.getElementById("line5L-R").style.visibility = "hidden";
       document.getElementById("line5R-L").style.visibility = "visible";
    } else{
       document.getElementById("line5R-L").style.visibility = "hidden";
       document.getElementById("line5L-R").style.visibility = "visible";
    }
       if (window.P_Tr651 > 0){
       document.getElementById("line6L-R").style.visibility = "hidden";
       document.getElementById("line6R-L").style.visibility = "visible";
    } else{
       document.getElementById("line6R-L").style.visibility = "hidden";
       document.getElementById("line6L-R").style.visibility = "visible";
    }
       if (window.P_Line7 > 0){
       document.getElementById("line7L-R").style.visibility = "hidden";
       document.getElementById("line7R-L").style.visibility = "visible";
    } else{
       document.getElementById("line7R-L").style.visibility = "hidden";
       document.getElementById("line7L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr676){
       document.getElementById("line8R-L").style.visibility = "hidden";
       document.getElementById("line8L-R").style.visibility = "visible";
    } else{
       document.getElementById("line8L-R").style.visibility = "hidden";
       document.getElementById("line8R-L").style.visibility = "visible";
    }
       if (window.P_Line9 > 0){
       document.getElementById("line9L-R").style.visibility = "hidden";
       document.getElementById("line9R-L").style.visibility = "visible";
    } else{
       document.getElementById("line9R-L").style.visibility = "hidden";
       document.getElementById("line9L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr681){
       document.getElementById("line10R-L").style.visibility = "hidden";
       document.getElementById("line10L-R").style.visibility = "visible";
    } else{
       document.getElementById("line10L-R").style.visibility = "hidden";
       document.getElementById("line10R-L").style.visibility = "visible";
    }
       if (window.P_Line11 > 0){
       document.getElementById("line11L-R").style.visibility = "hidden";
       document.getElementById("line11R-L").style.visibility = "visible";
    } else{
       document.getElementById("line11R-L").style.visibility = "hidden";
       document.getElementById("line11L-R").style.visibility = "visible";
    }
       if (window.P_Tr664 > 0){
       document.getElementById("line12L-R").style.visibility = "hidden";
       document.getElementById("line12R-L").style.visibility = "visible";
    } else{
       document.getElementById("line12R-L").style.visibility = "hidden";
       document.getElementById("line12L-R").style.visibility = "visible";
    }
       if (window.P_Line13 > 0){
       document.getElementById("line13L-R").style.visibility = "hidden";
       document.getElementById("line13R-L").style.visibility = "visible";
    } else{
       document.getElementById("line13R-L").style.visibility = "hidden";
       document.getElementById("line13L-R").style.visibility = "visible";
    }
       if (window.P_Line14 > 0){
       document.getElementById("line14L-R").style.visibility = "hidden";
       document.getElementById("line14R-L").style.visibility = "visible";
    } else{
       document.getElementById("line14R-L").style.visibility = "hidden";
       document.getElementById("line14L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr657){
       document.getElementById("line15R-L").style.visibility = "hidden";
       document.getElementById("line15L-R").style.visibility = "visible";
    } else{
       document.getElementById("line15L-R").style.visibility = "hidden";
       document.getElementById("line15R-L").style.visibility = "visible";
    }
       if (window.P_Tr706 > 0){
       document.getElementById("line16L-R").style.visibility = "hidden";
       document.getElementById("line16R-L").style.visibility = "visible";
    } else{
       document.getElementById("line16R-L").style.visibility = "hidden";
       document.getElementById("line16L-R").style.visibility = "visible";
    }
       if (window.P_Line17 > 0){
       document.getElementById("line17L-R").style.visibility = "hidden";
       document.getElementById("line17R-L").style.visibility = "visible";
    } else{
       document.getElementById("line17R-L").style.visibility = "hidden";
       document.getElementById("line17L-R").style.visibility = "visible";
    }
       if (window.P_Line18 > 0){
       document.getElementById("line18R-L").style.visibility = "hidden";
       document.getElementById("line18L-R").style.visibility = "visible";
    } else{
       document.getElementById("line18L-R").style.visibility = "hidden";
       document.getElementById("line18R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr688){
       document.getElementById("line19R-L").style.visibility = "hidden";
       document.getElementById("line19L-R").style.visibility = "visible";
    } else{
       document.getElementById("line19L-R").style.visibility = "hidden";
       document.getElementById("line19R-L").style.visibility = "visible";
    }
       if (window.P_Line20 > 0){
       document.getElementById("line20R-L").style.visibility = "hidden";
       document.getElementById("line20L-R").style.visibility = "visible";
    } else{
       document.getElementById("line20L-R").style.visibility = "hidden";
       document.getElementById("line20R-L").style.visibility = "visible";
    }
       if (window.P_Line21 > 0){
       document.getElementById("line21L-R").style.visibility = "hidden";
       document.getElementById("line21R-L").style.visibility = "visible";
    } else{
       document.getElementById("line21R-L").style.visibility = "hidden";
       document.getElementById("line21L-R").style.visibility = "visible";
    }
       if (window.P_Tr727 > 0){
       document.getElementById("line22L-R").style.visibility = "hidden";
       document.getElementById("line22R-L").style.visibility = "visible";
    } else{
       document.getElementById("line22R-L").style.visibility = "hidden";
       document.getElementById("line22L-R").style.visibility = "visible";
    }
       if (window.P_Line23 > 0){
       document.getElementById("line23R-L").style.visibility = "hidden";
       document.getElementById("line23L-R").style.visibility = "visible";
    } else{
       document.getElementById("line23L-R").style.visibility = "hidden";
       document.getElementById("line23R-L").style.visibility = "visible";
    }
       if (window.P_Tr684 > 0){
       document.getElementById("line24L-R").style.visibility = "hidden";
       document.getElementById("line24R-L").style.visibility = "visible";
    } else{
       document.getElementById("line24R-L").style.visibility = "hidden";
       document.getElementById("line24L-R").style.visibility = "visible";
    }
       if (window.P_Line25 < 0){
       document.getElementById("line25L-R").style.visibility = "hidden";
       document.getElementById("line25R-L").style.visibility = "visible";
    } else{
       document.getElementById("line25R-L").style.visibility = "hidden";
       document.getElementById("line25L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr667){
       document.getElementById("line26R-L").style.visibility = "hidden";
       document.getElementById("line26L-R").style.visibility = "visible";
    } else{
       document.getElementById("line26L-R").style.visibility = "hidden";
       document.getElementById("line26R-L").style.visibility = "visible";
    }
       if (window.P_Line27 > 0){
       document.getElementById("line27R-L").style.visibility = "hidden";
       document.getElementById("line27L-R").style.visibility = "visible";
    } else{
       document.getElementById("line27L-R").style.visibility = "hidden";
       document.getElementById("line27R-L").style.visibility = "visible";
    }
       if (window.P_Tr661 > 0){
       document.getElementById("line28L-R").style.visibility = "hidden";
       document.getElementById("line28R-L").style.visibility = "visible";
    } else{
       document.getElementById("line28R-L").style.visibility = "hidden";
       document.getElementById("line28L-R").style.visibility = "visible";
    }
       if (window.P_Line29 > 0){
       document.getElementById("line29R-L").style.visibility = "hidden";
       document.getElementById("line29L-R").style.visibility = "visible";
    } else{
       document.getElementById("line29L-R").style.visibility = "hidden";
       document.getElementById("line29R-L").style.visibility = "visible";
    }
       if (window.P_Line30 < 0){
       document.getElementById("line30R-L").style.visibility = "hidden";
       document.getElementById("line30L-R").style.visibility = "visible";
    } else{
       document.getElementById("line30L-R").style.visibility = "hidden";
       document.getElementById("line30R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr689){
       document.getElementById("line31R-L").style.visibility = "hidden";
       document.getElementById("line31L-R").style.visibility = "visible";
    } else{
       document.getElementById("line31L-R").style.visibility = "hidden";
       document.getElementById("line31R-L").style.visibility = "visible";
    }
       if (window.P_Line32 < 0){
       document.getElementById("line32R-L").style.visibility = "hidden";
       document.getElementById("line32L-R").style.visibility = "visible";
    } else{
       document.getElementById("line32L-R").style.visibility = "hidden";
       document.getElementById("line32R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr696){
       document.getElementById("line33R-L").style.visibility = "hidden";
       document.getElementById("line33L-R").style.visibility = "visible";
    } else{
       document.getElementById("line33L-R").style.visibility = "hidden";
       document.getElementById("line33R-L").style.visibility = "visible";
    }
       if (window.P_Line34 < 0){
       document.getElementById("line34R-L").style.visibility = "hidden";
       document.getElementById("line34L-R").style.visibility = "visible";
    } else{
       document.getElementById("line34L-R").style.visibility = "hidden";
       document.getElementById("line34R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr692){
       document.getElementById("line35R-L").style.visibility = "hidden";
       document.getElementById("line35L-R").style.visibility = "visible";
    } else{
       document.getElementById("line35L-R").style.visibility = "hidden";
       document.getElementById("line35R-L").style.visibility = "visible";
    }
       if (window.P_Line36 < 0){
       document.getElementById("line36R-L").style.visibility = "hidden";
       document.getElementById("line36L-R").style.visibility = "visible";
    } else{
       document.getElementById("line36L-R").style.visibility = "hidden";
       document.getElementById("line36R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr715){
       document.getElementById("line37R-L").style.visibility = "hidden";
       document.getElementById("line37L-R").style.visibility = "visible";
    } else{
       document.getElementById("line37L-R").style.visibility = "hidden";
       document.getElementById("line37R-L").style.visibility = "visible";
    }
       if (window.P_Line38 > 0){
       document.getElementById("line38L-R").style.visibility = "hidden";
       document.getElementById("line38R-L").style.visibility = "visible";
    } else{
       document.getElementById("line38R-L").style.visibility = "hidden";
       document.getElementById("line38L-R").style.visibility = "visible";
    }
       if (window.P_Tr702 > 0){
       document.getElementById("line39L-R").style.visibility = "hidden";
       document.getElementById("line39R-L").style.visibility = "visible";
    } else{
       document.getElementById("line39R-L").style.visibility = "hidden";
       document.getElementById("line39L-R").style.visibility = "visible";
    }
       if (window.P_Line40 < 0){
       document.getElementById("line40R-L").style.visibility = "hidden";
       document.getElementById("line40L-R").style.visibility = "visible";
    } else{
       document.getElementById("line40L-R").style.visibility = "hidden";
       document.getElementById("line40R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr670){
       document.getElementById("line41R-L").style.visibility = "hidden";
       document.getElementById("line41L-R").style.visibility = "visible";
    } else{
       document.getElementById("line41L-R").style.visibility = "hidden";
       document.getElementById("line41R-L").style.visibility = "visible";
    }
       if (window.P_Line42 < 0){
       document.getElementById("line42R-L").style.visibility = "hidden";
       document.getElementById("line42L-R").style.visibility = "visible";
    } else{
       document.getElementById("line42L-R").style.visibility = "hidden";
       document.getElementById("line42R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr680){
       document.getElementById("line43R-L").style.visibility = "hidden";
       document.getElementById("line43L-R").style.visibility = "visible";
    } else{
       document.getElementById("line43L-R").style.visibility = "hidden";
       document.getElementById("line43R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr710){
       document.getElementById("line44R-L").style.visibility = "hidden";
       document.getElementById("line44L-R").style.visibility = "visible";
    } else{
       document.getElementById("line44L-R").style.visibility = "hidden";
       document.getElementById("line44R-L").style.visibility = "visible";
    }
       if (window.P_Line45 > 0){
       document.getElementById("line45L-R").style.visibility = "hidden";
       document.getElementById("line45R-L").style.visibility = "visible";
    } else{
       document.getElementById("line45R-L").style.visibility = "hidden";
       document.getElementById("line45L-R").style.visibility = "visible";
    }
       if (window.P_Tr683 > 0){
       document.getElementById("line46L-R").style.visibility = "hidden";
       document.getElementById("line46R-L").style.visibility = "visible";
    } else{
       document.getElementById("line46R-L").style.visibility = "hidden";
       document.getElementById("line46L-R").style.visibility = "visible";
    }
       if (window.P_Line47 < 0){
       document.getElementById("line47R-L").style.visibility = "hidden";
       document.getElementById("line47L-R").style.visibility = "visible";
    } else{
       document.getElementById("line47L-R").style.visibility = "hidden";
       document.getElementById("line47R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr712){
       document.getElementById("line48R-L").style.visibility = "hidden";
       document.getElementById("line48L-R").style.visibility = "visible";
    } else{
       document.getElementById("line48L-R").style.visibility = "hidden";
       document.getElementById("line48R-L").style.visibility = "visible";
    }
       if (window.P_Tr718 > 0){
       document.getElementById("line49L-R").style.visibility = "hidden";
       document.getElementById("line49R-L").style.visibility = "visible";
    } else{
       document.getElementById("line49R-L").style.visibility = "hidden";
       document.getElementById("line49L-R").style.visibility = "visible";
    }
       if (window.P_Tr672 > 0){
       document.getElementById("line50R-L").style.visibility = "hidden";
       document.getElementById("line50L-R").style.visibility = "visible";
    } else{
       document.getElementById("line50L-R").style.visibility = "hidden";
       document.getElementById("line50R-L").style.visibility = "visible";
    }
       if (window.P_Line51 < 0){
       document.getElementById("line51R-L").style.visibility = "hidden";
       document.getElementById("line51L-R").style.visibility = "visible";
    } else{
       document.getElementById("line51L-R").style.visibility = "hidden";
       document.getElementById("line51R-L").style.visibility = "visible";
    }
       if (window.P_Tr654 > 0){
       document.getElementById("line52L-R").style.visibility = "hidden";
       document.getElementById("line52R-L").style.visibility = "visible";
    } else{
       document.getElementById("line52R-L").style.visibility = "hidden";
       document.getElementById("line52L-R").style.visibility = "visible";
    }
       if (window.P_Line53 < 0){
       document.getElementById("line53R-L").style.visibility = "hidden";
       document.getElementById("line53L-R").style.visibility = "visible";
    } else{
       document.getElementById("line53L-R").style.visibility = "hidden";
       document.getElementById("line53R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr719){
       document.getElementById("line54R-L").style.visibility = "hidden";
       document.getElementById("line54L-R").style.visibility = "visible";
    } else{
       document.getElementById("line54L-R").style.visibility = "hidden";
       document.getElementById("line54R-L").style.visibility = "visible";
    }
       if (window.P_Tr659 > 0){
       document.getElementById("line55L-R").style.visibility = "hidden";
       document.getElementById("line55R-L").style.visibility = "visible";
    } else{
       document.getElementById("line55R-L").style.visibility = "hidden";
       document.getElementById("line55L-R").style.visibility = "visible";
    }
       if (window.P_Tr662 > 0){
       document.getElementById("line56R-L").style.visibility = "hidden";
       document.getElementById("line56L-R").style.visibility = "visible";
    } else{
       document.getElementById("line56L-R").style.visibility = "hidden";
       document.getElementById("line56R-L").style.visibility = "visible";
    }
       if (window.P_Tr671 > 0){
       document.getElementById("line57R-L").style.visibility = "hidden";
       document.getElementById("line57L-R").style.visibility = "visible";
    } else{
       document.getElementById("line57L-R").style.visibility = "hidden";
       document.getElementById("line57R-L").style.visibility = "visible";
    }
       if (window.P_Line58 < 0){
       document.getElementById("line58R-L").style.visibility = "hidden";
       document.getElementById("line58L-R").style.visibility = "visible";
    } else{
       document.getElementById("line58L-R").style.visibility = "hidden";
       document.getElementById("line58R-L").style.visibility = "visible";
    }
       if (window.P_Line59 < 0){
       document.getElementById("line59R-L").style.visibility = "hidden";
       document.getElementById("line59L-R").style.visibility = "visible";
    } else{
       document.getElementById("line59L-R").style.visibility = "hidden";
       document.getElementById("line59R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr675){
       document.getElementById("line60R-L").style.visibility = "hidden";
       document.getElementById("line60L-R").style.visibility = "visible";
    } else{
       document.getElementById("line60L-R").style.visibility = "hidden";
       document.getElementById("line60R-L").style.visibility = "visible";
    }
       if (window.P_Line61 < 0){
       document.getElementById("line61R-L").style.visibility = "hidden";
       document.getElementById("line61L-R").style.visibility = "visible";
    } else{
       document.getElementById("line61L-R").style.visibility = "hidden";
       document.getElementById("line61R-L").style.visibility = "visible";
    }
       if (window.P_Tr721 > 0){
       document.getElementById("line62R-L").style.visibility = "hidden";
       document.getElementById("line62L-R").style.visibility = "visible";
    } else{
       document.getElementById("line62L-R").style.visibility = "hidden";
       document.getElementById("line62R-L").style.visibility = "visible";
    }
       if (window.P_Line63 < 0){
       document.getElementById("line63R-L").style.visibility = "hidden";
       document.getElementById("line63L-R").style.visibility = "visible";
    } else{
       document.getElementById("line63L-R").style.visibility = "hidden";
       document.getElementById("line63R-L").style.visibility = "visible";
    }
       if (window.P_Tr708 > 0){
       document.getElementById("line64R-L").style.visibility = "hidden";
       document.getElementById("line64L-R").style.visibility = "visible";
    } else{
       document.getElementById("line64L-R").style.visibility = "hidden";
       document.getElementById("line64R-L").style.visibility = "visible";
    }
       if (window.P_Line65 < 0){
       document.getElementById("line65R-L").style.visibility = "hidden";
       document.getElementById("line65L-R").style.visibility = "visible";
    } else{
       document.getElementById("line65L-R").style.visibility = "hidden";
       document.getElementById("line65R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr652){
       document.getElementById("line66R-L").style.visibility = "hidden";
       document.getElementById("line66L-R").style.visibility = "visible";
    } else{
       document.getElementById("line66L-R").style.visibility = "hidden";
       document.getElementById("line66R-L").style.visibility = "visible";
    }
       if (window.P_Line67 < 0){
       document.getElementById("line67R-L").style.visibility = "hidden";
       document.getElementById("line67L-R").style.visibility = "visible";
    } else{
       document.getElementById("line67L-R").style.visibility = "hidden";
       document.getElementById("line67R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr663){
       document.getElementById("line68R-L").style.visibility = "hidden";
       document.getElementById("line68L-R").style.visibility = "visible";
    } else{
       document.getElementById("line68L-R").style.visibility = "hidden";
       document.getElementById("line68R-L").style.visibility = "visible";
    }
       if (window.P_Line69 < 0){
       document.getElementById("line69R-L").style.visibility = "hidden";
       document.getElementById("line69L-R").style.visibility = "visible";
    } else{
       document.getElementById("line69L-R").style.visibility = "hidden";
       document.getElementById("line69R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr725){
       document.getElementById("line70R-L").style.visibility = "hidden";
       document.getElementById("line70L-R").style.visibility = "visible";
    } else{
       document.getElementById("line70L-R").style.visibility = "hidden";
       document.getElementById("line70R-L").style.visibility = "visible";
    }
       if (window.P_Line71 < 0){
       document.getElementById("line71R-L").style.visibility = "hidden";
       document.getElementById("line71L-R").style.visibility = "visible";
    } else{
       document.getElementById("line71L-R").style.visibility = "hidden";
       document.getElementById("line71R-L").style.visibility = "visible";
    }
       if (window.P_Line72 > 0){
       document.getElementById("line72R-L").style.visibility = "hidden";
       document.getElementById("line72L-R").style.visibility = "visible";
    } else{
       document.getElementById("line72L-R").style.visibility = "hidden";
       document.getElementById("line72R-L").style.visibility = "visible";
    }
       if (window.P_Tr728 > 0){
       document.getElementById("line73R-L").style.visibility = "hidden";
       document.getElementById("line73L-R").style.visibility = "visible";
    } else{
       document.getElementById("line73L-R").style.visibility = "hidden";
       document.getElementById("line73R-L").style.visibility = "visible";
    }
       if (window.P_Line74 < 0){
       document.getElementById("line74L-R").style.visibility = "hidden";
       document.getElementById("line74R-L").style.visibility = "visible";
    } else{
       document.getElementById("line74R-L").style.visibility = "hidden";
       document.getElementById("line74L-R").style.visibility = "visible";
    }
       if (window.P_Line75 < 0){
       document.getElementById("line75L-R").style.visibility = "hidden";
       document.getElementById("line75R-L").style.visibility = "visible";
    } else{
       document.getElementById("line75R-L").style.visibility = "hidden";
       document.getElementById("line75L-R").style.visibility = "visible";
    }
       if (window.P_Tr722 > 0){
       document.getElementById("line76R-L").style.visibility = "hidden";
       document.getElementById("line76L-R").style.visibility = "visible";
    } else{
       document.getElementById("line76L-R").style.visibility = "hidden";
       document.getElementById("line76R-L").style.visibility = "visible";
    }
       if (window.P_Line77 < 0){
       document.getElementById("line77L-R").style.visibility = "hidden";
       document.getElementById("line77R-L").style.visibility = "visible";
    } else{
       document.getElementById("line77R-L").style.visibility = "hidden";
       document.getElementById("line77L-R").style.visibility = "visible";
    }
       if (window.P_Tr729 > 0){
       document.getElementById("line78L-R").style.visibility = "hidden";
       document.getElementById("line78R-L").style.visibility = "visible";
    } else{
       document.getElementById("line78R-L").style.visibility = "hidden";
       document.getElementById("line78L-R").style.visibility = "visible";
    }
       if (window.P_Line79 < 0){
       document.getElementById("line79L-R").style.visibility = "hidden";
       document.getElementById("line79R-L").style.visibility = "visible";
    } else{
       document.getElementById("line79R-L").style.visibility = "hidden";
       document.getElementById("line79L-R").style.visibility = "visible";
    }
       if (window.P_Tr687 > 0){
       document.getElementById("line80L-R").style.visibility = "hidden";
       document.getElementById("line80R-L").style.visibility = "visible";
    } else{
       document.getElementById("line80R-L").style.visibility = "hidden";
       document.getElementById("line80L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr714){
       document.getElementById("line81R-L").style.visibility = "hidden";
       document.getElementById("line81L-R").style.visibility = "visible";
    } else{
       document.getElementById("line81L-R").style.visibility = "hidden";
       document.getElementById("line81R-L").style.visibility = "visible";
    }
       if (window.P_Line82 < 0){
       document.getElementById("line82R-L").style.visibility = "hidden";
       document.getElementById("line82L-R").style.visibility = "visible";
    } else{
       document.getElementById("line82L-R").style.visibility = "hidden";
       document.getElementById("line82R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr658){
       document.getElementById("line83R-L").style.visibility = "hidden";
       document.getElementById("line83L-R").style.visibility = "visible";
    } else{
       document.getElementById("line83L-R").style.visibility = "hidden";
       document.getElementById("line83R-L").style.visibility = "visible";
    }
       if (window.P_Line84 < 0){
       document.getElementById("line84R-L").style.visibility = "hidden";
       document.getElementById("line84L-R").style.visibility = "visible";
    } else{
       document.getElementById("line84L-R").style.visibility = "hidden";
       document.getElementById("line84R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr679){
       document.getElementById("line85R-L").style.visibility = "hidden";
       document.getElementById("line85L-R").style.visibility = "visible";
    } else{
       document.getElementById("line85L-R").style.visibility = "hidden";
       document.getElementById("line85R-L").style.visibility = "visible";
    }
       if (window.P_Line86 < 0){
       document.getElementById("line86R-L").style.visibility = "hidden";
       document.getElementById("line86L-R").style.visibility = "visible";
    } else{
       document.getElementById("line86L-R").style.visibility = "hidden";
       document.getElementById("line86R-L").style.visibility = "visible";
    }
       if (window.P_Line87 > 0){
       document.getElementById("line87L-R").style.visibility = "hidden";
       document.getElementById("line87R-L").style.visibility = "visible";
    } else{
       document.getElementById("line87R-L").style.visibility = "hidden";
       document.getElementById("line87L-R").style.visibility = "visible";
    }
       if (window.P_Line88 > 0){
       document.getElementById("line88L-R").style.visibility = "hidden";
       document.getElementById("line88R-L").style.visibility = "visible";
    } else{
       document.getElementById("line88R-L").style.visibility = "hidden";
       document.getElementById("line88L-R").style.visibility = "visible";
    }
       if (window.P_Tr703 > 0){
       document.getElementById("line89L-R").style.visibility = "hidden";
       document.getElementById("line89R-L").style.visibility = "visible";
    } else{
       document.getElementById("line89R-L").style.visibility = "hidden";
       document.getElementById("line89L-R").style.visibility = "visible";
    }
       if (window.P_Line90 > 0){
       document.getElementById("line90L-R").style.visibility = "hidden";
       document.getElementById("line90R-L").style.visibility = "visible";
    } else{
       document.getElementById("line90R-L").style.visibility = "hidden";
       document.getElementById("line90L-R").style.visibility = "visible";
    }
       if (window.P_Tr691 > 0){
       document.getElementById("line91R-L").style.visibility = "hidden";
       document.getElementById("line91L-R").style.visibility = "visible";
    } else{
       document.getElementById("line91L-R").style.visibility = "hidden";
       document.getElementById("line91R-L").style.visibility = "visible";
    }
       if (window.P_Tr698 > 0){
       document.getElementById("line92L-R").style.visibility = "hidden";
       document.getElementById("line92R-L").style.visibility = "visible";
    } else{
       document.getElementById("line92R-L").style.visibility = "hidden";
       document.getElementById("line92L-R").style.visibility = "visible";
    }
       if (window.P_Line93 < 0){
       document.getElementById("line93L-R").style.visibility = "hidden";
       document.getElementById("line93R-L").style.visibility = "visible";
    } else{
       document.getElementById("line93R-L").style.visibility = "hidden";
       document.getElementById("line93L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr656){
       document.getElementById("line94R-L").style.visibility = "hidden";
       document.getElementById("line94L-R").style.visibility = "visible";
    } else{
       document.getElementById("line94L-R").style.visibility = "hidden";
       document.getElementById("line94R-L").style.visibility = "visible";
    }
       if (window.P_Line95 < 0){
       document.getElementById("line95R-L").style.visibility = "hidden";
       document.getElementById("line95L-R").style.visibility = "visible";
    } else{
       document.getElementById("line95L-R").style.visibility = "hidden";
       document.getElementById("line95R-L").style.visibility = "visible";
    }
       if (window.P_Line96 < 0){
       document.getElementById("line96R-L").style.visibility = "hidden";
       document.getElementById("line96L-R").style.visibility = "visible";
    } else{
       document.getElementById("line96L-R").style.visibility = "hidden";
       document.getElementById("line96R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr668){
       document.getElementById("line97R-L").style.visibility = "hidden";
       document.getElementById("line97L-R").style.visibility = "visible";
    } else{
       document.getElementById("line97L-R").style.visibility = "hidden";
       document.getElementById("line97R-L").style.visibility = "visible";
    }
       if (window.P_Line98 > 0){
       document.getElementById("line98R-L").style.visibility = "hidden";
       document.getElementById("line98L-R").style.visibility = "visible";
    } else{
       document.getElementById("line98L-R").style.visibility = "hidden";
       document.getElementById("line98R-L").style.visibility = "visible";
    }
       if (window.P_Line99 < 0){
       document.getElementById("line99L-R").style.visibility = "hidden";
       document.getElementById("line99R-L").style.visibility = "visible";
    } else{
       document.getElementById("line99R-L").style.visibility = "hidden";
       document.getElementById("line99L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr673){
       document.getElementById("line100L-R").style.visibility = "hidden";
       document.getElementById("line100R-L").style.visibility = "visible";
    } else{
       document.getElementById("line100R-L").style.visibility = "hidden";
       document.getElementById("line100L-R").style.visibility = "visible";
    }
       if (window.P_Line101 > 0){
       document.getElementById("line101L-R").style.visibility = "hidden";
       document.getElementById("line101R-L").style.visibility = "visible";
    } else{
       document.getElementById("line101R-L").style.visibility = "hidden";
       document.getElementById("line101L-R").style.visibility = "visible";
    }
       if (window.P_Tr694 > 0){
       document.getElementById("line102L-R").style.visibility = "hidden";
       document.getElementById("line102R-L").style.visibility = "visible";
    } else{
       document.getElementById("line102R-L").style.visibility = "hidden";
       document.getElementById("line102L-R").style.visibility = "visible";
    }
       if (window.P_Line103 < 0){
       document.getElementById("line103R-L").style.visibility = "hidden";
       document.getElementById("line103L-R").style.visibility = "visible";
    } else{
       document.getElementById("line103L-R").style.visibility = "hidden";
       document.getElementById("line103R-L").style.visibility = "visible";
    }
       if (window.P_Tr726 > 0){
       document.getElementById("line104L-R").style.visibility = "hidden";
       document.getElementById("line104R-L").style.visibility = "visible";
    } else{
       document.getElementById("line104R-L").style.visibility = "hidden";
       document.getElementById("line104L-R").style.visibility = "visible";
    }
       if (window.P_Line105 > 0){
       document.getElementById("line105R-L").style.visibility = "hidden";
       document.getElementById("line105L-R").style.visibility = "visible";
    } else{
       document.getElementById("line105L-R").style.visibility = "hidden";
       document.getElementById("line105R-L").style.visibility = "visible";
    }
       if (window.P_Tr682 > 0){
       document.getElementById("line106L-R").style.visibility = "hidden";
       document.getElementById("line106R-L").style.visibility = "visible";
    } else{
       document.getElementById("line106R-L").style.visibility = "hidden";
       document.getElementById("line106L-R").style.visibility = "visible";
    }
       if (window.P_Tr666 > 0){
       document.getElementById("line107L-R").style.visibility = "hidden";
       document.getElementById("line107R-L").style.visibility = "visible";
    } else{
       document.getElementById("line107R-L").style.visibility = "hidden";
       document.getElementById("line107L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr678){
       document.getElementById("line108L-R").style.visibility = "hidden";
       document.getElementById("line108R-L").style.visibility = "visible";
    } else{
       document.getElementById("line108R-L").style.visibility = "hidden";
       document.getElementById("line108L-R").style.visibility = "visible";
    }
       if (window.P_Line109 > 0){
       document.getElementById("line109L-R").style.visibility = "hidden";
       document.getElementById("line109R-L").style.visibility = "visible";
    } else{
       document.getElementById("line109R-L").style.visibility = "hidden";
       document.getElementById("line109L-R").style.visibility = "visible";
    }
       if (window.P_Tr674 > 0){
       document.getElementById("line110L-R").style.visibility = "hidden";
       document.getElementById("line110R-L").style.visibility = "visible";
    } else{
       document.getElementById("line110R-L").style.visibility = "hidden";
       document.getElementById("line110L-R").style.visibility = "visible";
    }
       if (window.P_Line111 > 0){
       document.getElementById("line111L-R").style.visibility = "hidden";
       document.getElementById("line111R-L").style.visibility = "visible";
    } else{
       document.getElementById("line111R-L").style.visibility = "hidden";
       document.getElementById("line111L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr720){
       document.getElementById("line112R-L").style.visibility = "hidden";
       document.getElementById("line112L-R").style.visibility = "visible";
    } else{
       document.getElementById("line112L-R").style.visibility = "hidden";
       document.getElementById("line112R-L").style.visibility = "visible";
    }
       if (window.P_Line113 > 0){
       document.getElementById("line113L-R").style.visibility = "hidden";
       document.getElementById("line113R-L").style.visibility = "visible";
    } else{
       document.getElementById("line113R-L").style.visibility = "hidden";
       document.getElementById("line113L-R").style.visibility = "visible";
    }
       if (window.P_Tr724 > 0){
       document.getElementById("line114L-R").style.visibility = "hidden";
       document.getElementById("line114R-L").style.visibility = "visible";
    } else{
       document.getElementById("line114R-L").style.visibility = "hidden";
       document.getElementById("line114L-R").style.visibility = "visible";
    }
       if (window.P_Line115 > 0){
       document.getElementById("line115R-L").style.visibility = "hidden";
       document.getElementById("line115L-R").style.visibility = "visible";
    } else{
       document.getElementById("line115L-R").style.visibility = "hidden";
       document.getElementById("line115R-L").style.visibility = "visible";
    }
       if (window.P_Line116 < 0){
       document.getElementById("line116L-R").style.visibility = "hidden";
       document.getElementById("line116R-L").style.visibility = "visible";
    } else{
       document.getElementById("line116R-L").style.visibility = "hidden";
       document.getElementById("line116L-R").style.visibility = "visible";
    }
       if (window.P_Line117 < 0){
       document.getElementById("line117R-L").style.visibility = "hidden";
       document.getElementById("line117L-R").style.visibility = "visible";
    } else{
       document.getElementById("line117L-R").style.visibility = "hidden";
       document.getElementById("line117R-L").style.visibility = "visible";
    }
       if (window.P_Line118 < 0){
       document.getElementById("line118L-R").style.visibility = "hidden";
       document.getElementById("line118R-L").style.visibility = "visible";
    } else{
       document.getElementById("line118R-L").style.visibility = "hidden";
       document.getElementById("line118L-R").style.visibility = "visible";
    }
       if (window.P_Tr697 > 0){
       document.getElementById("line119R-L").style.visibility = "hidden";
       document.getElementById("line119L-R").style.visibility = "visible";
    } else{
       document.getElementById("line119L-R").style.visibility = "hidden";
       document.getElementById("line119R-L").style.visibility = "visible";
    }
       if (window.P_Tr716 > 0){
       document.getElementById("line120R-L").style.visibility = "hidden";
       document.getElementById("line120L-R").style.visibility = "visible";
    } else{
       document.getElementById("line120L-R").style.visibility = "hidden";
       document.getElementById("line120R-L").style.visibility = "visible";
    }
       if (window.P_Line121 > 0){
       document.getElementById("line121L-R").style.visibility = "hidden";
       document.getElementById("line121R-L").style.visibility = "visible";
    } else{
       document.getElementById("line121R-L").style.visibility = "hidden";
       document.getElementById("line121L-R").style.visibility = "visible";
    }
       if (window.P_Tr707 > 0){
       document.getElementById("line122L-R").style.visibility = "hidden";
       document.getElementById("line122R-L").style.visibility = "visible";
    } else{
       document.getElementById("line122R-L").style.visibility = "hidden";
       document.getElementById("line122L-R").style.visibility = "visible";
    }
       if (window.P_Line123 > 0){
       document.getElementById("line123L-R").style.visibility = "hidden";
       document.getElementById("line123R-L").style.visibility = "visible";
    } else{
       document.getElementById("line123R-L").style.visibility = "hidden";
       document.getElementById("line123L-R").style.visibility = "visible";
    }
       if (window.P_Tr699 > 0){
       document.getElementById("line124R-L").style.visibility = "hidden";
       document.getElementById("line124L-R").style.visibility = "visible";
    } else{
       document.getElementById("line124L-R").style.visibility = "hidden";
       document.getElementById("line124R-L").style.visibility = "visible";
    }
       if (window.P_Line125 > 0){
       document.getElementById("line125L-R").style.visibility = "hidden";
       document.getElementById("line125R-L").style.visibility = "visible";
    } else{
       document.getElementById("line125R-L").style.visibility = "hidden";
       document.getElementById("line125L-R").style.visibility = "visible";
    }
       if (window.P_Tr723 > 0){
       document.getElementById("line126R-L").style.visibility = "hidden";
       document.getElementById("line126L-R").style.visibility = "visible";
    } else{
       document.getElementById("line126L-R").style.visibility = "hidden";
       document.getElementById("line126R-L").style.visibility = "visible";
    }
       if (window.P_Line127 > 0){
       document.getElementById("line127L-R").style.visibility = "hidden";
       document.getElementById("line127R-L").style.visibility = "visible";
    } else{
       document.getElementById("line127R-L").style.visibility = "hidden";
       document.getElementById("line127L-R").style.visibility = "visible";
    }
       if (window.P_Tr700 > 0){
       document.getElementById("line128R-L").style.visibility = "hidden";
       document.getElementById("line128L-R").style.visibility = "visible";
    } else{
       document.getElementById("line128L-R").style.visibility = "hidden";
       document.getElementById("line128R-L").style.visibility = "visible";
    }
       if (window.P_Line129 > 0){
       document.getElementById("line129L-R").style.visibility = "hidden";
       document.getElementById("line129R-L").style.visibility = "visible";
    } else{
       document.getElementById("line129R-L").style.visibility = "hidden";
       document.getElementById("line129L-R").style.visibility = "visible";
    }
       if (window.P_Tr669 > 0){
       document.getElementById("line130R-L").style.visibility = "hidden";
       document.getElementById("line130L-R").style.visibility = "visible";
    } else{
       document.getElementById("line130L-R").style.visibility = "hidden";
       document.getElementById("line130R-L").style.visibility = "visible";
    }
       if (window.P_Line131 > 0){
       document.getElementById("line131L-R").style.visibility = "hidden";
       document.getElementById("line131R-L").style.visibility = "visible";
    } else{
       document.getElementById("line131R-L").style.visibility = "hidden";
       document.getElementById("line131L-R").style.visibility = "visible";
    }
       if (window.P_Tr711 > 0){
       document.getElementById("line132R-L").style.visibility = "hidden";
       document.getElementById("line132L-R").style.visibility = "visible";
    } else{
       document.getElementById("line132L-R").style.visibility = "hidden";
       document.getElementById("line132R-L").style.visibility = "visible";
    }
       if (window.P_Line133 > 0){
       document.getElementById("line133L-R").style.visibility = "hidden";
       document.getElementById("line133R-L").style.visibility = "visible";
    } else{
       document.getElementById("line133R-L").style.visibility = "hidden";
       document.getElementById("line133L-R").style.visibility = "visible";
    }
       if (window.P_Line134 < 0){
       document.getElementById("line134R-L").style.visibility = "hidden";
       document.getElementById("line134L-R").style.visibility = "visible";
    } else{
       document.getElementById("line134L-R").style.visibility = "hidden";
       document.getElementById("line134R-L").style.visibility = "visible";
    }
       if (window.P_Line135 < 0){
       document.getElementById("line135R-L").style.visibility = "hidden";
       document.getElementById("line135L-R").style.visibility = "visible";
    } else{
       document.getElementById("line135L-R").style.visibility = "hidden";
       document.getElementById("line135R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr655){
       document.getElementById("line136L-R").style.visibility = "hidden";
       document.getElementById("line136R-L").style.visibility = "visible";
    } else{
       document.getElementById("line136R-L").style.visibility = "hidden";
       document.getElementById("line136L-R").style.visibility = "visible";
    }
       if (window.P_Line137 > 0){
       document.getElementById("line137L-R").style.visibility = "hidden";
       document.getElementById("line137R-L").style.visibility = "visible";
    } else{
       document.getElementById("line137R-L").style.visibility = "hidden";
       document.getElementById("line137L-R").style.visibility = "visible";
    }
       if (window.P_Tr665 > 0){
       document.getElementById("line138L-R").style.visibility = "hidden";
       document.getElementById("line138R-L").style.visibility = "visible";
    } else{
       document.getElementById("line138R-L").style.visibility = "hidden";
       document.getElementById("line138L-R").style.visibility = "visible";
    }
       if (window.P_Line139 > 0){
       document.getElementById("line139R-L").style.visibility = "hidden";
       document.getElementById("line139L-R").style.visibility = "visible";
    } else{
       document.getElementById("line139L-R").style.visibility = "hidden";
       document.getElementById("line139R-L").style.visibility = "visible";
    }
       if (window.P_Line140 > 0){
       document.getElementById("line140L-R").style.visibility = "hidden";
       document.getElementById("line140R-L").style.visibility = "visible";
    } else{
       document.getElementById("line140R-L").style.visibility = "hidden";
       document.getElementById("line140L-R").style.visibility = "visible";
    }
       if (window.P_Tr660 > 0){
       document.getElementById("line141R-L").style.visibility = "hidden";
       document.getElementById("line141L-R").style.visibility = "visible";
    } else{
       document.getElementById("line141L-R").style.visibility = "hidden";
       document.getElementById("line141R-L").style.visibility = "visible";
    }
       if (window.P_Line142 > 0){
       document.getElementById("line142R-L").style.visibility = "hidden";
       document.getElementById("line142L-R").style.visibility = "visible";
    } else{
       document.getElementById("line142L-R").style.visibility = "hidden";
       document.getElementById("line142R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr701){
       document.getElementById("line143R-L").style.visibility = "hidden";
       document.getElementById("line143L-R").style.visibility = "visible";
    } else{
       document.getElementById("line143L-R").style.visibility = "hidden";
       document.getElementById("line143R-L").style.visibility = "visible";
    }
       if (window.P_Line144 > 0){
       document.getElementById("line144L-R").style.visibility = "hidden";
       document.getElementById("line144R-L").style.visibility = "visible";
    } else{
       document.getElementById("line144R-L").style.visibility = "hidden";
       document.getElementById("line144L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr704){
       document.getElementById("line145R-L").style.visibility = "hidden";
       document.getElementById("line145L-R").style.visibility = "visible";
    } else{
       document.getElementById("line145L-R").style.visibility = "hidden";
       document.getElementById("line145R-L").style.visibility = "visible";
    }
       if (window.P_Line146 > 0){
       document.getElementById("line146L-R").style.visibility = "hidden";
       document.getElementById("line146R-L").style.visibility = "visible";
    } else{
       document.getElementById("line146R-L").style.visibility = "hidden";
       document.getElementById("line146L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr690){
       document.getElementById("line147R-L").style.visibility = "hidden";
       document.getElementById("line147L-R").style.visibility = "visible";
    } else{
       document.getElementById("line147L-R").style.visibility = "hidden";
       document.getElementById("line147R-L").style.visibility = "visible";
    }
       if (window.P_Line148 > 0){
       document.getElementById("line148R-L").style.visibility = "hidden";
       document.getElementById("line148L-R").style.visibility = "visible";
    } else{
       document.getElementById("line148L-R").style.visibility = "hidden";
       document.getElementById("line148R-L").style.visibility = "visible";
    }
       if (window.P_Tr685 > 0){
       document.getElementById("line149R-L").style.visibility = "hidden";
       document.getElementById("line149L-R").style.visibility = "visible";
    } else{
       document.getElementById("line149L-R").style.visibility = "hidden";
       document.getElementById("line149R-L").style.visibility = "visible";
    }
       if (window.P_Line150 > 0){
       document.getElementById("line150L-R").style.visibility = "hidden";
       document.getElementById("line150R-L").style.visibility = "visible";
    } else{
       document.getElementById("line150R-L").style.visibility = "hidden";
       document.getElementById("line150L-R").style.visibility = "visible";
    }
       if (0 > window.P_Tr677){
       document.getElementById("line151R-L").style.visibility = "hidden";
       document.getElementById("line151L-R").style.visibility = "visible";
    } else{
       document.getElementById("line151L-R").style.visibility = "hidden";
       document.getElementById("line151R-L").style.visibility = "visible";
    }
       if (window.P_Line152 > 0){
       document.getElementById("line152L-R").style.visibility = "hidden";
       document.getElementById("line152R-L").style.visibility = "visible";
    } else{
       document.getElementById("line152R-L").style.visibility = "hidden";
       document.getElementById("line152L-R").style.visibility = "visible";
    }
       if (window.P_Tr717 > 0){
       document.getElementById("line153L-R").style.visibility = "hidden";
       document.getElementById("line153R-L").style.visibility = "visible";
    } else{
       document.getElementById("line153R-L").style.visibility = "hidden";
       document.getElementById("line153L-R").style.visibility = "visible";
    }
       if (window.P_Line154 > 0){
       document.getElementById("line154L-R").style.visibility = "hidden";
       document.getElementById("line154R-L").style.visibility = "visible";
    } else{
       document.getElementById("line154R-L").style.visibility = "hidden";
       document.getElementById("line154L-R").style.visibility = "visible";
    }
       if (window.P_Line155 > 0){
       document.getElementById("line155L-R").style.visibility = "hidden";
       document.getElementById("line155R-L").style.visibility = "visible";
    } else{
       document.getElementById("line155R-L").style.visibility = "hidden";
       document.getElementById("line155L-R").style.visibility = "visible";
    }
       if (window.P_Tr713 > 0){
       document.getElementById("line156L-R").style.visibility = "hidden";
       document.getElementById("line156R-L").style.visibility = "visible";
    } else{
       document.getElementById("line156R-L").style.visibility = "hidden";
       document.getElementById("line156L-R").style.visibility = "visible";
    }
       if (window.P_Line157 < 0){
       document.getElementById("line157R-L").style.visibility = "hidden";
       document.getElementById("line157L-R").style.visibility = "visible";
    } else{
       document.getElementById("line157L-R").style.visibility = "hidden";
       document.getElementById("line157R-L").style.visibility = "visible";
    }
       if (window.P_Tr709 > 0){
       document.getElementById("line158L-R").style.visibility = "hidden";
       document.getElementById("line158R-L").style.visibility = "visible";
    } else{
       document.getElementById("line158R-L").style.visibility = "hidden";
       document.getElementById("line158L-R").style.visibility = "visible";
    }
       if (window.P_Line159 < 0){
       document.getElementById("line159R-L").style.visibility = "hidden";
       document.getElementById("line159L-R").style.visibility = "visible";
    } else{
       document.getElementById("line159L-R").style.visibility = "hidden";
       document.getElementById("line159R-L").style.visibility = "visible";
    }
       if (window.P_Line160 > 0){
       document.getElementById("line160L-R").style.visibility = "hidden";
       document.getElementById("line160R-L").style.visibility = "visible";
    } else{
       document.getElementById("line160R-L").style.visibility = "hidden";
       document.getElementById("line160L-R").style.visibility = "visible";
    }
       if (window.P_Tr695 > 0){
       document.getElementById("line161L-R").style.visibility = "hidden";
       document.getElementById("line161R-L").style.visibility = "visible";
    } else{
       document.getElementById("line161R-L").style.visibility = "hidden";
       document.getElementById("line161L-R").style.visibility = "visible";
    }
       if (window.P_Line162 < 0){
       document.getElementById("line162R-L").style.visibility = "hidden";
       document.getElementById("line162L-R").style.visibility = "visible";
    } else{
       document.getElementById("line162L-R").style.visibility = "hidden";
       document.getElementById("line162R-L").style.visibility = "visible";
    }
       if (window.P_Line163 < 0){
       document.getElementById("line163R-L").style.visibility = "hidden";
       document.getElementById("line163L-R").style.visibility = "visible";
    } else{
       document.getElementById("line163L-R").style.visibility = "hidden";
       document.getElementById("line163R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr705){
       document.getElementById("line164R-L").style.visibility = "hidden";
       document.getElementById("line164L-R").style.visibility = "visible";
    } else{
       document.getElementById("line164L-R").style.visibility = "hidden";
       document.getElementById("line164R-L").style.visibility = "visible";
    }
       if (window.P_Line165 < 0){
       document.getElementById("line165R-L").style.visibility = "hidden";
       document.getElementById("line165L-R").style.visibility = "visible";
    } else{
       document.getElementById("line165L-R").style.visibility = "hidden";
       document.getElementById("line165R-L").style.visibility = "visible";
    }
       if (0 > window.P_Tr693){
       document.getElementById("line166R-L").style.visibility = "hidden";
       document.getElementById("line166L-R").style.visibility = "visible";
    } else{
       document.getElementById("line166L-R").style.visibility = "hidden";
       document.getElementById("line166R-L").style.visibility = "visible";
    }
       if (window.P_Line167 < 0){
       document.getElementById("line167R-L").style.visibility = "hidden";
       document.getElementById("line167L-R").style.visibility = "visible";
    } else{
       document.getElementById("line167L-R").style.visibility = "hidden";
       document.getElementById("line167R-L").style.visibility = "visible";
    }

}