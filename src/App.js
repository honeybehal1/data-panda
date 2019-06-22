import { React, Container } from '../src/utils/general-imports';
import './App.css';

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
    <React.Fragment >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container maxWidth="lg" theme={theme}>
          <div className="App">

            <AppBody></AppBody>
          </div>
        </Container>
      </MuiThemeProvider>
    </React.Fragment>


  );
}

export default App;
