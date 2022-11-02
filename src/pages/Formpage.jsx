import React from 'react'
import { Link } from 'react-router-dom'
import {BsPencilFill}  from 'react-icons/bs'


const Formpage = () => {
  return (
    <section>
      <div className="card">
        <form>
          <h4 className='headline'>
            Create Project
            <span>
              <BsPencilFill />
            </span>
          </h4>
          <div className="form-input">
            <label>
              Project name
            </label>
            <input type="text" />
          </div> 
          <div className="form-input">
            <label>
              description
            </label>
            <input type="text" id="description" />
          </div>
          <div className="date">
            <div className="form-input">
              <label>
                start date
              </label>
              <input type="date" id="date" />
            </div>
            <div className="form-input">
              <label>
                end date
              </label>
              <input type="date" id="date" />
            </div>
          </div>
        </form>
      </div>
      <div className="card">
        <div className="evaluate">
          <h4>
            evaluators
          </h4>
          <p>
          Upload evaluators
          </p>
          <div className="line"></div>
          <fieldset>
            <div>
              <input type="radio" name="evalu" id="part" />
              <label>i will select evaluators</label>
            </div>
            <div>
              <input type="radio" name="eval" id="evalua" />
                <label>let participants choose evaluators</label>
            </div>
          </fieldset>
        </div>
        <div className="evaluate">
          <h4>
            Development Coach
          </h4>
          <p>
            upload evaluators
          </p>
          <div className="line"></div>
          <fieldset>
            <div>
              <input type="radio" name="evalu" id="part" />
              <label>i will select evaluators</label>
            </div>
            <div>
              <input type="radio" name="eval" id="evalua" />
                <label>let participants choose evaluators</label>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="btn-container">
        <button className="button">
          <Link to={'/survey'}>
            next
          </Link>
        </button>
        <button>
          <Link to={'/'}>
            cancel
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Formpage