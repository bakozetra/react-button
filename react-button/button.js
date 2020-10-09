import React from 'react'


function Button(props) {
  let buttonStyle = '';
  if (props.color) {
    buttonStyle = `${props.color} `
  }
  else if (props.variant) {
    buttonStyle = `${props.variant}`
  }
  else if (props.size) {
    buttonStyle = `${props.size}`
  }
  else {
    console.log('no style');
  }

  let condition = true ; 
  if(condition) {
    return props.disabled;
  }
  return (
    <button className={buttonStyle} variant={props.variant}>
      {props.children}
    </button>
  )
}
export default Button
