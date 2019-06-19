import {React,Router ,Container} from '../../utils/general-imports';

import Routes from "../../routes/routes";

function AppBody() {
  return (
    <Container >
       <Router>
        <Routes/>      
        </Router>
    </Container>
  );
}

export default AppBody;
