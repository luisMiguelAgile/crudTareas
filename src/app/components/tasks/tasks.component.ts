import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/task'
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  editState: boolean = false;
  tasks: Task[];
  taskToEdit: Task;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(event, task){
    const response = confirm('Desea eliminar?');
    if(response){
      this.taskService.deleteTask(task);
    }
  }

  editTask(event, task){
    console.log()
    this.editState = !this.editState;
    this.taskToEdit = task;    
  }
  updateTask(event, task){
    this.editState = true;
    this.taskService.updateTask(task);
    
  }
}
