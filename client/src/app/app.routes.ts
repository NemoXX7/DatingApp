import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MemberList } from './members/member-list/member-list';
import { MemberDetail } from './members/member-detail/member-detail';
import { Lists } from './lists/lists';
import { Messages } from './messages/messages';
import { authGuard } from './_guards/auth-guard';
import { TestErrors } from './errors/test-errors/test-errors';
import { NotFound } from './errors/not-found/not-found';
import { ServerError } from './errors/server-error/server-error';
import { MemberEdit } from './members/member-edit/member-edit';
import { preventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes-guard';

export const routes: Routes = [
    {path: '', component: Home},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            {path: 'members', component: MemberList},
            {path: 'members/:username', component: MemberDetail},
            {path: 'member/edit', component: MemberEdit, canDeactivate: [preventUnsavedChangesGuard]},
            {path: 'lists', component: Lists},
            {path: 'messages', component: Messages},
        ]
    },
    {path: 'errors', component: TestErrors},
    {path: 'not-found', component: NotFound},
    {path: 'server-error', component: ServerError},
    {path: '**', component: Home, pathMatch: 'full'},
];
