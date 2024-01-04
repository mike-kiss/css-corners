import React from 'react'
import classnames from 'classnames'
import './thing.css'

export const Thing = ({
  component = 'div',
  showBoxModel = false,
  padding,
  children,
  style,
  ...otherProps
}) => {
  const Component = component
  const thingStyles = {
    position: 'relative',
    ...style,
  }
  return (
    <Component
      className={classnames('thing', { 'box-model-thing': showBoxModel })}
      style={thingStyles}
      {...otherProps}
    >
      {showBoxModel && <BoxModelHighlights parentStyles={thingStyles} />}
      {children}
    </Component>
  )
}

const BoxModelHighlights = ({ parentStyles }) => {
  const boxModelHighlightsPaddingStyles = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    borderStyle: 'solid',
    borderColor: '#b8d5af88',
    borderWidth: parentStyles.padding,
  }
  const boxModelHighlightsMarginStyles = {
    position: 'absolute',
    height: `calc(100% + ${parentStyles.margin} + ${parentStyles.margin})`,
    width: `calc(100% + ${parentStyles.margin} + ${parentStyles.margin})`,
    top: 0,
    left: 0,
    borderStyle: 'solid',
    borderColor: '#d5bfaf88',
    borderWidth: parentStyles.margin,
    margin: `-${parentStyles.margin}`,
  }
  return (
    <>
      {parentStyles.padding && (
        <div
          className="thing-box-model-highlights-padding"
          style={boxModelHighlightsPaddingStyles}
        />
      )}
      {parentStyles.margin && (
        <div
          className="thing-box-model-highlights-padding"
          style={boxModelHighlightsMarginStyles}
        />
      )}
    </>
  )
}
