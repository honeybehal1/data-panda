import {
  React, Button, CssBaseline, TextField, FormControlLabel, Checkbox,

  Link, Grid, Typography, withRouter, connect, concat, useState, Container, isEmpty, setLoggedInData
} from '../../utils/general-imports'
import { signIn, setValue } from "./sign-in-actions";
import { isValidInput } from '../../utils/general-utils';
function SignIn(props) {

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const _setData = (data) => {
    let { type, value } = data;
    value = value.currentTarget.value;
    setLoginData({ ...loginData, [type]: value });
  }
  const _handleSignIn = () => {
    const { email, password } = loginData;
    const user = { email, password };
    let isPasswordEqual = !isEmpty(password);
    let errorMessage = [];

    let isFormValid = true;
    if (!isPasswordEqual) {
      isFormValid = false;
      errorMessage = concat(errorMessage, "Password doesn't match");
    }
    if (!isValidInput(email).isValid) {
      isFormValid = false;
      errorMessage = concat(errorMessage, isValidInput(email).errorMessage);
    }
    // this.setState({ errorMessage: join(errorMessage, ','), isFormValid });
    isFormValid && props.signIn(user).then(data => {
      const isValid = setLoggedInData(data);
      if (isValid) {
        setValue('SIGN_IN_RESPONDED', true)
        props.history.push('/profile');
      }
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={loginData.email}
            onChange={value => _setData({ type: "email", value })}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={loginData.password}

            onChange={value => _setData({ type: "password", value })}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => _handleSignIn()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.signUpReducer.get('isUserLoggedIn')
});

const mapDispatchToProps = (dispatch) => ({
  signIn: data => signIn(dispatch, data),
  setValue: (type, data) => { setValue(dispatch, type, data) }
});


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn));

