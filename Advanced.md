## Advanced
### AdvancedProps
- 타입 선언 시 특정 값들만으로 제한 가능
``` typescript
type StatusProps = {
  status: 'loading' | 'success' | 'error'
}
```
- 자식 노드 설정 가능
``` typescript
// 컴포넌트
type OscarProps = { 
    children: React.ReactNode // 리액트 노드 객체 타입 선언
}
// .....
// 루트 앱
function App() {
  return (
    <div className="App">
      <Oscar>
        <Heading>children node : hello world</Heading> // 부모 구성요소 : Oscar / 자식 구성요소 : Heading 
      </Oscar>
    </div>
  );
}
```
### StyleProps
- 스타일을 인식하는 타입 생성
``` typescript
// 컴포넌트
type ContainerProps = {
    styles: React.CSSProperties
}
//...

// 루트 App
// 스타일 타입 오류 체크
function App() {
  return (
    <Container styles={{ border: '1px solid black', padding: '1rem' }} />
  );
} 
```