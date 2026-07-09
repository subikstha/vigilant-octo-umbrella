import { Link } from "@tanstack/react-router";
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    // static lifecycle method used to update component state when error is thrown
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Errorbounday caught some stupid error", error, info);
  }
  componentDidMount() {
    // like useEffect with empty dependency array
  }
  componentWillUnmount() {
    // like useEffect clean up function
  }
  render() {
    // A must have in every class component
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>
            There was an error with this page. <Link to="/">Click here</Link> to
            go back to the home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
