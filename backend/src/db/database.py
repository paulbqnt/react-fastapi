from sqlmodel import SQLModel, create_engine, Session

# Define the database URL
DATABASE_URL = "sqlite:///./test.db"  # Change this to your desired database name

# Create the SQLAlchemy engine
engine = create_engine(DATABASE_URL, echo=True)

def init_db():
    """
    Initialize the database by creating all tables based on the SQLModel models.
    """
    import src.models.task  # Import your models to ensure they are registered with SQLModel
    SQLModel.metadata.create_all(engine)

def get_session():
    """
    Dependency to provide a SQLAlchemy session for use in route handlers.
    """
    with Session(engine) as session:
        yield session
