from src.repositories.task_repository import TaskRepository
from src.models.task import TaskCreate, TaskUpdate

class TaskService:
    def __init__(self, task_repository: TaskRepository):
        self.task_repository = task_repository

    def create_task(self, task: TaskCreate):
        return self.task_repository.create_task(task)

    def get_task(self, task_id: int):
        return self.task_repository.get_task(task_id)

    def list_tasks(self, skip: int = 0, limit: int = 10):
        return self.task_repository.list_tasks(skip, limit)

    def update_task(self, task_id: int, task: TaskUpdate):
        return self.task_repository.update_task(task_id, task)

    def delete_task(self, task_id: int):
        return self.task_repository.delete_task(task_id)
