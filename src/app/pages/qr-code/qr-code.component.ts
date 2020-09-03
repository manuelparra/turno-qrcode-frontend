import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {

  loadStatus: string  = 'flex';

  constructor() { }

  ngOnInit(): void {
  }
}
