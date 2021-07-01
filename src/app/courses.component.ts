import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `<h2>{{ getTitle() }}</h2>
        <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
        </ul>
        <img src="{{ imageUrl }}"/>
        <table>
        <tr>
        <td [attr.colspan]="colSpan"></td>
        </tr>
        </table>
        <button class="btn btn-success" [class.active]="isActive">Save</button>
    `
})

export class CoursesComponent{
    title = 'Lists of courses';
    courses;
    imageUrl = "https://unsplash.com/photos/MqT0asuoIcU/400/200";
    colSpan = 2;
    isActive = true;

    getTitle(){
        return this.title;
    }

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    
}