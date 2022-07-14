import {
  auth,
  signInWithEmail,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";

import "./sign-in-form.styles.scss";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultEmailFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [emailFormField, setEmailFormField] = useState(defaultEmailFormField);
  const { email, password } = emailFormField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailFormField({ ...emailFormField, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      setEmailFormField(defaultEmailFormField);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
      }
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    const userDocRef = await createUserDocumentFromAuth();
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
