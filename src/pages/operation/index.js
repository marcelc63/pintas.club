import React from "react";

import Layout from "../../components/Layout";
import OperationRoll from "../../components/OperationRoll";

export default class OperationIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="margin-top-0">
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: "#FEFDF9",
              color: "#D3A828",
              padding: "1rem",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            Operation
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <OperationRoll templateKey="operation-post" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
