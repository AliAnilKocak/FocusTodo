import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent {
  checked = true;

  items = ['First', 'Second', 'Third', 'Fourth'];

  onDrop(event: CdkDragDrop<string[]>) {
    console.log(this.items);
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

}
