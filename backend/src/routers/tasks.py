from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from typing import List
from src.models.task import TaskCreate, TaskUpdate, TaskRead
from src.db.database import get_session
from src.services.task_service import TaskService
from src.repositories.task_repository import TaskRepository

router = APIRouter(
    prefix="/tasks",
    tags=["tasks"]
)


def get_task_service(session: Session = Depends(get_session)) -> TaskService:
    task_repository = TaskRepository(session)
    return TaskService(task_repository)

@router.post("/", response_model=TaskRead)
def create_task(task: TaskCreate, task_service: TaskService = Depends(get_task_service)):
    return task_service.create_task(task)

@router.get("/", response_model=List[TaskRead])
def read_tasks(skip: int = 0, limit: int = 10, task_service: TaskService = Depends(get_task_service)):
    return task_service.list_tasks(skip, limit)

@router.get("/{task_id}", response_model=TaskRead)
def read_task(task_id: int, task_service: TaskService = Depends(get_task_service)):
    task = task_service.get_task(task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

@router.put("/{task_id}", response_model=TaskRead)
def update_task(task_id: int, task: TaskUpdate, task_service: TaskService = Depends(get_task_service)):
    task = task_service.update_task(task_id, task)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

@router.delete("/{task_id}", status_code=204)
def delete_task(task_id: int, task_service: TaskService = Depends(get_task_service)):
    if not task_service.delete_task(task_id):
        raise HTTPException(status_code=404, detail="Task not found")
    return  # Return a 204 No Content response
