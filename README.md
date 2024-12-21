**E-commerce Store REST API**

**Overview**

This project is a Node.js-based REST API for an e-commerce store. It allows users to:

•	Browse products.
•	Add multiple quantities of products to a cart.
•	Apply discount codes for every nth order.
•	Checkout and generate an order invoice.

Admins can:
•	Generate discount codes.
•	View sales data including total items sold, total revenue, and discount statistics.
The API is designed for integration with a frontend UI, enabling seamless user interaction.
________________________________________
Features:

•	User Endpoints: 
o	Add, view, and manage cart items.
o	Apply discount codes (if eligible).
o	Checkout and clear the cart after order placement.

•	Admin Endpoints: 
o	Generate discount codes automatically for every nth order.
o	Retrieve sales analytics (items sold, revenue, discounts).
•	Business Logic: 
o	Discount codes are valid for one use and applicable to the total cart amount.
o	Simple in-memory data storage for products, carts, and orders.
________________________________________
Technologies Used
•	Node.js: Backend runtime environment.
•	Express: Web framework for creating routes.
•	Body-parser: Middleware for parsing JSON request bodies.
•	Nodemon: Development tool for auto-restarting the server.
________________________________________

Installation & Usage
1.	Clone the repository: 
2.	git clone <repository-url>
3.	cd ecommerce-store-api
4.	Install dependencies: 
5.	npm install
6.	Start the server: 
7.	npm start
8.	API is available at http://localhost:3000.
________________________________________
API Endpoints
User Routes
•	GET /products: Fetch all available products.
•	POST /cart/add: Add a product to the cart.
•	GET /cart/:userId: View cart items for a user.
•	POST /checkout: Checkout and place an order.
Admin Routes
•	POST /admin/discount-code: Generate a discount code for nth orders.
•	GET /admin/sales: View sales and discount analytics.
________________________________________
Notes
•	The API uses in-memory storage; data will reset on server restart.
•	Designed for integration with a frontend UI.
