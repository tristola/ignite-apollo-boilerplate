import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Images } from '../Themes'
import styled from 'styled-components'

import {Fonts, Metrics, Colors} from '../Themes/'
import { ScrollContainer, MainContainer, BackgroundImage, Section, SectionText } from '../Themes/StyledComponents'

const Centered = styled.View`
  align-items: center;
`
const Logo = styled.Image`
  margin-top: ${Metrics.doubleSection};
  height: ${Metrics.images.logo};
  width: ${Metrics.images.logo};
`

class LaunchScreen extends Component {
  render () {
    console.tron.log(this.props.data)
    return (
      <MainContainer>
        <BackgroundImage source={Images.background} resizeMode='stretch' />
        <ScrollContainer>
          <Centered>
            <Logo source={Images.launch} resizeMode='contain' />
          </Centered>
          <Section>
            <Image source={Images.ready} />
            <SectionText>
             You are nearly done
            </SectionText>
          </Section>
        </ScrollContainer>
      </MainContainer>
    )
  }
}
export default graphql(gql`
  query OrganinzerQUery {
       organizers {
       name
       about
       image
       location {
         country {
           name
           code
         }
        }
        social {
          twitter
          homepage
          github
          linkedin
        }
      }
  }
`)(LaunchScreen);