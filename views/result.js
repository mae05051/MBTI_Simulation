var mbti_result

fetch('http://localhost:5000/result/mbti')
  .then(res => {
    // response 처리
    console.log(res);
    // 응답을 JSON 형태로 파싱
    return res.json();
  })
  .then(data => {
    // json 출력
    mbti_result=data.mbti
    console.log(typeof mbti_result)
    document.getElementById("mbti").innerHTML = "당신의 MBTI는 "+mbti_result+"입니다."
    document.getElementById("mbti_url").href = "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-"+mbti_result
  })
  .catch(err => {
    // error 처리
    console.log('Error', err);
  });

