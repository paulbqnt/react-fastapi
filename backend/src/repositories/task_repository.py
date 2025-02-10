from sqlmodel import Session, select
from src.models.task import Task, TaskCreate, TaskUpdate

class TaskRepository:
    def __init__(self, db: Session):
        self.db = db

    def create_task(self, task: TaskCreate) -> Task:
        db_task = Task.from_orm(task)
        self.db.add(db_task)
        self.db.commit()
        self.db.refresh(db_task)
        return db_task

    def get_task(self, task_id: int) -> Task:
        return self.db.get(Task, task_id)

    def list_tasks(self, skip: int = 0, limit: int = 10) -> list[Task]:
        return self.db.exec(select(Task).offset(skip).limit(limit)).all()

    def update_task(self, task_id: int, task: TaskUpdate) -> Task:
        db_task = self.get_task(task_id)
        if db_task:
            for key, value in task.dict(exclude_unset=True).items():
                setattr(db_task, key, value)
            self.db.commit()
            self.db.refresh(db_task)
        return db_task

    def delete_task(self, task_id: int) -> bool:
        db_task = self.get_task(task_id)
        if db_task:
            self.db.delete(db_task)
            self.db.commit()
            return True
        return False
