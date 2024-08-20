import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update status to indicate that an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error in a reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Redirect to error page
      return <Navigate to="/errorpage" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
