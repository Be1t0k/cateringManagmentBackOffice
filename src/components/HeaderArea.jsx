import React from 'react'

function HeaderArea() {

  const tabs = [
    'Отчеты',
    'Налоги',
    'Поставки'
  ]
  return (
    <div className="Header-area">
      <p>dgdgerwertwertert</p>
        {tabs.map( (tab) => <button className='tabs'>{tab}</button>)}
    </div>
  )
}

export default HeaderArea