import React from "react"

import styled from "styled-components"
import { fontSize, color, fontWeight, fontFamily, space } from "styled-system"

const PriceRow = styled.tr`
  margin: 0,
  padding: 0
`

const PriceKey = styled.th.attrs({
  fontSize: 1,
  color: "heading",
  fontWeight: "bold",
  scope: "row",
  pr: 2,
  py: 0,
  m: 0
})`
  text-align: right;
  white-space:nowrap;
  ${color}
  ${fontSize}
  ${fontWeight}
  ${space}
`

const PriceValue = styled.td.attrs({
  fontSize: 1,
  py: 0,
  pl: 1,
  pr: 1,
  m: 0
})`
  cursor: copy;
  &:hover {
    color: ${props => props.theme.colors.link};
  };
  background-color: ${props =>
    props.movement === "up"
      ? props.theme.colors.buy
      : props.movement === "down"
        ? props.theme.colors.sell
        : "none"};
  color: ${props =>
    props.movement === "up"
      ? props.theme.colors.black
      : props.movement === "down"
        ? props.theme.colors.black
        : props.theme.colors.fore};
  ${color}
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${space}
`

const BarePriceValue = styled.span.attrs({
  fontSize: 1,
  py: 0,
  pl: 1,
  pr: 1,
  m: 0
})`
  cursor: copy;
  &:hover {
    color: ${props => props.theme.colors.link};
  };
  background-color: ${props =>
    props.movement === "up"
      ? props.theme.colors.buy
      : props.movement === "down"
        ? props.theme.colors.sell
        : "none"};
  color: ${props =>
    props.movement === "up"
      ? props.theme.colors.black
      : props.movement === "down"
        ? props.theme.colors.black
        : props.theme.colors.fore};
  ${color}
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${space}
`

class Price extends React.Component {
  constructor(props) {
    super(props)
    this.state = { movement: null }
  }

  componentWillReceiveProps(nextProps) {
    var movement = null
    if (Number(nextProps.children) > Number(this.props.children)) {
      movement = "up"
    } else if (Number(nextProps.children) < Number(this.props.children)) {
      movement = "down"
    }
    if (movement) {
      this.setState({ movement: movement }, () =>
        setTimeout(() => this.setState({ movement: null }), 2100)
      )
    }
  }

  onClick = () => {
    if (this.props.onClick) {
      console.log("Price clicked", this.props.name, this.props.children)
      this.props.onClick(this.props.children)
    }
  }

  render() {
    if (this.props.bare) {
      return (
        <BarePriceValue movement={this.state.movement} onClick={this.onClick}>
          {this.props.children}
        </BarePriceValue>
      )
    } else {
      return (
        <PriceRow>
          <PriceKey>{this.props.name}</PriceKey>
          <PriceValue movement={this.state.movement} onClick={this.onClick}>
            {this.props.children}
          </PriceValue>
        </PriceRow>
      )
    }
  }
}

export default Price
