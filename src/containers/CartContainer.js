import React, { Component } from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as message from "../constants/Message";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import { actDeleteProductInCart, actChangeMessage, actUpdateQuantityProductInCart } from "../actions/index";

class CartContainer extends Component {
  showCartItem = () => {
    let result = (
      <tr>
        <td>{message.MSG_CART_EMPTY}</td>
      </tr>
    );

    const { cart } = this.props;

    if (cart.length > 0) {
      result = cart.map((el, idx) => {
        return (
          <CartItem
            key={el.product.id}
            item={el}
            index={idx}
            onDeleteProductInCart={this.props.onDeleteProductInCart}
            onChangeMessage={this.props.onChangeMessage}
            onUpdateQuantityProductInCart={this.props.onUpdateQuantity}
          />
        );
      });
    }

    return result;
  };

  showTotalAmount = () => {
    let result = null;

    const { cart } = this.props;

    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }

    return result;
  };

  render() {
    return (
      <Cart>
        {this.showCartItem()}
        {this.showTotalAmount()}
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: product => {
      dispatch(actDeleteProductInCart(product));
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message));
    },
    onUpdateQuantity: (mode, product) => {
      dispatch(actUpdateQuantityProductInCart(mode, product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
