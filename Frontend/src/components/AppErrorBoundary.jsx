import React from 'react';

export default class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error?.message || 'Unexpected application error.',
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application crash captured by error boundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="w-full max-w-lg bg-white border border-red-200 rounded-xl shadow-sm p-6">
            <h1 className="text-xl font-semibold text-red-700">Something went wrong</h1>
            <p className="mt-2 text-sm text-gray-700">
              The app encountered an error and could not render this page.
            </p>
            <p className="mt-2 text-xs text-gray-500 break-all">{this.state.message}</p>
            <button
              onClick={this.handleReload}
              className="mt-4 px-4 py-2 rounded-md bg-medical text-white hover:bg-medical-dark"
            >
              Reload App
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
