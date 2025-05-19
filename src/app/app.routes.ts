import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EmployeesComponent } from './views/employees/employees.component';
import { RegisterEmployeeComponent } from './views/register-employee/register-employee.component';
import { SchedulesComponent } from './views/schedules/schedules.component';
import { RegisterScheduleComponent } from './views/register-schedule/register-schedule.component';
import { EditSchedulesComponent } from './views/edit-schedules/edit-schedules.component';
import { PayrollsComponent } from './views/payrolls/payrolls.component';
import { RegisterPayrollsComponent } from './views/register-payrolls/register-payrolls.component';
import { EditPayrollsComponent } from './views/edit-payrolls/edit-payrolls.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'EditEmployee', component: EmployeesComponent },
  { path: 'registerEmployee', component: RegisterEmployeeComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: 'registerSchedules', component: RegisterScheduleComponent },
  { path: 'editSchedules', component: EditSchedulesComponent },
  { path: 'payrolls', component: PayrollsComponent },
  { path: 'registerPayrolls', component: RegisterPayrollsComponent },
  { path: 'editPayrolls', component: EditPayrollsComponent },
  

  
];
