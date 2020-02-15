import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about-child',
  templateUrl: './about-child.component.html'
})
export class AboutChildComponent implements OnInit {
  child: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.child = this.route.snapshot.paramMap.get("id")
  }
}
