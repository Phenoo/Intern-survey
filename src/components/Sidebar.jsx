import React, {useState} from 'react'
import styled from 'styled-components'


import { FaComments,  FaUsersCog } from 'react-icons/fa'
import {BsBriefcase,BsBuilding, BsPencilFill} from 'react-icons/bs'
import {AiOutlineCopy} from 'react-icons/ai'




const Section = styled.section`
position: fixed;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.3);
height: 100vh;
width: 12vw;
display: flex;
flex-direction: column;
align-items: center;
padding: 5rem 0 2rem;
gap: 4rem;
z-index: -1;
transition: width 0.3s ease-in-out;
@media screen and (min-width: 800px) {
  width: 20vw;
}

.top{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  transition: all 0.4s ease-in-out;


}


.brand{
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;

  svg{
    display: flex;
  }
}

.links{
  display: flex;
  justify-content: center;


  ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;


    li{
      padding: 0.6rem; 
      border-radius: 0.2rem;
      @media screen and (max-width: 30rem) {
        padding: 0.5rem;
      }
    svg{
      @media screen and (max-width: 30rem) {
        font-size: 0.8rem;

      }
    }

    span{
      font-family: "Poppins";
      color: #000;
      display: none;
      @media screen and (min-width: 800px) {
        display: flex;
      }
      @media screen and (max-width: 40rem) {
        font-size: 0.7rem;
      }
      @media screen and (max-width: 22rem) {
        font-size: 0.5rem;
      }
    }

    &:hover{
    background-color: #ffe4e1;;
    
    a{
    color: #000;
    }
    }
    a{
      display: flex;
      gap: 1rem;
      color: #ff4800;
      @media screen and (max-width: 30rem) {
        gap: 0.3rem;
      }
    }
    }
    .active{
    background-color: #948d87;

    color: #000;
    }
  }
}



.btn{
  cursor: pointer;

  @media screen and (min-width: 800px) {
    display: none;
  }
  div{
    position: absolute;
    top: 3rem;
    left: 20px;
    width: 40px;
    height: 2px;
    background: ${props => props.click  ? '#ffe4e1' : '#111'};
    transform: rotate(${props => props.click ? '50deg' : ''});
    transition: all 0.3s ease;
    
    &::before{
      content: '';
      width 40px;
      height: 2px;
      top: ${props => props.click ? '0' : '10px'};
      left: 0;
      background: ${props => props.click  ? '#ffe4e1' : '#111'};
      position: absolute;
      cursor: pointer;
      transform: rotate(${props => props.click ? '80deg' : ''});
      transition: all 0.3s ease;
    }
  }
}

`;


const Sidebar = () => {
  const [click, setClick] = useState(false);
  const [current, setCurrentLink] = useState(1);



  return (
    <>

      <Section click={click}>
        {/* <button className="btn" onClick={() => {setClick(!click)}}>
          <div></div>
        </button> */}
      <div className="top">

      <div className="links" onClick={() => setClick(!click)}>
          <ul>
            <li onClick={() => setCurrentLink(1)} className={current === 1 ? 'active' : ''}>
              <a href="#a">
                <BsBuilding />
                <span>Company</span>
              </a>
            </li>
            <li onClick={() => setCurrentLink(2)} className={current === 2 ? 'active' : ''}>
              <a href="#schedule">
                <BsBriefcase />
                <span>Projects</span>
              </a>
            </li>
            <li onClick={() => setCurrentLink(3)} className={current === 3 ? 'active' : ''}>
              <a href="#Payment">
                <BsPencilFill />
                <span>Survey</span>
              </a>
            </li>
            <li onClick={() => setCurrentLink(4)} className={current === 4 ? 'active' : ''}>
              <a href="#Learning">
                <FaUsersCog />
                <span>Participants</span>
              </a>
            </li>
            <li onClick={() => setCurrentLink(5)} className={current === 5 ? 'active' : ''}>
              <a href="#FAQs">
                <FaComments />
                <span>Feedback</span>
              </a>
            </li><li onClick={() => setCurrentLink(6)} className={current === 6 ? 'active' : ''}>
              <a href="#Settings">
                <AiOutlineCopy />
                <span>Report</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
    </>
  )
}

export default Sidebar