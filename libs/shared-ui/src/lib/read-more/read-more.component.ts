import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zenklub-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
})
export class ReadMoreComponent implements OnInit {
  @Input()
  text = '';
  @Input()
  maxLength = 50;

  shownText;

  readmore = false;

  constructor() {}

  ngOnInit(): void {
    this.setShownText();
  }

  private setShownText() {
    this.shownText = this.text.substring(0, this.maxLength);
  }
}
