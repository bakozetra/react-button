import React from 'react'
import Button from './button'
import './style.css'

function App () {
  return (
  <div className ="typeOfbutton">
    <div>
      <Button className = 'default' text='Default'/>
      <Button className ='hover'text='Default'/>
    </div>
    <div>
      <Button className ='outline'variant="outline" text='Default'/>
      <Button className = 'outline outline-hover' variant ='' text='Default' />
    </div>
    <div>
      <Button className = 'outline variant-text' variant ='text' text='Default'/>
      <Button className = 'outline-hover hover-focus' variant =''text='Default'/>
    </div>
    <div>
      <Button className = 'disableShadow' variant ='' text='Default'/>
    </div>
    <div>
      <Button className= 'disable-border' text = 'Disable'/>
      <Button className= 'disable-background' text = 'Disable'/>
    </div>
    <div>
      <Button className = 'startIcon' text = 'Default'/>
      <Button className = 'endIcon' text = 'Default'/>
    </div>
    <div>
      <Button className = 'sm' text='Default'/>
      <Button className = 'sm md' text= 'Default'/>
      <Button className = 'sm lg' text ='Default'/>
    </div>
    <div>
      <Button className='' text='Default' />
      <Button className=' sm md' text='Default'/> 
      <Button className='sm secondary' text='Secondary'/>
      <Button className='sm md danger' text='Danger'/>
    </div>
    <div>
      <Button className='' text='Default' />
      <Button className=' sm md' text='Default'/> 
      <Button className='sm secondary' text='Secondary'/>
      <Button className='sm md danger' text='Danger'/>
    </div>
   
  </div>
  
  )
}

export default  App;