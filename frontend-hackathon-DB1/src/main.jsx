import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <AppRoutes />
    </Router>
);
