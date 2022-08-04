import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'swiper/css/bundle';

// swiper core styles
import 'swiper/css';

// modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, {
  EffectCards,
  Navigation,
  Pagination,
  Swiper,
  SwiperOptions,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { ProjectModel } from '../shared/models/project.model';
import { ProjectStatusTypeEnum } from '../shared/enums/project-status-type.enum';

Swiper.use([Navigation, Pagination, EffectCards]);

new Swiper('.my-swiper', {
  // pass modules here
  modules: [Navigation, Pagination, EffectCards],
  // ...
});

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsGalleryComponent implements OnInit {
  projects: Array<ProjectModel> = [
    {
      title: 'Marketing Simulator',
      description:
        `Its a web application aimed at demonstration of free-market rules.
        Every user starts with a small company whose goal is to climb global rankings.`,
      status: {
        title: 'In progress',
        type: ProjectStatusTypeEnum.IN_PROGRESS
      },
      stackThumbs: [
        '../../assets/angular-logo.png',
        '../../assets/angular-materials-logo.png',
        '../../assets/dot-net-logo.png',
        '../../assets/gcs-logo.png'
      ],
      githubLink: '',
      photoSrc: '../../assets/marketing-simulator-logo.png',
    },
    {
      title: 'Company Management',
      description:
        `Web application letting small companies owners better manage`,
      status: {
        title: 'Canceled',
        type: ProjectStatusTypeEnum.CANCELED
      },
      stackThumbs: [
        '../../assets/angular-logo.png',
        '../../assets/bootstrap-logo.png',
        '../../assets/google-firebase-logo.png',
      ],
      githubLink: '',
      photoSrc: '../../assets/company-management.png',
    },
    {
      title: 'Admin Cloud',
      description:
        `Web application letting small companies owners better manage theirs employees work `,
      status: {
        title: 'In planning',
        type: ProjectStatusTypeEnum.IN_PLANNING
      },
      stackThumbs: [
        '../../assets/angular-logo.png',
        '../../assets/dot-net-logo.png',
      ],
      githubLink: '',
      photoSrc: '../../assets/admin-cloud-logo.png',
    },
  ];

  swiperConfig: SwiperOptions = {
    effect: 'cards',
    navigation: false,
    loop: true
  };
  constructor() {}

  ngOnInit(): void {}

  logSlide() {
    console.log('redirection to project page ');
  }
}
