import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'card-project';

  taskList = [
    {
      title: 'Faculdade',
      description: 'Terminar trabalho de java do Sérgio',
      icon: 'work',
      backgroundColor: ' #5dade2 '
    },
    {
      title: 'Casa',
      description: 'Lavar roupas',
      icon: 'home',
      backgroundColor: ' #f8c471'
    },
    {
      title: 'Casa',
      description: 'Levar leona para passear',
      icon: 'home',
      backgroundColor: ' #117864 '
    },

  ]

  likeCounts = 0;
  countLikeClicks() {
    this.likeCounts += 1;
  }

}
