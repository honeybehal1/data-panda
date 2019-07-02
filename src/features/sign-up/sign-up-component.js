import { React, Grid, connect, withRouter, TextField, translate } from '../../utils/general-imports';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { INPUT_TYPE } from '../../utils/constants';
import { I18n, Translate } from 'react-redux-i18n';



import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { signUp } from "./connect/sign-up-actions";
import { Email } from 'material-ui-icons';
const { EMAIL, PASSWORD, CONFIRM_PASSWORD } = INPUT_TYPE;

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassord: ''
  }

  _handleChange(data) {
    let { type, value } = data;
    value = value.currentTarget.value;
    this.setState({ [type]: value });
  }

  _handleSignUp() {
    const { email, password } = this.state;
    debugger
    const user = { email, password }
    this.props.signUp(user);
  }

  render() {
    const { email, password, confirmPassord } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <CssBaseline />
          <div >
            <Typography component="h1" variant="h5">
              Sign Up
           </Typography>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={email}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={value => {
                  this._handleChange({ type: EMAIL, value })
                }}

              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={password}
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={value => {
                  this._handleChange({ type: PASSWORD, value })
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={confirmPassord}
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                onChange={value => {
                  this._handleChange({ type: CONFIRM_PASSWORD, value })
                }}
              />
              <Button

                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                  this._handleSignUp()
                }}
              >
                {translate('common.sign-up')}
              </Button>

            </form>
          </div>
        </div>
      </Container>)
  }
}

const mapStateToProps = (state) => ({
  menuTypeSelected: state.signUpReducer.get('isUserLoggedIn')
});

const mapDispatchToProps = (dispatch) => ({
  signUp: data => signUp(dispatch, data)
});


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp));

