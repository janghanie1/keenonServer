import request from 'request'
//const request = require('request')

export const createRemoteCall = async (req, res) => {
  const clientId = "7sinGcPtJnPB5tVX" 
  const secret = "qf32qxPGjCzXBVk0"
  const {uuid,
	 pointId,
	 storeId,
	 sceneCode,
	 robotId
  	} = req.body
  
  const tokenOption = {
	  uri : "https://console.peanut.keenonrobot.com/api/open/oauth/token",
	  method : "POST",	
	  headers:{
		'Content-Type':'application/x-www-form-urlencoded',
	  },
	  form:{
		  client_id : clientId,
		  client_secret : secret,
		  grant_type : "client_credentials"
	  },
	  json:true
  }
  const remoteOption = {
          uri : "https://console.peanut.keenonrobot.com/api/open/scene/v2/robot/call/task",
          method: "POST",
          form:{
                  uuid:uuid,
                  pointId:pointId,
                  storeId:storeId,
                  sceneCode:sceneCode,
                  robotId,robotId
          },
          json:true
  }

  function getToken(option){
  	return new Promise(function (resolve, reject){
		request.post(option, function(err, response, body){
			if(!err && response.statusCode == 200){
				resolve(body);
			}else{
				reject(err);
			}
		})
	})
  }
  async function callRobot(){
	let credential = await getToken(tokenOption)
	remoteOption.headers = {
		Authorization : credential.access_token
	}
	console.log(remoteOption)
	//request.post(remoteOption,function(err,response,body){res.send(response.statusCode)})
  }
  callRobot();
}

export const backRemoteCall = async (req, res) => {
  const clientId = "7sinGcPtJnPB5tVX"
  const secret = "qf32qxPGjCzXBVk0"
  const {
         storeId,
         robotId
        } = req.body

  const tokenOption = {
          uri : "https://console.peanut.keenonrobot.com/api/open/oauth/token",
          method : "POST",
          headers:{
                'Content-Type':'application/x-www-form-urlencoded',
          },
          form:{
                  client_id : clientId,
                  client_secret : secret,
                  grant_type : "client_credentials"
          },
          json:true
  }
  const remoteOption = {
          uri : "https://console.peanut.keenonrobot.com/api/open/scene/v1/robot/call/back/task",
          method: "POST",
          form:{
                  storeId:storeId,
                  robotId,robotId
          },
          json:true
  }

  function getToken(option){
        return new Promise(function (resolve, reject){
                request.post(option, function(err, response, body){
                        if(!err && response.statusCode == 200){
                                resolve(body);
                        }else{
                                reject(err);
                        }
                })
        })
  }
  async function backRobot(){
        let credential = await getToken(tokenOption)
        remoteOption.headers = {
                Authorization : credential.access_token
        }
        console.log(remoteOption)
        //request.post(remoteOption,function(err,response,body){res.send(response.statusCode)})
  }
  backRobot();
}