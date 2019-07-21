import { React, connect, withRouter, isEqual, Redirect, Link } from '../../utils/general-imports';
import AppBar from '@material-ui/core/AppBar';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';



class Header extends React.Component {
  state = {}

  _getLink = () => {
    const { isUserLoggedIn } = this.props;
    let location = this.props.location.pathname;
    let linkText = '';
    let routeLink = ''
    if (isEqual(location, '/') || isEqual(location, '/signIn')) {
      linkText = 'Sign Up';
      routeLink = 'signUp'

    } else {
      linkText = 'Sign In';
      routeLink = 'signIn';
    }
    return isUserLoggedIn ? '' : (<Link to={routeLink}>{linkText}</Link>);
  }

  render() {
    const { isSignIn } = this.state;

    return (
      <div >
        <AppBar position="static" >
          <Toolbar>
            <Container>
              <span className="header-logo">
              </span>
              {this._getLink()}
            </Container>
          </Toolbar>
        </AppBar>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.signUpReducer.get('isUserLoggedIn')
});

// const mapDispatchToProps = (dispatch) => ({
//   signUp: data => changePage(dispatch, data)
// });


export default withRouter(connect(mapStateToProps)(Header));


