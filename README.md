# Typescript React
## 구성
- src
    - index.tsx: 앱 구성 요소를 DOM 노드에 마운트하는 React 앱의 진입점
    - App.tsx: 루트 앱 구성 요소
- src/component
    - 도메인: 타입스크립트로 만든 리액트 구성요소
    - 타입 선언
        - 타입을 선언하면 App에서 해당 컴포넌트를 사용할 때, 타입 체크를 하면서 상황에 따라 문법 오류를 띄어줌.
    ```typescript
    // 매개변수 타입 선언
    type GreetProps = {
        name: string
    }
    /*
    // 객체 리스트 타입 선언
    type demoListPorps = {
        lists:{
            id: number
            type: string
            value: string
        }[]
    }    
    */

    // 구성요소 생성
    export const Greet = (props: GreetProps) => {
        return (
            <div>
                <h1>{props.name}, Welcome to React with TypeScript</h1>
            </div>
        )
    }
 
    ```

