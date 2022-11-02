import {useState} from 'react'

const ClickBtn = () => {
  const [current, setCurrentLink] = useState(0);

  return (
    <div className="item-click">
      <div onClick={() => setCurrentLink(1)} className={current === 1 ? 'active' : ''}>1</div>
      <div onClick={() => setCurrentLink(2)} className={current === 2 ? 'active' : ''}>1</div>
      <div onClick={() => setCurrentLink(3)} className={current === 3 ? 'active' : ''}>1</div>
      <div onClick={() => setCurrentLink(4)} className={current === 4 ? 'active' : ''}>don't know</div>
    </div>
  )
}

export default ClickBtn