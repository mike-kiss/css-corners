import React from 'react'
import { Lesson } from '../components/Lesson'

export const AboutPage = () => {
  return (
    <Lesson>
      <h1>About this project</h1>
      <p>
        This project was built by Mike Kissinger after he realized how many of
        his friends and coworkers were bamboozled by the complexities,
        weirdnesses, and corner-cases of CSS.
      </p>
      <p>
        It was 'sponsored' by his employer Vistaprint, who generously allowed
        him small amounts of his life back during work hours to toil on tech
        projects as he saw fit.
      </p>
      <p>
        If you would like to offer Mike gobs of money for a consulting gig, or
        if you are saving the world and need help with software for the web, you
        can contact Mike at mike[dot]k[at]radlife[dot]org.
      </p>
    </Lesson>
  )
}
