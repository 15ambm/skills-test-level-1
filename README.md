# Cevnn Payments Skills Test Level 1 #

Thank you for your interest in working with Cevnn Payments.  This take home coding test is intended to allow you to demonstrate your programming skills.  It is expect to take 2-4 hours to complete.  

### Steps for completion ###

* Fork this repository
* Add an endpoint to the API to fit the requirements
* Commit and push your changes
* Send a link to your fork to us
* Please be ready to explain your code at your next interview!

### Requirements

The file gladiators.csv is a list of American Gladiators with the first year that they appeared on the show, as well as the last year that they appeared on the show.  

We need you to write the following REST API:

GET     /public/getGladiators/:year
    Returns a JSON response containing a list of all American Gladiators that appeared on the show during the given year.

The endpoint has already been defined for you in routesPublic.js.  You need only open controllers/public.js and fill in the getGladiators function to return the JSON list of gladiators.

HINT: To view your output, try running
npm run dev
and view the out here:
http://localhost:3000/public/getGladiators/92