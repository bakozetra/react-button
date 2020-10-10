import React from 'react'
import Button from './button'
import './style.css'

function App() {
  return (
    <div className="typeOfbutton">
      <div>
        <Button>Default</Button>
      </div>
      <div>
        <Button variant="outline">Default</Button>
      </div>
      <div>
        <Button variant='text'>Default</Button>
      </div>
      <div>
        <Button disableShadow>Default</Button>
      </div>
      <div>
        <Button disabled = {true}>Disable</Button>
        <Button variant="text" disabled = {true}>Disable</Button>
      </div>
      <div>
        <Button startIcon="local_grocery_store">Default</Button>
        <Button endIcon="local_grocery_store">Default</Button>
      </div>
      <div>
        <Button size='sm' >Default</Button>
        <Button size='md'>Default</Button>
        <Button size='lg'>Default</Button>
      </div>
      <div>
        <Button >Default</Button>
        <Button color='primary'>Default</Button>
        <Button color='secondary'>Secondary</Button>
        <Button color ='danger'>Danger</Button>
      </div>
    </div>
  )}

export default App;