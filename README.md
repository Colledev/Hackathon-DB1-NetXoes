# NetXoes

This is a project focused on completing the Bootcamp offered by DB1 GROUP and Betech Integrado. This project was a Fullstack website to showcase products, favorite, add to cart and view order history.

## Features

-   **User Authentication**: Users can register, log in, and manage their accounts.
-   **Product**: Both users and non-users can view products, navigate, filter, and see product details.
-   **Favorite**: Only users can favorite products and manage them on a specific page.
-   **Cart**: Can add the product to the cart, and see the resume product, add, decrease the quantity, and delete the products.
-   **Order**: Users can view the order history.

## Technologies Used

-   **Frontend**: Vitejs, React.js, JavaScript, Material UI.
-   **Backend**: Node.js, Express, JavaScript, Prisma ORM.
-   **Database**: PostgreSQL.

## How to Use

1. **Installation**:

    - Clone the repository:

        ```bash
        git clone "https://github.com/Colledev/Hackathon-DB1-NetXoes.git"
        ```

    - Navigate to the project directory:

        ```bash
        cd Hackathon-DB1-NetXoes
        ```

    - Install client-side dependencies (frontend):

        ```bash
        cd frontend-hackathon-DB1
        npm install
        ```

    - Install server-side dependencies (backend):

        ```bash
        cd backend-hackathon-DB1
        npm install
        ```

2. **Configuration**:

    - Create a `.env` file in the `backend-hackathon-DB1` folder with necessary environment variables, such as database connection and API keys. And also do it to the `frontend-hackathon-DB1` for the backend URL.

3. **Execution**:

    - Start the server (backend):

        ```bash
        cd backend-hackathon-DB1
        npm run dev
        ```

    - Start the docker-compose (backend) / need docker compose Desktop:

        ```bash
        cd backend-hackathon-DB1
        docker-compose up
        ```

    - In another terminal window, start the client (frontend):

        ```bash
        cd frontend-hackathon-DB1
        npm run dev
        ```

4. **Access**:
    - Open the app in your browser using the address provided after starting the client (http://localhost:5173).

## Screenshots

- Home Page

![image](https://github.com/Colledev/Hackathon-DB1-NetXoes/assets/112740912/27c02c61-de8b-478e-ab32-a0ab1349c5c7)
![image](https://github.com/Colledev/Hackathon-DB1-NetXoes/assets/112740912/09fb58bf-687d-4de6-9aa9-9c084d90aeb7)
![image](https://github.com/Colledev/Hackathon-DB1-NetXoes/assets/112740912/5766047e-cb1a-471d-85de-3716d4b89900)

- Products Page

![image](https://github.com/Colledev/Hackathon-DB1-NetXoes/assets/112740912/f332ea7d-1b5b-4abe-8f08-163af98fe2df)
![image](https://github.com/Colledev/Hackathon-DB1-NetXoes/assets/112740912/3a641b2d-f52f-4d25-9926-a3a08e47fe75)

- Specific Product Page

![image](https://github.com/Colledev/Hackathon-DB1-NetXoes/assets/112740912/411142cb-98d3-4ea8-a609-c637b592e0c5)

- Favorite Page

![image](https://github.com/Colledev/Hackathon-DB1-NetXoes/assets/112740912/ddc51be3-6732-4b6e-a17b-03e210b156d3)

- Order Page

![image](https://github.com/Colledev/Hackathon-DB1-NetXoes/assets/112740912/a94ca860-5147-4fc7-be3e-6a888512cd0c)

## License

This project is licensed under the MIT License.
