import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routes';
import { NgModule } from '@angular/core';

// components
import { OverviewComponent } from './components/overview/overview.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderListItemComponent } from './components/orders/order-list-item/order-list-item.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { ReturnListItemComponent } from './components/returns/return-list-item/return-list-item.component';
import { UserComponent } from './user.component';

// services
import { UserService } from './services/user.service';

import { UserRoutes as routes } from './user.routes';
import { AddressesComponent } from './components/addresses/addresses.component';
import { UserActions } from './actions/user.actions';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './effects/user.effects';
import { SharedModule } from '../shared/index';

@NgModule({
  declarations: [
    // components
    OverviewComponent,
    OrderListItemComponent,
    OrdersComponent,
    ReturnsComponent,
    ReturnListItemComponent,
    UserComponent,
    AddressesComponent
    // pipes

  ],
  exports: [
    // components
    // OverviewComponent,
    // OrderListItemComponent,
    // OrdersComponent,
    // ReturnsComponent,
    // ReturnListItemComponent,

  ],
  providers: [
    UserService,
    UserActions
  ],
  imports: [
    RouterModule.forChild(routes),
    EffectsModule.run(UsersEffects),
    SharedModule
  ]
})
export class UserModule {}
