import React from 'react'
import {TbBrandMeta} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import ClickBtn from '../components/ClickBtn'
import Table from '../components/Table'

const Survey = () => {
  const data = [
    {
      id: 1,
      ques: 'Enthusical accepts beneficial charge'
    },
    {
      id: 2,
      ques: 'Looks for common good and builds co-operation  even in difficult circumstances'
    },
    {
      id: 3,
      ques: 'develops ideas and solution jointly with others'
    },
    {
      id: 4,
      ques: 'talks and listens to customers to clarify their needs'
    }
  ]
  return (
    <div>
      <section>
        <div className="svg">
          <TbBrandMeta />
          <h4>
            meta
          </h4>
        </div>
        <div className="survey-form">
          <h2>Hello <span>burna boy</span>, this questionnaire is about your perception of <span> yemi alade</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolorem recusandae nulla eos. Porro, asperiores officiis. Iste minus reiciendis repellendus, provident eveniet voluptatum sequi nulla aspernatur tempora, quidem quisquam! Est ipsa laboriosam quisquam mollitia nulla in voluptate earum consequatur tempore.
          </p>
          <br />
          <p className="red">
            The exact information Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quidem illum recusandae.
          </p>
          <Table />
          <h4 className="greenhead">
            leadership
          </h4>
          <div className="question">
            {
              data.map((item) => {
                return <div key={item.id} className='ques'>
                  <p>{item.ques}</p>
                  <ClickBtn />
                </div>
              
              })
            }
          </div>
        </div>

        <div className="btn-container">
        <button className="button">
          <Link to={'/'}>
            next
          </Link>
        </button>
        <button>
          <Link to={'/form'}>
            back
          </Link>
        </button>
        </div>
      </section>
    </div>
  )
}

export default Survey