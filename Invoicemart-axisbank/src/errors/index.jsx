import React from "react";

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" },
  };

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    console.log(
      "🚀 ~ file: index.jsx:20 ~ ErrorBoundary ~ render ~ hasError, error, info:",
      hasError,
      error,
      info
    );
    const { children } = this.props;

    return hasError ? <h1>Something went wrong</h1> : children;
  }
}
