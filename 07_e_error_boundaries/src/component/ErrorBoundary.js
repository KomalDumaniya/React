import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 p-4">
          <h1 className="text-3xl font-bold mb-2">Oops! Something went wrong.</h1>
          <p className="text-lg mb-4">Please try refreshing the page or contact support.</p>
          {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
            <details className="whitespace-pre-wrap bg-white border border-red-300 p-4 rounded shadow max-w-2xl w-full">
              {this.state.errorInfo.componentStack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
