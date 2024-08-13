function Check() {

    let fname = document.getElementById("fname").value.trim();
    let email = document.getElementById("email").value.trim();
    let pwd = document.getElementById("pwd").value.trim();
    let msg = document.getElementById("msg");
    msg.style.color=red;
    msg.textContent = "";
    if (fname === "") {
        msg.textContent = "Enter Name";
        return false;
    } else if (email === "") {
        msg.textContent = "Enter Email";
        return false;
    } else if (pwd === "") {
        msg.textContent = "Enter Password";
        return false;
    }
    return true;
}