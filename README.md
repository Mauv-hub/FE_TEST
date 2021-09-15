# FE_TEST
HITS Frontend 개발자 채용 과제

## 스택
1. React js (SPA)
2. react-router-dom
3. scss
4. axios
5. mobX
6. Typescript
7. eslint

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

## Structure

    .
    ├── public
    ├── src                  # 사이트를 구성하는 소스들을 저장
    │   ├── action          # api에서 받아온 정보와 state storage를 매개
    │   ├── api             # axios를 통해 정보를 받음
    │   ├── assets          # 회사 로고 등 asset 저장 
    │   ├── components      # page를 구성하는 컴포넌트와 스타일로 구성
    │   ├── pages           # 페이지 단위로 전환되는 컨텐트 저장 
    │   └── storage         # 상태 저장소(mobX로 관리)
    └── package.json

## Work flow
1. `npm start`를 통해 `port 8080`으로 접속
2. 접속한 사이트에서 `result`로 redirect (react-router-dom 사용)
3. `Result` 페이지에서 `storage`에 저장된 메서드를 이용하여 `action`->`api`를 통해 데이터를 반환 받고 `mobX` `storage`에 저장  
4. 전체 데이터를 `Table` 컴포넌트를 통해 보여주고 각각의 `Row`에 새 객체가 할당되어 바로 아래 sub row가 보일 수 있도록 만듦 (`components/Table/Row` function component 참고 )

## 참고
1. 전체 컴포넌트가 재사용이 가능한 형태로 쓰이는 것을 목표로 개발함.
> 그러나 api에서 제공되는 데이터 값이 랜덤으로 변경될 뿐만 아니라 object 형태의 key, value 라벨링 없이 이중 배열로 되어 있어 명확하지 않은 하드코딩이 이루어지기도 함. e.g) `example[0]`

2. parent row의 id 값
> 데이터를 재사용하기 위해 `object`에 `key value` 형태의 저장 방식을 생각했는데  `name`은 중복이 되기도 하여 고민함. 결과적으로 `index` 값을 이용하여 `id`로 사용하고 `object` 형태에 저장한 뒤 해당 `index`에 데이터가 없을 경우에만 `api`에서 정보를 받아올 수 있도록 함 

## 해야할 일
1. sub row UI 최적화(기존의 테이블과 다른 형태의 디자인 설정)
2. sub row를 저장할 모듈 개발
3. Result 창 sticky 적용
4. search 기능 구현

[안내 페이지](https://kindhearted-maize-855.notion.site/HITS-Frontend-f9b62e620c2d4a01a99393a989a54ccf)