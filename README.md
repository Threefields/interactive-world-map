This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Hosting the application on a server with Apache

**You’ll need to have Node >= 8.10 on your local development machine (but it’s not required on the server)**

### Step 1: Clone this repository

`git clone https://github.com/Threefields/interactive-world-map.git`

### Step 2: Install project dependencies

Navigate to the root directory of the repository and run `yarn install`

```
$ cd interactive-world-map
$ yarn install
```

### Step 3: Build the project for production

While in the root directory, run `yarn build`

This builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Step 4: Deploy to server

Transfer everything from the **build folder** to your desired location on the server.

### Step 5: Configure the virtual host for Apache

```
<VirtualHost>
  ...
  DocumentRoot /path/to/build/folder
  ...
  <Directory "/path/to/build/folder">
    Options Indexes FollowSymLinks
    AllowOverride All

    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
  </Directory>
</VirtualHost>
```

-----

## Run the project locally

After cloning this repository, in the project directory, you can run:

### 1. `yarn install`

Installs all dependencies necessary to run the project

### 2. `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
