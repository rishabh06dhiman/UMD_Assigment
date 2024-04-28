import { BrowserRouter as Router, Route, Routes,HashRouter } from "react-router-dom";
import { Suspense } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "./App.css";
import ProtectedRoute from "./protectedRoute/protectedRoute";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Suspense fallback={<p>...loading</p>}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<ProtectedRoute />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </Provider>
    </div>
  );
}


export default App;
