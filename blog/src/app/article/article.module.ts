import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleShortcutComponent } from './article-shortcut/article-shortcut.component';

@NgModule({
  declarations: [ArticleShortcutComponent],
  imports: [CommonModule],
  exports: [ArticleShortcutComponent],
})
export class ArticleModule {}
