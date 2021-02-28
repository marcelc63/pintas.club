/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const FeatureGrid = ({ strategy, product, marketing, operation }) => (
  <div className="columns is-multiline">
    <div className="column is-6">
      <Link to="/strategy">
        <section class="strategy">
          <p class="strategy-title">{strategy.title}</p>
          <p class="strategy-description">{strategy.description}</p>
        </section>
      </Link>
    </div>
    <div className="column is-6">
      <Link to="/product">
        <section class="product">
          <p class="product-title">{product.title}</p>
          <p class="product-description">{product.description}</p>
        </section>
      </Link>
    </div>
    <div className="column is-6">
      <Link to="/marketing">
        <section class="marketing">
          <p class="marketing-title">{marketing.title}</p>
          <p class="marketing-description">{marketing.description}</p>
        </section>
      </Link>
    </div>
    <div className="column is-6">
      <Link to="/operation">
        <section class="operation">
          <p class="operation-title">{operation.title}</p>
          <p class="operation-description">{operation.description}</p>
        </section>
      </Link>
    </div>
  </div>
);

FeatureGrid.propTypes = {
  strategy: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  product: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  marketing: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  operation: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
