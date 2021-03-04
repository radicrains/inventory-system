# iDiDit

## Application Description
iDiDit is an inventory management application here admin is able to keep track & manage store's inventory.

## Links
[Application Link](https://ididit-ims.herokuapp.com/ "iDiDit Application")

## Technologies
* _EJS_ is used to generate HTML with plain javascript to append to frontend.
* _Express-session_ is used to store the user state with each given being assigned a unique session.
* _Method-override_ is used to to convert HTTP verbs such as PUT or DELETE in places where the client doesn't support it
* _Bcrypt_ is used to hash and store passwords in database
* _MongoDB_ is used for data storage by making use of their collections and documents


## Objectives
The objective of the project is to build a working full CRUD (Create, Read, Update and Delete) application using Node.js, MongoDB, Express and EJS that adheres to MVC (Models, Views, and Controllers) file structure.

## Approches Taken
* Set up basic MVC structure with basic CRUD routes
* Set up database with collections in the MongoDB
* Built authentication page
* Followed initial wireframe design
* identify all possible routes for each model

## Accomplishments
* The app is able to meet the minimum requirement for this project.

## Additional Features that were under Considerations
* Linkage of user's checkout push to their data
* Admin/user to view who has borrowed the item (for borrowed inventory)

## Challenges
* Using two models objects in one view
* Clashing of two POST verb in one view

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


## RESTful Routes
<img src="public/readMe Images/RESTfulRoutes.png"/>