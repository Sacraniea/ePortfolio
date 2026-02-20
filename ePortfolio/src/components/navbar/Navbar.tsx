import { useState, useRef, useEffect } from 'react'
import {Sun, Moon} from 'lucide-react'
import gsap from 'gsap'
import Glass from '../../assets/Glass'
import './Navbar.css'

const sections = [
  { id: "hero", label: "Home" },
  { id: "focus", label: "Focus" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
]

function SunIcon() {
  return (
    <Sun size={16} />
  )
}

function MoonIcon() {
  return (
    <Moon size={16} />
  )
}

const Navbar = () => {
  // State
  const [activeID, setActiveID] = useState(sections[0].id)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark")

  // Refs
  const indicatorRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  // Toggle function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  // Apply theme on mount
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [])

  // Animate indicator on active change
  useEffect(() => {
    const activeItem = itemRefs.current[activeID]
    if (!activeItem || !indicatorRef.current) return
    gsap.to(indicatorRef.current, {
      x: activeItem.offsetLeft,
      width: activeItem.offsetWidth,
      duration: 0.3,
      ease: 'power2.out',
    })
  }, [activeID])

  return (
    <nav className="capsule-nav">
      <Glass className="capsule-nav-inner">
        <div className="capsule-nav-glow" aria-hidden="true" />
        <div className="nav-indicator" ref={indicatorRef} />
        {sections.map((section) => (
          <a
            key={section.id}
            ref={(el) => { itemRefs.current[section.id] = el }}
            href={`#${section.id}`}
            className="capsule-nav-item"
            onClick={() => setActiveID(section.id)}
          >
            <span>{section.label}</span>
          </a>
        ))}
        <button
          className="capsule-nav-theme"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </Glass>
    </nav>
  )
}

export default Navbar