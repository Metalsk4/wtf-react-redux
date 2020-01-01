import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import data from "../../data/data";
import Items from "./../../components/Items/Items";
import * as actions from "../../store/actions/index";
import Footer from "./../../components/FooterBar/FooterBar";

class Courses extends Component {
  state = {
    course: ""
  };

  showCourse = course => {
    this.setState({ course: course });
  };

  itemAdder = (id, title, price, qty) => {
    const { onItemAdded } = this.props;
    onItemAdded({ id, title, price, qty });
  };

  footerClickedHandler = () => {
    this.props.history.push("./cart");
  };

  componentDidMount() {
    const { location } = this.props;
    const { course } = queryString.parse(location.search);
    this.setState({ course: course });
  }
  render() {
    const { course } = this.state;
    const filteredImageData = data.properties.filter(
      prop => prop.category === course
    );

    return (
      <div style={contentWrapper}>
        <h2>COURSES</h2>
        <Items
          showCourse={this.showCourse}
          course={course}
          imageData={filteredImageData}
          itemAdded={this.itemAdder}
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

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
