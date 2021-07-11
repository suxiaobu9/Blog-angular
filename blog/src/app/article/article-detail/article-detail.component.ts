import { Observable } from 'rxjs';
import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private articleSrv: ArticleService
  ) {}

  id: number = 0;
  shortcutType: string = '';
  detailData: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.shortcutType = params['shortcutType'] ?? 'Technology';
      this.id = +params['id'];

      this.articleSrv
        .getShortcutData$(this.shortcutType)
        .subscribe((result) => {
          if (!Array.isArray(result)) return;
          var shortcutDatas = Array.from(result);
          this.detailData = shortcutDatas.find((ele) => {
            return ele.id === this.id;
          });
        });
    });
  }

  getMdUrl() {}
}
