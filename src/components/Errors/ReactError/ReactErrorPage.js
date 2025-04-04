import React from "react";
import PropTypes from "prop-types";

class ErrorFallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(info);
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
  static get propTypes() {
    return {
      children:  PropTypes.object,
      fallback: PropTypes.element,
    };
  }
}

export default ErrorFallback