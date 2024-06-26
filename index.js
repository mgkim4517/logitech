//*** a 태그 성격 제거
$('a[href="#"]').on('click', e => e.preventDefault());

//*** logitech-container 무한 롤링
let roller = document.querySelector('.slide-box');
roller.id = 'roller1'; // 아이디 부여

let clone = roller.cloneNode(true)
// cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
clone.id = 'roller2';
document.querySelector('.slide-wrapper').appendChild(clone); // wrap 하위 자식으로 부착

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.slide-box ul').offsetWidth + 'px';
// offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

roller.classList.add('original');
clone.classList.add('clone');

//*** about-container about-wrapper
$(document).ready(function() {
  $('.about-menu li').click(function() {
      // 현재 클릭한 li 요소의 인덱스 가져오기
      var index = $(this).index();

      // 모든 .about-menu li에서 active 클래스 제거 후 클릭한 요소에 active 클래스 추가
      $('.about-menu li').removeClass('active');
      $(this).addClass('active');

      // 모든 .about-logitech-box li에서 active 클래스 제거 후 클릭한 인덱스의 요소에 active 클래스 추가
      $('.about-logitech-box li.about-content').removeClass('active');
      $('.about-logitech-box li.about-content').eq(index).addClass('active');

      // 모든 .about-img li에서 active 클래스 제거 후 클릭한 인덱스의 요소에 active 클래스 추가
      $('.about-img li').removeClass('active');
      $('.about-img li').eq(index).addClass('active');
  });
});