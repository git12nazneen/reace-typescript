import { Name } from "./Person.types"
type PersonlilstProps = {
  names: Name[]
}
export const Personlilst = (props: PersonlilstProps) => {
  return (
    <div>
     {props.names.map((name)=>{
      return(
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      )
     })}
    </div>
  )
}
