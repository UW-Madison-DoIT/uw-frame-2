import { Component, OnInit, Input } from '@angular/core';
import {OVERLAY_PROVIDERS} from '@angular2-material/core';

@Component({
  selector: 'uw-header',
  templateUrl: './uw-header.component.html',
  styleUrls: ['./uw-header.component.css'],
  providers: [OVERLAY_PROVIDERS]
})
export class UwHeaderComponent implements OnInit {

  private _name: string = '<no name set>';
  private _url : string = '/'; //default to root
  private _displayName : string = '';

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name() { return this._name; }

  @Input()
  set url(url: string) {
    this._url = (url && url.trim()) || '/';
  }


  get displayName(): string {
    return this._displayName;
  }

  @Input()
  set displayName(value: string) {
    this._displayName = value;
  }

  constructor() { }
  ngOnInit() {
  }

}
