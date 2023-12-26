import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.page.html',
  styleUrls: ['./facture.page.scss'],
})
export class FacturePage implements OnInit {

  solde = "";
  showsolde = false;
  constructor() { }

  ngOnInit() {
    var solde_html: any =document.getElementById("solde")  as HTMLElement;
	this.solde= solde_html.value;
  }

  Refresh() {
    var solde_html: any =document.getElementById("solde")  as HTMLElement;
	this.solde= solde_html.value;
	this.showsolde=!this.showsolde;
  }
}
