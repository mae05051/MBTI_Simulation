var p1=0
var p2=0
var p3=0
var p4=0
var pgber_percent = parseFloat(localStorage.getItem("pgber_percent"))
//console.log("2.js pgber_percent : ",localStorage.getItem("pgber_percent"))
document.getElementById('progressbar').style="width: "+ String(localStorage.getItem("pgber_percent")) +"%"

function radio_check1(){
    if (p1>0){
        return 0
    }else{
        pgber_percent+=100/12
        document.getElementById('progressbar').style="width: "+ String(pgber_percent) +"%";
        p1++
    }
}

function radio_check2(){
    if (p2>0){
        return 0
    }else{
        pgber_percent+=100/12
        document.getElementById('progressbar').style="width: "+ String(pgber_percent) +"%";
        p2++
    }
}

function radio_check3(){
    if (p3>0){
        return 0
    }else{
        pgber_percent+=100/12
        document.getElementById('progressbar').style="width: "+ String(pgber_percent) +"%";
        p3++
    }
}

function radio_check4(){
    if (p4>0){
        return 0
    }else{
        pgber_percent+=100/12
        document.getElementById('progressbar').style="width: "+ String(pgber_percent) +"%";
        p4++
    }
}

var next_btn= document.getElementById('next_btn');
var lst3

next_btn.addEventListener('click', function(){
    if ((document.querySelector('input[id="inlineRadio11"]').checked ||
    document.querySelector('input[id="inlineRadio12"]').checked) && 
    (document.querySelector('input[id="inlineRadio21"]').checked ||
    document.querySelector('input[id="inlineRadio22"]').checked) && 
    (document.querySelector('input[id="inlineRadio31"]').checked ||
    document.querySelector('input[id="inlineRadio32"]').checked) && 
    (document.querySelector('input[id="inlineRadio41"]').checked || 
    document.querySelector('input[id="inlineRadio42"]').checked)){

        lst3=[$("input[name='inlineRadioOptions1']:checked").val(),
        $("input[name='inlineRadioOptions2']:checked").val(),
        $("input[name='inlineRadioOptions3']:checked").val(),
        $("input[name='inlineRadioOptions4']:checked").val()]

        fetch("http://localhost:5000/result/3", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                lst: lst3
            }),
        }).then((response) => console.log(response));

        window.location = "http://localhost:5000/result"  
        
    }else{
        alert('4개가 체크되지 않았습니다.');
    }     
})

var next_btn= document.getElementById('bef_btn');
bef_btn.addEventListener('click', function(){
    localStorage.setItem('pgber_percent',pgber_percent)
    window.history.back()
})

var i= document.getElementById('init');
i.addEventListener('click', function(){
    localStorage.clear()
    fetch('http://localhost:5000/init')
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log('Error', err);
        });
        window.location = "http://localhost:5000/test/"
})