import { Routes, Route } from "react-router";
import Header from "./components/Header";
import JobList from "./page/JobList";
import ApplyForm from "./page/ApplyForm";
import RecruiterDashBoard from "./page/RecruiterDashBoard";
function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:jobId/apply" element={<ApplyForm />} />
        <Route path="/dashboard" element={<RecruiterDashBoard />} />
      </Routes>
    </>
  );
}

export default App;