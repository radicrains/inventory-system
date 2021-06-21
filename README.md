# iDiDit

## APPLICATION DESCRIPTION
iDiDit is an inventory management application here admin is able to keep track & manage store's inventory.
This app was design & build on administration storyline. Deeper User storyline is a future improvement for this app.

## APPLICATION LINK
[iDiDit - Inventory Management System](https://ididit-ims.herokuapp.com/ "iDiDit Application")

## TECHNOLOGIES
* _Express_ is a backend web application framework for Node.js
* _EJS_ is used to generate HTML with plain javascript to append to frontend.
* _Express-session_ is used to store the user state with each given being assigned a unique session.
* _Mongoose_ is an Object Data Modeling (ODM) library for MongoDB and Node.
* _Method-override_ is used to to convert HTTP verbs such as PUT or DELETE in places where the client doesn't support it
* _Bcrypt_ is used to hash and store passwords in database
* _MongoDB_ is used for data storage by making use of their collections and documents
* _Dotenv_ is a zero-dependency module that loads environment variables. It allows you to separate secrets from source code.


## OBJECTIVES
The objective of the project is to build a working full CRUD (Create, Read, Update and Delete) application using Node.js, MongoDB, Express and EJS that adheres to MVC (Models, Views, and Controllers) file structure.

## APPROACHES TAKEN
* Set up basic MVC structure with basic CRUD routes
* Set up database with collections in the MongoDB
* Built authentication page
* Followed initial wireframe design
* Identify all possible routes for each model

## ACCOMPLISHMENTS
* The app is able to meet the minimum requirement for this project.

## ADDITIONAL FEATURES THAT WERE UNDER CONSIDERATIONS ( AKA FUTURE IMPROVEMENTS)
* Linkage of user's checkout push to their data
* Admin/user to view who has borrowed the item (for borrowed inventory)

## CHALLENGES
* Using two models objects in one view
* Clashing of two POST verb in one view

## RESTFUL ROUTE
<img src="public/readMe Images/RESTfulRoutes.png"/>

## SCREENSHOTS
* ### Landing Page (Not Signed In)
<img src="public/readMe Images/landing page.png"/>

* ### Sign up / Log in Page
<img src="public/readMe Images/signin&login.png"/>

* ### Welcome Page
<img src="public/readMe Images/greetingspage.png"/>

* ### Dashboard
| Admin's       | User's        |
| ------------- |:-------------:|
| <img src="public/readMe Images/adminDashboard.png"/>     | <img src="public/readMe Images/userDashboard.png"/>       |


* ### New Inventory (admin only)
<img src="public/readMe Images/adminAdd.png"/>

* ### View Inventory List
<img src="public/readMe Images/inventoryList.png"/>

* ### Inventory Details 
| Admin's       | User's        |
| ------------- |:-------------:|
| <img src="public/readMe Images/inventoryShow.png"/>     | <img src="public/readMe Images/inventoryShow-user.png"/>    |


* ### Low Quantity Page (admin only)
<img src="public/readMe Images/adminOrder.png"/>

* ### Re-stock Page (admin only)
<img src="public/readMe Images/adminRestock.png"/>

* ### Account Control Page (admin only)
<img src="public/readMe Images/adminUserControl.png"/>
