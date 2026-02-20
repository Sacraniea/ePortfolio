import React from 'react'
import "./Glass.css"

const Glass = (
{ 
  children, 
  className = "", 
  variant = "default",
  as: Element = "div",
  ...props 
}: 
{
  children?: React.ReactNode
  className?: string
  variant?: "default" | "interactive"
  as?: React.ElementType
  [key: string]: any
}) => 
{
  const classes = [
    "glass-pane",
    variant === "interactive" && "glass-pane--interactive",
    className
  ].filter(Boolean).join(" ")

  return (
    <Element className={classes} {...props}>
      <div className="glass-pane__shine" aria-hidden="true" />
      <div className="glass-pane__content">
        {children}
      </div>
    </Element>
  )
}

export default Glass