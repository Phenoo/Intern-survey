import React from 'react'
import {BsBriefcase} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Started = () => {
  return (
    <section className='center'>
      <div className='started'>
        <div>
          <BsBriefcase />
          <h2>
            Project
          </h2>
          <h4>
            Set up a new project and add participants to get started
          </h4>
          <div className="btn-container">
            <button className='button'>
              <Link to='/form'>
                + get started
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Started