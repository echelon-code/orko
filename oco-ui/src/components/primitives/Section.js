import React from "react"
import styled from "styled-components"
import { color } from "styled-system"
import { Icon } from "semantic-ui-react"
import Heading from "./Heading"

const SectionBox = styled.section`
  ${color}
  margin: 0;
  padding: 0;
  height: 100%;
`

const SectionHeadingBox = styled.div`
  background-color: ${props => props.theme.colors.backgrounds[3]};
  position: sticky;
  left: 0;
  top: 0;
  padding: ${props => props.theme.space[2] + "px"};
  display: flex;
  justify-content: space-between;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
`

const SectionInner = styled.section`
  padding-top: ${props => props.nopadding ? 0 : "10px"};
  padding-bottom: ${props => props.nopadding ? 0 :props.theme.space[2] + "px"};
  padding-left: ${props => props.nopadding ? 0 :props.theme.space[2] + "px"};
  padding-right: ${props => props.nopadding ? 0 :props.theme.space[2] + "px"};
  height: ${props => props.expand ? "100%" : "auto"}
`

class Section extends React.Component {
  render() {
    return (
      <SectionBox>
        <SectionHeadingBox className="dragMe">
          <Heading p={0} m={0} color="heading">
            <Icon name="content"/>
            {this.props.heading}
          </Heading>
          <div>
            {this.props.buttons && this.props.buttons()}
          </div>
        </SectionHeadingBox>
        <SectionInner expand={this.props.expand} nopadding={this.props.nopadding}>
          {this.props.children}
        </SectionInner>
      </SectionBox>
    )
  }
}

export default Section
