import { Component, OnInit } from '@angular/core';
import { CompanyCardModel } from '../shared/models/company-card.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
  companiesDescription: CompanyCardModel[] = [
    {
      companyName: 'Ifs&Whiles Sp. z o.o',
      time: '9 months: 10.2021 - 06.2022',
      thumbSrc: 'its&whiles-logo.png',
      dailyDuties: [
        {
          title: ` I worked on a front-end application for manual testers training. The
        application is a simplified version of "Trello" with an additional
        option to turn some pre-programmed "bugs" on and off so that
        trainees could find them and see what the process of testing the
        software looks like.`,
        },
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'HTML',
        'bootstrap',
        'SASS',
        'ngx-bootstrap',
      ],
      biggestProblems: [
        {
          title: ` My Achilles' heel was creating drag-drop system for tasks between
          lists. After 2 days of fight with that, i changed my mindset a bit and
          tried to use ngx-drap-drop library which was success.`,
        },
      ],
      isExtended: false,
      className: 'ifs-and-whiles'
    },
    {
      companyName: 'Mieszkanie.pl Sp. z o.o',
      time: '3 months: 05.2021 - 08.2022',
      thumbSrc: '1613404563051.jpg',
      dailyDuties: [
        {
          title: `  front-end development using Angular, HTML and SCSS for mieszkanie.pl
        and hrenext.pl applications`,
        },

        {
          title: `Cooperation with the team on working on front-end solutions`,
        },

        {
          title: ` Creating materials based on delivered adobe xd projects for the
          marketing department like:`,

          description: ['mailings', 'banners in HTML'],
        },

        {
          title: `Deployment solutions under the SEO and PWA`,
        },

        {
          title: `Deployment web pages`,
        },

        {
          title: `Support in mieszkanie.pl development`,
        },

        {
          title: `Creating web pages in WordPress based on adobe xd projects`,
        },
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'HTML',
        'bootstrap',
        'SCSS',
        'ngx-bootstrap',
        'RxJS',
        'Angular Materials',
        'JavaScript',
      ],
      biggestProblems: [
        {
          title: `Create a gallery for offers in marketplace listing`,
          description: `SwiperJS is really nice looking library to do that. Unfortunetly it
          doesn't work well in angular projects. Most of features are bugged or
          disabled. If I say that i had to "rewrite" features like: adding
          gestures serives or thumbnails it will be good affirmative.`,
        },
        {
          title: `Drag events to put them in the next/previous week`,
          description: `At the beggining we planned to create drag system similar to
          implemented in every android mobile phone. When user hold event in the
          end of last day in week view, calendar should detect that event, and
          swipe to the next/previous week. Everything worked good till swipe
          moment cause then, mwl-calendar (its angular build in library) destroy
          instance of week which from event have been taken and creates new. Of
          course event was dissapearing then. Solution was easier than we would
          expect. All I had to do was create container to hold all events which
          I want to replace and put them back.`,
        },
      ],
      isExtended: false,
      className: 'mpl'
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleExtendedDescription(companyDescription: CompanyCardModel): void {
    companyDescription.isExtended = !companyDescription.isExtended;
  }
}
