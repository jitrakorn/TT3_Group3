import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CreatePost from "./components/CreateNewPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/createNewPost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
