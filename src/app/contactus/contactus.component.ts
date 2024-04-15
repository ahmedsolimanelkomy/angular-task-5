import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavComponent } from "../nav/nav.component";

@Component({
    selector: 'app-contactus',
    standalone: true,
    templateUrl: './contactus.component.html',
    styleUrl: './contactus.component.css',
    imports: [FooterComponent, NavComponent]
})
export class ContactusComponent {

}
