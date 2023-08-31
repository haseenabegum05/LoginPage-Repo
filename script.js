document.addEventListener("DOMContentLoaded", () => {
    const signup = document.getElementById("signup");
    const login = document.getElementById("login");

    const switchToSignUp = () => {
        login.style.transform = "rotate(-5deg)";
        login.style.animationName = "toRightSignup";
        login.style.animationDuration = "1s"; 
        setTimeout(() => {
            login.style.zIndex = "1";
            signup.style.zIndex = "2"; 
            login.style.animationName = "toRightSignup";
            login.style.animationDuration = "1s"; 
        }, 900);
    };

    const switchToLogin = () => { 
        signup.style.animationName = "toRightLogin";
        signup.style.animationDuration = "1s"; 
        setTimeout(() => {
            signup.style.zIndex = "1";
            login.style.zIndex = "2";
            signup.style.animationName = "toPosition";
            signup.style.animationDuration = "1s"; 
        }, 900);
    };

    signup.addEventListener("click", switchToSignUp);
    login.addEventListener("click", switchToLogin);
});
