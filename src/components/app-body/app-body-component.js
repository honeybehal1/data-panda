import { React, Router, Container, ErrorBoundary } from '../../utils/general-imports';

import Routes from "../../routes/routes";

function AppBody() {
  return (
    <ErrorBoundary>
      <Container >
        <Router>
          <Routes />
        </Router>
      </Container>
    </ErrorBoundary>
  );
}

export default AppBody;
