# Important Commands
* npm install
* npm init
* npm install (package) --save
* npm install --production
* npm install (package) --save-dev

# Key Concepts
* You'll want to handle everything involving packages with NPM rather than downloading packages and transferring them between PCs.
* You can come across errors when going from UNIX-based systems to something like Windows.
* Always use a .gitignore to essentially ignore and not commit any node modules
    * A developer can always install the package using ``npm install``
    * All packages are stored in package.json anyway.

# Scripts
* Generally a script can be used to run certain parts of the application.
* The usual practice is to create a "start" script in package.json, and give it the value of "node app.js"
    * This will essentially start the application, and give you all sorts of sweet details and useful developer tools as well!