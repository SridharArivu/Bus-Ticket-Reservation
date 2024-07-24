
# Online Bus Ticket Booking Application

## Live Link
[https://journey-journals.netlify.app/search?source=Madurai&destination=Trichy&availableDate=2024-07-15]

## Setup/Configuration

1. Download or clone the repository.
2. Inside `src/main/resources`, create a file named `.env`.
3. Put the following information inside that file:
    ```
    MONGO_DATABASE="DB_Name"
    MONGO_USER="Username"
    MONGO_PASS="password"
    MONGO_CLUSTER="cluster_ID"
    rzp_key_id ="razorpay_ID"
    rzp_key_secret ="razorpay_Secret"
    ```
    or use any MongoDB database credentials.
4. Run the main file as a Spring application to run the backend.

## About the Project

This project is an online bus reservation system, which allows users to:

- Dynamically select seats based on their needs.
- View the booked e-tickets by logging into their account.
- Easily search and book bus tickets for various routes.
- Make secure payments for their bookings.
- Receive email confirmations for their reservations.

## Technologies Used

- **Spring**
- **Spring Security**
- **MongoDB**
- **Swagger**
- **JWT**

## Approach

I have ensured to utilize SOLID principles concepts to ensure the application is scalable and maintainable.

## Final Words

Thank you for staying with me up to this point. Suggestions and feedback are always welcomed.
