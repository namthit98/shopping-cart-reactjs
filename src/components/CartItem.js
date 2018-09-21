import React, { Component } from "react";
import * as messages from "../constants/Message";

class CartItem extends Component {
  onDelete = product => {
    this.props.onDeleteProductInCart(product);

    this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };

  onUpdateQuantity = (mode, product) => {
    this.props.onUpdateQuantityProductInCart(mode, product);

    this.props.onChangeMessage(messages.MSG_UPDATE_CART_SUCCESS);
  }

  render() {
    const { item } = this.props;

    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt="tesxt"
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label onClick={() => this.onUpdateQuantity(-1, item.product)}
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <label onClick={() => this.onUpdateQuantity(1, item.product)}
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{item.product.price * item.quantity}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title="text"
            data-original-title="Remove item"
            onClick={() => this.onDelete(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
