
Ui Tool to collect data from website to proof integration 
<h1>IntegrationCheckup 🛒</h1>
<hl>
 <h2>Collect data from a website that is open headless with puppeeter </h2>
 <h2>Puppeteer is a Node library that provides a high-level API to control headless browsers, such as Google Chrome or Chromium.<br>
  It allows you to automate tasks related to browser interaction, such as generating screenshots, crawling websites, and testing.</h2>
<h3>Used technologies:</h3>
<ul>
 <p>Frontend:</p>
<li>ReactJS</li>
 <li>Ant Design 5.0</li>
</ul>
 <ul>
<p>Backend:</p>
 <li>NodeJs</li>
 <li>ExpressJS</li>
 <li>postgres db</li>
 <li>aws sam cli</li>
 <li>aws cognito</li>
 <li>aws route 53</li>
 <li></li>
 <li></li>
 <li></li>
 <li></li>
</ul>

 
<h3>Usage:Collect Data </h3>
<p>The first view is a serach and create form. The user opens the site and has the option to search for an order in the adserversystem<br>
If the order exist, the view opens the form with the filled out blanks with the reponse of the key data of the order.<br>
There are three button displayed: one to create multiple instances of the line item component. One to delete an instance. the other one to delete all<br>  
Is the instance of the lineitem form is created, the user can fill out the form. There a two option hwo to handle anline item form:<br>
1. Is it not filled out completly, the lineitem is stored in the db with the correponding order id via lambda function <br>
2. Is it completly filled out it will be first stored in the db, the data pulled out and then processed in a lambda function. It will be then pushed to the adserver <br>
 and the line item is created in the correponding Order inside the adeserver account       

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
