

//articles
var samplearticleData= {'francis':[{'pubid': 1,'title': 'My first post', 'fullarticle':'hello, how are you this is the full article' },{'pubid': 2,'title': 'My second  post', 'fullarticle':'hello, how are you this is the full article' }] ,'username2':[{'pubid': 1,'title': 'My first post2', 'fullarticle':'hello, how are you this is the full article2' }] } //the values is a list of dictionary
function viewlistofpub(username, datadict){
	//returns a dictionary {publist}
	var listofData=datadict[username]
	var stingAccumulator=[]
	for (var i=0; i<listofData.length;i++){
		stingAccumulator.push(listofData[i]['title'])
		//stingAccumulator=stingAccumulator ,listofData[i]['title'] 
	}
    return {"listpub":stingAccumulator}
}

function viewdetailpub(username, pubid,datadict){
	//returns a dictionary {publist}
	var listofData=datadict[username]
	
	for (var i=0; i<listofData.length;i++){
		if (listofData[i]['pubid']===pubid){
			return {"detailpublication": listofData[i]['fullarticle']}
		}
	}
}




