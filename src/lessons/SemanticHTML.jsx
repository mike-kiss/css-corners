import React from 'react'
import { Lesson } from '../components/Lesson'
import { Thing } from '../components/Thing'

export const SemanticHTML = () => {
  return (
    <Lesson>
      <h1>Semantic HTML</h1>
      <p>
        It is tempting for computer scientists and software engineers to think
        of things in technical terms: objects with{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
          target="_blank"
          rel="noreferrer"
        >
          properties and attributes
        </a>
        , etc. Of course that is an important and accurate perspective, but I
        want us to also think of HTML elements more simply as the 'things' they
        represent to a user. This is a roundabout way of describing{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
          target="_blank"
          rel="noreferrer"
        >
          semantic HTML
        </a>
        .
      </p>
      <Thing component="p" showBoxModel style={{ padding: '24px' }}>
        Thing 1 (a paragraph)
      </Thing>
      <Thing
        component="button"
        onClick={() => {
          window.alert('Who said you could click the button?')
        }}
      >
        Thing 2 (a button)
      </Thing>
      <p>
        Semantic HTML is a way of specifying what an element <strong>IS</strong>
        . Paragraphs have text. <code>buttons</code> do something on the page
        when clicked. Links (anchors / <code>a</code> tags) navigate you to
        another page (or another part of a page) when clicked. Don't ask "What
        tag should I use?" instead ask "What is this thing, and what is its
        function on the page?"
      </p>
      <p>
        This application uses semantic HTML throughout. If you inspect the HTML
        here, you will see <code>article</code>s, <code>aside</code>s,{' '}
        <code>header</code>s, etc. When you find yourself using a{' '}
        <code>div</code> element, ask yourself if there is something more
        specific you could be using.
      </p>
      <p>There are numerous reasons to use semantic HTML:</p>
      <ul className="bulleted">
        <li>
          <p>
            It provides meaningful information to users, bots, and assitive
            technologies.{' '}
            <a
              href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
              target="_blank"
              rel="noreferrer"
            >
              Web accessibility
            </a>{' '}
            is{' '}
            <a
              href="https://www.jdsupra.com/legalnews/court-finds-domino-s-pizza-violated-the-2182635/"
              target="_blank"
              rel="noreferrer"
            >
              very important
            </a>
            , and simply by correctly using tags for buttons, lists, navs, and
            the like, you will automatically get some accessibility features on
            your page.
          </p>
        </li>
        <li>
          <p>
            It makes your code more readable by making clear what various
            elements are and what they do.
          </p>
        </li>
        <li>
          <p>
            Semantic HTML is also critical for bots and SEO. Meaningful content
            in the appropriate elements combined with proper heading hierarchy (
            <code>h1</code> - <code>h6</code>) tells assitive technologies and
            search bots how your page is structured. This helps users, both
            human and automated, more easily navigate your pages.
          </p>
        </li>
      </ul>
    </Lesson>
  )
}
