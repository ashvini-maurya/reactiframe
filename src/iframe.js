import React, { Component } from "react";

class IFrame extends Component {
  componentDidMount() {
    this.node.addEventListener("load", this.handleLoad);
  }

  componentWillUnmount() {
    this.node.removeEventListener("load", this.handleLoad);
  }

  handleLoad = () => {
    this.iframeRoot = this.node.contentDocument.body;
    this.forceUpdate();
  };

  render() {
    const { children } = this.props;
    return (
      <iframe srcDoc={children} ref={(node) => (this.node = node)}></iframe>
    );
  }
}

export default IFrame;
