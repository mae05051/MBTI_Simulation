var num1=0
var lst1
var next_btn= document.getElementById('next_btn');
// var len = window.history[0];
// console.log(len)

next_btn.addEventListener('click', function(){
    if ((document.querySelector('input[id="inlineRadio11"]').checked ||
    document.querySelector('input[id="inlineRadio12"]').checked) && 
    (document.querySelector('input[id="inlineRadio21"]').checked ||
    document.querySelector('input[id="inlineRadio22"]').checked) && 
    (document.querySelector('input[id="inlineRadio31"]').checked ||
    document.querySelector('input[id="inlineRadio32"]').checked) && 
    (document.querySelector('input[id="inlineRadio41"]').checked || 
    document.querySelector('input[id="inlineRadio42"]').checked)){

        lst1=[$("input[name='inlineRadioOptions1']:checked").val(),
        $("input[name='inlineRadioOptions2']:checked").val(),
        $("input[name='inlineRadioOptions3']:checked").val(),
        $("input[name='inlineRadioOptions4']:checked").val()]

        fetch("http://localhost:5000/result/1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                lst:lst1
            }),
        }).then((response) => console.log(response));

        // if (num1==0){
        //     window.location = "http://localhost:5000/test/2"
        //     num1++
        //     console.log('a')
        // }else{
        //     window.history.forward()
        //     console.log('b')
        // }
        // var his = window.history.forward().
        // console.log(his)
        // if (his == undefined){
        //     console.log('a')
        //     window.location = "http://localhost:5000/test/2"
        // }else{
        //     window.history.forward()    
        //     console.log('b')
        // }

            

    }else{
        alert('4개가 체크되지 않았습니다.')
    }  
})

function jbFunc() {
    document.getElementById('progressbar').style="width: 50%";
}