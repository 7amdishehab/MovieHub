import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import WishlistProvider from "./context/WishListProvider";
import MovieProvider from "./context/MovieProvider";
import ThemeProvider from "./context/ThemeProvider";
import TVShowsProvider from "./context/TVShowProvider";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <MovieProvider>
          <TVShowsProvider>
            <WishlistProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </WishlistProvider>
          </TVShowsProvider>
        </MovieProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
