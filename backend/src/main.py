from fastapi import FastAPI
from contextlib import asynccontextmanager

from fastapi.middleware.cors import CORSMiddleware

from src.db.database import init_db
from src.routers.tasks import router as tasks_router

app = FastAPI()

origins = [
    "http://localhost:5173",  # React local dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow only specific origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Context manager for the application lifecycle.
    Initializes the database on startup and performs any necessary cleanup on shutdown.
    """
    # Startup: Initialize the database
    init_db()
    print("Database initialized")

    yield  # This is where the application runs

    # Shutdown: Perform any necessary cleanup (if needed)
    print("Shutting down...")

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Task Management API"}



app.include_router(tasks_router)

# Use the lifespan context manager
