import React from 'react'
import './example.css'

export const Example = props => (
  <div
    {...props}
    className={`lesson-example ${props.className ? props.className : ''}`}
  />
)

export const ExampleControls = props => (
  <div
    {...props}
    className={`lesson-example-controls ${
      props.className ? props.className : ''
    }`}
  />
)

export const ControlGroup = props => (
  <div
    {...props}
    className={`control-group ${props.className ? props.className : ''}`}
  />
)
