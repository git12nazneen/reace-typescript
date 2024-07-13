type StatusProps = {
    status : string
}
export const Status = (props: StatusProps) => {
    let message
    if(props.status === 'Loading'){
        message = "Loading..."
    } else if(props.status === "Success"){
        message = "Data fetched successfully"
    }else if(props.status === "Error"){
        message = "Error Data fetched"
    }
  return (
    <div>
        <h2>Status - {message}</h2>
        
    </div>
  )
}
