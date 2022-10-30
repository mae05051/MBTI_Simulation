var mbti_result

fetch('http://localhost:5000/result/mbti')
  .then(res => {
    console.log(res);
    return res.json();
  })
  .then(data => {
    mbti_result=data.mbti
    console.log(typeof mbti_result)
    document.getElementById("mbti").innerHTML = "당신의 MBTI는 "+mbti_result+"입니다."
    document.getElementById("mbti_url").href = "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-"+mbti_result
  })
  .catch(err => {
    console.log('Error', err);
  });

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