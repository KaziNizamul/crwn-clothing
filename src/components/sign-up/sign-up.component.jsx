import React from "react";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password doesnt matched.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have a account </h2>
        <span> Sign up with your email and password </span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="text"
            name="displayName"
            label="User Name"
            value={displayName}
            required
          ></FormInput>

          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="Email"
            value={email}
            required
          ></FormInput>

          <FormInput
            handleChange={this.handleChange}
            type="password"
            label="Password"
            value={password}
            name="password"
            required
          ></FormInput>

          <FormInput
            handleChange={this.handleChange}
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            name="confirmPassword"
            required
          ></FormInput>
          <CustomButton input="submit"> Sign Up </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
