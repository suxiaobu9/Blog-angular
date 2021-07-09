import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-shortcut',
  templateUrl: './article-shortcut.component.html',
  styleUrls: ['./article-shortcut.component.css'],
})
export class ArticleShortcutComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  shortCutType: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.shortCutType = params['shortCutType'];
      console.log(this.shortCutType);
    });
  }
}
