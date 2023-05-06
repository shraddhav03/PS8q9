import { Routes, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./pages/Home";
import { QuestionsPage } from "./pages/QuestionsPage";
import { AnswerPage } from "./pages/AnswerPage";

export default function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionspage" element={<QuestionsPage />} />
          <Route path="/answer/:itemId" element={<AnswerPage />} />
        </Routes>
      </div>
    </div>
  );
}
