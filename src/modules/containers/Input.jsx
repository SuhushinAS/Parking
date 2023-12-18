const Input = (props) => { // placeholder type
  const onSubmit = () => {}

    return(
      <input type={props.type} placeholder={props.name}></input>
    )
}

export default Input;