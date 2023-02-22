import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public toggleSideBar: boolean = true;

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use(translate.getBrowserLang() || 'en');
  }

  ngOnInit(): void { }

  public onSideBarToggle(toggleSideBar: boolean): void {
    this.toggleSideBar = toggleSideBar;
  }

}
