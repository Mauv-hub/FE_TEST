# FE_TEST
HITS Frontend 개발자 채용 과제

## 스택
1. React js (SPA)
2. react-router-dom
3. scss
4. axios
5. mobX
6. Typescript

## 설계
1. Result title 고정
> div 안에 title을 저장하고 sticky로 고정
2. 소수 반올림
> String 체크 후 `parseFloat`와 `toFixed`이용
3. Sub table 구성 및 저장
> Sub table 단위 api 호출 후, global state에 object 형태로 저장하여 name 단위 별로 불러오기 && ojbect 내에 key가 존재하지 않으면 api 호출
4. Sub table에서 각 row를 선택하면 현재 선택된 아이템 정보 호출
> result와 sub row를 호출할 수 있는 Box까지 같이 sticky 형태로 만들기 => 따로 확인창을 만들어 Name 별 선택된 창을 구현하는 게 화면 가시성을 확보하고 오히려 더 좋을 듯 함
5. 검색
> name이 어떻게 구성되어 있는지 확인하고 api 값 비교하고 결정
6. UI/UX
> result sticky 창이 여닫이 가능하도록 해 ux를 강화하고 화면이 좁게 보이는 것을 없애기

[안내 페이지](https://kindhearted-maize-855.notion.site/HITS-Frontend-f9b62e620c2d4a01a99393a989a54ccf)
