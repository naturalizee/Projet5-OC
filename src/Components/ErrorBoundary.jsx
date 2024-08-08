import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Mettre à jour l'état pour indiquer qu'une erreur s'est produite
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez aussi enregistrer l'erreur dans un service de reporting
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Rediriger vers la page d'erreur
      return <Navigate to="/errorpage" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
