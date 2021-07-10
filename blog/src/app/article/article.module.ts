import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleShortcutComponent } from './article-shortcut/article-shortcut.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ArticleShortcutComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ArticleShortcutComponent],
})
export class ArticleModule {}
