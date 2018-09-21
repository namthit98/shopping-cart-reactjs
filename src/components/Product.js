import React, { Component } from "react";
import * as messages from '../constants/Message';

class Product extends Component {

  showRating = () => {
    const { rating } = this.props.product;

    let result = [];

    let idx = 0;

    for(let i = 1; i <= rating; i++) {
      result.push(<i key={idx} className="fa fa-star"></i>);
      idx++;
    }

    for(let i = 1; i <= (5 - rating); i++) {
      result.push(<i key={idx} className="fa fa-star-o"></i>);
      idx++;
    }

    return result;
  }

  addToCart = product => {
    this.props.addToCart(product);

    this.props.onChangeMessage(messages.MSG_ADD_TO_CART_SUCCESS);
  }

  render() {
    const { product } = this.props;

    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              src={product.image}
              className="img-fluid"
              alt={product.name}
            />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
            <li>
              {this.showRating()}
            </li>           
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="text"
                  data-original-title="Add to Cart"
                  onClick={() => this.addToCart(product)}
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
