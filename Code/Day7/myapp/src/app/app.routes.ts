import { Routes } from '@angular/router';
import { Databinding } from './databinding/databinding';
import { DirectiveSample } from './directive-sample/directive-sample';
import { PipeSample } from './pipe-sample/pipe-sample';
import { Personal } from './pipe-sample/personal/personal';
import { Education } from './pipe-sample/education/education';
import { Experience } from './pipe-sample/experience/experience';
import { CustomerAdd } from './customer/customer-add/customer-add';
import { ProductTemplateDriven } from './product/product-template-driven/product-template-driven';
import { ProductModelDriven } from './product/product-model-driven/product-model-driven';
import { Firstsample } from './firstsample/firstsample';
import { ObservableSample } from './observable-sample/observable-sample';
import { ProductList } from './product/product-list/product-list';
import { SignalForm } from './product/signal-form/signal-form';
import { authGuard } from './guards/auth-guard';
import { check1Guard } from './guards/check1-guard';
import { check2Guard } from './guards/check2-guard';
import { check3Guard } from './guards/check3-guard';
import { Projection } from './projection/projection';

export const routes: Routes = [
    { path: 'home', component: Firstsample, title: 'Home 1', canMatch: [check3Guard] },
    { path: 'databinding', component: Databinding, title: 'Data binding', canActivate:[authGuard] },
    // { path: 'directive', component: DirectiveSample, title: 'Directive Demo' },
    { path: 'directive', loadComponent: ()=> import('./directive-sample/directive-sample').then(c=>c.DirectiveSample)
        , title: 'Directive Demo' },
    { path: 'pipe/:id', component: PipeSample, canActivateChild:[check2Guard], title: 'Pipe', children:[
        {path:'personal', component: Personal},
        {path:'education', component: Education},
        {path:'exp', component: Experience}
    ] },
    { path: 'datasharing', component: CustomerAdd, title: 'Data Sharing' },
    { path: 'templatedriven', component: ProductTemplateDriven, title: 'Template Driven' },
    { path: 'reactive', component: ProductModelDriven, title: 'Model Driven', canDeactivate:[check1Guard] },
    { path: 'observable', component: ObservableSample, title: 'RxJS' },
    { path: 'product-list', component: ProductList, title: 'Product List' },
    { path: 'signalform', component: SignalForm, title: 'Signal Form' },
    { path: 'projection', component: Projection, title: 'Content Projection' },
    { path: 'home', component: SignalForm, title: 'Home 2' },
    { path: '**', redirectTo: 'databinding' }

];
