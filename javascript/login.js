var form = document.getElementById('login-form');
function handleForm(event) { 
    if(document.getElementById('username').value != "admin" && document.getElementById('passw').value != "admin"){
        alert('Nope');
        event.preventDefault(); 
    }
} 
form.addEventListener('submit', handleForm);
console.log(form);