import React, { useState } from 'react'
import { Example, ExampleControls } from '../components/Example'
import { Lesson } from '../components/Lesson'
import { Thing } from '../components/Thing'

import './documentFlow.css'

export const DocumentFlow = () => {
  const [example1Display, setExample1Display] = useState('block')
  const displayOptions = ['block', 'inline-block', 'inline', 'none']

  const example1ElementStyles = {
    display: example1Display,
    margin: '12px',
    padding: '12px',
    border: '1px solid #000',
  }

  return (
    <Lesson>
      <h1>Document Flow</h1>
      <p>
        The document flow is the way that the browser lays out HTML element on a
        page. You can{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow"
          target="_blank"
          rel="noreferrer"
        >
          read more about it in more detail here
        </a>
        .
      </p>
      <Example className="document-flow-example-1">
        <Thing style={example1ElementStyles} showBoxModel>
          Here is an element.
        </Thing>
        <Thing style={example1ElementStyles} showBoxModel>
          Here is another element.
        </Thing>
        <Thing style={example1ElementStyles} showBoxModel>
          Here is a third element.
        </Thing>
      </Example>
      <ExampleControls>
        <label htmlFor="container-display">Display</label>
        <select
          name="container-display"
          onChange={e => setExample1Display(e.target.value)}
        >
          {displayOptions.map(display => (
            <option value={display}>{display}</option>
          ))}
        </select>
      </ExampleControls>
      <p>
        The example above shows the <code>display</code> property changes the
        flow of the elements. By default, elements with{' '}
        <code>display: block</code> lay out top to bottom and take up the entire
        width of their container. Most elements use this setting by default.
        Notice that the elements'{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing"
          target="_blank"
          rel="noreferrer"
        >
          margins are collapsed
        </a>{' '}
        - this means that they overlap and that the distance between the
        elements will be the larger of the overlapping margins, rather than the
        sum of those margins.
      </p>
      <p>
        Change the <code>display</code> dropdown and notice how the layout of
        the elements changes. Note especially the difference between{' '}
        <code>inline</code> and <code>inline-block</code>. <code>inline</code>{' '}
        elements ignore top padding and spacing - this is because{' '}
        <code>inline</code> elements can be displayed "in-line" with text in a
        paragraph, where adjusting the height of a particular word or phrase
        could make the text unreadable. The elements can still have top and
        bottom margin and padding, but the browser will ignore them on{' '}
        <code>inline</code> elements.
      </p>
      <p>
        Certain elements, such as <code>span</code> and <code>code</code>{' '}
        default to displaying <code>inline</code> because they are intended to
        hold text which can be displayed within other elements such as
        paragraphs.
      </p>
      <p>
        <code>display: none</code> tells the browser not to render an element.
        It is important to note that this removes the element from the flow
        entirely. This is different from <code>visibility: hidden</code>,{' '}
        <code>opacity: 0</code>, <code>height: 0</code>, and other means whereby
        an element can be visually hidden on a page. There are reasons that a
        particular approach might be taken to hide an element (for example, if
        you want to animate an element such that it fades into view in response
        to a user's action). <code>display: none</code> prevents the element
        from rendering at all, making such animations impossibe.
      </p>
    </Lesson>
  )
}
