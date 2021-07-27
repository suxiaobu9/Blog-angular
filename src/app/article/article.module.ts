import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleShortcutComponent } from './article-shortcut/article-shortcut.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [ArticleShortcutComponent, ArticleDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  exports: [ArticleShortcutComponent],
})
export class ArticleModule {}
