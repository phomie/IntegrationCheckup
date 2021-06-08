const request = require("postman-request")
const forecast = (latitude,longitude,callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=2fac9032fdecedc1f357e09612b9276a&query="+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+"&units=m"


    request({url,json:true}, (error,{body}={})=>{
   
    
    if(error){
        callback("unable to ceonnec location services ",undefined)
    
    }else if(body.error){
        callback("unable to find location services",undefined)
        console.log('Errorcode', body.error.code);
        console.log('Errormessage', body.error.info);
       
    
    }else{
        
        callback(undefined, 
                //temp : body.current.temperature,
                //feel: body.current.feelslike,
                //location:  body.location.name,
                 `${body.current.weather_descriptions[0]}: it is currently ${body.current.temperature} degrees out.It feels like ${body.current.feelslike} degrees`
        
          
        ,
        console.log(body.current.weather_descriptions[0]+":it is currently "+body.current.temperature+" degrees out.It feels like "+ body.current.feelslike+" degrees ")
        ) 
    }
    })
    
}


module.exports=forecast 




  
