import {useState} from "react";

export default function LoginState() {
    const [enteredValues, setEnteredValues] = useState({
        email: "",
        password: ""
    });
    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    });
    const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@") ;

    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [enteredPassword, setEnteredPassword] = useState("");
    function  handleSubmit(event) {
        event.preventDefault();
        // Handle login logic here
        console.log(enteredValues);
        // Reset the form fields
        // setEnteredValues({
        //     email: "",
        //     password: ""
        // })
    }
    function handleInputChange(identifier, value) {
        // Handle input changes if needed
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [identifier]: value,
        }));
        setDidEdit((prevState) => ({
            ...prevState,
            [identifier]: false,
        }));
    }
    function handleInputBlur(identifier) {
        setDidEdit((prevState) => ({
            ...prevState,
            [identifier]: true,
        }));
    }
    // If you want to handle email/password input changes separately,
    // function handleEmailChange(event) {
    //     // Handle email input changes
    //     console.log("Email changed:", event.target.value);
    // }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={enteredValues.email} onBlur={()=> handleInputBlur('email')} onChange={(event) => handleInputChange('email', event.target.value)} />
            <div className="control-error">
                {emailIsInvalid && <p className="error-text">Please enter a valid email address.</p>}

            </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={enteredValues.password} onChange={(event) => handleInputChange('password', event.target.value)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
