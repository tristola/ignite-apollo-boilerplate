import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components'
import { Colors, Metrics, Fonts } from '../Themes/'

const Container = styled.View`
 justify-content: center;
 margin-top: ${Metrics.section};
 margin-bottom: ${Metrics.section};

`
const ContentContainer = styled.View`
  align-self: center;
  align-items: center;
`
const Message = styled.Text`
  margin-top: ${Metrics.baseMargin};
  margin-left: ${Metrics.baseMargin};
  margin-right: ${Metrics.baseMargin};
  text-align: center;
  font-family: ${Fonts.type.base};
  font-size: ${Fonts.size.regular};
  font-weight: bold;
  color: ${Colors.steel};
`
const icon = {
 color: Colors.steel
}

export default class AlertMessage extends Component {
  static defaultProps = { show: true }

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
    show: PropTypes.bool
  }

  render () {
    let messageComponent = null
    if (this.props.show) {
      const { title } = this.props
      return (
        <Container>
          <ContentContainer>
            <Message>{title && title.toUpperCase()}</Message>
          </ContentContainer>
        </Container>
      )
    }

    return messageComponent
  }
}
