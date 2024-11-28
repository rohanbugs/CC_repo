import { Routes } from '@angular/router';

import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { TestComponent } from './Modules/test/test.component';
import { AccountComponent } from './Modules/settings/account/account.component';
import { SecurityComponent } from './Modules/settings/security/security.component';
import { SettingsComponent } from './Modules/settings/settings.component';
import { LoginComponent } from './Modules/auth/login/login.component';
import { SignupComponent } from './Modules/auth/signup/signup.component';
import { ResetpasswordComponent } from './Modules/auth/resetpassword/resetpassword.component';
import { SummaryComponent } from './Modules/summary/summary.component';
import { AllinsightsComponent } from './Modules/allinsights/allinsights.component';
import { SelectionReasonComponent } from './Modules/selection-reason/selection-reason.component';
import { TableviewComponent } from './tableview/tableview.component';
import { MonthlyClaimProgressComponent } from './Modules/summary/monthly-claim-progress/monthly-claim-progress.component';


export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'reset',component:ResetpasswordComponent},
    {path:'test',component:TestComponent},
    // {path:'claims',component:DashboardComponent},
    // {path:'account',component:AccountComponent},
    // {path:'security',component:SecurityComponent},
    // {path:'settings',component:SettingsComponent},
    {path:'settings',component:SettingsComponent, children: [
        { path:'account',component:AccountComponent  },
        { path:'security',component:SecurityComponent }
    ] },
    {path:'claims',component:DashboardComponent, children: [
        { path:'allinsights',component:AllinsightsComponent  },
    ] },
    {path:'summary',component:SummaryComponent},
    {path:'selection',component:SelectionReasonComponent},
    {path:'table',component:TableviewComponent},
    {path:'mcp',component:MonthlyClaimProgressComponent}
    
]