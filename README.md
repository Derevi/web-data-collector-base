# web-data-collector
General purpose base to create a tool that collects data from websites
Utilizes node.js, selenium and gecko driver. Firefox is the browser of choice
this tool serves only as a bare bones base and must eb built up to specify exactly the data to be collected

# Prerequisites
node.js V10.15.0 was used and you must have it installed

# What to do
once repo is cloned make sure you run the following commands...
  make sure you have run:
```
npm init
```
  then run:
'''
npm install selenium-webdriver
'''
Once completed you can issue the next commands depending on wheter you are using firefox or chrome
  if you are using firefox:
'''
npm install geckodriver
'''
  if you are using chrome:
'''
npm install chromedriver
'''
