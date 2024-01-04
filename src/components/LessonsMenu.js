import React from 'react'
import classNames from 'classnames'
import * as lessons from '../lessons'
import './lessonsMenu.css'

export const LessonsMenu = ({ isOpen, setMenuIsOpen }) => {
  const topics = {}

  lessons.topicsList.forEach(topic => {
    topics[topic] = []
  })

  lessons.lessonsList.forEach(lesson => {
    topics[lesson.topic].push(lesson)
  })

  return (
    <aside
      className={classNames('lessons-menu', { 'lessons-menu-open': isOpen })}
    >
      <nav>
        <button onClick={() => setMenuIsOpen(false)}>Close</button>
        {Object.keys(topics).map(key => {
          return (
            <section key={key}>
              <h2>{key}</h2>
              <ul>
                {topics[key].map(lesson => (
                  <li key={lesson.url}>
                    <a href={lesson.url}>{lesson.title}</a>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </nav>
      <hr />
      <a href="/about">About this project</a>
    </aside>
  )
}
