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
var samplearticleData = {'francis':[{'pubid': 1,'title': 'My first post', 'fullarticle':'hello, how are you this is the full article' },{'pubid': 2,'title': 'My second post', 'fullarticle':'hello, how are you this is the full article' }] ,'oreban4u':[{'pubid': 1,'title': 'My first post2', 'fullarticle':'hello, how are you this is the full article2' }] } //the values is a list of dictionary



function createJournalEntry(username, title, fullarticle, sampledata){
    if (sampledata.username === undefined){
        sampledata.username = [];
        sampledate.username.push({'pubid':1,'title':title,'fullarticle':fullarticle});
    }
    else{
        sampledata.username.push({'pubid':sampledata.username.pubid + 1,'title':title,'fullarticle':fullarticle})
    }
    return sampledata
}