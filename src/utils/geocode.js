const request = require("postman-request")

const geocode = (address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoicC1oZWltIiwiYSI6ImNrbjhpdmxzbjA0Zzgydm1yaW9rYTAwb3gifQ.dszh8TgQHXGVZA8XV2IN8g"
    request({url,json:true}, (error,{body}={})=>{
            
            if(error){
                callback("unable to ceonnec location services ",undefined)
    
    
            }else if(body.features.length===0){
    
                callback("unable to find location services",undefined)
    
    
            }else {
                callback(undefined, {
                     latitutde:body.features[0].center[1],
                     longitude: body.features[0].center[0],       
                     location:body.features[0].place_name
                })
            }    
        })
    
    }

 module.exports= geocode   