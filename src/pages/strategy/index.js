import React from "react";

import Layout from "../../components/Layout";
import StrategyRoll from "../../components/StrategyRoll";

export default class StrategyIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="margin-top-0">
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: "#F9F9FE",
              color: "#6666FF",
              padding: "1rem",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            Strategy
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <StrategyRoll templateKey="strategy-post" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
