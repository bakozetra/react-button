import React from 'react'


function Button(props) {

  let buttonStyle = '';
  if (props.color) {
    buttonStyle = `${props.color}`
  }
  else if(props.variant && props.disabled) {
    buttonStyle = `${props.variant} ${props.disabled}`
  } 
  else if (props.disableShadow == true) {
    buttonStyle = 'disableShadow'
  }
  else if(props.startIcon) {
    buttonStyle = 'startIcon'
  }
  else  if(props.endIcon) {
     buttonStyle ='endIcon'
  }
  else if (props.variant) {
    buttonStyle = `${props.variant}`
  }
  else if (props.size) {
    buttonStyle = `${props.size}`
  }
  else if(props.disabled){
     buttonStyle = `${props.disabled}`
  }
  else {
    console.log('no style');
  }
 
  return (
    <button className={buttonStyle} variant ={props.variant}>
       {props.children}
    </button>
  )
}
export default Button
