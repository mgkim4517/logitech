## Design Guide
```
1. KEYWORD
#깔끔한 #심플한 #현대적인

2. COLOR
#BLACK #GRAY #WHITE #4682B4

무채색 컬러를 사용하여 고급스럽고 현대적인 느낌을 살렸습니다.
로고 컬러를 포인트 컬러로 사용하여 브랜드 아이덴티티를 살리고 단조로움을 방지하였습니다.

3. FONT
- 메인 폰트 : 프리텐다드
- 서브 폰트 : 에스코어드림
```

## Publishing Guide
```
1. 통일된 식별자명을 위해 케밥 표기법 사용
ex) logitech-container

2. 주석
/***** header, main, footer *****/, <!-- ***** header, main, footer ***** -->
/*** section ***/, <!-- *** section *** -->
/* 그 외 */, <!-- * 그 외 * -->

3. class명 표기법
article > container > wrapper > content > box
```

## 240626
* index.css 수정
* about-container about-wrapper 부분 구조 및 디자인 변경
* favicon 작업
* open graph 작업

## 240625
* index-pc.css 완성
* index-t.css 완성
* index.js 완성
* logitech-container의 .slide-wrapper의 이미지가 무한으로 흐르도록 하는 애니메이션 효과 구현
* about-container의 .about-menu의 li를 클릭할 경우 같은 인덱스 번호의 .about-logitech-box li에 active 클래스가 붙도록 하는 이벤트 구현

## 240624
* index.css 완성
* index-pc.css 작업
* svg의 width값을 줄이면 선이 얇고 연해지는 문제 발생 -> svg line의 stroke-width 코드로 선의 두께를 조절해 해결
* about-wrapper이 이미지가 그리드를 가득 채우지 않고 여백이 생기는 문제 발생 -> 모바일과 PC 버전의 이미지 세로 값이 동일하기 때문에 height에 고정값을 줘서 해결

## 240623
* mobile 디자인 완성
* 마크업 작업
* 퍼블리싱 가이드 작성
* index.html 작업
* common.css 작업
* index.css 작업

## 240622
* pc 디자인 완성
* mobile 디자인 시작

## 240621
* 스타일 가이드 작성
* pc 디자인 시작

## 240620
* 레퍼런스 사이트 서치
* 브랜드 리서치
