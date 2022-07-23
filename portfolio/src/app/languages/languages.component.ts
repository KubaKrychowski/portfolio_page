import { Component, OnInit } from '@angular/core';
import { LanguageCardTypeEnum } from '../shared/enums/language-card-type.enum';
import { LanguageCardModel } from '../shared/models/language-card.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  cards: LanguageCardModel[] = [
    {
      type: LanguageCardTypeEnum.LANGUAGE,
      Title: 'TypeScript',
      Version: '4.7.4 (latest)',
      thumbName: 'ts-logo.svg'
    },

    {
      type: LanguageCardTypeEnum.LANGUAGE,
      Title: 'JavaScript',
      Version: 'ES2015 (latest)',
      thumbName: 'js-logo.png'
    },

    {
      type: LanguageCardTypeEnum.LANGUAGE,
      Title: 'HTML',
      Version: '5.3 (latest)',
      thumbName: 'html-logo.png'
    },

    {
      type: LanguageCardTypeEnum.LANGUAGE,
      Title: 'SASS/SCSS',
      Version: '1.53 (latest)',
      thumbName: 'sass-logo.png'
    },

    {
      type: LanguageCardTypeEnum.FRAMEWORK,
      Title: 'Angular',
      Version: '10 - 14.1.1 (latest)',
      thumbName: 'angular-logo.png'
    },

    {
      type: LanguageCardTypeEnum.FRAMEWORK,
      Title: 'Bootstrap',
      Version: '5.2 (latest)',
      thumbName: 'bootstrap-logo.png'
    },

    {
      type: LanguageCardTypeEnum.FRAMEWORK,
      Title: 'Node.js',
      Version: '5.3 (latest)',
      thumbName: 'node-js-logo.png'
    },

    {
      type: LanguageCardTypeEnum.FRAMEWORK,
      Title: 'ASP .NET',
      Version: '5.3 (latest)',
      thumbName: 'dot-net-logo.png'
    },

    {
      type: LanguageCardTypeEnum.UTILITY,
      Title: 'Angular Materials',
      Version: '14.1.0 (latest)',
      thumbName: 'angular-materials-logo.png'
    },

    {
      type: LanguageCardTypeEnum.UTILITY,
      Title: 'Wix',
      Version: '',
      thumbName: 'wix-logo.png'
    },

    {
      type: LanguageCardTypeEnum.UTILITY,
      Title: 'Google firebase',
      Version: '5.3 (latest)',
      thumbName: 'google-firebase-logo.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
