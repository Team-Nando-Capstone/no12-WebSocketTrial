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
       if (document.getElementById("Tr999").getAttribute("stroke") === "#8cdfc4" ){
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
       if (window.P_Tr999 > window.P_Bus37){
       document.getElementById("line1L-R").style.visibility = "hidden";
       document.getElementById("line1R-L").style.visibility = "visible";
    } else{
       document.getElementById("line1R-L").style.visibility = "hidden";
       document.getElementById("line1L-R").style.visibility = "visible";
    }
       if (window.P_Bus37 > window.P_Tr686){
       document.getElementById("line2L-R").style.visibility = "hidden";
       document.getElementById("line2R-L").style.visibility = "visible";
    } else{
       document.getElementById("line2R-L").style.visibility = "hidden";
       document.getElementById("line2L-R").style.visibility = "visible";
    }
       if (window.P_Bus37 > window.P_Bus436){
       document.getElementById("line3L-R").style.visibility = "hidden";
       document.getElementById("line3R-L").style.visibility = "visible";
    } else{
       document.getElementById("line3R-L").style.visibility = "hidden";
       document.getElementById("line3L-R").style.visibility = "visible";
    }
       if (window.P_Bus436 > window.P_Tr653){
       document.getElementById("line4L-R").style.visibility = "hidden";
       document.getElementById("line4R-L").style.visibility = "visible";
    } else{
       document.getElementById("line4R-L").style.visibility = "hidden";
       document.getElementById("line4L-R").style.visibility = "visible";
    }
       if (window.P_Bus436 > window.P_Bus471){
       document.getElementById("line5L-R").style.visibility = "hidden";
       document.getElementById("line5R-L").style.visibility = "visible";
    } else{
       document.getElementById("line5R-L").style.visibility = "hidden";
       document.getElementById("line5L-R").style.visibility = "visible";
    }
       if (window.P_Bus471 > window.P_Tr651){
       document.getElementById("line6L-R").style.visibility = "hidden";
       document.getElementById("line6R-L").style.visibility = "visible";
    } else{
       document.getElementById("line6R-L").style.visibility = "hidden";
       document.getElementById("line6L-R").style.visibility = "visible";
    }
       if (window.P_Bus471 > window.P_Bus530){
       document.getElementById("line7L-R").style.visibility = "hidden";
       document.getElementById("line7R-L").style.visibility = "visible";
    } else{
       document.getElementById("line7R-L").style.visibility = "hidden";
       document.getElementById("line7L-R").style.visibility = "visible";
    }
       if (window.P_Tr676 > window.P_Bus530){
       document.getElementById("line8R-L").style.visibility = "hidden";
       document.getElementById("line8L-R").style.visibility = "visible";
    } else{
       document.getElementById("line8L-R").style.visibility = "hidden";
       document.getElementById("line8R-L").style.visibility = "visible";
    }
       if (window.P_Bus530 > window.P_Bus552){
       document.getElementById("line9L-R").style.visibility = "hidden";
       document.getElementById("line9R-L").style.visibility = "visible";
    } else{
       document.getElementById("line9R-L").style.visibility = "hidden";
       document.getElementById("line9L-R").style.visibility = "visible";
    }
       if (window.P_Tr681 > window.P_Bus552){
       document.getElementById("line10R-L").style.visibility = "hidden";
       document.getElementById("line10L-R").style.visibility = "visible";
    } else{
       document.getElementById("line10L-R").style.visibility = "hidden";
       document.getElementById("line10R-L").style.visibility = "visible";
    }
       if (window.P_Bus552 > window.P_Bus492){
       document.getElementById("line11L-R").style.visibility = "hidden";
       document.getElementById("line11R-L").style.visibility = "visible";
    } else{
       document.getElementById("line11R-L").style.visibility = "hidden";
       document.getElementById("line11L-R").style.visibility = "visible";
    }
       if (window.P_Bus492 > window.P_Tr664){
       document.getElementById("line12L-R").style.visibility = "hidden";
       document.getElementById("line12R-L").style.visibility = "visible";
    } else{
       document.getElementById("line12R-L").style.visibility = "hidden";
       document.getElementById("line12L-R").style.visibility = "visible";
    }
       if (window.P_Bus492 > window.P_Bus334){
       document.getElementById("line13L-R").style.visibility = "hidden";
       document.getElementById("line13R-L").style.visibility = "visible";
    } else{
       document.getElementById("line13R-L").style.visibility = "hidden";
       document.getElementById("line13L-R").style.visibility = "visible";
    }
       if (window.P_Bus334 > window.P_Bus291){
       document.getElementById("line14L-R").style.visibility = "hidden";
       document.getElementById("line14R-L").style.visibility = "visible";
    } else{
       document.getElementById("line14R-L").style.visibility = "hidden";
       document.getElementById("line14L-R").style.visibility = "visible";
    }
       if (window.P_Tr657 > window.P_Bus291){
       document.getElementById("line15R-L").style.visibility = "hidden";
       document.getElementById("line15L-R").style.visibility = "visible";
    } else{
       document.getElementById("line15L-R").style.visibility = "hidden";
       document.getElementById("line15R-L").style.visibility = "visible";
    }
       if (window.P_Bus291 > window.P_Tr706){
       document.getElementById("line16L-R").style.visibility = "hidden";
       document.getElementById("line16R-L").style.visibility = "visible";
    } else{
       document.getElementById("line16R-L").style.visibility = "hidden";
       document.getElementById("line16L-R").style.visibility = "visible";
    }
       if (window.P_Bus334 > window.P_Bus574){
       document.getElementById("line17L-R").style.visibility = "hidden";
       document.getElementById("line17R-L").style.visibility = "visible";
    } else{
       document.getElementById("line17R-L").style.visibility = "hidden";
       document.getElementById("line17L-R").style.visibility = "visible";
    }
       if (window.P_Bus574 > window.P_Bus361){
       document.getElementById("line18R-L").style.visibility = "hidden";
       document.getElementById("line18L-R").style.visibility = "visible";
    } else{
       document.getElementById("line18L-R").style.visibility = "hidden";
       document.getElementById("line18R-L").style.visibility = "visible";
    }
       if (window.P_Tr688 > window.P_Bus361){
       document.getElementById("line19R-L").style.visibility = "hidden";
       document.getElementById("line19L-R").style.visibility = "visible";
    } else{
       document.getElementById("line19L-R").style.visibility = "hidden";
       document.getElementById("line19R-L").style.visibility = "visible";
    }
       if (window.P_Bus361 > window.P_Bus587){
       document.getElementById("line20R-L").style.visibility = "hidden";
       document.getElementById("line20L-R").style.visibility = "visible";
    } else{
       document.getElementById("line20L-R").style.visibility = "hidden";
       document.getElementById("line20R-L").style.visibility = "visible";
    }
       if (window.P_Bus574 > window.P_Bus282){
       document.getElementById("line21L-R").style.visibility = "hidden";
       document.getElementById("line21R-L").style.visibility = "visible";
    } else{
       document.getElementById("line21R-L").style.visibility = "hidden";
       document.getElementById("line21L-R").style.visibility = "visible";
    }
       if (window.P_Bus282 > window.P_Tr727){
       document.getElementById("line22L-R").style.visibility = "hidden";
       document.getElementById("line22R-L").style.visibility = "visible";
    } else{
       document.getElementById("line22R-L").style.visibility = "hidden";
       document.getElementById("line22L-R").style.visibility = "visible";
    }
       if (window.P_Bus587 > window.P_Bus433){
       document.getElementById("line23R-L").style.visibility = "hidden";
       document.getElementById("line23L-R").style.visibility = "visible";
    } else{
       document.getElementById("line23L-R").style.visibility = "hidden";
       document.getElementById("line23R-L").style.visibility = "visible";
    }
       if (window.P_Bus433 > window.P_Tr684){
       document.getElementById("line24L-R").style.visibility = "hidden";
       document.getElementById("line24R-L").style.visibility = "visible";
    } else{
       document.getElementById("line24R-L").style.visibility = "hidden";
       document.getElementById("line24L-R").style.visibility = "visible";
    }
       if (window.P_Bus433 > window.P_Bus170){
       document.getElementById("line25L-R").style.visibility = "hidden";
       document.getElementById("line25R-L").style.visibility = "visible";
    } else{
       document.getElementById("line25R-L").style.visibility = "hidden";
       document.getElementById("line25L-R").style.visibility = "visible";
    }
       if (window.P_Tr667 > window.P_Bus433){
       document.getElementById("line26R-L").style.visibility = "hidden";
       document.getElementById("line26L-R").style.visibility = "visible";
    } else{
       document.getElementById("line26L-R").style.visibility = "hidden";
       document.getElementById("line26R-L").style.visibility = "visible";
    }
       if (window.P_Bus170 > window.P_Bus624){
       document.getElementById("line27R-L").style.visibility = "hidden";
       document.getElementById("line27L-R").style.visibility = "visible";
    } else{
       document.getElementById("line27L-R").style.visibility = "hidden";
       document.getElementById("line27R-L").style.visibility = "visible";
    }
       if (window.P_Bus624 > window.P_Tr661){
       document.getElementById("line28L-R").style.visibility = "hidden";
       document.getElementById("line28R-L").style.visibility = "visible";
    } else{
       document.getElementById("line28R-L").style.visibility = "hidden";
       document.getElementById("line28L-R").style.visibility = "visible";
    }
       if (window.P_Bus624 > window.P_Bus235){
       document.getElementById("line29R-L").style.visibility = "hidden";
       document.getElementById("line29L-R").style.visibility = "visible";
    } else{
       document.getElementById("line29L-R").style.visibility = "hidden";
       document.getElementById("line29R-L").style.visibility = "visible";
    }
       if (window.P_Bus58 > window.P_Bus170){
       document.getElementById("line30R-L").style.visibility = "hidden";
       document.getElementById("line30L-R").style.visibility = "visible";
    } else{
       document.getElementById("line30L-R").style.visibility = "hidden";
       document.getElementById("line30R-L").style.visibility = "visible";
    }
       if (window.P_Tr689 > window.P_Bus58){
       document.getElementById("line31R-L").style.visibility = "hidden";
       document.getElementById("line31L-R").style.visibility = "visible";
    } else{
       document.getElementById("line31L-R").style.visibility = "hidden";
       document.getElementById("line31R-L").style.visibility = "visible";
    }
       if (window.P_Bus153 > window.P_Bus58){
       document.getElementById("line32R-L").style.visibility = "hidden";
       document.getElementById("line32L-R").style.visibility = "visible";
    } else{
       document.getElementById("line32L-R").style.visibility = "hidden";
       document.getElementById("line32R-L").style.visibility = "visible";
    }
       if (window.P_Tr696 > window.P_Bus153){
       document.getElementById("line33R-L").style.visibility = "hidden";
       document.getElementById("line33L-R").style.visibility = "visible";
    } else{
       document.getElementById("line33L-R").style.visibility = "hidden";
       document.getElementById("line33R-L").style.visibility = "visible";
    }
       if (window.P_Bus247 > window.P_Bus153){
       document.getElementById("line34R-L").style.visibility = "hidden";
       document.getElementById("line34L-R").style.visibility = "visible";
    } else{
       document.getElementById("line34L-R").style.visibility = "hidden";
       document.getElementById("line34R-L").style.visibility = "visible";
    }
       if (window.P_Tr692 > window.P_Bus247){
       document.getElementById("line35R-L").style.visibility = "hidden";
       document.getElementById("line35L-R").style.visibility = "visible";
    } else{
       document.getElementById("line35L-R").style.visibility = "hidden";
       document.getElementById("line35R-L").style.visibility = "visible";
    }
       if (window.P_Bus607 > window.P_Bus247){
       document.getElementById("line36R-L").style.visibility = "hidden";
       document.getElementById("line36L-R").style.visibility = "visible";
    } else{
       document.getElementById("line36L-R").style.visibility = "hidden";
       document.getElementById("line36R-L").style.visibility = "visible";
    }
       if (window.P_Tr715 > window.P_Bus607){
       document.getElementById("line37R-L").style.visibility = "hidden";
       document.getElementById("line37L-R").style.visibility = "visible";
    } else{
       document.getElementById("line37L-R").style.visibility = "hidden";
       document.getElementById("line37R-L").style.visibility = "visible";
    }
       if (window.P_Bus58 > window.P_Bus248){
       document.getElementById("line38L-R").style.visibility = "hidden";
       document.getElementById("line38R-L").style.visibility = "visible";
    } else{
       document.getElementById("line38R-L").style.visibility = "hidden";
       document.getElementById("line38L-R").style.visibility = "visible";
    }
       if (window.P_Bus248 > window.P_Tr702){
       document.getElementById("line39L-R").style.visibility = "hidden";
       document.getElementById("line39R-L").style.visibility = "visible";
    } else{
       document.getElementById("line39R-L").style.visibility = "hidden";
       document.getElementById("line39L-R").style.visibility = "visible";
    }
       if (window.P_Bus540 > window.P_Bus248){
       document.getElementById("line40R-L").style.visibility = "hidden";
       document.getElementById("line40L-R").style.visibility = "visible";
    } else{
       document.getElementById("line40L-R").style.visibility = "hidden";
       document.getElementById("line40R-L").style.visibility = "visible";
    }
       if (window.P_Tr670 > window.P_Bus540){
       document.getElementById("line41R-L").style.visibility = "hidden";
       document.getElementById("line41L-R").style.visibility = "visible";
    } else{
       document.getElementById("line41L-R").style.visibility = "hidden";
       document.getElementById("line41R-L").style.visibility = "visible";
    }
       if (window.P_Bus531 > window.P_Bus327){
       document.getElementById("line42R-L").style.visibility = "hidden";
       document.getElementById("line42L-R").style.visibility = "visible";
    } else{
       document.getElementById("line42L-R").style.visibility = "hidden";
       document.getElementById("line42R-L").style.visibility = "visible";
    }
       if (window.P_Tr680 > window.P_Bus531){
       document.getElementById("line43R-L").style.visibility = "hidden";
       document.getElementById("line43L-R").style.visibility = "visible";
    } else{
       document.getElementById("line43L-R").style.visibility = "hidden";
       document.getElementById("line43R-L").style.visibility = "visible";
    }
       if (window.P_Tr710 > window.P_Bus531){
       document.getElementById("line44R-L").style.visibility = "hidden";
       document.getElementById("line44L-R").style.visibility = "visible";
    } else{
       document.getElementById("line44L-R").style.visibility = "hidden";
       document.getElementById("line44R-L").style.visibility = "visible";
    }
       if (window.P_Bus531 > window.P_Bus505){
       document.getElementById("line45L-R").style.visibility = "hidden";
       document.getElementById("line45R-L").style.visibility = "visible";
    } else{
       document.getElementById("line45R-L").style.visibility = "hidden";
       document.getElementById("line45L-R").style.visibility = "visible";
    }
       if (window.P_Bus505 > window.P_Tr683){
       document.getElementById("line46L-R").style.visibility = "hidden";
       document.getElementById("line46R-L").style.visibility = "visible";
    } else{
       document.getElementById("line46R-L").style.visibility = "hidden";
       document.getElementById("line46L-R").style.visibility = "visible";
    }
       if (window.P_Bus359 > window.P_Bus505){
       document.getElementById("line47R-L").style.visibility = "hidden";
       document.getElementById("line47L-R").style.visibility = "visible";
    } else{
       document.getElementById("line47L-R").style.visibility = "hidden";
       document.getElementById("line47R-L").style.visibility = "visible";
    }
       if (window.P_Tr712 > window.P_Bus359){
       document.getElementById("line48R-L").style.visibility = "hidden";
       document.getElementById("line48L-R").style.visibility = "visible";
    } else{
       document.getElementById("line48L-R").style.visibility = "hidden";
       document.getElementById("line48R-L").style.visibility = "visible";
    }
       if (window.P_Bus359 > window.P_Tr718){
       document.getElementById("line49L-R").style.visibility = "hidden";
       document.getElementById("line49R-L").style.visibility = "visible";
    } else{
       document.getElementById("line49R-L").style.visibility = "hidden";
       document.getElementById("line49L-R").style.visibility = "visible";
    }
       if (window.P_Bus441 > window.P_Tr672){
       document.getElementById("line50R-L").style.visibility = "hidden";
       document.getElementById("line50L-R").style.visibility = "visible";
    } else{
       document.getElementById("line50L-R").style.visibility = "hidden";
       document.getElementById("line50R-L").style.visibility = "visible";
    }
       if (window.P_Bus104 > window.P_Bus290){
       document.getElementById("line51R-L").style.visibility = "hidden";
       document.getElementById("line51L-R").style.visibility = "visible";
    } else{
       document.getElementById("line51L-R").style.visibility = "hidden";
       document.getElementById("line51R-L").style.visibility = "visible";
    }
       if (window.P_Bus104 > window.P_Tr654){
       document.getElementById("line52L-R").style.visibility = "hidden";
       document.getElementById("line52R-L").style.visibility = "visible";
    } else{
       document.getElementById("line52R-L").style.visibility = "hidden";
       document.getElementById("line52L-R").style.visibility = "visible";
    }
       if (window.P_Bus265 > window.P_Bus104){
       document.getElementById("line53R-L").style.visibility = "hidden";
       document.getElementById("line53L-R").style.visibility = "visible";
    } else{
       document.getElementById("line53L-R").style.visibility = "hidden";
       document.getElementById("line53R-L").style.visibility = "visible";
    }
       if (window.P_Tr719 > window.P_Bus265){
       document.getElementById("line54R-L").style.visibility = "hidden";
       document.getElementById("line54L-R").style.visibility = "visible";
    } else{
       document.getElementById("line54L-R").style.visibility = "hidden";
       document.getElementById("line54R-L").style.visibility = "visible";
    }
       if (window.P_Bus265 > window.P_Tr659){
       document.getElementById("line55L-R").style.visibility = "hidden";
       document.getElementById("line55R-L").style.visibility = "visible";
    } else{
       document.getElementById("line55R-L").style.visibility = "hidden";
       document.getElementById("line55L-R").style.visibility = "visible";
    }
       if (window.P_Bus587 > window.P_Tr662){
       document.getElementById("line56R-L").style.visibility = "hidden";
       document.getElementById("line56L-R").style.visibility = "visible";
    } else{
       document.getElementById("line56L-R").style.visibility = "hidden";
       document.getElementById("line56R-L").style.visibility = "visible";
    }
       if (window.P_Bus554 > window.P_Tr671){
       document.getElementById("line57R-L").style.visibility = "hidden";
       document.getElementById("line57L-R").style.visibility = "visible";
    } else{
       document.getElementById("line57L-R").style.visibility = "hidden";
       document.getElementById("line57R-L").style.visibility = "visible";
    }
       if (window.P_Bus5 > window.P_Bus554){
       document.getElementById("line58R-L").style.visibility = "hidden";
       document.getElementById("line58L-R").style.visibility = "visible";
    } else{
       document.getElementById("line58L-R").style.visibility = "hidden";
       document.getElementById("line58R-L").style.visibility = "visible";
    }
       if (window.P_Bus511 > window.P_Bus5){
       document.getElementById("line59R-L").style.visibility = "hidden";
       document.getElementById("line59L-R").style.visibility = "visible";
    } else{
       document.getElementById("line59L-R").style.visibility = "hidden";
       document.getElementById("line59R-L").style.visibility = "visible";
    }
       if (window.P_Tr675 > window.P_Bus511){
       document.getElementById("line60R-L").style.visibility = "hidden";
       document.getElementById("line60L-R").style.visibility = "visible";
    } else{
       document.getElementById("line60L-R").style.visibility = "hidden";
       document.getElementById("line60R-L").style.visibility = "visible";
    }
       if (window.P_Bus499 > window.P_Bus511){
       document.getElementById("line61R-L").style.visibility = "hidden";
       document.getElementById("line61L-R").style.visibility = "visible";
    } else{
       document.getElementById("line61L-R").style.visibility = "hidden";
       document.getElementById("line61R-L").style.visibility = "visible";
    }
       if (window.P_Bus499 > window.P_Tr721){
       document.getElementById("line62R-L").style.visibility = "hidden";
       document.getElementById("line62L-R").style.visibility = "visible";
    } else{
       document.getElementById("line62L-R").style.visibility = "hidden";
       document.getElementById("line62R-L").style.visibility = "visible";
    }
       if (window.P_Bus352 > window.P_Bus499){
       document.getElementById("line63R-L").style.visibility = "hidden";
       document.getElementById("line63L-R").style.visibility = "visible";
    } else{
       document.getElementById("line63L-R").style.visibility = "hidden";
       document.getElementById("line63R-L").style.visibility = "visible";
    }
       if (window.P_Bus352 > window.P_Tr708){
       document.getElementById("line64R-L").style.visibility = "hidden";
       document.getElementById("line64L-R").style.visibility = "visible";
    } else{
       document.getElementById("line64L-R").style.visibility = "hidden";
       document.getElementById("line64R-L").style.visibility = "visible";
    }
       if (window.P_Bus139 > window.P_Bus352){
       document.getElementById("line65R-L").style.visibility = "hidden";
       document.getElementById("line65L-R").style.visibility = "visible";
    } else{
       document.getElementById("line65L-R").style.visibility = "hidden";
       document.getElementById("line65R-L").style.visibility = "visible";
    }
       if (window.P_Tr652 > window.P_Bus139){
       document.getElementById("line66R-L").style.visibility = "hidden";
       document.getElementById("line66L-R").style.visibility = "visible";
    } else{
       document.getElementById("line66L-R").style.visibility = "hidden";
       document.getElementById("line66R-L").style.visibility = "visible";
    }
       if (window.P_Bus372 > window.P_Bus139){
       document.getElementById("line67R-L").style.visibility = "hidden";
       document.getElementById("line67L-R").style.visibility = "visible";
    } else{
       document.getElementById("line67L-R").style.visibility = "hidden";
       document.getElementById("line67R-L").style.visibility = "visible";
    }
       if (window.P_Tr663 > window.P_Bus372){
       document.getElementById("line68R-L").style.visibility = "hidden";
       document.getElementById("line68L-R").style.visibility = "visible";
    } else{
       document.getElementById("line68L-R").style.visibility = "hidden";
       document.getElementById("line68R-L").style.visibility = "visible";
    }
       if (window.P_Bus400 > window.P_Bus372){
       document.getElementById("line69R-L").style.visibility = "hidden";
       document.getElementById("line69L-R").style.visibility = "visible";
    } else{
       document.getElementById("line69L-R").style.visibility = "hidden";
       document.getElementById("line69R-L").style.visibility = "visible";
    }
       if (window.P_Tr725 > window.P_Bus400){
       document.getElementById("line70R-L").style.visibility = "hidden";
       document.getElementById("line70L-R").style.visibility = "visible";
    } else{
       document.getElementById("line70L-R").style.visibility = "hidden";
       document.getElementById("line70R-L").style.visibility = "visible";
    }
       if (window.P_Bus21 > window.P_Bus400){
       document.getElementById("line71R-L").style.visibility = "hidden";
       document.getElementById("line71L-R").style.visibility = "visible";
    } else{
       document.getElementById("line71L-R").style.visibility = "hidden";
       document.getElementById("line71R-L").style.visibility = "visible";
    }
       if (window.P_Bus21 > window.P_Bus616){
       document.getElementById("line72R-L").style.visibility = "hidden";
       document.getElementById("line72L-R").style.visibility = "visible";
    } else{
       document.getElementById("line72L-R").style.visibility = "hidden";
       document.getElementById("line72R-L").style.visibility = "visible";
    }
       if (window.P_Bus616 > window.P_Tr728){
       document.getElementById("line73R-L").style.visibility = "hidden";
       document.getElementById("line73L-R").style.visibility = "visible";
    } else{
       document.getElementById("line73L-R").style.visibility = "hidden";
       document.getElementById("line73R-L").style.visibility = "visible";
    }
       if (window.P_Bus293 > window.P_Bus21){
       document.getElementById("line74L-R").style.visibility = "hidden";
       document.getElementById("line74R-L").style.visibility = "visible";
    } else{
       document.getElementById("line74R-L").style.visibility = "hidden";
       document.getElementById("line74L-R").style.visibility = "visible";
    }
       if (window.P_Bus261 > window.P_Bus293){
       document.getElementById("line75L-R").style.visibility = "hidden";
       document.getElementById("line75R-L").style.visibility = "visible";
    } else{
       document.getElementById("line75R-L").style.visibility = "hidden";
       document.getElementById("line75L-R").style.visibility = "visible";
    }
       if (window.P_Bus261 > window.P_Tr722){
       document.getElementById("line76R-L").style.visibility = "hidden";
       document.getElementById("line76L-R").style.visibility = "visible";
    } else{
       document.getElementById("line76L-R").style.visibility = "hidden";
       document.getElementById("line76R-L").style.visibility = "visible";
    }
       if (window.P_Bus238 > window.P_Bus293){
       document.getElementById("line77L-R").style.visibility = "hidden";
       document.getElementById("line77R-L").style.visibility = "visible";
    } else{
       document.getElementById("line77R-L").style.visibility = "hidden";
       document.getElementById("line77L-R").style.visibility = "visible";
    }
       if (window.P_Bus238 > window.P_Tr729){
       document.getElementById("line78L-R").style.visibility = "hidden";
       document.getElementById("line78R-L").style.visibility = "visible";
    } else{
       document.getElementById("line78R-L").style.visibility = "hidden";
       document.getElementById("line78L-R").style.visibility = "visible";
    }
       if (window.P_Bus182 > window.P_Bus238){
       document.getElementById("line79L-R").style.visibility = "hidden";
       document.getElementById("line79R-L").style.visibility = "visible";
    } else{
       document.getElementById("line79R-L").style.visibility = "hidden";
       document.getElementById("line79L-R").style.visibility = "visible";
    }
       if (window.P_Bus182 > window.P_Tr687){
       document.getElementById("line80L-R").style.visibility = "hidden";
       document.getElementById("line80R-L").style.visibility = "visible";
    } else{
       document.getElementById("line80R-L").style.visibility = "hidden";
       document.getElementById("line80L-R").style.visibility = "visible";
    }
       if (window.P_Tr714 > window.P_Bus182){
       document.getElementById("line81R-L").style.visibility = "hidden";
       document.getElementById("line81L-R").style.visibility = "visible";
    } else{
       document.getElementById("line81L-R").style.visibility = "hidden";
       document.getElementById("line81R-L").style.visibility = "visible";
    }
       if (window.P_Bus30 > window.P_Bus238){
       document.getElementById("line82R-L").style.visibility = "hidden";
       document.getElementById("line82L-R").style.visibility = "visible";
    } else{
       document.getElementById("line82L-R").style.visibility = "hidden";
       document.getElementById("line82R-L").style.visibility = "visible";
    }
       if (window.P_Tr658 > window.P_Bus30){
       document.getElementById("line83R-L").style.visibility = "hidden";
       document.getElementById("line83L-R").style.visibility = "visible";
    } else{
       document.getElementById("line83L-R").style.visibility = "hidden";
       document.getElementById("line83R-L").style.visibility = "visible";
    }
       if (window.P_Bus600 > window.P_Bus30){
       document.getElementById("line84R-L").style.visibility = "hidden";
       document.getElementById("line84L-R").style.visibility = "visible";
    } else{
       document.getElementById("line84L-R").style.visibility = "hidden";
       document.getElementById("line84R-L").style.visibility = "visible";
    }
       if (window.P_Tr679 > window.P_Bus600){
       document.getElementById("line85R-L").style.visibility = "hidden";
       document.getElementById("line85L-R").style.visibility = "visible";
    } else{
       document.getElementById("line85L-R").style.visibility = "hidden";
       document.getElementById("line85R-L").style.visibility = "visible";
    }
       if (window.P_Bus568 > window.P_Bus261){
       document.getElementById("line86R-L").style.visibility = "hidden";
       document.getElementById("line86L-R").style.visibility = "visible";
    } else{
       document.getElementById("line86L-R").style.visibility = "hidden";
       document.getElementById("line86R-L").style.visibility = "visible";
    }
       if (window.P_Bus568 > window.P_Bus212){
       document.getElementById("line87L-R").style.visibility = "hidden";
       document.getElementById("line87R-L").style.visibility = "visible";
    } else{
       document.getElementById("line87R-L").style.visibility = "hidden";
       document.getElementById("line87L-R").style.visibility = "visible";
    }
       if (window.P_Bus212 > window.P_Bus26){
       document.getElementById("line88L-R").style.visibility = "hidden";
       document.getElementById("line88R-L").style.visibility = "visible";
    } else{
       document.getElementById("line88R-L").style.visibility = "hidden";
       document.getElementById("line88L-R").style.visibility = "visible";
    }
       if (window.P_Bus26 > window.P_Tr703){
       document.getElementById("line89L-R").style.visibility = "hidden";
       document.getElementById("line89R-L").style.visibility = "visible";
    } else{
       document.getElementById("line89R-L").style.visibility = "hidden";
       document.getElementById("line89L-R").style.visibility = "visible";
    }
       if (window.P_Bus26 > window.P_Bus126){
       document.getElementById("line90L-R").style.visibility = "hidden";
       document.getElementById("line90R-L").style.visibility = "visible";
    } else{
       document.getElementById("line90R-L").style.visibility = "hidden";
       document.getElementById("line90L-R").style.visibility = "visible";
    }
       if (window.P_Bus126 > window.P_Tr691){
       document.getElementById("line91R-L").style.visibility = "hidden";
       document.getElementById("line91L-R").style.visibility = "visible";
    } else{
       document.getElementById("line91L-R").style.visibility = "hidden";
       document.getElementById("line91R-L").style.visibility = "visible";
    }
       if (window.P_Bus126 > window.P_Tr698){
       document.getElementById("line92L-R").style.visibility = "hidden";
       document.getElementById("line92R-L").style.visibility = "visible";
    } else{
       document.getElementById("line92R-L").style.visibility = "hidden";
       document.getElementById("line92L-R").style.visibility = "visible";
    }
       if (window.P_Bus588 > window.P_Bus568){
       document.getElementById("line93L-R").style.visibility = "hidden";
       document.getElementById("line93R-L").style.visibility = "visible";
    } else{
       document.getElementById("line93R-L").style.visibility = "hidden";
       document.getElementById("line93L-R").style.visibility = "visible";
    }
       if (window.P_Tr656 > window.P_Bus588){
       document.getElementById("line94R-L").style.visibility = "hidden";
       document.getElementById("line94L-R").style.visibility = "visible";
    } else{
       document.getElementById("line94L-R").style.visibility = "hidden";
       document.getElementById("line94R-L").style.visibility = "visible";
    }
       if (window.P_Bus100 > window.P_Bus588){
       document.getElementById("line95R-L").style.visibility = "hidden";
       document.getElementById("line95L-R").style.visibility = "visible";
    } else{
       document.getElementById("line95L-R").style.visibility = "hidden";
       document.getElementById("line95R-L").style.visibility = "visible";
    }
       if (window.P_Bus227 > window.P_Bus100){
       document.getElementById("line96R-L").style.visibility = "hidden";
       document.getElementById("line96L-R").style.visibility = "visible";
    } else{
       document.getElementById("line96L-R").style.visibility = "hidden";
       document.getElementById("line96R-L").style.visibility = "visible";
    }
       if (window.P_Tr668 > window.P_Bus227){
       document.getElementById("line97R-L").style.visibility = "hidden";
       document.getElementById("line97L-R").style.visibility = "visible";
    } else{
       document.getElementById("line97L-R").style.visibility = "hidden";
       document.getElementById("line97R-L").style.visibility = "visible";
    }
       if (window.P_Bus227 > window.P_Bus579){
       document.getElementById("line98R-L").style.visibility = "hidden";
       document.getElementById("line98L-R").style.visibility = "visible";
    } else{
       document.getElementById("line98L-R").style.visibility = "hidden";
       document.getElementById("line98R-L").style.visibility = "visible";
    }
       if (window.P_Bus643 > window.P_Bus579){
       document.getElementById("line99L-R").style.visibility = "hidden";
       document.getElementById("line99R-L").style.visibility = "visible";
    } else{
       document.getElementById("line99R-L").style.visibility = "hidden";
       document.getElementById("line99L-R").style.visibility = "visible";
    }
       if (window.P_Tr673 > window.P_Bus643){
       document.getElementById("line100L-R").style.visibility = "hidden";
       document.getElementById("line100R-L").style.visibility = "visible";
    } else{
       document.getElementById("line100R-L").style.visibility = "hidden";
       document.getElementById("line100L-R").style.visibility = "visible";
    }
       if (window.P_Bus579 > window.P_Bus518){
       document.getElementById("line101L-R").style.visibility = "hidden";
       document.getElementById("line101R-L").style.visibility = "visible";
    } else{
       document.getElementById("line101R-L").style.visibility = "hidden";
       document.getElementById("line101L-R").style.visibility = "visible";
    }
       if (window.P_Bus518 > window.P_Tr694){
       document.getElementById("line102L-R").style.visibility = "hidden";
       document.getElementById("line102R-L").style.visibility = "visible";
    } else{
       document.getElementById("line102R-L").style.visibility = "hidden";
       document.getElementById("line102L-R").style.visibility = "visible";
    }
       if (window.P_Bus444 > window.P_Bus518){
       document.getElementById("line103R-L").style.visibility = "hidden";
       document.getElementById("line103L-R").style.visibility = "visible";
    } else{
       document.getElementById("line103L-R").style.visibility = "hidden";
       document.getElementById("line103R-L").style.visibility = "visible";
    }
       if (window.P_Bus444 > window.P_Tr726){
       document.getElementById("line104L-R").style.visibility = "hidden";
       document.getElementById("line104R-L").style.visibility = "visible";
    } else{
       document.getElementById("line104R-L").style.visibility = "hidden";
       document.getElementById("line104L-R").style.visibility = "visible";
    }
       if (window.P_Bus518 > window.P_Bus228){
       document.getElementById("line105R-L").style.visibility = "hidden";
       document.getElementById("line105L-R").style.visibility = "visible";
    } else{
       document.getElementById("line105L-R").style.visibility = "hidden";
       document.getElementById("line105R-L").style.visibility = "visible";
    }
       if (window.P_Bus228 > window.P_Tr682){
       document.getElementById("line106L-R").style.visibility = "hidden";
       document.getElementById("line106R-L").style.visibility = "visible";
    } else{
       document.getElementById("line106R-L").style.visibility = "hidden";
       document.getElementById("line106L-R").style.visibility = "visible";
    }
       if (window.P_Bus405 > window.P_Tr666){
       document.getElementById("line107L-R").style.visibility = "hidden";
       document.getElementById("line107R-L").style.visibility = "visible";
    } else{
       document.getElementById("line107R-L").style.visibility = "hidden";
       document.getElementById("line107L-R").style.visibility = "visible";
    }
       if (window.P_Tr678 > window.P_Bus405){
       document.getElementById("line108L-R").style.visibility = "hidden";
       document.getElementById("line108R-L").style.visibility = "visible";
    } else{
       document.getElementById("line108R-L").style.visibility = "hidden";
       document.getElementById("line108L-R").style.visibility = "visible";
    }
       if (window.P_Bus427 > window.P_Bus405){
       document.getElementById("line109L-R").style.visibility = "hidden";
       document.getElementById("line109R-L").style.visibility = "visible";
    } else{
       document.getElementById("line109R-L").style.visibility = "hidden";
       document.getElementById("line109L-R").style.visibility = "visible";
    }
       if (window.P_Bus427 > window.P_Tr674){
       document.getElementById("line110L-R").style.visibility = "hidden";
       document.getElementById("line110R-L").style.visibility = "visible";
    } else{
       document.getElementById("line110R-L").style.visibility = "hidden";
       document.getElementById("line110L-R").style.visibility = "visible";
    }
       if (window.P_Bus14 > window.P_Bus427){
       document.getElementById("line111L-R").style.visibility = "hidden";
       document.getElementById("line111R-L").style.visibility = "visible";
    } else{
       document.getElementById("line111R-L").style.visibility = "hidden";
       document.getElementById("line111L-R").style.visibility = "visible";
    }
       if (window.P_Tr720 > window.P_Bus14){
       document.getElementById("line112R-L").style.visibility = "hidden";
       document.getElementById("line112L-R").style.visibility = "visible";
    } else{
       document.getElementById("line112L-R").style.visibility = "hidden";
       document.getElementById("line112R-L").style.visibility = "visible";
    }
       if (window.P_Bus45 > window.P_Bus14){
       document.getElementById("line113L-R").style.visibility = "hidden";
       document.getElementById("line113R-L").style.visibility = "visible";
    } else{
       document.getElementById("line113R-L").style.visibility = "hidden";
       document.getElementById("line113L-R").style.visibility = "visible";
    }
       if (window.P_Bus45 > window.P_Tr724){
       document.getElementById("line114L-R").style.visibility = "hidden";
       document.getElementById("line114R-L").style.visibility = "visible";
    } else{
       document.getElementById("line114R-L").style.visibility = "hidden";
       document.getElementById("line114L-R").style.visibility = "visible";
    }
       if (window.P_Bus100 > window.P_Bus45){
       document.getElementById("line115R-L").style.visibility = "hidden";
       document.getElementById("line115L-R").style.visibility = "visible";
    } else{
       document.getElementById("line115L-R").style.visibility = "hidden";
       document.getElementById("line115R-L").style.visibility = "visible";
    }
       if (window.P_Bus510 > window.P_Bus100){
       document.getElementById("line116L-R").style.visibility = "hidden";
       document.getElementById("line116R-L").style.visibility = "visible";
    } else{
       document.getElementById("line116R-L").style.visibility = "hidden";
       document.getElementById("line116L-R").style.visibility = "visible";
    }
       if (window.P_Bus510 > window.P_Bus345){
       document.getElementById("line117R-L").style.visibility = "hidden";
       document.getElementById("line117L-R").style.visibility = "visible";
    } else{
       document.getElementById("line117L-R").style.visibility = "hidden";
       document.getElementById("line117R-L").style.visibility = "visible";
    }
       if (window.P_Bus15 > window.P_Bus510){
       document.getElementById("line118L-R").style.visibility = "hidden";
       document.getElementById("line118R-L").style.visibility = "visible";
    } else{
       document.getElementById("line118R-L").style.visibility = "hidden";
       document.getElementById("line118L-R").style.visibility = "visible";
    }
       if (window.P_Bus15 > window.P_Tr697){
       document.getElementById("line119R-L").style.visibility = "hidden";
       document.getElementById("line119L-R").style.visibility = "visible";
    } else{
       document.getElementById("line119L-R").style.visibility = "hidden";
       document.getElementById("line119R-L").style.visibility = "visible";
    }
       if (window.P_Bus345 > window.P_Tr716){
       document.getElementById("line120R-L").style.visibility = "hidden";
       document.getElementById("line120L-R").style.visibility = "visible";
    } else{
       document.getElementById("line120L-R").style.visibility = "hidden";
       document.getElementById("line120R-L").style.visibility = "visible";
    }
       if (window.P_Bus323 > window.P_Bus345){
       document.getElementById("line121L-R").style.visibility = "hidden";
       document.getElementById("line121R-L").style.visibility = "visible";
    } else{
       document.getElementById("line121R-L").style.visibility = "hidden";
       document.getElementById("line121L-R").style.visibility = "visible";
    }
       if (window.P_Bus323 > window.P_Tr707){
       document.getElementById("line122L-R").style.visibility = "hidden";
       document.getElementById("line122R-L").style.visibility = "visible";
    } else{
       document.getElementById("line122R-L").style.visibility = "hidden";
       document.getElementById("line122L-R").style.visibility = "visible";
    }
       if (window.P_Bus28 > window.P_Bus323){
       document.getElementById("line123L-R").style.visibility = "hidden";
       document.getElementById("line123R-L").style.visibility = "visible";
    } else{
       document.getElementById("line123R-L").style.visibility = "hidden";
       document.getElementById("line123L-R").style.visibility = "visible";
    }
       if (window.P_Bus28 > window.P_Tr699){
       document.getElementById("line124R-L").style.visibility = "hidden";
       document.getElementById("line124L-R").style.visibility = "visible";
    } else{
       document.getElementById("line124L-R").style.visibility = "hidden";
       document.getElementById("line124R-L").style.visibility = "visible";
    }
       if (window.P_Bus81 > window.P_Bus28){
       document.getElementById("line125L-R").style.visibility = "hidden";
       document.getElementById("line125R-L").style.visibility = "visible";
    } else{
       document.getElementById("line125R-L").style.visibility = "hidden";
       document.getElementById("line125L-R").style.visibility = "visible";
    }
       if (window.P_Bus81 > window.P_Tr723){
       document.getElementById("line126R-L").style.visibility = "hidden";
       document.getElementById("line126L-R").style.visibility = "visible";
    } else{
       document.getElementById("line126L-R").style.visibility = "hidden";
       document.getElementById("line126R-L").style.visibility = "visible";
    }
       if (window.P_Bus75 > window.P_Bus81){
       document.getElementById("line127L-R").style.visibility = "hidden";
       document.getElementById("line127R-L").style.visibility = "visible";
    } else{
       document.getElementById("line127R-L").style.visibility = "hidden";
       document.getElementById("line127L-R").style.visibility = "visible";
    }
       if (window.P_Bus75 > window.P_Tr700){
       document.getElementById("line128R-L").style.visibility = "hidden";
       document.getElementById("line128L-R").style.visibility = "visible";
    } else{
       document.getElementById("line128L-R").style.visibility = "hidden";
       document.getElementById("line128R-L").style.visibility = "visible";
    }
       if (window.P_Bus484 > window.P_Bus75){
       document.getElementById("line129L-R").style.visibility = "hidden";
       document.getElementById("line129R-L").style.visibility = "visible";
    } else{
       document.getElementById("line129R-L").style.visibility = "hidden";
       document.getElementById("line129L-R").style.visibility = "visible";
    }
       if (window.P_Bus484 > window.P_Tr669){
       document.getElementById("line130R-L").style.visibility = "hidden";
       document.getElementById("line130L-R").style.visibility = "visible";
    } else{
       document.getElementById("line130L-R").style.visibility = "hidden";
       document.getElementById("line130R-L").style.visibility = "visible";
    }
       if (window.P_Bus93 > window.P_Bus484){
       document.getElementById("line131L-R").style.visibility = "hidden";
       document.getElementById("line131R-L").style.visibility = "visible";
    } else{
       document.getElementById("line131R-L").style.visibility = "hidden";
       document.getElementById("line131L-R").style.visibility = "visible";
    }
       if (window.P_Bus93 > window.P_Tr711){
       document.getElementById("line132R-L").style.visibility = "hidden";
       document.getElementById("line132L-R").style.visibility = "visible";
    } else{
       document.getElementById("line132L-R").style.visibility = "hidden";
       document.getElementById("line132R-L").style.visibility = "visible";
    }
       if (window.P_Bus229 > window.P_Bus93){
       document.getElementById("line133L-R").style.visibility = "hidden";
       document.getElementById("line133R-L").style.visibility = "visible";
    } else{
       document.getElementById("line133R-L").style.visibility = "hidden";
       document.getElementById("line133L-R").style.visibility = "visible";
    }
       if (window.P_Bus134 > window.P_Bus229){
       document.getElementById("line134R-L").style.visibility = "hidden";
       document.getElementById("line134L-R").style.visibility = "visible";
    } else{
       document.getElementById("line134L-R").style.visibility = "hidden";
       document.getElementById("line134R-L").style.visibility = "visible";
    }
       if (window.P_Bus132 > window.P_Bus134){
       document.getElementById("line135R-L").style.visibility = "hidden";
       document.getElementById("line135L-R").style.visibility = "visible";
    } else{
       document.getElementById("line135L-R").style.visibility = "hidden";
       document.getElementById("line135R-L").style.visibility = "visible";
    }
       if (window.P_Tr655 > window.P_Bus132){
       document.getElementById("line136L-R").style.visibility = "hidden";
       document.getElementById("line136R-L").style.visibility = "visible";
    } else{
       document.getElementById("line136R-L").style.visibility = "hidden";
       document.getElementById("line136L-R").style.visibility = "visible";
    }
       if (window.P_Bus134 > window.P_Bus160){
       document.getElementById("line137L-R").style.visibility = "hidden";
       document.getElementById("line137R-L").style.visibility = "visible";
    } else{
       document.getElementById("line137R-L").style.visibility = "hidden";
       document.getElementById("line137L-R").style.visibility = "visible";
    }
       if (window.P_Bus160 > window.P_Tr665){
       document.getElementById("line138L-R").style.visibility = "hidden";
       document.getElementById("line138R-L").style.visibility = "visible";
    } else{
       document.getElementById("line138R-L").style.visibility = "hidden";
       document.getElementById("line138L-R").style.visibility = "visible";
    }
       if (window.P_Bus117 > window.P_Bus229){
       document.getElementById("line139R-L").style.visibility = "hidden";
       document.getElementById("line139L-R").style.visibility = "visible";
    } else{
       document.getElementById("line139L-R").style.visibility = "hidden";
       document.getElementById("line139R-L").style.visibility = "visible";
    }
       if (window.P_Bus117 > window.P_Bus115){
       document.getElementById("line140L-R").style.visibility = "hidden";
       document.getElementById("line140R-L").style.visibility = "visible";
    } else{
       document.getElementById("line140R-L").style.visibility = "hidden";
       document.getElementById("line140L-R").style.visibility = "visible";
    }
       if (window.P_Bus115 > window.P_Tr660){
       document.getElementById("line141R-L").style.visibility = "hidden";
       document.getElementById("line141L-R").style.visibility = "visible";
    } else{
       document.getElementById("line141L-R").style.visibility = "hidden";
       document.getElementById("line141R-L").style.visibility = "visible";
    }
       if (window.P_Bus479 > window.P_Bus117){
       document.getElementById("line142R-L").style.visibility = "hidden";
       document.getElementById("line142L-R").style.visibility = "visible";
    } else{
       document.getElementById("line142L-R").style.visibility = "hidden";
       document.getElementById("line142R-L").style.visibility = "visible";
    }
       if (window.P_Tr701 > window.P_Bus479){
       document.getElementById("line143R-L").style.visibility = "hidden";
       document.getElementById("line143L-R").style.visibility = "visible";
    } else{
       document.getElementById("line143L-R").style.visibility = "hidden";
       document.getElementById("line143R-L").style.visibility = "visible";
    }
       if (window.P_Bus501 > window.P_Bus479){
       document.getElementById("line144L-R").style.visibility = "hidden";
       document.getElementById("line144R-L").style.visibility = "visible";
    } else{
       document.getElementById("line144R-L").style.visibility = "hidden";
       document.getElementById("line144L-R").style.visibility = "visible";
    }
       if (window.P_Tr704 > window.P_Bus501){
       document.getElementById("line145R-L").style.visibility = "hidden";
       document.getElementById("line145L-R").style.visibility = "visible";
    } else{
       document.getElementById("line145L-R").style.visibility = "hidden";
       document.getElementById("line145R-L").style.visibility = "visible";
    }
       if (window.P_Bus506 > window.P_Bus501){
       document.getElementById("line146L-R").style.visibility = "hidden";
       document.getElementById("line146R-L").style.visibility = "visible";
    } else{
       document.getElementById("line146R-L").style.visibility = "hidden";
       document.getElementById("line146L-R").style.visibility = "visible";
    }
       if (window.P_Tr690 > window.P_Bus506){
       document.getElementById("line147R-L").style.visibility = "hidden";
       document.getElementById("line147L-R").style.visibility = "visible";
    } else{
       document.getElementById("line147L-R").style.visibility = "hidden";
       document.getElementById("line147R-L").style.visibility = "visible";
    }
       if (window.P_Bus517 > window.P_Bus506){
       document.getElementById("line148R-L").style.visibility = "hidden";
       document.getElementById("line148L-R").style.visibility = "visible";
    } else{
       document.getElementById("line148L-R").style.visibility = "hidden";
       document.getElementById("line148R-L").style.visibility = "visible";
    }
       if (window.P_Bus517 > window.P_Tr685){
       document.getElementById("line149R-L").style.visibility = "hidden";
       document.getElementById("line149L-R").style.visibility = "visible";
    } else{
       document.getElementById("line149L-R").style.visibility = "hidden";
       document.getElementById("line149R-L").style.visibility = "visible";
    }
       if (window.P_Bus529 > window.P_Bus517){
       document.getElementById("line150L-R").style.visibility = "hidden";
       document.getElementById("line150R-L").style.visibility = "visible";
    } else{
       document.getElementById("line150R-L").style.visibility = "hidden";
       document.getElementById("line150L-R").style.visibility = "visible";
    }
       if (window.P_Tr677 > window.P_Bus529){
       document.getElementById("line151R-L").style.visibility = "hidden";
       document.getElementById("line151L-R").style.visibility = "visible";
    } else{
       document.getElementById("line151L-R").style.visibility = "hidden";
       document.getElementById("line151R-L").style.visibility = "visible";
    }
       if (window.P_Bus538 > window.P_Bus529){
       document.getElementById("line152L-R").style.visibility = "hidden";
       document.getElementById("line152R-L").style.visibility = "visible";
    } else{
       document.getElementById("line152R-L").style.visibility = "hidden";
       document.getElementById("line152L-R").style.visibility = "visible";
    }
       if (window.P_Bus538 > window.P_Tr717){
       document.getElementById("line153L-R").style.visibility = "hidden";
       document.getElementById("line153R-L").style.visibility = "visible";
    } else{
       document.getElementById("line153R-L").style.visibility = "hidden";
       document.getElementById("line153L-R").style.visibility = "visible";
    }
       if (window.P_Bus235 > window.P_Bus538){
       document.getElementById("line154L-R").style.visibility = "hidden";
       document.getElementById("line154R-L").style.visibility = "visible";
    } else{
       document.getElementById("line154R-L").style.visibility = "hidden";
       document.getElementById("line154L-R").style.visibility = "visible";
    }
       if (window.P_Bus235 > window.P_Bus180){
       document.getElementById("line155L-R").style.visibility = "hidden";
       document.getElementById("line155R-L").style.visibility = "visible";
    } else{
       document.getElementById("line155R-L").style.visibility = "hidden";
       document.getElementById("line155L-R").style.visibility = "visible";
    }
       if (window.P_Bus180 > window.P_Tr713){
       document.getElementById("line156L-R").style.visibility = "hidden";
       document.getElementById("line156R-L").style.visibility = "visible";
    } else{
       document.getElementById("line156R-L").style.visibility = "hidden";
       document.getElementById("line156L-R").style.visibility = "visible";
    }
       if (window.P_Bus237 > window.P_Bus235){
       document.getElementById("line157R-L").style.visibility = "hidden";
       document.getElementById("line157L-R").style.visibility = "visible";
    } else{
       document.getElementById("line157L-R").style.visibility = "hidden";
       document.getElementById("line157R-L").style.visibility = "visible";
    }
       if (window.P_Bus237 > window.P_Tr709){
       document.getElementById("line158L-R").style.visibility = "hidden";
       document.getElementById("line158R-L").style.visibility = "visible";
    } else{
       document.getElementById("line158R-L").style.visibility = "hidden";
       document.getElementById("line158L-R").style.visibility = "visible";
    }
       if (window.P_Bus439 > window.P_Bus237){
       document.getElementById("line159R-L").style.visibility = "hidden";
       document.getElementById("line159L-R").style.visibility = "visible";
    } else{
       document.getElementById("line159L-R").style.visibility = "hidden";
       document.getElementById("line159R-L").style.visibility = "visible";
    }
       if (window.P_Bus439 > window.P_Bus441){
       document.getElementById("line160L-R").style.visibility = "hidden";
       document.getElementById("line160R-L").style.visibility = "visible";
    } else{
       document.getElementById("line160R-L").style.visibility = "hidden";
       document.getElementById("line160L-R").style.visibility = "visible";
    }
       if (window.P_Bus441 > window.P_Tr695){
       document.getElementById("line161L-R").style.visibility = "hidden";
       document.getElementById("line161R-L").style.visibility = "visible";
    } else{
       document.getElementById("line161R-L").style.visibility = "hidden";
       document.getElementById("line161L-R").style.visibility = "visible";
    }
       if (window.P_Bus327 > window.P_Bus439){
       document.getElementById("line162R-L").style.visibility = "hidden";
       document.getElementById("line162L-R").style.visibility = "visible";
    } else{
       document.getElementById("line162L-R").style.visibility = "hidden";
       document.getElementById("line162R-L").style.visibility = "visible";
    }
       if (window.P_Bus320 > window.P_Bus327){
       document.getElementById("line163R-L").style.visibility = "hidden";
       document.getElementById("line163L-R").style.visibility = "visible";
    } else{
       document.getElementById("line163L-R").style.visibility = "hidden";
       document.getElementById("line163R-L").style.visibility = "visible";
    }
       if (window.P_Tr705 > window.P_Bus320){
       document.getElementById("line164R-L").style.visibility = "hidden";
       document.getElementById("line164L-R").style.visibility = "visible";
    } else{
       document.getElementById("line164L-R").style.visibility = "hidden";
       document.getElementById("line164R-L").style.visibility = "visible";
    }
       if (window.P_Bus340 > window.P_Bus320){
       document.getElementById("line165R-L").style.visibility = "hidden";
       document.getElementById("line165L-R").style.visibility = "visible";
    } else{
       document.getElementById("line165L-R").style.visibility = "hidden";
       document.getElementById("line165R-L").style.visibility = "visible";
    }
       if (window.P_Tr693 > window.P_Bus340){
       document.getElementById("line166R-L").style.visibility = "hidden";
       document.getElementById("line166L-R").style.visibility = "visible";
    } else{
       document.getElementById("line166L-R").style.visibility = "hidden";
       document.getElementById("line166R-L").style.visibility = "visible";
    }
       if (window.P_Bus290 > window.P_Bus340){
       document.getElementById("line167R-L").style.visibility = "hidden";
       document.getElementById("line167L-R").style.visibility = "visible";
    } else{
       document.getElementById("line167L-R").style.visibility = "hidden";
       document.getElementById("line167R-L").style.visibility = "visible";
    }


}