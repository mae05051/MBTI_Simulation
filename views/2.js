var num2=0
var lst2
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

        lst2=[$("input[name='inlineRadioOptions1']:checked").val(),
        $("input[name='inlineRadioOptions2']:checked").val(),
        $("input[name='inlineRadioOptions3']:checked").val(),
        $("input[name='inlineRadioOptions4']:checked").val()]

        fetch("http://localhost:5000/result/2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                lst: lst2
            }),
        }).then((response) => console.log(response));

        if (num2==0){
            window.location = "http://localhost:5000/test/3"
            num2++
        }else{
            window.history.forward()
        }

    }else{
        alert('4개가 체크되지 않았습니다.');
    }

        
})

var next_btn= document.getElementById('bef_btn');
bef_btn.addEventListener('click', function(){
    window.history.back()
})