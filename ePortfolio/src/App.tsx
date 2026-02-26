
import { useState, useRef, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import {Cpu, CodeXml, CircuitBoard, ArrowRight} from 'lucide-react'
import { Link } from "react-router-dom";
import SkillSection from './components/HomeElements/SkillsSection'

const App = () => {

  return (
    <>
      {/* Nav */}

      <header>
        <Navbar />
      </header>

      {/* Background Effects */}

      <div>
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
      </div>

      <div className="home">
        {/* Hero Content */}
        <section className="hero">

          <div className='hero-content'>
            <p className='xs-text'>Hi, I'm</p>
            <h1 className='l-text'> Alex Sacranie</h1>
            <p className='m-text'>
              I build thoughtful systems <br />
              that empower people.
            </p>
            <p className='subtitle'> 
              Computer & Software Systems Engineering Student exploring 
              Machine Learning for medical imaging and crafting firmware 
              that people can depend on.</p>
          </div>

          <div className='hero-options'>
            <button className='primary-button'> View My Work </button>
            <button className='glass-button glass-button--interactive'> Get in Touch </button>
          </div>

        </section>
      </div>
    

      <SkillSection />
{/* TEMPORARILY REMOVED FOR RESTRUCTURE        
<div className='philosophy'>
          
          <div className='descriptor'>
            <p className='section-label'> What I Value</p>
            <h2 className='section-header'> My Philosophy </h2>
          </div>
          <div className='philosophy-cards'>
            <div className='philosophy-card glass-pane glass-pane--interactive shine'>
              <h4 className='quote'> "Complexity is a challenge to be simplified, not a limitation to be managed." </h4>
              <h4 className='quote'> "Precision lives in the edge cases; reliability is built where others stop looking."</h4>
              <h4 className='quote'> "True performance is found where the software respects the physics of the silicon." </h4>
              <h4 className='quote'> "I don’t just build technology; I build tools that empower people to do their best work." </h4>
            </div>
          </div>
        </div>
</section> */}


      <section className='projects'>

        <div className='myprojects'>
          <div className='descriptor'>
            <p className='section-label'> Projects </p>
            <h2 className='section-header'> My Projects </h2>
          </div>

          <div className='project-cards'>

            <div className='project-card glass-pane glass-pane--interactive shine'>
              <p className='header'> HONORS THESIS · MACHINE LEARNING · MEDICAL IMAGING</p>
              <h3 className='card-header'> Hybrid QML for Brain Tumor Segmentation </h3>
              <div className='card-tags'>
                <p className='glass-button  tag sm-text'>Hybrid QML</p>
                <p className='glass-button  tag sm-text'>PennyLane</p>
                <p className='glass-button tag sm-text'>MONAI</p>
                <p className='glass-button tag sm-text'>3D U-Net</p>
              </div>
              <p className='card-subtitle'> 
                A research-grade pipeline exploring hybrid quantum-classical machine 
                learning for MRI brain tumor segmentation on the BraTS 2024 dataset.
              </p>
              <div className='card-link'><a>view project</a><div className='card-icon'><ArrowRight size={18} /></div></div>
            </div>

            <div className='project-card glass-pane glass-pane--interactive shine'>
              <p className='header'> SYSTEMS PROGRAMMING · IPC · CONCURRENCY </p>
              <h3 className='card-header'> Distributed Elevator Control System  </h3>
              <div className='card-tags'>
                <p className='glass-button tag sm-text'>C / Linux</p>
                <p className='glass-button tag sm-text'>POSIX</p>
                <p className='glass-button tag sm-text'>TCP/IP</p>
                <p className='glass-button tag sm-text'>SHM</p>
                <p className='glass-button tag sm-text'>MISRA C</p>
              </div>
              <p className='card-subtitle'>
                A multi-process elevator simulation with TCP networking, shared memory, and safety monitoring. 
              </p>
              <div className='card-link'><a>view project</a><div className='card-icon'><ArrowRight size={18} /></div></div>
            </div>

            <div className='project-card glass-pane glass-pane--interactive shine'>
              <p className='header'> FIRMWARE · MICROCONTROLLERS · EMBEDDED SYSTEMS </p>
              <h3 className='card-header'> Bare-Metal Classic Simon Game </h3>
              <div className='card-tags'>
                <p className='glass-button tag sm-text'>Embedded C</p>
                <p className='glass-button tag sm-text'>AVR</p>
                <p className='glass-button tag sm-text'>UART / ADC</p>
                <p className='glass-button tag sm-text'>Bare Metal</p>
              </div>
              <p className='card-subtitle'> 
                A Simon-style memory game on AVR hardware using buttons, a 7-segment display,
                buzzer, and potentiometer control. 
              </p>
              <div className='card-link'><a>view project</a><div className='card-icon'><ArrowRight size={18} /></div></div>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default App