import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Dashboard from './scenes/dashboard/Dashboard';
import { ColorModeContext, useMode } from './theme';


function App() {
  const [theme, colorMode] = useMode()
  return (
 <ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
      <div className='content'>
     <Dashboard />
     </div>
    </div>
    </ThemeProvider>
 </ColorModeContext.Provider>
  );
}

export default App;
