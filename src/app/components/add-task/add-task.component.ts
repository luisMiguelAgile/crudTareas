import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = {
    id: '',
    title: '',
    description: ''

  }
  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.task.title != '' && this.task.description != '') {
      this.taskService.addTask(this.task);
      this.task.title = '';
      this.task.description = '';
    }
  }
}
