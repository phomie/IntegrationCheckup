console.log("i am an js file");
const weatherform = document.querySelector("#weather");
const urlcollectorform = document.querySelector("#urlcollectorform");

const urlsearch = document.querySelector("#urlcollector");
const search = document.querySelector("input");

const messageOne = document.querySelector("#messagone");
const messageTwo = document.querySelector("#messagtwo");

const jsonOne = document.querySelector("#jsonmessage1");

const jsonTwo = document.querySelector("#jsonmessage2");
const jsonTwo2 = document.querySelector("#jsonmessage3");
const jsonTwo3 = document.querySelector("#jsonmessage4");
const jsonTwo4 = document.querySelector("#jsonmessage5");
const jsonTwo5 = document.querySelector("#jsonmessage6");
const jsonTwo6 = document.querySelector("#jsonmessage7");

//Overgive the json object i collected
messageOne.textContent = "i am loading ";
messageTwo.textContent = "";
/*
urlcollectorform.addEventListener("submit", (e) => {
  e.preventDefault();

  const lookfor = urlsearch.value;
  console.log("lookfor", lookfor);

});
*/

  //try

  fetch("http://localhost:3001/resultsofScrap").then(async response => {
    try {
     const data = await response.json()
     console.log('response data?', data)
     console.log('response data?', data.scrapedData)
     console.log('response dataaSAdslots?', data.scrapedData.Checked_Elements[0])
     console.log('response dataaSAdslots?', data.scrapedData.Checked_Elements[1])
     console.log('response dataaSAdslots?', data.scrapedData.Checked_Elements[2])
     console.log('response dataaSAdslots?', data.scrapedData.Checked_Elements[3])
     objective = data.scrapedData;
     console.log('objective', typeof(objective));
     for (let scrapdata of Object.keys(objective)) {
        scrapdata = objective[scrapdata];
      console.log(JSON.stringify(scrapdata[0].dataLayer));
      jsonOne.textContent = "atf-ContentTyp:" + JSON.stringify(scrapdata[0].dataLayer);
      jsonTwo2.textContent = "atf-Channel:" + JSON.stringify(scrapdata[1].dataLayer2);
      
      jsonTwo3.textContent = "adslots:" + JSON.stringify(scrapdata[2].Adslots);
  }  
   } catch(error) {
     console.log('Error happened here!')
     console.error(error)
   }
   
  })

 toProof =  document.querySelector("#screanchoise").value
if(toProof=="2560x1440"){
console.log("Desktop")

}
