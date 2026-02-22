import Navbar from './components/navbar/Navbar'
import {Cpu, CodeXml, CircuitBoard, ArrowRight} from 'lucide-react'
import { Link } from "react-router-dom";
import
{
  PythonIcon, CIcon, MATLABIcon, SQLIcon, MicrochipIcon, 
  AssemblyIcon, HardwareIcon, BareMetalIcon, PCBIcon,
  ResistorIcon, WaveformIcon, BreadboardIcon
} from './assets/SVG'



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
            <button className='glass-button'> Get in Touch </button>
          </div>

        </section>
      </div>

      <section className = 'focus'>

        <div className='what-i-do'>
          
          <div className='descriptor'>
            <p className='section-label'> What I Do</p>
            <h2 className='section-header'> Areas of Focus </h2>
          </div>

          <div className='focus-cards'>

            <div className='focus-card glass-pane glass-pane--interactive shine'>
              <div className='card-icon'><CodeXml /></div>
              <h3 className='card-header'> Software <br /> Engineering </h3>
              <p className='card-subtitle'> Crafting end-to-end web and mobile experiences. Focused on scalable architecture and seamless UI. </p>
            </div>

            <div className='focus-card glass-pane glass-pane--interactive shine'>
              <div className='card-icon'><Cpu /></div>
              <h3 className='card-header'> Embedded Systems Engineering </h3>
              <p className='card-subtitle'> Bringing hardware to life. Specializing in reliable, low-level firmware and optimized systems. </p>
            </div>

            <div className='focus-card glass-pane glass-pane--interactive shine'>
              <div className='card-icon'><CircuitBoard /></div>
              <h3 className='card-header'> Computer Systems Engineering </h3>
              <p className='card-subtitle'> Engineering the physical logic of computing. Focused on FPGA development and high-performance architectures. </p>
            </div>
          </div>
        </div>

      </section>

      <section className = 'skills'>

        <div className='skills-showcase'>
          <div className='descriptor'>
              <p className='section-label'> Skills </p>
              <h2 className='section-header'> My Skills </h2>
          </div>

          <div className='skill-entry'>

            <div className='skill-description'>
              <h3 className='card-header'> Logic and Languages </h3>
              <p className='sm-subtitle'> Through my experience I have gained valuable knowlege in logic design, programming languages, and software engineering principles.</p>
            </div>

            <div className='skills-grid'>

              <div className='skills-card large glass-pane glass-pane--interactive shine'>
                <p className='glass-button python icon'>
                  <PythonIcon width={28} height={28} />
                </p>
                <p className='card-header'> Python </p>
                <p className='sm-subtitle'> Hybrid Quantum Machine Learning, 3D Medical Image Segmentation, PyTorch Model Training, Quantum Circuit Simulation, Automation Scripting. </p>
                <div className='card-tags'>
                  <p className='glass-button tag'>MONAI</p>
                  <p className='glass-button tag'>PennyLane</p>
                  <p className='glass-button tag'>PyTorch</p>
                  <p className='glass-button tag'>Pandas</p>
                </div>
              </div>
              <div className='skills-card glass-pane glass-pane--interactive shine'>
                <p className='glass-button c icon'>
                  <CIcon width={28} height={28} />
                </p>
                <p className='card-header'> C / C++ </p>
                <p className='sm-subtitle'> POSIX Multi-Processing, SHM IPC, TCP/IP Socket Programming, MISRA C.</p>
                <div className='card-tags'>
                  <p className='glass-button tag'>GCC</p>
                  <p className='glass-button tag'>GDB</p>
                  <p className='glass-button tag'>Valgrind</p>
                  <p className='glass-button tag'>MISRA C</p>
                </div>
                
              </div>
              <div className='skills-card glass-pane glass-pane--interactive shine'>
                <p className='glass-button matlab icon'>
                  <MATLABIcon width={28} height={28} />
                </p>
                <p className='card-header'> MATLAB </p>
                <p className='sm-subtitle'> Signal Processing, DSP System Toolbox, Filter Design, Control System Toolbox.</p>
                <div className='card-tags'>
                  <p className='glass-button tag'>FFT</p>
                  <p className='glass-button tag'>Bode Plots</p>
                  <p className='glass-button tag'>AM/FM Modulation</p>
                </div>
              </div>
              <div className='skills-card large glass-pane glass-pane--interactive shine'>
                <p className='glass-button sql icon'>
                  <SQLIcon width={28} height={28} />
                </p>
                <p className='card-header'> SQL </p>
                <p className='sm-subtitle'>Relational Database Architecture, Complex Query Optimization, Data Modeling, Schema Design.</p>
                <div className='card-tags'>
                  <p className='glass-button tag'>PostgreSQL</p>
                  <p className='glass-button tag'>SQLite</p>
                  <p className='glass-button tag'>MySQL</p>
                  <p className='glass-button tag'>pgAdmin</p>
                </div>
              </div>

            </div>
          </div>


          <div className='skill-entry'>

            <div className='skill-description reverse'>
              <h3 className='card-header'> Embedded Systems</h3>
              <p className='sm-subtitle'> Experience with microcontroller programming, real-time operating systems, and hardware-software integration.</p>
            </div>

            <div className='skills-grid'>

              <div className='skills-card large glass-pane glass-pane--interactive shine'>
                <p className='glass-button microchip icon'>
                  <MicrochipIcon width={24} height={24} />
                </p>
                <p className='card-header'> VHDL / FPGA </p>
                <p className='sm-subtitle'> Designing custom digital logic, high performance physical computing pipelines, and hardware accelerators.</p>
                <div className='card-tags'>
                  <p className='glass-button tag'>Verilog</p>
                  <p className='glass-button tag'>Logic Synthesis</p>
                  <p className='glass-button tag'>Timing Analysis</p>
                  <p className='glass-button tag'>Testbenches</p>
                </div>
              </div>
              <div className='skills-card glass-pane glass-pane--interactive shine'>
                <p className='glass-button asm icon'>
                  <AssemblyIcon width={32} height={32} />
                </p>
                <p className='card-header'> Assembly </p>
                <p className='sm-subtitle'> Low-level programming for embedded systems, register manipulation, and performance-critical code optimization.</p>
                <div className='card-tags'>
                  <p className='glass-button tag'>AVR</p>
                  <p className='glass-button tag'>Registers</p>
                  <p className='glass-button tag'>Bit Manipulation</p>
                </div>
                
              </div>
              <div className='skills-card glass-pane glass-pane--interactive shine'>
                <p className='glass-button hardware icon'>
                  <HardwareIcon width={28} height={28} />
                </p>
                <p className='card-header'> Hardware Interfacing </p>
                <p className='sm-subtitle'> Designing and implementing hardware interfaces for embedded systems.</p>
                <div className='card-tags'>
                  <p className='glass-button tag'>UART</p>
                  <p className='glass-button tag'>SPI</p>
                  <p className='glass-button tag'>I2C</p>
                  <p className='glass-button tag'>ADC</p>
                </div>
              </div>
              <div className='skills-card large glass-pane glass-pane--interactive shine'>
                <p className='glass-button bare-metal icon'>
                  <BareMetalIcon width={28} height={28} />
                </p>
                <p className='card-header'> Bare-Metal </p>
                <p className='sm-subtitle'> Low-Level Hardware Control, Memory-Mapped Register Manipulation, and Managing Interrupt Service Routines.</p>
                <div className='card-tags'>
                  <p className='glass-button tag'>Embedded C</p>
                  <p className='glass-button tag'>ISRs</p>
                  <p className='glass-button tag'>Timers & Watchdogs</p>
                  <p className='glass-button tag'>Memory Management</p>
                </div>
              </div>

            </div>
          </div>

          <div className='skill-entry'>

            <div className='skill-description reverse'>
              <h3 className='card-header'> Design & Simulation </h3>
              <p className='sm-subtitle'> Experience with theoretical circuit analysis, software-based system simulation, and physical hardware validation. </p>
            </div>

            <div className='skills-grid'>

              <div className='skills-card large glass-pane glass-pane--interactive shine'>
                <p className='glass-button PCB icon'>
                  <PCBIcon width={28} height={28} />
                </p>
                <p className='card-header'> PCB Layout & Routing </p>
                <p className='sm-subtitle'> Multi-layer PCB Design, Schematic Capture, Component Library Management, Performance-Optimized Routing.</p>
                <div className='card-tags'>
                  <p className='glass-button tag'>KiCad</p>
                  <p className='glass-button tag'>Autodesk Eagle</p>
                  <p className='glass-button tag'>Gerber Generation</p>
                  <p className='glass-button tag'>DRC</p>
                </div>
              </div>
              <div className='skills-card glass-pane glass-pane--interactive shine'>
                <p className='glass-button resistor icon'>
                  <ResistorIcon width={32} height={32} />
                </p>
                <p className='card-header'> Circuit Analysis </p>
                <p className='sm-subtitle'>Analog & Mixed-Signal Analysis, Filter Design, Power Distribution Evaluation, Component Tolerance Calculation.</p>
                <div className='card-tags'>
                  <p className='glass-button tag'>Impedence</p>
                  <p className='glass-button tag'>Ohms's Law</p>
                  <p className='glass-button tag'>Kirchoff's Laws</p>
                </div>
                
              </div>
              <div className='skills-card glass-pane glass-pane--interactive shine'>
                <p className='glass-button waveform icon'>
                  <WaveformIcon width={40} height={40} />
                </p>
                <p className='card-header'> Simulation & Modeling </p>
                <p className='sm-subtitle'> SPICE Circuit Simulation, Mathematical System Modeling, Signal Integrity Verifivation, Frequency Response Analysis.</p>
                <div className='card-tags'>
                  <p className='glass-button tag'>LTSpice</p>
                  <p className='glass-button tag'>Transients</p>
                  <p className='glass-button tag'>AC / DC Sweep</p>
                </div>
              </div>
              <div className='skills-card large glass-pane glass-pane--interactive shine'>
                <p className='glass-button breadboard icon'>
                  <BreadboardIcon width={28} height={28} />
                </p>
                <p className='card-header'> Prototyping & Diagnostics</p>
                <p className='sm-subtitle'> Hardware Validation, Benchtop Equipment Testing, Signal Debugging, SMD Soldering.</p>
                <div className='card-tags'>
                  <p className='glass-button tag'>Oscilloscopes</p>
                  <p className='glass-button tag'>Logic Analyzers</p>
                  <p className='glass-button tag'>Multimeters</p>
                  <p className='glass-button tag'>Bench Power</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>


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