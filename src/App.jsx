import { Routes, Route } from "react-router";
import Header from "./components/Header";
import JobList from "./page/JobList";
import ApplyForm from "./page/ApplyForm";
import RecruiterDashBoard from "./page/RecruiterDashBoard";
import Login from "./page/Login"
import SignUp from "./page/SignUp"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:jobId/apply" element={<ApplyForm />} />
        <Route path="/dashboard" element={<RecruiterDashBoard />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;