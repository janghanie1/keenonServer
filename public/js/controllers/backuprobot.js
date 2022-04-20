import request from 'request'

function getPostResult(option){
	return new Promise(function (resolve, reject){
		request.post(option, function(err, response, body){
			if(!err){
				resolve(body);
                        }else{
                                reject(err);
                        }
		})
	})
}
	
export const createRemoteCall = async (req, res) => {
  const clientId = process.env.clientId 
  const secret = process.env.secret
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
          body:{
                  uuid:uuid,
                  pointId:pointId,
                  storeId:storeId,
                  sceneCode:sceneCode,
                  robotId,robotId
          },
          json:true
  }
  const errOption = {
	  uri : "https://console.peanut.keenonrobot.com/api/open/scene/v1/robot/call/task",
	  method : "GET",
	  json:true,
  }
  
  async function callRobot(){
	let credential = await getPostResult(tokenOption)
	remoteOption.headers = {
		'Authorization' : 'bearer ' + credential.access_token
	}
	let task = await getPostResult(remoteOption)
	console.log(task)
	const taskNo = task.taskNo
	errOption.headers = {
		'Authorization' : 'bearer ' + credential.access_token
	}
	errOption.qs = {
		taskNo : taskNo
	}
	console.log(errOption)

	request.get(errOption,function(err,response,body){res.send(response)})
  }
  callRobot();
}

export const backRemoteCall = async (req, res) => {
  const clientId = process.env.clientId
  const secret = process.env.secret
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

  async function backRobot(){
        let credential = await getAPIResult(tokenOption)
        remoteOption.headers = {
                Authorization : credential.access_token
        }
        console.log(remoteOption)
        //request.post(remoteOption,function(err,response,body){res.send(response.statusCode)})
  }
  backRobot();
}
