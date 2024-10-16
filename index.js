var days = document.getElementById('days');
var hour = document.getElementById('hours');
var minute = document.getElementById('minutes');
var second = document.getElementById('seconds');



var text = document.querySelector('#text');

setInterval(function() {
    var now = new Date();
    var Helloin = new Date(
        now.getFullYear(), 
        11,
        30,
        23,
        59,
        58,
    
    
    
    );
    
    


    var diff = Math.ceil((Helloin - now) / 1000);



    var day = Math.floor(diff / (3600*24));
    
    var hours = Math.floor(diff % (3600*24) / 3600);
    
    var minutes = Math.floor(diff % 3600 / 60);
    
    var seconds = Math.floor(diff % 60)



    days.innerHTML = day;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}, 1000)




function windowUp () {
    document.getElementById('darker').style.display="block";
    document.body.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    setTimeout('windowUp();', 1000);
    
    function windowClose () {
    document.getElementById('darker').style.display="none";
    document.body.style.backgroundColor = '#EEEEEE';
    }