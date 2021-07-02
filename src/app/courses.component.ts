import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `<h2>{{ getTitle() }}</h2>
        {{ courses.title | uppercase }} <br/>
        {{ courses.students }} <br/>
        {{ courses.rating | number }} <br/>
        {{ courses.price }} <br/>
        {{ courses.releaseDate }} <br/>

        <img src="{{ imageUrl }}"/>
        <table>
        <tr>
        <td [attr.colspan]="colSpan"></td>
        </tr>
        </table>
        <button class="btn btn-success" (click)="onSave($event)">Save</button>
        <div><input (keyup.enter)="onKeyUp($event)"/></div>
        
    `
})

export class CoursesComponent{
    title = 'Lists of courses';
    courses = {
        title: 'book',
        students: '345',
        rating: '4.2',
        price: '100.95',
        releaseDate: new Date(2021, 6,  2)
    };
    imageUrl = "https://unsplash.com/photos/MqT0asuoIcU/400/200";
    colSpan = 2;
    isActive = true;

    getTitle(){
        return this.title;
    }
    onSave($event:any){
        console.log('button was clicked', $event);
    }
    onKeyUp($event:any){
        console.log($event.target.value);
    }

    // constructor(service: CoursesService){
    //     this.courses = service.getCourses();
    // }
    
}