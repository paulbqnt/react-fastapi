# react-fastapi


### Prerequisites

- Python
- Node.js
- npm
- SQLite (pre-installed with Python)

### 0. Clone the repo (via your terminal/command prompt)
```shell
git clone https://github.com/paulbqnt/react-fastapi.git
```



### 1. Set up the backend

a. Create the virtual env

```shell
# react-fastapi/backend
python -m venv venv
```

b. Activate it
```shell
.\venv\Scripts\activate.bat # Windows

source ./venv/bin/activate # Mac/Linux
```

c. Install the dependencies
```shell
pip install -r requirements.txt
```

d. Run the API 
```shell
# backend/
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
