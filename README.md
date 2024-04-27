Project Name: SBA 318 - Express Server Application 
- Creator: J.C. 
- Date Started: 4/18/2024

Project Info: This project is used to measures to test learners on the ability to use a MongoDB Database to store and interact with data.
API info:
* Options: zyn, programming, movie
* variables: x = option chosend, y = value of _id of individual entry (get this from GET all request below)
* To GET all data in each Option, simply send a GET request to /api/x
* To GET individual data from each option, simply send a GET request to /api/x/y
* To CREATE a new entry for a specific option, simply send a POST request to /api/x
* To Update an existing entry for a specific option, simply send a PUT request to /api/x/y
* To Delete an existing entry for a specific option, simply send a Delete request to /api/x/y

//---------------------Main Objectives-----------//
Create a server application with Node, Express, and MongoDB.
Create a CRUD API using Express and MongoDB.
Use MongoDB indexing to make efficient queries.
//-----------------------------Main Requirements and Weights-----------------//
* {5%} Use at least three different data collections within the database (such as users, posts, or comments).
* {10%}Utilize reasonable data modeling practices.
* {10%}Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.
* {10%}Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.
* {10%}Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.
* {10%}Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.
* {5%} Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.
    * Note: Double-check this requirement before submission. Testing your delete routes may leave you under the requirement. To be safe, populate your collections with sample data well above the requirement (we recommend 10-20 documents).
* {5%} Utilize reasonable code organization practices.
* {10%} Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
* {5%} Commit frequently to the git repository.
* {5%} Include a README file that contains a description of your application.
This README must include a description of your API's available routes and their corresponding CRUD operations for reference.
Level of effort displayed in creativity and user experience.

//--------------Bonus Requirements {not required/ only if you have time }-------------//
* {+1%} Use Mongoose to implement your application.
Note: The validation requirements above must still be implemented database-side, but should also be implemented application-side within your Mongoose schema(s).
* Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.
* Include sensible MongoDB data validation rules for at least one data collection.
Note: this may be accomplished in a number of ways. If you choose to perform this task outside of your application's code, you must include a way to test the validation within the application's routes. This can be as simple as providing a POST route that attempts to create an invalid document and displays the resulting error.