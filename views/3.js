var next_btn= document.getElementById('next_btn');
next_btn.addEventListener('click', function(){
    if ((document.querySelector('input[id="inlineRadio11"]').checked ||
    document.querySelector('input[id="inlineRadio12"]').checked) && 
    (document.querySelector('input[id="inlineRadio21"]').checked ||
    document.querySelector('input[id="inlineRadio22"]').checked) && 
    (document.querySelector('input[id="inlineRadio31"]').checked ||
    document.querySelector('input[id="inlineRadio32"]').checked) && 
    (document.querySelector('input[id="inlineRadio41"]').checked || 
    document.querySelector('input[id="inlineRadio42"]').checked)){
        window.location = "http://localhost:5000/result"
        
    }else{
        alert('4개가 체크되지 않았습니다.');
    }

        
})

var next_btn= document.getElementById('bef_btn');
bef_btn.addEventListener('click', function(){
    window.history.back()
})