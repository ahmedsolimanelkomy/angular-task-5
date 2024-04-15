import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-error',
    standalone: true,
    templateUrl: './error.component.html',
    styleUrl: './error.component.css',
    imports: [NavComponent, FooterComponent]
})
export class ErrorComponent {

}
