import "./Input.scss"

const Input = ({label, inputAction}) => {
  return (
    <div>
            <label htmlFor="input-box">
           {label}
      </label>
        <input type="text" name="input" id="input-box" 
        // onChange={inputAction} 
        onKeyPress={inputAction}/></div>
  )
}

export default Input