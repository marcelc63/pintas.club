import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
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
            Latest News
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll templateKey="blog-post" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
