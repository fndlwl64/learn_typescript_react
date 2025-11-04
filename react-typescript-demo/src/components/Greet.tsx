type GreetProps = {
  name: string
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
        <h1>{props.name}, Welcome to React with TypeScript</h1>
    </div>
  )
}
