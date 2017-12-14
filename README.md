##MERN Heroku Starter Kit

<img src="https://user-images.githubusercontent.com/8204364/34019126-61577bb0-e0fb-11e7-91d5-1dfa022b6593.jpg">

A minimalistic Starter Kit for MERN stack with Create-React-App. No more overloading with extra libraries. Deploy your app to Heroku in few seconds.  

###Features
* ES6 on backend and frontend!
* Create-react-App tool for frontend
* Node/Express on backend
* Mongo/Mongoose/mLab as a Database

##Installation

Clone to your project

<pre><code>git clone https://github.com/Naterra/MERN-Heroku-Starter-Kit.git</code></pre>


Install modules
<pre><code>npm install
</code></pre>

Install Create React App
 
<pre><code>npm install -g create-react-app
create-react-app client
</code></pre>

Run App in Dev Server
<pre><code>npm run dev
</code></pre>

With Webpack dev server, your app will be available at <a href="http://localhost:3000">http://localhost:3000</a> and will be opened immidietly.

<img width="628" alt="create-react-app" src="https://user-images.githubusercontent.com/8204364/34019954-5e9436da-e0ff-11e7-9ec0-72653646d0d6.png">

## Deploy with Heroku Git

Now, you can make your App live.

Log in to heroku

<pre><code>heroku login</code></pre>

Deploy your changes
<pre><code>git add .
git commit -am "make it better"
git push heroku master
</code></pre>

After deployment is finished, run
<pre><code>heroku open
</code></pre>

Enjoy your work!