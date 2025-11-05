type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props; // default value assignment
  return (
    <div>
      <h2>
        {props.isLoggedIn ?
          `Welcome ${props.name} You have ${messageCount} new messages` :
          'Welcome Guest'
        }
      </h2>
    </div>
  )
}
