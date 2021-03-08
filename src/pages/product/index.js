import React from "react";

import Layout from "../../components/Layout";
import ProductRoll from "../../components/ProductRoll";

export default class ProductIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="margin-top-0">
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: "#F9FEFA",
              color: "#28D353",
              padding: "1rem",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            Product
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ProductRoll templateKey="product-post" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
