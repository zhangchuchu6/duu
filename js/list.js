var secondKill = function() {
           /*复盒子*/
            var parentTime = document.getElementsByClassName('ms_time')[0];
             /*span时间*/
            var timeList = parentTime.getElementsByClassName('num');
     
             console.log(timeList.length);
     
            var times = 7 * 60 * 60;
            var timer;
           timer = setInterval(function () {
                times--;
    
                var h = Math.floor(times / (60 * 60));
                var m = Math.floor(times / 60 % 60);
                var s = times % 60;
    
                //console.log(h + '-' + m + "-" + s);
    
                timeList[0].innerHTML = h > 10 ? Math.floor(h / 10) : 0;
                timeList[1].innerHTML = h % 10;
    
                timeList[2].innerHTML = m > 10 ? Math.floor(m / 10) : 0;
               timeList[3].innerHTML = m % 10;
    
                timeList[4].innerHTML = s > 10 ? Math.floor(s / 10) : 0;
                timeList[5].innerHTML = s % 10;
               if (times <= 0) {
                   clearInterval(timer);
                }
            }, 1000);
        }
        secondKill();