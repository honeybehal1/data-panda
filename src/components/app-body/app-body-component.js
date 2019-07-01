import { React, Router, Container, ErrorBoundary } from '../../utils/general-imports';
import Header from '../header/header';

import Routes from "../../routes/routes";

function AppBody() {
  return (
    <ErrorBoundary>

      <Router>
        <Header />
        <Container >
          <Routes />
        </Container>
      </Router>

    </ErrorBoundary >
  );
}

export default AppBody;
