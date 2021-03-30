import React, {useState} from "react";

const initialFormValues = {
	email: "",
	password: "",
  };
  
  const initialFormErrors = {
	email: "",
	password: "",
  };
  const initialDisabled = true;
  
  function SignIn(props) {
	const [disabled, setDisabled] = useState(initialDisabled);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
  


const Login = () => {
	const [initialFormValues, setCredentials] = useState(initialState);
	const handleChange = e => {

	}
	return( 
	<section>
    <form method="post" action="#">
      <div className="fields">
        <div className="field half">
          <label htmlFor="name">Email:</label>
          <input type="text" name="email" id="email" value={formValues.email} />
        </div>
        <div className="field half">
          <label htmlFor="email">Password:</label>
          <input type="text" name="password" id="password" value={formValues.password} />
        </div>
        {/* <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6"></textarea>
        </div> */}
      </div>
      {/* <ul className="actions">
        <li><input type="submit" value="Send Message" className="primary" /></li>
        <li><input type="reset" value="Clear" /></li>
      </ul> */}
    </form>
  </section>)
		// <form>
		// <h1>Login</h1>
		// <input type='text' name = "username" value = {credentials.username} onChange = {handleChange}/>
		// </form>);
};
export default Login;

// axios call to post credentials on submit
// handle change function 
// add submit button 