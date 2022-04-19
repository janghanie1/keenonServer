import request from 'request'

export const getPointList = async (req, res) => {
  const clientId = process.env.clientId
  const secret = process.env.secret
  const {sceneCode} = req.query
  
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
  const tableOption = {
          uri : "https://console.peanut.keenonrobot.com/api/open/scene/v1/target/list",
          method: "GET",
          qs:{
		  sceneCode : sceneCode
          },
//	  json:true
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
  async function getTableList(){
        let credential = await getToken(tokenOption)
        tableOption.headers = {
                Authorization : "bearer " + credential.access_token
        }
        request.get(tableOption,function(err,response,body){res.send(body)})
  }
  getTableList();
}
