
var accountsUsernames = ['admin'];
var accountsPassword = [];
var token = 0;
let btnRegister = document.querySelector('#btnRegister').addEventListener('click', () =>
{

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    if (username && password)
    {
        for(data of accountsUsernames)
        {
            if (data == username)
            {
                var token = 1;
            } else
            {
                var token = 0;
            }
        };
        if (token == 1)
            {
                registerCreate.registerAccount();
                var token = 0;
            } else {
                registerCreate.CreateAccount();
            };
    } else {
        alert('Preencha todos os campos.')
    }

    let usernameClear = document.querySelector('#username').value = "";
    let passwordClear = document.querySelector('#password').value = "";


});

var registerCreate = {

    CreateAccount: function()
    {
        let username = document.querySelector('#username').value;
        accountsUsernames.push(username)
        alert('Você foi registrado !!');
        this.registerAccount();
    },

    registerAccount: function()
    {
        let confirmEnter = window.confirm('Deseja entrar em sua conta ?');
        if (confirmEnter == true)
        {
            setTimeout(() => {
                alert('Acessando dados... (Aguarde)');
            }, 1000);
        };
    },
};