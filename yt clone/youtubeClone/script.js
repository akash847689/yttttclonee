document.querySelector('.htmlForm').addEventListener('submit',
function (event){
    event.preventDefault();
    cleaError();
    const name = document.getElementById('uName').value.trim();
    const phone = document.getElementById('phoneNum').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim()

    let isValid = true;

    if(name ===''){
        showError('uName',"name is required")
        isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if(!phonePattern.test(phone)){
        isValid =false;
        showError('phoneNum',"phone n0. is not valid")
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    if(!emailPattern.test(email)){
        isValid = false;
        showError('userEmail',"email is not valid")
    }

    if(password.length < 6){
        isValid = false;
        showError('password',"password  is not valid")
    }
     if(password !== confirmPassword){
        isValid = false;
        showError('confirmPassword',"password is not match")
     }


     if(isValid){
        alert("form submit")
     }
    //  else{
    //     alert("form not submit")
    //  }
     
    function showError(inputId, message){
        const inputElement = document.getElementById(inputId)
        const errorElement = document.createElement('div')
        errorElement.textContent = message;
        errorElement.classList.add('error')
        inputElement.parentNode.appendChild(errorElement)


    }
    function cleaError(){
        const erorElement = document.querySelectorAll('.error');
       erorElement.forEach((element)=>{
           element.remove();
       })


    }



}

)