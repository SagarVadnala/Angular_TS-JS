import { Routes } from "@angular/router";
import { Adminlayout } from "./shared/adminlayout/adminlayout";
import { Course } from "./course/course";
import { Courses } from "./courses/courses";

export const ADMIN_ROUTES: Routes = [
    {
        path: '', component: Adminlayout, children: [
            { path: 'courses', component: Courses },
            { path: 'course/:id', component: Course },
        ]
    }
]