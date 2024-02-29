let count = 0;
const check_name = (fullname) => {
    const correctWay = /^[a-z A-Z]{3,}$/;
    if (!fullname.match(correctWay)) {
        document.getElementById("span_name").innerText = "Please enter valid fullname!";
        return false;
    }
    else {
        document.getElementById("span_name").innerText = ""
        count++;
        return true;
    }
}
const check_phone = (phone) => {
    
   // console.log("phone56789",phone)

    // let arr1=phone.split('-')
     //console.log('aerrrr',arr1)
  // let   phone1= arr1[1]
  const numberExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  const phoneValid = numberExp.test(phone);
    const correctWay = /^\d{10}$/;
    if (!phoneValid) {
        document.getElementById("span_phone").innerText = "Phone Must Be Filled And Valid!"
        count++;
        return false;

    }
    else {
        // document.getElementById("span_phone").style.color = "green";
        document.getElementById("span_phone").innerText = "";
        return true;
    }
}

const check_email = (email) => {
    const correctWay = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( !email.match(correctWay)) {
        document.getElementById("span_email").innerText = "Email Must Be Filled And Valid!";
        return false;
    }
    else {
        //  document.getElementById("span_email").style.color = "green";
        document.getElementById("span_email").innerText = "";
       count++;
        return true;
    }
}


const check_password = (password) => {
    const correctWay = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
   // const lengthregx =  /^\d{11}$/;
    if (password === "" || !password.match(correctWay))  {
        document.getElementById("span_password").innerText = "Password Must Be Filled And include one upper and lower case, a special character and a number!";
        return false;
    }
    else {
        
        document.getElementById("span_password").innerText = "";
        count++;
        return true;
    }
}
//signupotp validation:

const check_PhoneOtp = (phone_otp) =>{
    const correctWay = "^[0-9]*$";
   const numberregx =  /^\d{6}$/;
  // let  countdigit = phone_otp
   //(console.log('otplength##',countdigit))
    if(phone_otp=== "" ||!phone_otp.match(numberregx) || !phone_otp.match(correctWay)){
        document.getElementById("span_phoneOtp").innerText = "";
        return false;
    }
   
    else {
        document.getElementById("span_phoneOtp").style.color = "green";
        document.getElementById("span_phoneOtp").innerText = "";
       // count++;
        return true;
    }
}
const check_emailOtp = (email_otp)=>{
    const correctWay = "^[0-9]*$";
    const numberregx =  /^\d{6}$/; 
    if(email_otp=== "" || !email_otp.match(numberregx) || !email_otp.match(correctWay)){
        document.getElementById("span_emailOtp").innerText = "OTP Must Be Enter And Valid!";
        return false;
    }
    else{
    document.getElementById("span_emailOtp").style.color = "green";
    document.getElementById("span_emailOtp").innerText = "";
    return true;
}
}


const check_signup = (auth) => {
    if(count ==3) {
        auth = true;
        return auth;
    }
    else return auth;
}




export {check_name,check_email,check_signup,check_phone,check_password,check_PhoneOtp,check_emailOtp}




export const singUpValidation = (name, phoneNumber, email, password) =>{
    const Emailexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const Passexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
       // const nameExp = /^[A-Za-z][A-Za-z0-9_]{2,20}$/
        const nameExp = /^[a-z A-Z]{3,}$/
        const numberExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        let errors = {}
        let formIsValid = true
        const Numexp =  /^[0-9]/;
        let  emailNumCheck;
        if(email){
            if (isNaN(email)){
                if(email[0].match(Numexp)){
                 emailNumCheck = true;
                }
            }
        }
        const emailValid = Emailexp.test(email);
        const passValid = Passexp.test(password);
        const nameValid = nameExp.test(name);
        const phoneValid = numberExp.test(phoneNumber);
        if (!name) {
            formIsValid = false
            errors["nameError"] = "*Name field can not be empty"
        }
        else if (!nameValid) {
            formIsValid = false
            errors["nameError"] = "*Enter the valid name "
        }
        else {
            errors["nameError"] = ""
        }

        if (!phoneNumber) {
            formIsValid = false
            errors["numberError"] = "*Phone Number field can not be empty"
        }
        else if (!phoneValid ) {
            formIsValid = false
            errors["numberError"] = "*Enter the valid Phone Number"
        }
        else {
            errors["numberError"] = ""
        }
        if (!email) {
            formIsValid = false
            errors["emailError"] = "*Email field can not be empty"
        }
        if (emailNumCheck){
            formIsValid = false;
            errors["emailError"] = "*Enter the valid Email";
        }
        else if (!emailValid) {
            formIsValid = false
            errors["emailError"] = "*Enter the valid Email "
        }
        
        else {
            errors["emailError"] = ""
        }

        if (!password) {
            formIsValid = false
            errors["passError"] = "*Password field can not be empty"
        }
        else if (!passValid) {
            formIsValid = false
            errors["passError"] = "*Password must contain one upper and lower case, a number and  special character "
        }
        else if(password.length<8){
            formIsValid = false
            errors["passError"] = "*Password length must be atleast 8 characters"
        }
        else if(password.length>15){
            formIsValid = false
            errors["passError"] = "*Password length must not exceed 15 characters "
        }
        else {
            errors["passError"] = ""
        }

        return {formIsValid, errors}
}
export const verificationValidation = (emailOtp,phoneOtp) =>{
    const correctWay = "^[0-9]*$";
    const numberregx =  /^\d{6}$/; 
    let errors={}
    let formIsValid = true
  //  const emailValid = Emailexp.test(email);
    if (!emailOtp) {
        formIsValid = false
        errors["emailError"] = "*Field can not be empty"
    }
   else if( !emailOtp.match(numberregx) || !emailOtp.match(correctWay)){
    formIsValid = false
    errors["emailError"]= "*Enter the valid otp";
    }
    else {
        errors["emailError"] = ""
    }
    if(!phoneOtp){
        formIsValid = false
        errors["phoneError"] = "*Field can not be empty"
    }
    else if( !phoneOtp.match(numberregx) || !phoneOtp.match(correctWay)){
        formIsValid = false
        errors["phoneError"]= "*Enter the valid otp";
        }
    else {
        errors["phoneError"] = ""
    }
    return {formIsValid, errors}
}

export const forgotValidation = (email) =>{
    const Numexp =  /^[0-9]/;
    let  emailNumCheck =false;
    if(email){
        if (isNaN(email)){
            if(email[0].match(Numexp)){
                    emailNumCheck = true;
               }
            }
       }
    let errors = {}
    let formIsValid = true;

    if (!email || email.trim() === ""){
        formIsValid = false;
        errors["emailError"] = "*Field can not be empty";
    }
    if (email) {
        if (!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$/)) {
            formIsValid = false;
            errors["emailError"] = "*Please enter a valid email or Phone Number";
        }
    }
    if (email) {
        if (emailNumCheck){
            
            formIsValid = false;
            errors["emailError"] = "*Please enter a valid email or Phone Number";
        }
    }
    return {formIsValid, errors}
}
//
export const verificationCodeValidation = (emailOtp) =>{
    const correctWay = "^[0-9]*$";
    const numberregx =  /^\d{6}$/; 
    let errors={}
    let formIsValid = true
  //  const emailValid = Emailexp.test(email);
    if (!emailOtp) {
        formIsValid = false
        errors["emailError"] = "*Field can not be empty"
    }
   else if( !emailOtp.match(numberregx) || !emailOtp.match(correctWay)){
    formIsValid = false
    errors["emailError"]= "*Enter the valid otp";
    }
    else {
        errors["emailError"] = ""
    }
    return {formIsValid, errors}
}
export const newPasswordValidation = (password,confirmPassword) =>{
    const Passexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
    let errors = {}
   let formIsValid = true
    const passValid = Passexp.test(password);
    const confirmPassValid = Passexp.test(confirmPassword);
    if (!password) {
        formIsValid = false
        errors["passError"] = "*Password field can not be empty"
    }
    else if (!passValid) {
        formIsValid = false
        errors["passError"] = "*Password must contain one upper and lower case, a number and  special character "
    }
    else if(password.length<8){
        formIsValid = false
        errors["passError"] = "*Password length must be atleast 8 characters"
    }
    else if(password.length>15){
        formIsValid = false
        errors["passError"] = "*Password length must not exceed 15 characters "
    }
    else {
        errors["passError"] = ""
    }
    if (!confirmPassword) {
        formIsValid = false
        errors["confirmPassError"] = "*Password field can not be empty"
    }
    else if (!confirmPassValid) {
        formIsValid = false
        errors["confirmPassError"] = "*Password must contain one upper and lower case, a number and  special character "
    }
    else if(confirmPassword.length<8){
        formIsValid = false
        errors["confirmPassError"] = "*Password length must be atleast 8 characters"
    }
    else if(confirmPassword.length>15){
        formIsValid = false
        errors["confirmPassError"] = "*Password length must not exceed 15 characters "
    }
   else if(password!==confirmPassword){
        formIsValid = false
        errors["confirmPassError"] = "*Password and confirm password must be same "
    }
    else {
        errors["confirmPassError"] = " "
    }
  

    return {formIsValid, errors}

}

//login  validation:




export const loginValidations = (email, password) => {
    const Numexp =  /^[0-9]/;
    let  emailNumCheck;

  if(email){
  if (isNaN(email)){
    if(email[0].match(Numexp)){        
        emailNumCheck = true;
           
       }
  }
       
}              
    let formIsValid = true;
    let errors = {}
    if (!email || email.trim() === ""){
        formIsValid = false;
        errors["emailError"] = "*Field can not be empty";
    }
    if (email) {
        if (!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$/)) {
            formIsValid = false;
            errors["emailError"] = "*Please enter a valid email or Phone Number";
        }
    }
    if (email) {
        if (emailNumCheck){
            formIsValid = false;
            errors["emailError"] = "*Please enter a valid email or Phone Number";
        }
    }
    if (!password || password.trim() === "") {
        formIsValid = false;
        errors["passwordError"] = "*Password field can not be empty";
    }
    if (password) {
        if (!password.match( /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)) {
            formIsValid = false;
            errors["passwordError"] = "*Password must contain one upper and lower case,a number and  special character";
        }
        else if(password.length>15){
            formIsValid = false
            errors["passwordError"] = "*Password length must not exceed 15 characters "
        }
    }
    return {formIsValid, errors};
}

//validtion for change password inside edit profile:
export const changePasswordValidation = ( oldPassword,newPassword,confirmPassword) => {
const Passexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
// const Emailexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// const emailValid = Emailexp.test(email);
let errors = {}
let formIsValid = true
const passValid = Passexp.test(oldPassword);
const newPassValid = Passexp.test(newPassword)
const confirmPassValid = Passexp.test(confirmPassword);

if (!oldPassword) {
    formIsValid = false
    errors["passError"] = "*Password field can not be empty"
}
else if (!passValid) {
    formIsValid = false
    errors["passError"] = "*Password must contain one upper and lower case,a number and  special character "
}
else if(oldPassword.length<8){
    formIsValid = false
    errors["passError"] = "*Password length must be atleast 8 characters"
}
else if(oldPassword.length>15){
    formIsValid = false
    errors["passError"] = "*Password length must not exceed 15 characters "
}
else {
    errors["passError"] = ""
}
if (!newPassword) {
    formIsValid = false
    errors["newPassError"] = "*Password field can not be empty"
}
else if (!newPassValid) {
    formIsValid = false
    errors["newPassError"] = "*Password must contain one upper and lower case,a number and  special character "
}
else if(newPassword.length<8){
    formIsValid = false
    errors["passError"] = "*Password length must be atleast 8 characters"
}
else if(newPassword.length>15){
    formIsValid = false
    errors["newPassError"] = "*Password length must not exceed 15 characters "
}
else {
    errors["newPassError"] = ""
}
if (!confirmPassword) {
    formIsValid = false
    errors["confirmPassError"] = "*Password field can not be empty"
}
else if (!confirmPassValid) {
    formIsValid = false
    errors["confirmPassError"] = "*Password must contain one upper and lower case,a number and  special character "
}
else if(confirmPassword.length<8){
    formIsValid = false
    errors["confirmPassError"] = "*Password length must be atleast 8 characters"
}
else if(confirmPassword.length>15){
    formIsValid = false
    errors["confirmPassError"] = "*Password length must not exceed 15 characters "
}
else if(newPassword!==confirmPassword){
    formIsValid = false
    errors["confirmPassError"] = "* New password and confirm password must be same "
}
else {
    errors["confirmPassError"] = ""
}


return {formIsValid, errors}
}
//change password only email validation:
export const changePasswordEmailValidation = (email) => {
    const Emailexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = Emailexp.test(email);
    let errors = {};
    let formIsValid = true;
    const Numexp =  /^[0-9]/;
    let  emailNumCheck;
    if(email){
        if (isNaN(email)){
            if(email[0].match(Numexp)){
             emailNumCheck = true;
            }
        }
    }
    if (!email) {
      formIsValid = false;
      errors["emailError"] = "*Email field can not be empty";
    } if (!emailValid) {
      formIsValid = false;
      errors["emailError"] = "*Enter the valid Email ";
    }else if (emailNumCheck){       
        formIsValid = false;
        errors["emailError"] = "*Please enter a valid email or Phone Number";
    }
     else {
      errors["emailError"] = "";
    }
    return { formIsValid, errors };
}
//personal info update validation:
export const personalInfoValidation =(name,email,phone)=>{
    const Emailexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const Numexp =  /^[0-9]/;
    let  emailNumCheck;
    const nameExp = /^[a-z A-Z]{3,}$/
    const numberExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    const emailValid = Emailexp.test(email);
    const nameValid = nameExp.test(name);
    const phoneValid = numberExp.test(phone);
   
    if(email){
        if (isNaN(email)){
        //  console.log("))))",i)
          if(email[0].match(Numexp)){
           emailNumCheck = true;
          }
        }
      }
    let errors = {}
    let formIsValid = true
     if (!emailValid) {
        formIsValid = false
        errors["emailError"] = "*Enter the valid Email "
    }
   
        if(emailNumCheck){
            formIsValid = false
            errors["emailError"] = "*Enter the valid Email "
        }
  
    else {
        errors["emailError"] = ""
    }
   if (!nameValid) {
        formIsValid = false
        errors["nameError"] = "*Enter the valid name "
    }
    else {
        errors["nameError"] = ""
    }

    if (!phoneValid ) {
        formIsValid = false
        errors["phoneError"] = "*Enter the valid Phone Number"
    }
    else {
        errors["phoneError"] = ""
    }
    return {formIsValid, errors}
}

//create fixed price validation:
export const createFixedPriceValidation =(price,file,title,discription)=>{
    const correctWay = "^[0-9]*$";
    const nameExp = /^[a-z A-Z]{3,}$/
    let errors = {}
    let formIsValid = true
    // const descValid = nameExp.test(name);
    if (!price) {
        formIsValid = false
        errors["priceError"] = "*Field can not be empty"
    }
    else if( !price.match(correctWay)){
        formIsValid = false
        errors["priceError"] = "*Field must be in digit"
    }
    else {
        errors["priceError"] = ""
    }
    // if (!category) {
    //     formIsValid = false
    //     errors["categoryError"] = "*Field can not be empty"
    // }
    // else {
    //     errors["categoryError"] = ""
    // }
    if(file.length==0){
        formIsValid = false
        errors["fileError"] = "*Please select an image to upload"
    }
    else {
        errors["fileError"] = ""
    }
    if (!title) {
        formIsValid = false
        errors["titleError"] = "*Field can not be empty"
    }
    else {
        errors["titleError"] = ""
    }
    if (!discription) {
        formIsValid = false
        errors["discriptionError"] = "*Field can not be empty"
    }
    // else if(!descValid){
    //     formIsValid = false
    //     errors["discriptionError"] = "*Field can not be empty"
    // }
    else {
        errors["discriptionError"] = ""
    }

    return {formIsValid, errors}
}


//single offer validation:
export const createofferValidation = (title,discription,file,startDate,expireDate)=>{
    const nameExp = /^[a-z A-Z]{3,}$/
    let errors = {}
    let formIsValid = true
   
    if (!title) {
        formIsValid = false
        errors["titleError"] = "*Field can not be empty"
    }
    else {
        errors["titleError"] = ""
    }
    if (!discription) {
        formIsValid = false
        errors["discriptionError"] = "*Field can not be empty"
    }

    else {
        errors["discriptionError"] = ""
    }
    if(file.length==0){
        formIsValid = false
        errors["fileError"] = "*Please select an image to upload"
    }
    else {
        errors["fileError"] = ""
    }
    if(!startDate){
        formIsValid = false
        errors["startDateError"] = "*Please select starting date"
    }
    else {
        errors["startDateError"] = ""
    }
    if(!expireDate){
        formIsValid = false
        errors["expireDateError"] = "*Please select expiration date"
    }
    else {
        errors["expireDateError"] = ""
    }
    return {formIsValid, errors}
}
//create auction validation:
export const createAuctionValidation =(minimumBid,title,discription,file,startDate,expireDate)=>{
    const correctWay = "^[0-9]*$";
    const nameExp = /^[a-z A-Z]{3,}$/
    let errors = {}
    let formIsValid = true
    if (!minimumBid) {
        formIsValid = false
        errors["minimumBidError"] = "*Field can not be empty"
    }
    else if( !minimumBid.match(correctWay)){
        formIsValid = false
        errors["minimumBidError"] = "*Field must be in digit"
    }
    else {
        errors["minimumBidError"] = ""
    }
    if (!title) {
        formIsValid = false
        errors["titleError"] = "*Field can not be empty"
    }
    else {
        errors["titleError"] = ""
    }
    if (!discription) {
        formIsValid = false
        errors["discriptionError"] = "*Field can not be empty"
    }

    else {
        errors["discriptionError"] = ""
    }
    if(file.length==0){
        formIsValid = false
        errors["fileError"] = "*Please select an image to upload"
    }
    else {
        errors["fileError"] = ""
    }
    if(!startDate){
        formIsValid = false
        errors["startDateError"] = "*Please select starting date"
    }
    else {
        errors["startDateError"] = ""
    }
    if(!expireDate){
        formIsValid = false
        errors["expireDateError"] = "*Please select expiration date"
    }
    else {
        errors["expireDateError"] = ""
    }
    return {formIsValid, errors}
}