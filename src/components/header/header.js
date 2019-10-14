import { React, connect, withRouter, isEqual, Redirect, Link, setLoggedInData } from '../../utils/general-imports';
import { signOut } from './connect/header-actions';



class Header extends React.Component {
  state = {}

  _getLink = () => {
    const { isUserLoggedIn } = this.props;
    let location = this.props.location.pathname;
    let linkText = '';
    let routeLink = '';
    debugger;
    if (isEqual(location, '/') || isEqual(location, '/signIn')) {
      linkText = 'Sign Up';
      routeLink = 'signUp'

    } else {
      linkText = 'Sign In';
      routeLink = 'signIn';
    }
    return isUserLoggedIn ? (<div onClick={() => this._signOut()}>Sign Out</div>
    ) : (<Link to={routeLink}>{linkText}</Link>);
  }

  _signOut = () => {
    this.props.signOut().then((data) => {
      setLoggedInData(data)
    });
  }

  render() {
    const { isSignIn } = this.state;

    return (
      <div className="dp-header" >
        <div className="container">
          {this._getLink()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.signUpReducer.get('isUserLoggedIn')
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => signOut(dispatch, {})
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));


