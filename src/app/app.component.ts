import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'faq-accordion-main';

  questions: Question[] = [
    {
      title: 'What is Frontend Mentor, and how will it help me?',
      description: `Frontend Mentor offers realistic coding challenges to help developers improve their
    frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
    all levels and ideal for portfolio building.`,
      isOpened: true,
    },
    {
      title: 'Is Frontend Mentor free?',
      description: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free
    option providing access to a range of projects suitable for all skill levels.`,
      isOpened: false,
    },
    {
      title: 'Can I use Frontend Mentor projects in my portfolio?',
      description: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
    way to showcase your skills to potential employers!`,
      isOpened: false,
    },
    {
      title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      description: `The best place to get help is inside Frontend Mentor's Discord community. There's a help
    channel where you can ask questions and seek support from other community members.`,
      isOpened: false,
    },
  ];

  toggleAnswers(index: number): void {
    this.questions.forEach((question: Question, i:number) => {
      if (index === i) {
        if (this.questions[i].isOpened) {
          this.questions[i].isOpened = false;
        } else {
          this.questions[i].isOpened = true;
        }
      }
    });
  }
}
