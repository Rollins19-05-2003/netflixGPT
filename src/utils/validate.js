export const isValidCredentials = (email, password) =>{
    const isValidEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isValidEmail) return "Invalid Email ID";
    if(!isValidPassword) return "Invalid Password";
    return null;
}