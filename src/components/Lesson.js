import React from 'react'
import './lesson.css'

export const Lesson = ({ children }) => {
  return (
    <article className="lesson-content">
      {children}
    </article>
  )
}