import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import defaultLanguage from '../assets/i18n/da.json';

@Component({
  selector: 'mxs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  private translateService: TranslateService = inject(TranslateService);

  constructor() {
    this.translateService.setTranslation('da', defaultLanguage);
    this.translateService.setDefaultLang('da');
  }
}
