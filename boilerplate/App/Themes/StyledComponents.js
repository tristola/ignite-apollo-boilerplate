// Styles
import {Fonts, Metrics, Colors} from '../Themes'
import styled from 'styled-components'

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${Colors.transparent};
`
export const BackgroundImage = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
export const ApplicationView = styled.View`
    flex: 1;
`
export const ScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-top: ${Metrics.baseMargin};
  background-color: ${Colors.transparent};
`
export const Section = styled.View`
  margin: ${Metrics.section}px;
  padding: ${Metrics.baseMargin}px;
`
export const SectionText = styled.Text`
  font-size: ${Fonts.size.regular};
  color: ${Colors.snow};
  text-align: center;
  margin-left: ${Metrics.smallMargin};
  margin-right: ${Metrics.smallMargin};
  padding-left: ${Metrics.doubleBaseMargin};
  padding-right: ${Metrics.doubleBaseMargin};
  font-Family: ${Fonts.type.base};
  margin-top: ${Metrics.baseMargin}px;
`
export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.background};
`
export const Welcome = styled.Text`
  font-size: 20;
  text-align: center;
  font-Family: ${Fonts.type.base};
  margin: ${Metrics.baseMargin};
`

export const myImage = styled.Image`
  width: 200;
  height: 200;
  align-self: center;
`
