import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleShortcutComponent } from './article/article-shortcut/article-shortcut.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ArticleShortcutComponent },
  { path: 'detail', component: ArticleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
