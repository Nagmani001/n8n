import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Signup from "./pages/signup";
import Arena from "./pages/arena";
import Signin from "./pages/signin";
import Credentials from "./pages/credentials";
import Executions from "./pages/executions";
import Nav from "./components/nav";
import WorkflowCard from "./pages/workflows";


export default function App() {
  return <div>
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/workflows/workflows" element={<WorkflowCard />} />
          <Route path="/workflows/:id" element={<Arena />} />
          <Route path="/workflows/credentials" element={<Credentials />} />
          <Route path="/workflows/executions" element={<Executions />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
}
