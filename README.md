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

## License

This project is licensed under the MIT License.
