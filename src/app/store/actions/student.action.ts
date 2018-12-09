import { Action } from '@ngrx/store';
import { Student } from '../../interface/student';

export const ADD_STUDENT = 'ADD_STUDENT';
export const ADD_STUDENTS = 'ADD_STUDENTS';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

export class AddStudent implements Action {
    readonly type = ADD_STUDENT;
    constructor(public payload: Student) {}
}

export class UpdateStudent implements Action {
    readonly type = UPDATE_STUDENT;
    constructor(public payload: {index: number, student: Student }) {}
}

export class DeleteStudent implements Action {
    readonly type = DELETE_STUDENT;
    constructor(public payload: number) {}
}

export class AddStudents implements Action {
    readonly type = ADD_STUDENTS;
    constructor(public payload: Student[]) {}
}

export type StudentAction = AddStudent |
            AddStudents |
            UpdateStudent |
            DeleteStudent;


