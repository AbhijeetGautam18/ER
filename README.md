Documentation
=============

ENTNT Technical Assignemnt: Simplified ERP System by Abhijeet Gautam.

  

1\. Project Overview
--------------------

An ERP (Enterprise Resource Planning) system is a software solution that integrates and manages core business processes and functions across an organization. It serves as a centralized platform for managing various aspects of business operations, including finance, human resources, supply chain, manufacturing, inventory, sales, and customer relationship management.

I have made an ERP sytem for a hypothetical lighting enterprise named "Gautam Lighting Solutions". This ERP system has mainly five pages or components namely

1.  Signup/Login Page: This is basic login and signup page
    

Signup/Login Page Screenshots

 <img src ='https://github.com/AbhijeetGautam18/ERP-System/assets/79470730/d3d78516-fed4-4a34-a1e5-65ef05d0bcf0' alt='Signup' height="200px">
    <img src='https://github.com/AbhijeetGautam18/ERP-System/assets/79470730/37b9778c-eacc-45db-a5a7-a2b782bdce47' alt='Login' height="200px">

  
2.  Dashboard: This page mainly contains summary of the enterprise like number of products, total number of customers or total sales etc. It also contains widgets like
    
    *   Clock for current date and time,
    *   Todo list for managing tasks,
    *   Charts for better understanding and visualization.
    *   Calendar to keep tracks of date and month and it also helps users to keep track of pending orders as it indicates pending orders on respective dates.
    

Dashboard Screenshots

<img src ='https://github.com/AbhijeetGautam18/ERP-System/assets/79470730/ea36f766-212b-4f4b-9dbb-3ad1704ab7a0' alt='Dashboard_img1' height="200px">
    <img src='https://github.com/AbhijeetGautam18/ERP-System/assets/79470730/e816c024-4b0a-4916-aa2f-d07077f3050b' alt='Dashboard_img2' height="200px">
  
3.  Product Management: This page has list of different products. User has the feature to add/edit/delete a product.
    

Product Management Page Screenshots

 <img src ='https://github.com/AbhijeetGautam18/ERP-System/assets/79470730/103f4404-4083-400b-9620-4b27ec5df936' alt='Product_img1' height="200px">
    <img src='https://github.com/AbhijeetGautam18/ERP-System/assets/79470730/41075132-9985-4d18-bb63-c951ee25b2e5' alt='Product_img2' height="200px">

  
4.  Order Management: This page has list of orders with details such as Customer Name, Product Ordered, Order Date etc. User has the feature to view order details, change status of order, or delete the order from the list.
    

Order Management Page Screenshots

<img src ='https://github.com/AbhijeetGautam18/ERP-System/assets/79470730/37c67d96-9829-4716-b851-efb3dee7866d' alt='Order_img1' height="200px">
    <img src='https://github.com/AbhijeetGautam18/ERP-System/assets/79470730/f249386e-65e8-4c03-879c-cbb46ee657e1' alt='Order_img2' height="200px">

2\. Project Setup
-----------------

To run/setup this project in your system follow the steps:

Step 1: Clone this repository in a folder of your system. To clone this repository use the following command:  
```
git clone https://github.com/AbhijeetGautam18/ERP-System.git
```
Step 2: Go to the main directory named 'ERP-System'. To change directory to ERP-System, run the following command:  
```
cd ERP-System
```
Step 3: To install the dependencies listed in package.json, run the following command:  
```
npm install
```
Note: This step will take 5-7 minutes, once completed follow next step.

Step 4: Now to run this website on your system, use following command:  
```
npm start
```
After following these steps, website will start running on your localhost server.

Refer to the video below for setting up the project.

### Project Setup Video
<video src = 'https://github.com/AbhijeetGautam18/ERP-System/assets/79470730/3e372643-d3e8-49ac-93ee-ea53c7bd04d0'></video>

3\. Interaction with website
----------------------------

Once the project is set up, user can navigate the website using navbar which has links to other pages.

Refer this video to see working of website, responsiveness of website is shown in the last of the video:

<video src = 'https://github.com/AbhijeetGautam18/ERP-System/assets/79470730/067b93b3-a8ba-4221-ab7c-1814d1a956a4'></video>

4\. Code Implementation
-----------------------

ReactJs and HTML is used to build components of a website and CSS is used for styling of those components. There are various components like watch, calendar, todo list, products listing, orders table etc which are built using HTML and ReactJs.

Each code is well structured and commented. User can see and understand the working of code easily.

5\. Features of Website
-----------------------

The various features of website are:

1.  The website has links and buttons through which user can navigate to different pages of the site.
2.  Dashboard has several tiles and charts for data interpretation which tells the summary of the enterprise.
3.  There is a clock on dashboard through which user can keep track of current time.
4.  There is calendar on dashboard through which user can keep track of day and dates. Also, it helps user to keep track of pending orders as it indicates pending orders on respective dates.
5.  User can keep track of their tasks using todo list on the dashboard.
6.  In Product Management page, user can add/edit/delete a product. User can also add the images of product.
7.  In Order Management page, user can update the status of their orders and can also see order details along with order image.
8.  The website is fully responsive. (Demo can be seen in Website Interaction video)

All the required and optional features asked in assessment is fulfilled.
