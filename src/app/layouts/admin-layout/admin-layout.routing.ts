import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { RelatoriosComponent } from 'app/relatorios/relatorios.component';
import { CatalogoComponent } from 'app/estoque/catalogo/catalogo.component';
import { CadastroCatalogoComponent } from 'app/estoque/catalogo/cadastro-catalogo/cadastro-catalogo.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from '../../login/login.component';
import { AuthGuard } from '../../auth.guard';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'login',            component: LoginComponent, canActivate: [AuthGuard]  },
    { path: 'catalogoFrame',    component: CatalogoComponent,  canActivate: [AuthGuard] },
    { path: 'dashboard',        component: DashboardComponent,  canActivate: [AuthGuard] },
    { path: 'user-profile',     component: UserProfileComponent,  canActivate: [AuthGuard] },
    { path: 'table-list',       component: TableListComponent,  canActivate: [AuthGuard] },
    { path: 'typography',       component: TypographyComponent,  canActivate: [AuthGuard] },
    { path: 'icons',            component: IconsComponent,  canActivate: [AuthGuard] },
    { path: 'maps',             component: MapsComponent,  canActivate: [AuthGuard] },
    { path: 'notifications',    component: NotificationsComponent,  canActivate: [AuthGuard] },
    { path: 'relatorios',       component: RelatoriosComponent,  canActivate: [AuthGuard] },
    { path: 'catalogo',         component: CatalogoComponent,  canActivate: [AuthGuard] },
    { path: 'catalogo-cadastro',component: CadastroCatalogoComponent,  canActivate: [AuthGuard] },
    { path: 'upgrade',          component: UpgradeComponent,  canActivate: [AuthGuard] },
];
