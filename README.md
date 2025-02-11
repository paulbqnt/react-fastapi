# react-fastapi


### Prerequisites

- Python
- Node.js
- npm
- SQLite (pre-installed with Python)


### 1. Set up the backend

a. Create the virtual env

```shell
python3 -m venv venv
```

b. Activate it
```shell
.\venv\Scripts\activate # Windows

source ./venv/bin/activate # Mac/Linux
```

c. Install the dependencies
```shell
pip install -r requirements.txt
```

d. Run the API (from backend/src)
```shell
uvicorn src.main:app --reload
```

### 2. Set up the frontend

a. Install the packages from the $src$ folder

```shell
cd frontend
npm install
```

b. Run the App (still from src/)

```shell
npm run dev
```
