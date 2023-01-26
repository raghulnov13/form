const Validate = (data) => {
    let errors = {};
    if (!data.name) {
      errors.name = "Name is Required.";
    }
    if (!data.email) {
      errors.email = "Email is Required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid.";
    }
    if (!data.password) {
      errors.password = "Password is Required.";
    } else if (data.password.length < 5) {
      errors.password = "Password must be more than five characters.";
    }
    if (!data.phonenumber) {
      errors.phonenumber = "Phonenumber is Required.";
    } else if (data.phonenumber.length < 5) {
      errors.phonenumber = "Enter ten digit phonenumber.";
    }

    return errors;
  };
  
  export default Validate;
  