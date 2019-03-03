# web-data-collector
General purpose base to create a tool that collects data from websites
Utilizes node.js, selenium and gecko driver. Firefox is the browser of choice
this tool serves only as a bare bones base and must eb built up to specify exactly the data to be collected

There is no package.json file because so that you can follow the below steps that correspond with the browser of your choice. There is no sense in making you install chromedriver if you only use firefox

# Prerequisites
node.js and a web browser

  make sure you have run the command in the cloned repo:
```
npm init
```

# What to do
once repo is cloned make sure you run the following commands. They are to be run on the root directory of the project.

in the terminal/command prompt run the command:
```
npm install selenium-webdriver
```

Once completed you can issue the next commands depending on wheter you are using firefox or chrome

  if you are using firefox:
```
npm install geckodriver
```

  if you are using chrome:
```
npm install chromedriver
```
