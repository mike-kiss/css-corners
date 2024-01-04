import React, { useState } from 'react'
import { Example, ExampleControls } from '../components/Example'
import { Lesson } from '../components/Lesson'

import './stacking.css'

export const Stacking = () => {
  const zIndeces = ['auto', -1, 0, 1, 5, 10, 9999]

  const [element1ZIndex, setElement1ZIndex] = useState('auto')
  const [element2ZIndex, setElement2ZIndex] = useState('auto')
  const [element3ZIndex, setElement3ZIndex] = useState('auto')
  const [element4ZIndex, setElement4ZIndex] = useState('auto')

  return (
    <Lesson>
      <h1>Stacking (Z-index)</h1>
      <p>
        <code>z-index</code> is a property that sets the z-order of{' '}
        <a href="/positioning">positioned</a> elements. The z-order determines
        which elements are visible "on top" of other elements within a{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context"
          target="_blank"
          rel="noreferrer"
        >
          stacking context
        </a>
        .
      </p>
      <Example style={{ position: 'relative' }}>
        <div className="stacking-container">
          <div
            className="stacking-element-1 stacking-element"
            style={{ zIndex: element1ZIndex }}
          >
            <p>Element 1, z-index: {element1ZIndex}</p>
            <div
              className="stacking-element-3 stacking-element-small"
              style={{ zIndex: element3ZIndex }}
            >
              <p>Element 3</p>
              <p>z: {element3ZIndex}</p>
            </div>
            <div
              className="stacking-element-4 stacking-element-small"
              style={{ zIndex: element4ZIndex }}
            >
              <p>Element 4</p>
              <p>z: {element4ZIndex}</p>
            </div>
          </div>
          <div
            className="stacking-element-2 stacking-element"
            style={{ zIndex: element2ZIndex }}
          >
            <p>Element 2, z-index: {element2ZIndex}</p>
          </div>
        </div>
      </Example>
      <ExampleControls>
        <div className="element-controls">
          <h3>Element 1 Controls</h3>
          <label htmlFor="element-1-z-index">z-index</label>
          <select
            name="element-1-z-index"
            onChange={e => setElement1ZIndex(e.target.value)}
          >
            {zIndeces.map(index => (
              <option value={index}>{index}</option>
            ))}
          </select>
          <h3>Element 2 Controls</h3>
          <label htmlFor="element-2-z-index">z-index</label>
          <select
            name="element-2-z-index"
            onChange={e => setElement2ZIndex(e.target.value)}
          >
            {zIndeces.map(index => (
              <option value={index}>{index}</option>
            ))}
          </select>
        </div>
        <div className="element-controls">
          <h3>Element 3 Controls</h3>
          <label htmlFor="element-3-z-index">z-index</label>
          <select
            name="element-3-z-index"
            onChange={e => setElement3ZIndex(e.target.value)}
          >
            {zIndeces.map(index => (
              <option value={index}>{index}</option>
            ))}
          </select>
          <h3>Element 4 Controls</h3>
          <label htmlFor="element-4-z-index">z-index</label>
          <select
            name="element-4-z-index"
            onChange={e => setElement4ZIndex(e.target.value)}
          >
            {zIndeces.map(index => (
              <option value={index}>{index}</option>
            ))}
          </select>
        </div>
      </ExampleControls>
      <p>
        This example is designed to illustrate z-index and stacking contexts. It
        is important to understand the DOM structure that we are using. Elements
        1 and 2 are siblings, while elements 3 and 4 are children of element 1:
      </p>
      <pre>
        {/* prettier-ignore */}
        {`
Element 1 
    Element 3 
    Element 4 
Element 2 `}
      </pre>
      <h2>Things to try:</h2>
      <ul className="lesson-list">
        <li>
          <p>
            First, notice that the elements have <code>position: absolute</code>
            . This allows us to arrange them within the example container such
            that they overlap and are rendered "on top of" one another. By
            default, without an explicit <code>z-index</code>, children are
            stacked above their parents and siblings that come later in the DOM
            are stacked above their predecessors.
          </p>
        </li>
        <li>
          <p>
            Now, try setting the z-index of Element 1. Note that a positive{' '}
            <code>z-index</code> places it (and its children) above element 2,
            while a negative z-index places it behind its container. The
            stacking order of its children remain unchanged.
          </p>
        </li>
        <li>
          <p>
            Next, try setting the <code>z-index</code> of both Elements 1 and 2.
            As you might expect, the element with the higher index stacks above
            the other. When they are tied, the browser falls back to DOM order
            to determine who comes out on top.
          </p>
        </li>
        <li>
          <p>
            So far, everything makes sense: elements with higher{' '}
            <code>z-index</code> render on top of elements with lower{' '}
            <code>z-index</code>. Our next example shows how stacking contexts
            can complicate this. First, refresh the page to set all the elements
            back to <code>auto</code>. Then, set the following:{' '}
            <ul className="bulleted">
              <li>Element 2: 5</li>
              <li>Element 3: 1</li>
              <li>Element 4: 10</li>
            </ul>
            You should see results consistent with our previous examples: high
            index elements stacked above low index elements. The twist comes
            when we assign a <code>z-index</code> to Element 1 😯 Suddenly,
            Elements 3 and 4 again behave like children of Element 1 and no
            longer compete with element 2 for stacking position! Not even{' '}
            <code>z-index: 9999</code> can stack them above Element 2 unless
            Element 1 is already above it.
          </p>
          <p>
            This is because assigning a <code>z-index</code> to Element 1
            creates a stacking context. All descendants within a stacking
            context will only stack relative to one another and will not compete
            with elements outside their stacking context. Stacking contexts can
            contain other stacking contexts, creating a hierarchy of stacked
            stacking contexts within the DOM.
          </p>
        </li>
        <li>
          <p>
            If you haven't already, definitely check out the{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context"
              target="_blank"
              rel="noreferrer"
            >
              stacking context documentation on MDN
            </a>
            . There are many CSS properties that create a new stacking context
            either on their own or in combination with others. Some that you
            might find surprising include <code>opacity</code> values other than
            1, <code>transform</code> other than <code>none</code>, and{' '}
            <code>isolation: isolate</code>, the last of which does nothing
            other than create a new stacking context!
          </p>
        </li>
      </ul>
    </Lesson>
  )
}
