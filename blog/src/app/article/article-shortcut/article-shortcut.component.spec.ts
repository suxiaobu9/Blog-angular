import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleShortcutComponent } from './article-shortcut.component';

describe('ArticleShortcutComponent', () => {
  let component: ArticleShortcutComponent;
  let fixture: ComponentFixture<ArticleShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleShortcutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
