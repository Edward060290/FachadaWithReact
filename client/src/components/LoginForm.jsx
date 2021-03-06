import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const style ={
  backgroundColor: 'rgba(22,22,22, 0.4)',
  color: '#B22222',
}

const styleb ={
  marginRight: "5px",
  marginLeft: "10px",
  borderColor: "#0000000",
  border: "3px",
}


const styles = {
  errorStyle: {
    color: '#B22222' ,
  },
  underlineStyle: {
    borderColor: '#B22222',
  },
  floatingLabelStyle: {
    color: '#B22222',
  },
  floatingLabelFocusStyle: {
    color: '#B22222',
  },
};



const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user
}) => (

  <Paper style={style} className="container">
    <form  action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Styled Floating Label Text"
     floatingLabelStyle={styles.floatingLabelStyle}
     floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          hintText="Custom Underline Focus Color"
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Styled Floating Label Text"
     floatingLabelStyle={styles.floatingLabelStyle}
     floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          hintText="Custom Underline Focus Color"
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton  type="submit" label="Log in"  backgroundColor=" #808080" style={styleb} />
          <RaisedButton  type="submit" label="Sign up"  backgroundColor=" #808080" style={styleb}  />
      </div>

      <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
    </form>
  </Paper>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
