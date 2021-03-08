import React from "react";

import Layout from "../../components/Layout";
import MarketingRoll from "../../components/MarketingRoll";

export default class MarketingIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="margin-top-0">
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: "#FEF9FB",
              color: "#D3286F",
              padding: "1rem",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            Marketing
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <MarketingRoll templateKey="marketing-post" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
