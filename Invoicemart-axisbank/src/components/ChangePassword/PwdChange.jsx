import React from "react";
import TextInput from "../../components/Common/CustomTextInput";
import PasswordStrengthMeter from "../../components/PasswordChecker/PasswordStrengthMeter";

const Step3 = (props) => {
  return (
    <>
      <TextInput
        value={props.password}
        width="33%"
        placeholder="New Password"
        label="New Password"
        size="small"
        onChange={(e) => {
          props.onChange(e.target.value, "pwd");
        }}
        type="password"
        error={!!props.passwordError}
        helperText={props.passwordError}
      />
      <PasswordStrengthMeter password={props.password} />
      <TextInput
        value={props.confirmpassword}
        width="33%"
        placeholder="Confirm Password"
        label="Confirm Password"
        size="small"
        onChange={(e) => {
          props.onChange(e.target.value, "confirmpwd");
        }}
        type="password"
        error={!!props.confirmpasswordError}
        helperText={props.confirmpasswordError}
      />
    </>
  );
};

export default Step3;
