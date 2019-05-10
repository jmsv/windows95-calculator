import React from 'react'
import './App.css'

function App () {
  return (
    <div className='App'>
      <div className='calculator bevel'>
        <div className='titlebar'>
          <div className='title'>Calculator</div>
          <div className='window-controls'>
            <div className='window-btn bevel'>x</div>
            <div className='window-btn bevel'>x</div>
            <div className='window-btn bevel'>x</div>
          </div>
        </div>
        <div className='menu'>
          {['Edit', 'View', 'Help']
            .map(menu => (
              <div className='menu-item'>{menu}</div>
            ))
          }
        </div>
        <hr />
        <div className='calculator-body'>
          <input className='bevel-inset' value='0.' />
        </div>
      </div>
    </div>
  )
}

export default App
