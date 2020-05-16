import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  filled = true;

  checked = true;

  items = ['First', 'Second', 'Third', 'Fourth'];

  visible = false;
  drawerPlacement = 'left';


  onDrop(event: CdkDragDrop<string[]>) {
    console.log(this.items);
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  changeStarIconType() {
    this.filled = !this.filled;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


}
