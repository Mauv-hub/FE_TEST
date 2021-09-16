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
4. 전체 데이터를 `Table` 컴포넌트를 통해 보여주고 각각의 `Row`에 새 객체가 할당되어 바로 아래 `Sub Row`가 보일 수 있도록 만듦 (`components/Table/Row` function component 참고 )
5. 각각의 `Parent Row`와 `SubRow`에서 선택된 항목은 저장되어 `바구니`에 저장된 `Modal`에서 팝업 됨

## UI / UX
1. `Parent Row`에서 열기 닫기가 표기되게 함으로써 사용자가 현재 `Sub Row`를 열었는지 닫았는지 구분할 수 있게 함
2. `Sub Row`의 글씨체는 `oblique`가 적용돼 `Parent Row`와 구분되기 쉽게 함
3. `Parent Row`와 `Sub Row`의 색을 다르게 적용해 가시적인 UI를 구현함
4. 각각의 Row에서 선택된 모든 요소는 색이 그대로 유지되게 하였으며 이는 사용자가 어떤 항목을 선택했는지 확인할 수 있는 UX를 향상시킴
5. Result 위에 `Sub Row` 모음이 보이게 하면 사용자가 scrolling을 해야 하므로 UX 향상을 위해 `Modal`에서 확인할 수 있게 함 (`Table` 컴포넌트 내 `바구니` 버튼 참고)
6. API에서 오는 많은 데이터를 페이지로 구분하면 `page`를 넘어갈 때마다 사용자가 선택한 항목을 확인하는 것이 힘들어지므로 `scroll`을 사용하기로 결정함
7. `Parent Row`와 `Sub Row` 선택에 있어 `hover css`를 적용해 UX를 개선함

## 확인된 버그
1. `Parent Row`를 닫게 되면 기존의 선택됐던 `css`들이 초기화 됨(그러나 데이터는 유지 됨) => `Modal` 내 전체 초기화를 통해 해결 예정

## 참고
1. 전체 컴포넌트가 재사용이 가능한 형태로 쓰이는 것을 목표로 개발함.
> 그러나 api에서 제공되는 데이터 값이 랜덤으로 변경될 뿐만 아니라 object 형태의 key, value 라벨링 없이 이중 배열로 되어 있어 명확하지 않은 하드코딩이 이루어지기도 함. e.g) `example[0]`

2. parent row의 id 값
> 데이터를 재사용하기 위해 `object`에 `key value` 형태의 저장 방식을 생각했는데  `name`은 중복이 되기도 하여 고민함. 결과적으로 `index` 값을 이용하여 `id`로 사용하고 `object` 형태에 저장한 뒤 해당 `index`에 데이터가 없을 경우에만 `api`에서 정보를 받아올 수 있도록 함

3. 선택한 항목을 `바구니`의 `Modal`에서 보여주기 위한 `storage/result`의 field `picked` 값
> `{key, value}` 형태로 저장해 관리가 용이하게 하도록 하기 위해 `key`는 `name`을 사용하고 `value`에 이중 `Array`를 저장하도록 함 

## 주요 Method 및 Field
storage | Explanation
------------ | -------------
parent | `Parent Row`의 값을 저장
pickedParent | `Sub Row`를 보기 위해 선택한 한 개의 상위 Row 값을 저장
child | `Sub Row`의 값을 저장
picked | `Sub Row`들 중 선택된 Row 값들을 저장
getParentRsults() | `Parent Row` 값들을 모두 불러오는 메서드
getChildResults() | 특정 `Parent Row`의 `Sub Row`를 불러오는 메서드
addPicked() | 선택된 `Sub Row`를 저장하는 메서드
removePicked() | 선택된 `Sub Row`를 제거하는 메서드

action | Explanation
------------ | -------------
getParentResults() | API로부터 `axios`를 이용해 모든 `Parent Row`의 값을 불러와 `storage`에 저장
getChildResults() | API로부터 `axios`를 이용해 특정 `Parent Row`의 모든 `Sub Row`값을 불러와 저장

api | Explanation
------------ | -------------
fetchParentResults() | `getParentResults()` 관련 `axios` 메서드
fetchChildResults() | `getChildResults()` 관련 `axios` 메서드


## 해야할 일
1. sub row UI 최적화(기존의 테이블과 다른 형태의 디자인 설정) - 완료
2. sub row를 저장할 모듈 개발 - 완료
3. Result 창 sticky 적용 - 미완료
4. search 기능 구현 - 미완료

[안내 페이지](https://kindhearted-maize-855.notion.site/HITS-Frontend-f9b62e620c2d4a01a99393a989a54ccf)