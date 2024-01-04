import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as Lessons from './lessons'
import { AboutPage } from './pages/About'

export const Routes = () => {
  const buildRoute = (lesson, index, urlOverride = undefined) => {
    if (!lesson.url || !lesson.component) {
      return
    }
    return (
      <Route
        path={`/${urlOverride !== undefined ? urlOverride : lesson.url}`}
        key={index}
        component={Lessons[lesson.component]}
      />
    )
  }

  const routes = Lessons.lessonsList.map((lesson, index) => {
    return buildRoute(lesson, index)
  })

  return (
    <Router>
      <Switch>
        <Route path="/about" component={AboutPage}></Route>
        {routes}
        {buildRoute(Lessons.lessonsList[0], -1, '')}
      </Switch>
    </Router>
  )
}
