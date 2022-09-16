import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-assignment',
  templateUrl: './basic-assignment.component.html',
  styles: [
    `
      .mewmew {
        color: #fff;
      }
    `,
  ],
})
export class BasicAssignmentComponent {
  showParagraph = false;
  buttonClicks: any[] = [];

  toggleButton() {
    this.showParagraph = !this.showParagraph;
    this.buttonClicks.push(Date.now());
    console.log(this.buttonClicks);
  }

  getBackgroundColor() {
    if (this.buttonClicks.length > 4) {
      return 'blue';
    } else {
      return 'transparent';
    }
  }
}
