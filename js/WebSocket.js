  // 构造一个 msg 对象， 包含了服务器处理所需的数据

  setInterval("WebSocketTest();",5*1000);//5 sec do once

  function Resetmsg(){
    return msg = {
        P_Tr999:randomNum(200,500),
        Q_Tr999:randomNum(200,500),
    U_Tr999: randomNum(1,100),
    U_Tr651: randomNum(1,100),
    U_Tr652: randomNum(1,100),
    U_Tr653: randomNum(1,100),
    U_Tr654: randomNum(1,100),
    U_Tr655: randomNum(1,100),
    U_Tr656: randomNum(1,100),
    U_Tr657: randomNum(1,100),
    U_Tr658: randomNum(1,100),
    U_Tr659: randomNum(1,100),
    U_Tr660: randomNum(1,100),
    U_Tr661: randomNum(1,100),
    U_Tr662: randomNum(1,100),
    U_Tr663: randomNum(1,100),
    U_Tr664: randomNum(1,100),
    U_Tr665: randomNum(1,100),
    U_Tr666: randomNum(1,100),
    U_Tr667: randomNum(1,100),
    U_Tr668: randomNum(1,100),
    U_Tr669: randomNum(1,100),
    U_Tr670: randomNum(1,100),
    U_Tr671: randomNum(1,100),
    U_Tr672: randomNum(1,100),
    U_Tr673: randomNum(1,100),
    U_Tr674: randomNum(1,100),
    U_Tr675: randomNum(1,100),
    U_Tr676: randomNum(1,100),
    U_Tr677: randomNum(1,100),
    U_Tr678: randomNum(1,100),
    U_Tr679: randomNum(1,100),
    U_Tr680: randomNum(1,100),
    U_Tr681: randomNum(1,100),
    U_Tr682: randomNum(1,100),
    U_Tr683: randomNum(1,100),
    U_Tr684: randomNum(1,100),
    U_Tr685: randomNum(1,100),
    U_Tr686: randomNum(1,100),
    U_Tr687: randomNum(1,100),
    U_Tr688: randomNum(1,100),
    U_Tr689: randomNum(1,100),
    U_Tr690: randomNum(1,100),
    U_Tr691: randomNum(1,100),
    U_Tr692: randomNum(1,100),
    U_Tr693: randomNum(1,100),
    U_Tr694: randomNum(1,100),
    U_Tr695: randomNum(1,100),
    U_Tr696: randomNum(1,100),
    U_Tr697: randomNum(1,100),
    U_Tr698: randomNum(1,100),
    U_Tr699: randomNum(1,100),
    U_Tr700: randomNum(1,100),
    U_Tr701: randomNum(1,100),
    U_Tr702: randomNum(1,100),
    U_Tr703: randomNum(1,100),
    U_Tr704: randomNum(1,100),
    U_Tr705: randomNum(1,100),
    U_Tr706: randomNum(1,100),
    U_Tr707: randomNum(1,100),
    U_Tr708: randomNum(1,100),
    U_Tr709: randomNum(1,100),
    U_Tr710: randomNum(1,100),
    U_Tr711: randomNum(1,100),
    U_Tr712: randomNum(1,100),
    U_Tr713: randomNum(1,100),
    U_Tr714: randomNum(1,100),
    U_Tr715: randomNum(1,100),
    U_Tr716: randomNum(1,100),
    U_Tr717: randomNum(1,100),
    U_Tr718: randomNum(1,100),
    U_Tr719: randomNum(1,100),
    U_Tr720: randomNum(1,100),
    U_Tr721: randomNum(1,100),
    U_Tr722: randomNum(1,100),
    U_Tr723: randomNum(1,100),
    U_Tr724: randomNum(1,100),
    U_Tr725: randomNum(1,100),
    U_Tr726: randomNum(1,100),
    U_Tr727: randomNum(1,100),
    U_Tr728: randomNum(1,100),
    U_Tr729: randomNum(1,100),
  };
  }

function WebSocketTest()
         {
         //    if ("WebSocket" in window)
         //    {
         //       alert("WebSocket will start transmission!");

               // 打开一个 web socket
               var ws = new WebSocket("ws://localhost:9998/echo");

               ws.onopen = function()
               {
                  // Web Socket 已连接上，使用 send() 方法发送数据
                  ws.send(JSON.stringify(Resetmsg()));
                  //alert("New data is sending...");
               };

               ws.onmessage = function (evt)
               {
                  var msg = JSON.parse(evt.data);
                  //var received_msg = parseInt(evt.data);
                   window.P_Tr999 = parseInt(msg.P_Tr999);
                   window.Q_Tr999 = parseInt(msg.Q_Tr999);
                window.U_Tr999 = parseInt(msg.U_Tr999);
                window.U_Tr651 = parseInt(msg.U_Tr651);
                window.U_Tr652 = parseInt(msg.U_Tr652);
                window.U_Tr653 = parseInt(msg.U_Tr653);
                window.U_Tr654 = parseInt(msg.U_Tr654);
                window.U_Tr655 = parseInt(msg.U_Tr655);
                window.U_Tr656 = parseInt(msg.U_Tr656);
                window.U_Tr657 = parseInt(msg.U_Tr657);
                window.U_Tr658 = parseInt(msg.U_Tr658);
                window.U_Tr659 = parseInt(msg.U_Tr659);
                window.U_Tr660 = parseInt(msg.U_Tr660);
                window.U_Tr661 = parseInt(msg.U_Tr661);
                window.U_Tr662 = parseInt(msg.U_Tr662);
                window.U_Tr663 = parseInt(msg.U_Tr663);
                window.U_Tr664 = parseInt(msg.U_Tr664);
                window.U_Tr665 = parseInt(msg.U_Tr665);
                window.U_Tr666 = parseInt(msg.U_Tr666);
                window.U_Tr667 = parseInt(msg.U_Tr667);
                window.U_Tr668 = parseInt(msg.U_Tr668);
                window.U_Tr669 = parseInt(msg.U_Tr669);
                window.U_Tr670 = parseInt(msg.U_Tr670);
                window.U_Tr671 = parseInt(msg.U_Tr671);
                window.U_Tr672 = parseInt(msg.U_Tr672);
                window.U_Tr673 = parseInt(msg.U_Tr673);
                window.U_Tr674 = parseInt(msg.U_Tr674);
                window.U_Tr675 = parseInt(msg.U_Tr675);
                window.U_Tr676 = parseInt(msg.U_Tr676);
                window.U_Tr677 = parseInt(msg.U_Tr677);
                window.U_Tr678 = parseInt(msg.U_Tr678);
                window.U_Tr679 = parseInt(msg.U_Tr679);
                window.U_Tr680 = parseInt(msg.U_Tr680);
                window.U_Tr681 = parseInt(msg.U_Tr681);
                window.U_Tr682 = parseInt(msg.U_Tr682);
                window.U_Tr683 = parseInt(msg.U_Tr683);
                window.U_Tr684 = parseInt(msg.U_Tr684);
                window.U_Tr685 = parseInt(msg.U_Tr685);
                window.U_Tr686 = parseInt(msg.U_Tr686);
                window.U_Tr687 = parseInt(msg.U_Tr687);
                window.U_Tr688 = parseInt(msg.U_Tr688);
                window.U_Tr689 = parseInt(msg.U_Tr689);
                window.U_Tr690 = parseInt(msg.U_Tr690);
                window.U_Tr691 = parseInt(msg.U_Tr691);
                window.U_Tr692 = parseInt(msg.U_Tr692);
                window.U_Tr693 = parseInt(msg.U_Tr693);
                window.U_Tr694 = parseInt(msg.U_Tr694);
                window.U_Tr695 = parseInt(msg.U_Tr695);
                window.U_Tr696 = parseInt(msg.U_Tr696);
                window.U_Tr697 = parseInt(msg.U_Tr697);
                window.U_Tr698 = parseInt(msg.U_Tr698);
                window.U_Tr699 = parseInt(msg.U_Tr699);
                window.U_Tr700 = parseInt(msg.U_Tr700);
                window.U_Tr701 = parseInt(msg.U_Tr701);
                window.U_Tr702 = parseInt(msg.U_Tr702);
                window.U_Tr703 = parseInt(msg.U_Tr703);
                window.U_Tr704 = parseInt(msg.U_Tr704);
                window.U_Tr705 = parseInt(msg.U_Tr705);
                window.U_Tr706 = parseInt(msg.U_Tr706);
                window.U_Tr707 = parseInt(msg.U_Tr707);
                window.U_Tr708 = parseInt(msg.U_Tr708);
                window.U_Tr709 = parseInt(msg.U_Tr709);
                window.U_Tr710 = parseInt(msg.U_Tr710);
                window.U_Tr711 = parseInt(msg.U_Tr711);
                window.U_Tr712 = parseInt(msg.U_Tr712);
                window.U_Tr713 = parseInt(msg.U_Tr713);
                window.U_Tr714 = parseInt(msg.U_Tr714);
                window.U_Tr715 = parseInt(msg.U_Tr715);
                window.U_Tr716 = parseInt(msg.U_Tr716);
                window.U_Tr717 = parseInt(msg.U_Tr717);
                window.U_Tr718 = parseInt(msg.U_Tr718);
                window.U_Tr719 = parseInt(msg.U_Tr719);
                window.U_Tr720 = parseInt(msg.U_Tr720);
                window.U_Tr721 = parseInt(msg.U_Tr721);
                window.U_Tr722 = parseInt(msg.U_Tr722);
                window.U_Tr723 = parseInt(msg.U_Tr723);
                window.U_Tr724 = parseInt(msg.U_Tr724);
                window.U_Tr725 = parseInt(msg.U_Tr725);
                window.U_Tr726 = parseInt(msg.U_Tr726);
                window.U_Tr727 = parseInt(msg.U_Tr727);
                window.U_Tr728 = parseInt(msg.U_Tr728);
                window.U_Tr729 = parseInt(msg.U_Tr729);
                  //alert("Complete!");
                  window.flag = true;

                    if (window.U_Tr999 < 50) {
                      document.getElementById("Tr999").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr999 < 100) {
                      document.getElementById("Tr999").setAttribute("fill", "#cdb71f");
                    } else {
                      document.getElementById("Tr999").setAttribute("fill", "#FF895B")
                    }
                    if (window.U_Tr651 < 50) {
                        document.getElementById("Tr651").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr651 < 80) {
                        document.getElementById("Tr651").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr651 < 90) {
                        document.getElementById("Tr651").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr651").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr652 < 50) {
                        document.getElementById("Tr652").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr652 < 80) {
                        document.getElementById("Tr652").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr652 < 90) {
                        document.getElementById("Tr652").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr652").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr653 < 50) {
                        document.getElementById("Tr653").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr653 < 80) {
                        document.getElementById("Tr653").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr653 < 90) {
                        document.getElementById("Tr653").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr653").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr654 < 50) {
                        document.getElementById("Tr654").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr654 < 80) {
                        document.getElementById("Tr654").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr654 < 90) {
                        document.getElementById("Tr654").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr654").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr655 < 50) {
                        document.getElementById("Tr655").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr655 < 80) {
                        document.getElementById("Tr655").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr655 < 90) {
                        document.getElementById("Tr655").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr655").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr656 < 50) {
                        document.getElementById("Tr656").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr656 < 80) {
                        document.getElementById("Tr656").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr656 < 90) {
                        document.getElementById("Tr656").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr656").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr657 < 50) {
                        document.getElementById("Tr657").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr657 < 80) {
                        document.getElementById("Tr657").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr657 < 90) {
                        document.getElementById("Tr657").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr657").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr658 < 50) {
                        document.getElementById("Tr658").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr658 < 80) {
                        document.getElementById("Tr658").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr658 < 90) {
                        document.getElementById("Tr658").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr658").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr659 < 50) {
                        document.getElementById("Tr659").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr659 < 80) {
                        document.getElementById("Tr659").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr659 < 90) {
                        document.getElementById("Tr659").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr659").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr660 < 50) {
                        document.getElementById("Tr660").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr660 < 80) {
                        document.getElementById("Tr660").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr660 < 90) {
                        document.getElementById("Tr660").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr660").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr661 < 50) {
                        document.getElementById("Tr661").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr661 < 80) {
                        document.getElementById("Tr661").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr661 < 90) {
                        document.getElementById("Tr661").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr661").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr662 < 50) {
                        document.getElementById("Tr662").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr662 < 80) {
                        document.getElementById("Tr662").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr662 < 90) {
                        document.getElementById("Tr662").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr662").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr663 < 50) {
                        document.getElementById("Tr663").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr663 < 80) {
                        document.getElementById("Tr663").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr663 < 90) {
                        document.getElementById("Tr663").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr663").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr664 < 50) {
                        document.getElementById("Tr664").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr664 < 80) {
                        document.getElementById("Tr664").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr664 < 90) {
                        document.getElementById("Tr664").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr664").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr665 < 50) {
                        document.getElementById("Tr665").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr665 < 80) {
                        document.getElementById("Tr665").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr665 < 90) {
                        document.getElementById("Tr665").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr665").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr666 < 50) {
                        document.getElementById("Tr666").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr666 < 80) {
                        document.getElementById("Tr666").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr666 < 90) {
                        document.getElementById("Tr666").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr666").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr667 < 50) {
                        document.getElementById("Tr667").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr667 < 80) {
                        document.getElementById("Tr667").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr667 < 90) {
                        document.getElementById("Tr667").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr667").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr668 < 50) {
                        document.getElementById("Tr668").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr668 < 80) {
                        document.getElementById("Tr668").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr668 < 90) {
                        document.getElementById("Tr668").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr668").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr669 < 50) {
                        document.getElementById("Tr669").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr669 < 80) {
                        document.getElementById("Tr669").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr669 < 90) {
                        document.getElementById("Tr669").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr669").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr670 < 50) {
                        document.getElementById("Tr670").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr670 < 80) {
                        document.getElementById("Tr670").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr670 < 90) {
                        document.getElementById("Tr670").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr670").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr671 < 50) {
                        document.getElementById("Tr671").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr671 < 80) {
                        document.getElementById("Tr671").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr671 < 90) {
                        document.getElementById("Tr671").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr671").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr672 < 50) {
                        document.getElementById("Tr672").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr672 < 80) {
                        document.getElementById("Tr672").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr672 < 90) {
                        document.getElementById("Tr672").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr672").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr673 < 50) {
                        document.getElementById("Tr673").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr673 < 80) {
                        document.getElementById("Tr673").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr673 < 90) {
                        document.getElementById("Tr673").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr673").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr674 < 50) {
                        document.getElementById("Tr674").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr674 < 80) {
                        document.getElementById("Tr674").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr674 < 90) {
                        document.getElementById("Tr674").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr674").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr675 < 50) {
                        document.getElementById("Tr675").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr675 < 80) {
                        document.getElementById("Tr675").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr675 < 90) {
                        document.getElementById("Tr675").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr675").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr676 < 50) {
                        document.getElementById("Tr676").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr676 < 80) {
                        document.getElementById("Tr676").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr676 < 90) {
                        document.getElementById("Tr676").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr676").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr677 < 50) {
                        document.getElementById("Tr677").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr677 < 80) {
                        document.getElementById("Tr677").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr677 < 90) {
                        document.getElementById("Tr677").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr677").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr678 < 50) {
                        document.getElementById("Tr678").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr678 < 80) {
                        document.getElementById("Tr678").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr678 < 90) {
                        document.getElementById("Tr678").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr678").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr679 < 50) {
                        document.getElementById("Tr679").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr679 < 80) {
                        document.getElementById("Tr679").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr679 < 90) {
                        document.getElementById("Tr679").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr679").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr680 < 50) {
                        document.getElementById("Tr680").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr680 < 80) {
                        document.getElementById("Tr680").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr680 < 90) {
                        document.getElementById("Tr680").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr680").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr681 < 50) {
                        document.getElementById("Tr681").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr681 < 80) {
                        document.getElementById("Tr681").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr681 < 90) {
                        document.getElementById("Tr681").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr681").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr682 < 50) {
                        document.getElementById("Tr682").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr682 < 80) {
                        document.getElementById("Tr682").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr682 < 90) {
                        document.getElementById("Tr682").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr682").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr683 < 50) {
                        document.getElementById("Tr683").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr683 < 80) {
                        document.getElementById("Tr683").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr683 < 90) {
                        document.getElementById("Tr683").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr683").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr684 < 50) {
                        document.getElementById("Tr684").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr684 < 80) {
                        document.getElementById("Tr684").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr684 < 90) {
                        document.getElementById("Tr684").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr684").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr685 < 50) {
                        document.getElementById("Tr685").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr685 < 80) {
                        document.getElementById("Tr685").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr685 < 90) {
                        document.getElementById("Tr685").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr685").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr686 < 50) {
                        document.getElementById("Tr686").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr686 < 80) {
                        document.getElementById("Tr686").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr686 < 90) {
                        document.getElementById("Tr686").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr686").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr687 < 50) {
                        document.getElementById("Tr687").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr687 < 80) {
                        document.getElementById("Tr687").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr687 < 90) {
                        document.getElementById("Tr687").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr687").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr688 < 50) {
                        document.getElementById("Tr688").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr688 < 80) {
                        document.getElementById("Tr688").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr688 < 90) {
                        document.getElementById("Tr688").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr688").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr689 < 50) {
                        document.getElementById("Tr689").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr689 < 80) {
                        document.getElementById("Tr689").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr689 < 90) {
                        document.getElementById("Tr689").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr689").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr690 < 50) {
                        document.getElementById("Tr690").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr690 < 80) {
                        document.getElementById("Tr690").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr690 < 90) {
                        document.getElementById("Tr690").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr690").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr691 < 50) {
                        document.getElementById("Tr691").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr691 < 80) {
                        document.getElementById("Tr691").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr691 < 90) {
                        document.getElementById("Tr691").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr691").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr692 < 50) {
                        document.getElementById("Tr692").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr692 < 80) {
                        document.getElementById("Tr692").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr692 < 90) {
                        document.getElementById("Tr692").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr692").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr693 < 50) {
                        document.getElementById("Tr693").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr693 < 80) {
                        document.getElementById("Tr693").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr693 < 90) {
                        document.getElementById("Tr693").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr693").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr694 < 50) {
                        document.getElementById("Tr694").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr694 < 80) {
                        document.getElementById("Tr694").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr694 < 90) {
                        document.getElementById("Tr694").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr694").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr695 < 50) {
                        document.getElementById("Tr695").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr695 < 80) {
                        document.getElementById("Tr695").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr695 < 90) {
                        document.getElementById("Tr695").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr695").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr696 < 50) {
                        document.getElementById("Tr696").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr696 < 80) {
                        document.getElementById("Tr696").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr696 < 90) {
                        document.getElementById("Tr696").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr696").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr697 < 50) {
                        document.getElementById("Tr697").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr697 < 80) {
                        document.getElementById("Tr697").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr697 < 90) {
                        document.getElementById("Tr697").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr697").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr698 < 50) {
                        document.getElementById("Tr698").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr698 < 80) {
                        document.getElementById("Tr698").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr698 < 90) {
                        document.getElementById("Tr698").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr698").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr699 < 50) {
                        document.getElementById("Tr699").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr699 < 80) {
                        document.getElementById("Tr699").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr699 < 90) {
                        document.getElementById("Tr699").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr699").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr700 < 50) {
                        document.getElementById("Tr700").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr700 < 80) {
                        document.getElementById("Tr700").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr700 < 90) {
                        document.getElementById("Tr700").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr700").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr701 < 50) {
                        document.getElementById("Tr701").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr701 < 80) {
                        document.getElementById("Tr701").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr701 < 90) {
                        document.getElementById("Tr701").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr701").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr702 < 50) {
                        document.getElementById("Tr702").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr702 < 80) {
                        document.getElementById("Tr702").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr702 < 90) {
                        document.getElementById("Tr702").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr702").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr703 < 50) {
                        document.getElementById("Tr703").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr703 < 80) {
                        document.getElementById("Tr703").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr703 < 90) {
                        document.getElementById("Tr703").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr703").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr704 < 50) {
                        document.getElementById("Tr704").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr704 < 80) {
                        document.getElementById("Tr704").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr704 < 90) {
                        document.getElementById("Tr704").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr704").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr705 < 50) {
                        document.getElementById("Tr705").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr705 < 80) {
                        document.getElementById("Tr705").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr705 < 90) {
                        document.getElementById("Tr705").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr705").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr706 < 50) {
                        document.getElementById("Tr706").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr706 < 80) {
                        document.getElementById("Tr706").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr706 < 90) {
                        document.getElementById("Tr706").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr706").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr707 < 50) {
                        document.getElementById("Tr707").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr707 < 80) {
                        document.getElementById("Tr707").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr707 < 90) {
                        document.getElementById("Tr707").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr707").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr708 < 50) {
                        document.getElementById("Tr708").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr708 < 80) {
                        document.getElementById("Tr708").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr708 < 90) {
                        document.getElementById("Tr708").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr708").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr709 < 50) {
                        document.getElementById("Tr709").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr709 < 80) {
                        document.getElementById("Tr709").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr709 < 90) {
                        document.getElementById("Tr709").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr709").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr710 < 50) {
                        document.getElementById("Tr710").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr710 < 80) {
                        document.getElementById("Tr710").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr710 < 90) {
                        document.getElementById("Tr710").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr710").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr711 < 50) {
                        document.getElementById("Tr711").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr711 < 80) {
                        document.getElementById("Tr711").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr711 < 90) {
                        document.getElementById("Tr711").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr711").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr712 < 50) {
                        document.getElementById("Tr712").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr712 < 80) {
                        document.getElementById("Tr712").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr712 < 90) {
                        document.getElementById("Tr712").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr712").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr713 < 50) {
                        document.getElementById("Tr713").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr713 < 80) {
                        document.getElementById("Tr713").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr713 < 90) {
                        document.getElementById("Tr713").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr713").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr714 < 50) {
                        document.getElementById("Tr714").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr714 < 80) {
                        document.getElementById("Tr714").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr714 < 90) {
                        document.getElementById("Tr714").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr714").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr715 < 50) {
                        document.getElementById("Tr715").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr715 < 80) {
                        document.getElementById("Tr715").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr715 < 90) {
                        document.getElementById("Tr715").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr715").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr716 < 50) {
                        document.getElementById("Tr716").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr716 < 80) {
                        document.getElementById("Tr716").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr716 < 90) {
                        document.getElementById("Tr716").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr716").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr717 < 50) {
                        document.getElementById("Tr717").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr717 < 80) {
                        document.getElementById("Tr717").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr717 < 90) {
                        document.getElementById("Tr717").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr717").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr718 < 50) {
                        document.getElementById("Tr718").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr718 < 80) {
                        document.getElementById("Tr718").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr718 < 90) {
                        document.getElementById("Tr718").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr718").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr719 < 50) {
                        document.getElementById("Tr719").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr719 < 80) {
                        document.getElementById("Tr719").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr719 < 90) {
                        document.getElementById("Tr719").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr719").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr720 < 50) {
                        document.getElementById("Tr720").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr720 < 80) {
                        document.getElementById("Tr720").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr720 < 90) {
                        document.getElementById("Tr720").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr720").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr721 < 50) {
                        document.getElementById("Tr721").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr721 < 80) {
                        document.getElementById("Tr721").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr721 < 90) {
                        document.getElementById("Tr721").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr721").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr722 < 50) {
                        document.getElementById("Tr722").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr722 < 80) {
                        document.getElementById("Tr722").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr722 < 90) {
                        document.getElementById("Tr722").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr722").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr723 < 50) {
                        document.getElementById("Tr723").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr723 < 80) {
                        document.getElementById("Tr723").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr723 < 90) {
                        document.getElementById("Tr723").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr723").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr724 < 50) {
                        document.getElementById("Tr724").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr724 < 80) {
                        document.getElementById("Tr724").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr724 < 90) {
                        document.getElementById("Tr724").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr724").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr725 < 50) {
                        document.getElementById("Tr725").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr725 < 80) {
                        document.getElementById("Tr725").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr725 < 90) {
                        document.getElementById("Tr725").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr725").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr726 < 50) {
                        document.getElementById("Tr726").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr726 < 80) {
                        document.getElementById("Tr726").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr726 < 90) {
                        document.getElementById("Tr726").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr726").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr727 < 50) {
                        document.getElementById("Tr727").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr727 < 80) {
                        document.getElementById("Tr727").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr727 < 90) {
                        document.getElementById("Tr727").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr727").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr728 < 50) {
                        document.getElementById("Tr728").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr728 < 80) {
                        document.getElementById("Tr728").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr728 < 90) {
                        document.getElementById("Tr728").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr728").setAttribute("fill", "#ff0000");
                    }
                    if (window.U_Tr729 < 50) {
                        document.getElementById("Tr729").setAttribute("fill", "#77ff4f");
                    } else if (window.U_Tr729 < 80) {
                        document.getElementById("Tr729").setAttribute("fill", "#cdb71f");
                    } else if (window.U_Tr729 < 90) {
                        document.getElementById("Tr729").setAttribute("fill", "#FF895B");
                    } else {
                        document.getElementById("Tr729").setAttribute("fill", "#ff0000");
                    }

               };

               ws.onclose = function()
               {
                  // 关闭 websocket
                  //alert("Transmission is closed.");
               };
            }

         //    else
         //    {
         //       // 浏览器不支持 WebSocket
         //       alert("Your browser doesn't support Websocket!");
         //    }
         // }


         //Random value
        function randomNum(minNum,maxNum){
          switch(arguments.length){
              case 1:
                  return parseInt(Math.random()*minNum+1,10);
              break;
              case 2:
                  return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
              break;
                  default:
                      return 0;
                  break;
          }
      }