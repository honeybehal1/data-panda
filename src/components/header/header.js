import { React, connect, withRouter, isEqual, Redirect } from '../../utils/general-imports';
import AppBar from '@material-ui/core/AppBar';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';



class Header extends React.Component {
  state = {}


  componentDidMount() {
    let location = this.props.location.pathname;
    if (isEqual(location, '/') || isEqual(location, '/signIn')) {
      this.setState({ isSignIn: false })
    } else {
      this.setState({ isSignIn: true })
    }
  }



  setHeaderValue = () => {
    let location = this.props.location.pathname;
    if (isEqual(location, '/') || isEqual(location, '/signIn')) {
      this.props.history.push('/signUp');
      this.setState({ isSignIn: false })
    } else {
      this.props.history.push('/signIn');
      this.setState({ isSignIn: true })
    }
  }

  render() {

    const { isSignIn } = this.state;
    console.log(this.props.history);


    return (
      <div >
        <AppBar position="static" >
          <Toolbar>
            <Container>
              <span className="header-logo">
                Data Panda
              </span>
              <Button onClick={() =>
                this.setHeaderValue()
              } color="inherit">{isSignIn ? 'sign Up' : 'Sign In'}</Button>
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


