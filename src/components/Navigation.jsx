import React from 'react'
import {FaUser} from 'react-icons/fa'
const Navigation = () => {
  return (
    <nav>
      <header>
        <section className="header">
          <div className="logo">
            <h4>
              lorem
            </h4>
          </div>
          <div className="admin">
            <span className="user">
              <FaUser />
            </span>
            <span>
              <select name="admin" id="select">
                <option value="1">admin</option>
                <option value="2">user</option>
              </select>
            </span>
          </div>
        </section>
      </header>
    </nav>
  )
}

export default Navigation