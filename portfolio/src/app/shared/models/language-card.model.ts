import { LanguageCardTypeEnum } from "../enums/language-card-type.enum";

export interface LanguageCardModel {
  type: LanguageCardTypeEnum
  thumbName: string;
  Title: string;
  Version: string;
}
