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
        window.location = "http://localhost:5000/test/2"
        
    }else{
        alert('4개가 체크되지 않았습니다.');
    }

        
})



const data = [{"번호":1,"질문":"회사에 입사할 때 내가 들어가고 싶은 팀은?","옵션1":"좋은 성과를 내는 팀","옵션2":"좋은 사람들이 모인 팀"},
{"번호":2,"질문":"첫 출근 날, 무슨 옷을 입을까?","옵션1":"이미 전날 골라둔 옷으로","옵션2":"오늘 가장 끌리는 옷으로"},
{"번호":3,"질문":"회사에서 첫 과제가 주어진다면 어떤 과제를 하고 싶습니까?","옵션1":"확실한 가이드라인이 있는 과제","옵션2":"자유롭게 내 생각을 펼칠 수 있는 과제"},
{"번호":4,"질문":"일을 시작할 때 가장 먼저 할 일은?","옵션1":"기한에 맞추기 위한 스케줄링","옵션2":"감을 잡기 위한 자료조사"},
{"번호":5,"질문":"점심시간인데 아무도 일어나지 않는 상황. 어떻게 해야할까?","옵션1":"눈치를 보고 일단 가만히 있는다","옵션2":"밥 안드시냐고 옆 사람에게 한번 물어본다"},
{"번호":6,"질문":"내가 전혀 모르는 분야의 보고서를 받았다면?","옵션1":"꼼꼼하고 정확하게 읽는다","옵션2":"전체 의미를 파악해본다"},
{"번호":7,"질문":"선배에게 물어보니 무조건 외우라는데, 나의 속마음은?","옵션1":"이해를 못하겠는데 어떻게 외우지?","옵션2":"일단 외우라고하니 외워봐야지"},
{"번호":8,"질문":"회사에서 팀프로젝트의 구성원이 되었다. 나의 속마음은?","옵션1":"다른 사람과 일을 잘 할 수 있을까..","옵션2":"사람이 모이면 시너지가 날거야"},
{"번호":9,"질문":"나의 의견이 팀원들과 다를 때는?","옵션1":"내 생각과 논리를 증명해야해","옵션2":"내 의견을 상대방이 기분 나쁘지 않게 전달해야해"},
{"번호":10,"질문":"회사 동기가 선배에게 혼나고 있다.","옵션1":"더 혼나지 않게 좋은 정보들을 전달해준다.","옵션2":"동료를 위로해준다"},
{"번호":11,"질문":"처음본 선배가 사적인 이야기로 자꾸 말을 건다","옵션1":"나도 궁금한 것을 이것저것 물어본다","옵션2":"대답은 하지만 사실 부담스럽다"},
{"번호":12,"질문":"퇴근하기전 나는?","옵션1":"내일 할일을 미리 정리해둔다","옵션2":"자리만 정리하고 떠난다"}]

