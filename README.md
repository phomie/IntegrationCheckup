
Ui Tool to collect data from website to proof integration 
<h1>IntegrationCheckup 🛒</h1>
<hl>
 <h2>Collect data from a website that is open headless with Google Puppeteer </h2>

 <h3>
  Puppeteer is a Node library that provides a high-level API to control headless browsers, such as Google Chrome or Chromium.<br>
  It allows you to automate tasks related to browser interaction, such as generating screenshots, crawling websites, and testing.<br>
  Background: this tool was created to automate daily tasks. When a website was assigned to the marketing network, the integrated advertisment technologie must be controlled in the same way. <br>
 Some of the colleagues wasn't firm to work with browser devtools. To simplify that, they needed only the url, and received the data in a couple of seconds. 
 </h3>
<h3>Used technologies:</h3>
<ul>
 <p>Frontend:</p>
<li>ReactJS</li>
 <li>google puppeteer</li>
</ul>
 <ul>
<p>Backend:</p>
 <li>NodeJs</li>
 <li>ExpressJS</li>
 <li>postgres db</li>
 <li>aws Ec2</li>
 <li>aws Route53</li>
</ul>

 
<h3>Usage:Collect Data </h3>
<p>The user opens the view and must paste an URL into the searchfield.<br> 
Puppeteer opens up a headless chromium browser and do it task like: searched fo the privacy center and click on "Agree to all" so the ad tech could start its job<br> 
or waited until some elements are loaded into the dome and start collecting data from the datalayer or from the dom tree.<br>
Or it looks into the videoplayer search for specific URLs that are fired and opens up. 
After all the tasks are done the data was stored in a db, the last entry was pulled out and displayed to the frontend    

</p>
<p> 
</p>

<p>
</p>

