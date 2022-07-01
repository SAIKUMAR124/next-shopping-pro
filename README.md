# Shopping app with Next Js, typescript & Material UI

## Home Page
The data in the home page is fetched from FakeAPI using getServerSideProps
![image](https://user-images.githubusercontent.com/36232014/176824436-431b8900-e933-4c58-ae45-27c241579580.png)

## Product Details Page(dynamic)
The data in the home page is fetched from FakeAPI using getServerSideProps
The Product details can be fetched without interacting with the home page details.(can trigger the ['url'](http://localhost:3000/product/2) directly)
![image](https://user-images.githubusercontent.com/36232014/176825052-5aa6bed0-acfb-4152-945a-e79c12db958f.png)
added a button to show description based on users action.

Go to cart CTA is not shown when cart is empty

![image](https://user-images.githubusercontent.com/36232014/176825332-59d1828d-28a4-460b-bae4-35fa4fd14df0.png)
Go to Cart CTA is shown when cart is not empty

## Cart Page
Initally added 2 products in the cart
![image](https://user-images.githubusercontent.com/36232014/176825712-f89f8452-4a2a-4326-8d4a-0e960339f47e.png)
You can add, remove or decrease quantity of the product.

Added a CTA to continue shopping or proceed to payment.

## Payment Page
User will be navigated to this page after clicking on Payment CTA in Cart page
![image](https://user-images.githubusercontent.com/36232014/176826207-1b8a88ba-0c1d-4a8c-8158-a2d7af87d202.png)
This Page will just show success message and a button to navigate to Home page

When this page is triggered your cart will be empty.

## Empty Cart
![image](https://user-images.githubusercontent.com/36232014/176826467-929753f8-68be-4c0a-abd9-bb97b7edeb45.png)

## 404 Error Page
![image](https://user-images.githubusercontent.com/36232014/176826537-2cb9d256-fba3-4b7a-93ce-118b87fefa96.png)



