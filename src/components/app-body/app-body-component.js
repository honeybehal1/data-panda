import { React, Router, Container, ErrorBoundary } from '../../utils/general-imports';
import Header from '../header/header';

import Routes from "../../routes/routes";

class AppBody extends React.Component {

  componentWillReceiveProps() {
    this.props.history.listen((location, action) => {
      if (location.pathname !== this.props.location.pathname) {
        this.props.location.pathname = location.pathname;
        this.forceUpdate();
      }
    });
  }

  render() {
    return (
      <ErrorBoundary>

        <Router>
          <Header />

          <Routes />

        </Router>

      </ErrorBoundary >
    );
  }
}

export default AppBody;
