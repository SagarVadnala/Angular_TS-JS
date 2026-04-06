import { Routes } from "@angular/router";
import { Userlayout } from "./shared/userlayout/userlayout";
import { Orderhistory } from "./orderhistory/orderhistory";


export const USER_ROUTES: Routes = [
    {
        path: '', component: Userlayout, children: [
            { path: 'order-history', component: Orderhistory }
        ]
    }
]