import { Routes } from "@angular/router";
import { Mainlayout } from "./shared/mainlayout/mainlayout";
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { CourseList } from "./course-list/course-list";

export const PUBLIC_ROUTES: Routes = [
    {
        path: '', component: Mainlayout, children: [
            { path: 'login', component: Login },
            { path: 'signup', component: Signup },
            { path: 'courses', component: CourseList }
        ]
    }
];