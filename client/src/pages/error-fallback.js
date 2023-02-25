import React from "react";

function ErrorFallback() {
  const reloadApp = () => {
    window.location.reload();
  };
  return (
    <div className="container mt-4">
      <div className="fw-500 fs-20">
        <p className="fw-500 fs-24">Woops!</p>
        <p className="fw-400 fs-20">Something went wrong :(</p>
        <button
          type="button"
          onClick={reloadApp}
          className="btn btn-outline-secondary px-5 py-1"
        >
          Reload App
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
