import React, { useState } from 'react'
import { Lesson } from '../components/Lesson'
import { Example, ExampleControls, ControlGroup } from '../components/Example'

import './positioning.css'

export const Positioning = () => {
  const [containerPosition, setContainerPosition] = useState('static')
  const [elementPosition, setElementPosition] = useState('static')

  const [containerWidth, setContainerWidth] = useState()
  const [containerHeight, setContainerHeight] = useState()

  const [elementWidth, setElementWidth] = useState()
  const [elementHeight, setElementHeight] = useState()

  const positions = ['static', 'relative', 'fixed', 'absolute', 'sticky']

  return (
    <Lesson>
      <h1>Positioning HTML Elements</h1>
      <p>
        The CSS <code>position</code> property has five possible values:{' '}
        <code>static</code>, <code>relative</code>, <code>fixed</code>,{' '}
        <code>absolute</code>, and <code>sticky</code> (which can be tricky and
        merits its own lesson). Positioning impacts the layout of not only an
        element, but also its children.
      </p>
      <p>
        Certain positioning rules also allow an element's placement and size to
        be modified using properties such as <code>width</code>,{' '}
        <code>height</code>, <code>top</code>, <code>bottom</code>,{' '}
        <code>left</code>, <code>right</code>.
      </p>
      <Example>
        <h2>An example</h2>
        <div
          className="positioning-container"
          style={{
            position: containerPosition,
            width: containerWidth,
            height: containerHeight,
          }}
        >
          <p>A container</p>
          <div
            className="positioning-element"
            style={{
              position: elementPosition,
              width: elementWidth,
              height: elementHeight,
            }}
          >
            <p>An element!</p>
          </div>
        </div>
      </Example>
      <ExampleControls>
        <div className="container-controls">
          <h3>Container Controls</h3>
          <label htmlFor="container-position">Position</label>
          <select
            name="container-position"
            onChange={e => setContainerPosition(e.target.value)}
          >
            {positions.map(position => (
              <option value={position}>{position}</option>
            ))}
          </select>
          <ControlGroup>
            <label for="container-width">Width</label>
            <input
              name="container-width"
              className="input-small"
              onChange={e => setContainerWidth(e.target.value)}
            />
            <label for="container-height">Height</label>
            <input
              name="container-height"
              className="input-small"
              onChange={e => setContainerHeight(e.target.value)}
            />
          </ControlGroup>
        </div>
        <div className="element-controls">
          <h3>Element Controls</h3>
          <label htmlFor="element-position">Position</label>
          <select
            name="element-position"
            onChange={e => {
              setElementPosition(e.target.value)
            }}
          >
            {positions.map(position => (
              <option value={position}>{position}</option>
            ))}
          </select>
          <ControlGroup>
            <label for="element-width">Width</label>
            <input
              name="element-width"
              className="input-small"
              onChange={e => setElementWidth(e.target.value)}
            />
            <label for="element-height">Height</label>
            <input
              name="element-height"
              className="input-small"
              onChange={e => setElementHeight(e.target.value)}
            />
          </ControlGroup>
        </div>
      </ExampleControls>
      <h2>Things to try:</h2>
      <ul className="lesson-list">
        <li>
          <p>
            Set the container's position to <code>static</code>, and set the
            element's to <code>absolute</code>. Note that the element jumps out
            of its parent. This is because an <code>absolute</code>-positioned
            element needs a <strong>positioning context</strong> in which to
            align itself. If it does not have a positioned ancestor, it will
            default to using the page's <code>html</code> element.
          </p>
          <p>
            The container can provide a positioning context by setting its
            position to a value other than <code>static</code>. Notice what
            happens when you set the container's position to{' '}
            <code>absolute</code> or <code>fixed</code>. This happens because
            these positions remove elements from the normal{' '}
            <a href="/document-flow">document flow</a> - the browser will no
            longer automatically allocate them space in the layout.
          </p>
        </li>
        <li>
          <p>
            Reset both positions to static (you can refresh the page to easily
            reset the example). Set the element's width to 50% and note that it
            reasonably becomes 50% of the width of its parent. Now set the
            element's position to absolute. In addition to jumping out of the
            normal flow, it also grows. This is because it is using the{' '}
            <code>html</code> element to calculate its width.
          </p>
        </li>
      </ul>
    </Lesson>
  )
}
