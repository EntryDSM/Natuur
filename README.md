# Entry4.0-EntrySystem-Frontend

## Technical Stack
- JavaScript
- TypeScript
- React
- Redux/react-redux
- React-Router
- Styled-Components
- Webpack v4
- Babel

## 코드구조

- src
  - App.jsx (라우팅)
    - container (컴포넌트 컨테이너)
      - components
- core
  - actions & types 폴더
    - 각각의 actions및 types
  - reducers
    - 각각의 reducer
  - store
- styles
  - 컨테이너별 style폴더
    - 각 style

## styled-components naming convention
`styled-components`를 사용하기 때문에 컴포넌트의 네이밍에 관해서 정의를 내립니다.

1. `<Wrapper>`
   가장 부모태그에 적용시키는 Naming. 일반적으로 가장 큰 컴포넌트(`container`)를 감싸거나 의미적으로 가장 큰 컴포넌트일때 사용.

2. `<[ParentComponentName]+[TagName|FunctionName]>`
    부모가 존재할때, style적인 부분을 표기하기위해 사용함. `부모태그`와 `HTML태그|기능`을 붙여서 사용. 예를 들면 `HeaderContainer`가 부모고 `Navigation`이라는 기능이 존재할 때, `HeaderContainerNavigation`이라고 작성함.

3. `<[TagName|FunctionName]>`
    단지 `HTML태그` 또는 `기능`을 표현하기 위해 사용. 예를 들어 만약 `input`태그의 `border`를 제거하고 싶을 때 이와 같이 작성함.
    ```javascript
    const Input = styled.input`
      border: none;
    `;
    ```
    public한 태그를 작성하는 경우에 해당함.