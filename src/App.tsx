import React from "react";
import './App.scss'
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import RouterConfig from "./pages/layout/RouterConfig";

function App() {
  return (
    <>
      <div className="app">
        <ErrorBoundary>
          <RouterConfig />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
