import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'favorite',
    template: './favorite.component.html',
    inputs: ['isFavorite']
    // styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {
   @Input('isFavorite') isSelected!: boolean;

    constructor(){

    }

    ngOnInit() {
        
    }

    onClick() {
        this.isSelected = !this.isSelected; 
    }
}