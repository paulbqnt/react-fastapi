from fastapi import FastAPI
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from db.database import init_db
from routers.tasks import router as tasks_router

# Define the lifespan first
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

# Create the FastAPI app with the lifespan
app = FastAPI(lifespan=lifespan)  # Add this parameter

# Rest of your code remains the same
origins = [
    "http://localhost:5173",  # React local dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Task Management API"}

app.include_router(tasks_router)