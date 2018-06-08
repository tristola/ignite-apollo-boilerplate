import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'

// Styles
import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors} from '../Themes/'
import styled from 'styled-components'

const ApplicationView = styled.View`
    flex: 1;
`
const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${Colors.background};
`
const Welcome = styled.Text`
  font-size: 20;
  text-align: center;
  font-Family: ${Fonts.type.base};
  margin: ${Metrics.baseMargin};
`

const myImage = styled.Image`
  width: 200;
  height: 200;
  align-self: center;
`

class RootContainer extends Component {
  componentDidMount () {
    this.props.startup()
  }

  render () {
    return (
      <ApplicationView>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </ApplicationView>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
