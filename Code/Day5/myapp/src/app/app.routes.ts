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

export const routes: Routes = [
    { path: 'databinding', component: Databinding, title: 'Data binding' },
    // { path: 'directive', component: DirectiveSample, title: 'Directive Demo' },
    { path: 'directive', loadComponent: ()=> import('./directive-sample/directive-sample').then(c=>c.DirectiveSample)
        , title: 'Directive Demo' },
    { path: 'pipe/:id', component: PipeSample, title: 'Pipe', children:[
        {path:'personal', component: Personal},
        {path:'education', component: Education},
        {path:'exp', component: Experience}
    ] },
    { path: 'datasharing', component: CustomerAdd, title: 'Data Sharing' },
    { path: 'templatedriven', component: ProductTemplateDriven, title: 'Template Driven' },
    { path: 'reactive', component: ProductModelDriven, title: 'Model Driven' },
    { path: '**', redirectTo: 'databinding' }

];
