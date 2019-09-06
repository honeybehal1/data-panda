import { React, Container, Router } from '../src/utils/general-imports';
import './App.css';
import './App.scss';

import Header from '../src/components/header/header';
import AppBody from './components/app-body/app-body-component';
import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import CssBaseline from "@material-ui/core/CssBaseline";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    }
  }
},
)
function App() {
  return (
    <Router >
      <div className="App container">
        <AppBody />
      </div>
    </Router>
  );
}

export default App;
