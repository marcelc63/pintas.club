import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    <div className="column is-6">
      <section className="section">
        <div class="strategy">
          <p class="strategy-title">Strategy</p>
          <p class="strategy-description">
            High level understanding of your idea within your market, industry,
            and regions
          </p>
        </div>
      </section>
    </div>
    <div className="column is-6">
      <section className="section">
        <p>Product</p>
        <p>
          High level understanding of your idea within your market, industry,
          and regions
        </p>
      </section>
    </div>
    <div className="column is-6">
      <section className="section">
        <p>Marketing</p>
        <p>
          High level understanding of your idea within your market, industry,
          and regions
        </p>
      </section>
    </div>
    <div className="column is-6">
      <section className="section">
        <p>Operation</p>
        <p>
          High level understanding of your idea within your market, industry,
          and regions
        </p>
      </section>
    </div>
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
