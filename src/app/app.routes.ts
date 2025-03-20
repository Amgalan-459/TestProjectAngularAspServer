import { Routes } from '@angular/router';
import { TestItemsComponent } from './test-items/test-items.component';
import { AppComponent } from './app.component';
import { SecondItemComponent } from './second-item/second-item.component';
import { HelpComponentComponent } from './help-component/help-component.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'testItems', component: TestItemsComponent },
    { path: 'secondItem', component: SecondItemComponent },
    { path: 'help', component: HelpComponentComponent }
];
