import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import Specials from "../../components/Specials/Specials";
import Courses from "../../components/Courses/Courses";
import data from "../../data/data";
import Footer from "./../../components/FooterBar/FooterBar";

class LandingPageContainer extends Component {
  state = {
    isPreview: true,
    toBeLoaded: ""
  };
  itemAdder = (id, title, price, qty) => {
    const { onItemAdded } = this.props;
    onItemAdded({ id, title, price, qty });
  };
  footerClickedHandler = () => {
    this.props.history.push("./cart");
  };
  render() {
    console.log(this.props);
    return (
      <div style={contentWrapper}>
        <Specials
          sectionHeading="TODAYS SPECIAL"
          itemAdded={this.itemAdder}
          imageData={data.previewProperties}
          isPreview
          history={this.props.history}
        />
        <Courses {...this.props} />
        <Specials
          sectionHeading="CHEFS SPECIAL"
          itemAdded={this.itemAdder}
          imageData={data.previewProperties}
          isPreview
          history={this.props.history}
        />
        <Specials
          sectionHeading="PREVIOUSLY ORDERED"
          itemAdded={this.itemAdder}
          imageData={data.previewProperties}
          isPreview
          history={this.props.history}
        />
        {this.props.cart.items.length > 0 && (
          <Footer
            items={this.props.cart.items}
            clicked={this.footerClickedHandler}
          />
        )}
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

const mapDispatchToProps = dispatch => {
  return {
    onItemAdded: item => dispatch(actions.addItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageContainer);
