type GreetProps = {
    name: string;
    number : number;
    isLoggedIn : boolean;
}
export const Greet = (props:GreetProps) => {
  return (
    <div>
        {
            props.isLoggedIn? `welcome {props.name} to typescript {props.number}` : `Welcome to typescript guest`
        }
    </div>
  )
}
