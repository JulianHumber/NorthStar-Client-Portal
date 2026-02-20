# NorthStar Advisory Services Portal

## Project Overview
The NorthStar Client Portal is a server-rendered web application built by using Node.Js, Express.js and  EJS templates to view client data. Users can view a client list and structure to individual client pages. 

## Installation Instructions
1. Clone the repository to your local machine.
2. Open your terminal.
3. Navigate to `NorthStar Client Portal` root directory.
4. Run the following command to install the necessary dependencies.

## Application Startup Instructions
1. Ensure you are in the project root directory. 
2. Start server by running:
   `node app.js`
3. When the terminal displays "Server running on http://localhost:3000", open up your web browser.
4. Must go to: `http://localhost:3000`

## List of Implemented Routes
- GET /: The Home page showcasing an overview of the portal.
- GET /clients: The Client List page that displays all clients in the JSON.
- GET /clients/:id: The Client Details page that shows major information for an individual client.


## Bouns Grade Issue 

Issue: The ID in the URL is a string and the ID in the clients.json is a number that is a file.

Fix: The clientController.js is used to make sure the string can turn into a number so they are a good match. 

