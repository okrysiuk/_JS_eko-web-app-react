import React, { Component } from "react";
import ErrorNotification from "../error-notification";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorNotification />;
    }
    return this.props.children;
  }
}
