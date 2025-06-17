import Input from "./Input.jsx";
import {hasMinLength, isEmail, isNotEmpty}   from "../util/validation.js";
import {useInput} from "../hooks/useInput.js";

export default function LoginState() {
   const {value: emailValue, handleInputBlur: handleEmailBlur, handleInputChange: handleEmailChange, hasError: emailHasError} = useInput('', (value) => isEmail(value) && isNotEmpty(value));
   const {value: passwordValue, handleInputBlur: handlePasswordBlur, handleInputChange: handlePasswordChange, hasError: passwordHasError} = useInput('', (value) => hasMinLength(value,7) );


    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [enteredPassword, setEnteredPassword] = useState("");
    function  handleSubmit(event) {
        event.preventDefault();
        // Handle login logic here
        if (emailHasError || passwordHasError) {
            console.log("Form has errors, please fix them before submitting.");
            return;
        }
        console.log(emailValue, passwordValue);
        // Reset the form fields
        // setEnteredValues({
        //     email: "",
        //     password: ""
        // })
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
          <Input label="Email" id="email" name="email" type="email" value={emailValue} onBlur={handleEmailBlur} onChange={handleEmailChange} errorMessage={emailHasError && 'Please Enter Valid Email Address.'} />
          <Input label="Password" id="password" name="password" type="password" value={passwordValue} onBlur={()=> handlePasswordBlur} onChange={handlePasswordChange} errorMessage={passwordHasError && 'Please Enter a valid Password!'} />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
