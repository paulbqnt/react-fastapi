# react-fastapi

This project provides a quick plug-and-play app with a FastAPI backend and a React frontend. It's designed to be a simple starting point for building full-stack applications.

---

### Prerequisites

Make sure you have the following installed before setting up the project:

- Python (>=3.7)
- Node.js (>=14)
- npm (>=6)
- SQLite (pre-installed with Python)

---

### 0. Clone the repository

Clone the repo to your local machine using the following command:

```bash
git clone https://github.com/paulbqnt/react-fastapi.git
```


### 1. Set up the Backend

Follow these steps to set up the FastAPI backend:

**a. Create a virtual environment**

Navigate to the backend directory and create a virtual environment:

```bash
# Navigate to the backend folder
cd react-fastapi/backend

# Create a virtual environment
python -m venv venv
```

**b. Activate the virtual environment**

Activate the virtual environment:

- Windows: 

```bash
.\venv\Scripts\activate.bat
```

- Mac/Linux
```bash
source ./venv/bin/activate
```

**c. Install the backend dependencies**

Install the required Python packages:

```bash
pip install -r requirements.txt
```


**d. Run the FastAPI server**

Start the FastAPI backend using Uvicorn: 

```bash
# Navigate to the src folder in the backend
cd src

# Run the API server
uvicorn main:app --reload
```

**e. Test the API with Swagger UI**

Once the backend is running, you can test the endpoints via the Swagger UI:

Visit [http://localhost:8000/docs](http://localhost:8000/docs)


### Set up the Frontend

Follow these steps to set up the React frontend:

**a. Install frontend dependencies**

Navigate to the frontend directory and install the necessary npm packages:

```bash
# Navigate to the frontend folder
cd react-fastapi/src/frontend

# Install the packages
npm install
```

**b. Run the React app**

Start the React development server:

```bash
# Run the React app
npm run dev
```

### Open the Web App

Once both the backend and frontend are running, open the web app:

Visit [http://localhost:5173/](http://localhost:5173/)


### Next Steps

Now that your app is up and running, you can:

- Modify the backend in react-fastapi/backend/src/main.py
- Customize the frontend in react-fastapi/src/frontend/src/App.js




