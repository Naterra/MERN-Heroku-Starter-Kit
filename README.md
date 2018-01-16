## MERN Heroku Starter Kit

<b><a target="_blank" href="https://test-mern-heroku.herokuapp.com/">Demo</a></b>
<img src="https://user-images.githubusercontent.com/8204364/34019126-61577bb0-e0fb-11e7-91d5-1dfa022b6593.jpg">

A minimalistic Starter Kit for MERN stack with Create-React-App.

### Features
* ES6 on backend and frontend!
* <a href="https://github.com/facebookincubator/create-react-app">Create React App</a> tool for frontend
* Node/Express on backend
* Mongo/Mongoose/mLab as a Database

### Installation

1. Clone to your project directory

<pre><code>git clone https://github.com/Naterra/MERN-Heroku-Starter-Kit.git</code></pre>


2. Install modules
<pre><code>cd MERN-Heroku-Starter-Kit
npm install
</code></pre>

3. Install Create React App CLI
 
<pre><code>//install create-react-app if you dont have it installed before
npm install -g create-react-app
</code></pre>

Run your App on Dev Server
<pre><code>npm run dev
</code></pre>

With Webpack dev server, your app will be available at <a href="http://localhost:3000">http://localhost:3000</a> and will be opened immidietly.

<img width="628" alt="create-react-app" src="https://user-images.githubusercontent.com/8204364/34019954-5e9436da-e0ff-11e7-9ec0-72653646d0d6.png">

### Deploy with Heroku Git

1. Create your account at <a href="heroku.com">Heroku</a>
2. Create new app
<img width="668" alt="screen shot 2017-12-14 at 6 55 11 pm" src="https://user-images.githubusercontent.com/8204364/34020110-64bcf01e-e100-11e7-9f16-8fc1ad609fdb.png">
3. Log in to heroku using command line
<pre><code>heroku login</code></pre>

4. Initialize a git repository 

<pre><code>//from App root dir
git init
heroku git:remote -a yourAppName
</code></pre>



<b>Commit your changes</b>
<pre><code>git add .
git commit -am "Initial commit"
git push heroku master
</code></pre>

After deployment is finished, run
<pre><code>heroku open
</code></pre>

Enjoy your work!