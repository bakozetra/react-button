import React from 'react'
import Button from './button'
import './style.css'

function App () {
  return (
  <div className ="typeOfbutton">
    <div>
      <Button className = 'default'/>
      <Button className ='hover-focus'/>
    </div>
    <div>
      <Button className ='outline'variant="outline"/>
      <Button className = 'outline outline-hover' variant ='' />
    </div>
    <div>
      <Button className = 'outline variant-text' variant ='text' />
      <Button className = 'outline-hover hover-focus' variant =''/>
    </div>
    <div>
      <Button className = '' variant ='' />
      <Button className = '' variant =''/>
    </div>
  </div>
  )
}

export default  App;