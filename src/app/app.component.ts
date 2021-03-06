import { Component } from '@angular/core';
import { SlimLoadingBarModule, SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App6';

  constructor (private _loadingbar: SlimLoadingBarService, private _router: Router) {
    this._router.events.subscribe((event:Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event:Event): void {
    if(event instanceof NavigationStart){
      this._loadingbar.start();
    }
    if(event instanceof NavigationEnd){
      this._loadingbar.complete();
    }
    if(event instanceof NavigationCancel){
      this._loadingbar.stop();
    }
    if(event instanceof NavigationError){
      this._loadingbar.stop();
    }
  }
}
