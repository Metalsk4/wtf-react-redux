import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../../components/Cart/Cart";

class CartContainer extends Component {
  render() {
    return (
      <div style={contentWrapper}>
        <Cart items={this.props.cart.items} />
      </div>
    );
  }
}

const contentWrapper = {
  margin: "4%"
};

const mapStateToProps = state => {
  console.log(state);
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(CartContainer);
