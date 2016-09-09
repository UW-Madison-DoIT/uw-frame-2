import { Component } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MdIconRegistry]
})
export class FrameDemoComponent {
  appTitle = "Demo Application of UW Components";
  userName = "Bucky";
  url = "/";
  menu : Array = [
    {
      name : "Settings",
      href : "settings"
    },
    {
      name : "Get Help",
      href : "https://kb.wisc.edu/myuw"
    },
    {
      name : "Sign out",
      href : "/portal/Logout"
    }
  ];
}
