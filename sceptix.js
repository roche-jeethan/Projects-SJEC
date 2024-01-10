const forms = document.querySelector(".forms"); 
const links = document.querySelectorAll(".link");

links.forEach(link => { link.addEventListener
    ("click", () => { forms.classList.toggle("show-signup"); }) })

    window.addEventListener('load', function() {
        document.getElementById('signupButton').addEventListener('click', addData);
    });

    function addData(){
        var email=document.getElementById('inputEmail').value;
        var pass=document.getElementById('inputPassword').value;

        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword_sg', pass);
    }

    function checkData(){
        var enterEmail=document.getElementById('email').value;
        var enterPassword=document.getElementById('password').value;

        var getEmail=localStorage.getItem('userEmail');
        var getPassword=localStorage.getItem('userPassword_sg');

        if(enterEmail==getEmail){
            if(enterPassword==getPassword){
                alert('Login Successfull');
                //window.location = 'https://raw.githack.com/roche-jeethan/Sceptix-Mark-I/main/profiles.html';
window.location = 'https://raw.githack.com/roche-jeethan/Sceptix-Mark-I/main/profiles.html';
            }
            else{
                alert('Wrong Password! Try Again');
            }
        }
        else{
            alert('User not Found!');
        }
    }
    window.addEventListener('load', function() {
        document.getElementById('loginButton').addEventListener('click', checkData);
    });
