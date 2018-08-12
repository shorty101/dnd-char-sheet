import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-character-attack-details',
  templateUrl: './character-attack-details.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./character-attack-details.component.css']
})
export class CharacterAttackDetailsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {size: 'lg'});
  }

}
