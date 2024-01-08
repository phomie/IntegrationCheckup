
Ui Tool to collect data from website to proof integration 
<h1>IntegrationCheckup 🛒</h1>
<hl>
 <h2>Collect data from a website that is open headless with Google Puppeteer </h2>
 <h2>Puppeteer is a Node library that provides a high-level API to control headless browsers, such as Google Chrome or Chromium.<br>
  It allows you to automate tasks related to browser interaction, such as generating screenshots, crawling websites, and testing.</h2>
 <h3>Background of this tool was to automate daily tasks. When a website was assigned to the marketing network, the integrated advertisment technologie must be controlled in teh same way. <br>
 Some of the colleagues wasn't firm to work with browser devtools. To simplify this, they needed only the url, and received the data in a couple of seconds   
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
 <li></li>
</ul>

 
<h3>Usage:Collect Data </h3>
<p>The user opens the view and must paste an URL into the ser

</p>
<p>If the order is not found the user get the message that the order isnt found and that he can create an order<br>
 He creates the Order via Lambda function, store the key data in db and send as response the order id to the Line item component in the frontend <br> 
 The user can now create the x ammount of line items. Is it unfinished it will be stored in db and not pushed to gam   
</p>
<h3>Usage: Manage Campaigns </h3>
<p>If the user is open up the view they have the option to filter the displayed campaigns after their name<br>
All order and lineitem are pulled out of the db not the adserver. <br>
The line item are assigned via order id to correct. 
The user can now update the unfished Line item and push it afterwards to the adserver.
</p>
<h3>Security: </h3>
<p>Multi factor authefication via cognito user pool with self managed sms service</p>
