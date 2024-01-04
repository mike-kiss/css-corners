import React from 'react'
import { Lesson } from '../components/Lesson'
import logo from '../assets/logo.png'
import './introduction.css'

export const Introduction = () => {
  return (
    <Lesson>
      <img src={logo} className="app-logo" alt="CSS is awesome!" />
      <h1>Welcome!</h1>
      <h2>What this is:</h2>
      <ul className="bulleted">
        <li>
          <p>
            An explainer with interactive examples to help folks grasp CSS
            concepts that can seem tricky.
          </p>
        </li>
        <li>
          <p>
            A high-level overview of important concepts that links to more
            in-depth resources.
          </p>
        </li>
        <li>
          <p>
            A work in progress. Unless you are beta testing, please forgive any
            glaring omissions.
          </p>
        </li>
        {/*<li>
          A collection of best practices to implement and understand common
          design patterns.
        </li>*/}
      </ul>
      <h2>What this is not:</h2>
      <ul>
        <li>
          <p>
            A comprehensive CSS resource or a 101-level introduction to CSS. For
            that, you may want to check out{' '}
            <a href="https://www.freecodecamp.org/news/the-css-handbook-a-handy-guide-to-css-for-developers-b56695917d11">
              The CSS Handbook by Flavio Copes
            </a>
            .
          </p>
        </li>
        <li>
          <p>TODO: More resources here.</p>
        </li>
      </ul>
    </Lesson>
  )
}
