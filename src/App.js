import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./scenes/dashboard/Dashboard";
import Topbar from "./scenes/global/Topbar";
import Team from "./scenes/Team";
import Contacts from "./scenes/Contacts";
import Invoices from "./scenes/Invoices";
import Form from "./scenes/Form";
import Bar from "./scenes/Bar";
import Pie from "./scenes/Pie";
import Line from "./scenes/Line";
import FAQ from "./scenes/FAQ";
import Geography from "./scenes/Geography";
import Calender from "./scenes/Calender";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <div className="content">
            <Topbar />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/team" element={<Team />} />
              <Route exact path="/contacts" element={<Contacts /> } />
              <Route exact path="/invoices" element={<Invoices/> } />
              <Route exact path="/form" element={<Form />} />
              <Route exact path="/bar" element={<Bar />} />
              <Route exact path="/pie" element={<Pie />} />
              <Route exact path="/line" element={<Line />} />
              <Route exact path="/faq" element={<FAQ />} />
              <Route exact path="/geography" element={<Geography />} />
              <Route exact path="/faq" element={<Calender />} />
              
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
