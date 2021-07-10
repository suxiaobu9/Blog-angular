import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-shortcut',
  templateUrl: './article-shortcut.component.html',
  styleUrls: ['./article-shortcut.component.css'],
})
export class ArticleShortcutComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private articleSvc: ArticleService
  ) {}

  shortcutType: string = '';
  shortcuts: any = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.shortcutType = params['shortcutType'];
      this.articleSvc
        .getShortcutData(this.shortcutType ?? 'Technology')
        .subscribe((result) => {
          this.shortcuts = result;
        });
    });
  }
}
