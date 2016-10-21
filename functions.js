var userData = {'oreban4u':{'password':'12345','firstname':'Oreoluwa','lastname':'Banwo'},
             'francis':{'password':'12345','firstname':'Francis','lastname':'Umeoguaju'},
             'ralph':{'password':'12345','firstname':'Ralph','lastname':'Akpan'},
             'abdul':{'password':'12345','firstname':'Abdullahi','lastname':'Adesina'}
            };
    

function userLogin(username, password){
    if (password === userData[username]['password']){
        return {'firstname':userData[username]['firstname'], 'lastname':userData[username]['lastname']};
    }
    else{
        return "Invalid Username or Password";
    }
}
var sampledata = {'francis':[{'pubid': 1,'title': 'My first post', 'fullarticle':'hello, how are you this is the full article' },{'pubid': 2,'title': 'My second post', 'fullarticle':'hello, how are you this is the full article' }] ,'oreban4u':[{'pubid': 1,'title': 'My first post2', 'fullarticle':'hello, how are you this is the full article2' }] }; //the values is a list of dictionary



function createJournalEntry(username, title, fullarticle){
    if (sampledata[username] === undefined){
        sampledata[username] = [];
        sampledate[username].push({'pubid':1,'title':title,'fullarticle':fullarticle});
    }
    else{
        sampledata[username].push({'pubid':sampledata[username].length +1,'title':title,'fullarticle':fullarticle});
    }
 return sampledata;   
}

var user = 'francis';
var pass = '12345';
var tit = 'My final Bootcamp Experience'
var fullart = 'This has been the most exhilarating and insense experience of my life'

console.log(userLogin(user,pass));
console.log(createJournalEntry(user, tit, fullart));