userData = {'oreban4u':{'password:'12345','firstname':'Oreoluwa','lastname':'Banwo'},
             'francis':{'password:'12345','firstname':'Oreoluwa','lastname':'Banwo'},
             'ralph':{'password:'12345','firstname':'Oreoluwa','lastname':'Banwo'},
             'abdul':{'password:'12345','firstname':'Oreoluwa','lastname':'Banwo'}
            }
    

function userLogin(username, password){
    if (password === userData.username.password){
        return userData.username;
    }
    else{
        return "Invalid Username or Password";
    }
}