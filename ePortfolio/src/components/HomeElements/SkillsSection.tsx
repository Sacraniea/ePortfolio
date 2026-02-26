import {motion, AnimatePresence} from 'motion/react';
import gsap from 'gsap';
import { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import
{
  PythonIcon, CIcon, MATLABIcon, SQLIcon, MicrochipIcon, 
  AssemblyIcon, HardwareIcon, BareMetalIcon, PCBIcon,
  ResistorIcon, WaveformIcon, BreadboardIcon
} from '../../assets/SVG/index.ts'
import Glass from '../../assets/Glass.tsx';

const SkillSections = [
  { id: "software", label: "Software" },
  { id: "embedded", label: "Embedded" },
  { id: "hardware", label: "Hardware" }
];

const SkillSection = () => 
{
  // Initialize active skill and set software to default
  const [ActiveSkill, setActiveSkill] = useState(SkillSections[0].id);

  const indicatorRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})


    useEffect(() =>
    {
        const activeItem = itemRefs.current[ActiveSkill];
        if (!activeItem || !indicatorRef.current) return;

        gsap.to(indicatorRef.current,
        {
        x: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
        duration: 0.3,
        ease: 'power2.out',
        });
    }, [ActiveSkill]);

    const getSkillContent = () =>
    {
        switch (ActiveSkill) {
        case "software":
            return <p>Building strong backend logic, data pipelines, and machine learning models.</p>;
        case "embedded":
            return <p>Experience with microcontroller programming, real-time operating systems, and hardware-software integration.</p>;
        case "hardware":
            return <p>Translating theoretical circuit analysis into physical prototypes through rigorous simulation and PCB design.</p>;
        default:
            return null;
        }
    };


    // Framer Motion Directives
    const gridVariants = 
    {
        hidden: { opacity: 0},
        visible: 
            { 
                opacity: 1,
                transition: 
                { 
                    staggerChildren: 0.1,
                },
            },
        exit:
        { 
            opacity: 0,
            y: -10,
            transition:
            {
                duration: 0.2,
            }
        },
    };

    const cardVariants =
    {
        hidden:
        { 
            opacity: 0,
            y: 20, 
        },
        visible: 
        { 
            opacity: 1, 
            y: 0, 
            transition:
            {
                type: 'spring',
                stiffness: 300,
                damping: 20,
                
            }
        },
    };
    return(
        <section className='skills' id='skills'>
            <div className='descriptor'>
                <p className='section-label'> Skills </p>
                <h2 className='section-header'> My Skills </h2>
            </div>

            <div className='capsule-selector' >
                    <Glass className="capsule-nav-inner skills-selector-inner">
                        <div className="capsule-nav-glow" aria-hidden="true" />
                        <div className='nav-indicator' ref={indicatorRef} />

                        {SkillSections.map((section) => (
                        <a
                            key={section.id}
                            ref={(el) => { itemRefs.current[section.id] = el }}
                            className="capsule-nav-item"
                            onClick={() => setActiveSkill(section.id)}
                        >
                            <span className='skills-label'>{section.label}</span>
                        </a>
                        ))}
                        
                    </Glass>
            </div>

            <div className='skill-content'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={ActiveSkill}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {getSkillContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        
            <div className='skills-entry'>
                <AnimatePresence mode='wait'>
                    {ActiveSkill === "software" && (
                        <motion.div key= "software" className='skills-grid' variants={gridVariants} initial="hidden" animate="visible" exit="exit">

                            {/*Python Card*/}
                            <motion.div className='skills-card large glass-pane glass-pane--interactive shine' variants={cardVariants}>

                                <p className='glass-button python icon'>
                                    <PythonIcon width={28} height={28} />   
                                </p>
                                <p className='card-header'> Python </p>
                                <p className='sm-subtitle'> Hybrid Quantum Machine Learning, 3D Medical Image Segmentation, PyTorch Model Training, Quantum Circuit Simulation, Automation Scripting. </p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>MONAI</p>
                                    <p className='glass-button glass-button--interactive tag'>PennyLane</p>
                                    <p className='glass-button glass-button--interactive tag'>PyTorch</p>
                                    <p className='glass-button glass-button--interactive tag'>Pandas</p>
                                </div>

                            </motion.div>

                            {/*C Card*/}
                            <motion.div className='skills-card glass-pane glass-pane--interactive shine' variants={cardVariants}>

                                <p className='glass-button c icon'>
                                    <CIcon width={28} height={28} />
                                </p>
                                <p className='card-header'> C / C++ </p>
                                <p className='sm-subtitle'> POSIX Multi-Processing, SHM IPC, TCP/IP Socket Programming, MISRA C.</p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>GCC</p>
                                    <p className='glass-button glass-button--interactive tag'>GDB</p>
                                    <p className='glass-button glass-button--interactive tag'>Valgrind</p>
                                    <p className='glass-button glass-button--interactive tag'>MISRA C</p>
                                </div>

                            </motion.div>

                            {/*MATLAB Card*/}
                            <motion.div className='skills-card glass-pane glass-pane--interactive shine' variants={cardVariants}>

                                <p className='glass-button matlab icon'>
                                    <MATLABIcon width={28} height={28} />
                                </p>
                                <p className='card-header'> MATLAB </p>
                                <p className='sm-subtitle'> Signal Processing, DSP System Toolbox, Filter Design, Control System Toolbox.</p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>FFT</p>
                                    <p className='glass-button glass-button--interactive tag'>Bode Plots</p>
                                    <p className='glass-button glass-button--interactive tag'>AM/FM Modulation</p>
                                </div>

                            </motion.div>

                            {/*SQL Card*/}
                            <motion.div className='skills-card large glass-pane glass-pane--interactive shine' variants={cardVariants}>

                                <p className='glass-button sql icon'>
                                    <SQLIcon width={28} height={28} />
                                </p>
                                <p className='card-header'> SQL </p>
                                <p className='sm-subtitle'>Relational Database Architecture, Complex Query Optimization, Data Modeling, Schema Design.</p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>PostgreSQL</p>
                                    <p className='glass-button glass-button--interactive tag'>SQLite</p>
                                    <p className='glass-button glass-button--interactive tag'>MySQL</p>
                                    <p className='glass-button glass-button--interactive tag'>pgAdmin</p>
                                </div>

                            </motion.div>

                        </motion.div>
                    )}

                    {ActiveSkill === "embedded" && (
                        <motion.div key= "embedded" className='skills-grid' variants={gridVariants} initial="hidden" animate="visible" exit="exit">
                            
                            {/*FPGA Card*/}
                            <motion.div className='skills-card large glass-pane glass-pane--interactive shine' variants={cardVariants}>
                                <p className='glass-button microchip icon'>
                                    <MicrochipIcon width={24} height={24} />
                                </p>
                                <p className='card-header'> VHDL / FPGA </p>
                                <p className='sm-subtitle'> Designing custom digital logic, high performance physical computing pipelines, and hardware accelerators.</p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>Verilog</p>
                                    <p className='glass-button glass-button--interactive tag'>Logic Synthesis</p>
                                    <p className='glass-button glass-button--interactive tag'>Timing Analysis</p>
                                    <p className='glass-button glass-button--interactive tag'>Testbenches</p>
                                </div>
                            </motion.div>

                            {/*Assembly Card*/}
                            <motion.div className='skills-card glass-pane glass-pane--interactive shine' variants={cardVariants}>
                                <p className='glass-button asm icon'>
                                    <AssemblyIcon width={32} height={32} />
                                </p>
                                <p className='card-header'> Assembly </p>
                                <p className='sm-subtitle'> Low-level programming for embedded systems, register manipulation, and performance-critical code optimization.</p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>AVR</p>
                                    <p className='glass-button glass-button--interactive tag'>Registers</p>
                                    <p className='glass-button glass-button--interactive tag'>Bit Manipulation</p>
                                </div>
                            </motion.div>

                            {/*Hardware Card*/}
                            <motion.div className='skills-card glass-pane glass-pane--interactive shine' variants={cardVariants}>
                                <p className='glass-button hardware icon'>
                                    <HardwareIcon width={28} height={28} />
                                </p>
                                <p className='card-header'> Hardware Interfacing </p>
                                <p className='sm-subtitle'> Designing and implementing hardware interfaces for embedded systems.</p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>UART</p>
                                    <p className='glass-button glass-button--interactive tag'>SPI</p>
                                    <p className='glass-button glass-button--interactive tag'>I2C</p>
                                    <p className='glass-button glass-button--interactive tag'>ADC</p>
                                </div>
                            </motion.div>

                            {/*Bare-Metal Card*/}
                            <motion.div className='skills-card large glass-pane glass-pane--interactive shine' variants={cardVariants}>
                                <p className='glass-button bare-metal icon'>
                                    <BareMetalIcon width={28} height={28} />
                                </p>
                                <p className='card-header'> Bare-Metal </p>
                                <p className='sm-subtitle'> Low-Level Hardware Control, Memory-Mapped Register Manipulation, and Managing Interrupt Service Routines.</p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>Embedded C</p>
                                    <p className='glass-button glass-button--interactive tag'>ISRs</p>
                                    <p className='glass-button glass-button--interactive tag'>Timers & Watchdogs</p>
                                    <p className='glass-button glass-button--interactive tag'>Memory Management</p>
                                </div>
                            </motion.div>

                        </motion.div>
                    )}

                    {ActiveSkill === "hardware" && (
                        <motion.div key="hardware" className='skills-grid' variants={gridVariants} initial="hidden" animate="visible" exit="exit">
                            {/*PCB Design Card*/}
                            <motion.div className='skills-card large glass-pane glass-pane--interactive shine' variants={cardVariants}>
                                <p className='glass-button PCB icon'>
                                    <PCBIcon width={28} height={28} />
                                </p>
                                <p className='card-header'> PCB Layout & Routing </p>
                                <p className='sm-subtitle'> Multi-layer PCB Design, Schematic Capture, Component Library Management, Performance-Optimized Routing.</p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>KiCad</p>
                                    <p className='glass-button glass-button--interactive tag'>Autodesk Eagle</p>
                                    <p className='glass-button glass-button--interactive tag'>Gerber Generation</p>
                                    <p className='glass-button glass-button--interactive tag'>DRC</p>
                                </div>
                            </motion.div>

                            {/*Resistor Card*/}
                            <motion.div className='skills-card glass-pane glass-pane--interactive shine' variants={cardVariants}>
                                <p className='glass-button resistor icon'>
                                    <ResistorIcon width={32} height={32} />
                                </p>
                                <p className='card-header'> Circuit Analysis </p>
                                <p className='sm-subtitle'>Analog & Mixed-Signal Analysis, Filter Design, Power Distribution Evaluation, Component Tolerance Calculation.</p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>Impedance</p>
                                    <p className='glass-button glass-button--interactive tag'>Ohm's Law</p>
                                    <p className='glass-button glass-button--interactive tag'>Kirchhoff's Laws</p>
                                </div>
                            </motion.div>

                            {/*Simulation Card*/}
                            <motion.div className='skills-card glass-pane glass-pane--interactive shine' variants={cardVariants}>
                                <p className='glass-button waveform icon'>
                                    <WaveformIcon width={40} height={40} />
                                </p>
                                <p className='card-header'> Simulation & Modeling </p>
                                <p className='sm-subtitle'> SPICE Circuit Simulation, Mathematical System Modeling, Signal Integrity Verification, Frequency Response Analysis.</p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>LTSpice</p>
                                    <p className='glass-button glass-button--interactive tag'>Transients</p>
                                    <p className='glass-button glass-button--interactive tag'>AC / DC Sweep</p>
                                </div>
                            </motion.div>

                            {/*Prototyping Card*/}
                            <motion.div className='skills-card large glass-pane glass-pane--interactive shine' variants={cardVariants}>
                                <p className='glass-button breadboard icon'>
                                    <BreadboardIcon width={28} height={28} />
                                </p>
                                <p className='card-header'> Prototyping & Diagnostics</p>
                                <p className='sm-subtitle'> Hardware Validation, Benchtop Equipment Testing, Signal Debugging, SMD Soldering.</p>
                                <div className='card-tags'>
                                    <p className='glass-button glass-button--interactive tag'>Oscilloscopes</p>
                                    <p className='glass-button glass-button--interactive tag'>Logic Analyzers</p>
                                    <p className='glass-button glass-button--interactive tag'>Multimeters</p>
                                    <p className='glass-button glass-button--interactive tag'>Bench Power</p>
                                </div>
                            </motion.div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SkillSection;