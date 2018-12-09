import * as StudentAction from './../actions/student.action';
import { Student } from './../../interface/student';

export interface AppState {
    title: string;
    students: Student[];
}

const initialState: AppState = {
    title: 'Home',
    students: [
        new Student('11610026', 'Muhammad Zakuan', 'Math'),
        new Student('11610027', 'Irfan Setiawan', 'Math')
    ]
};

export function studentReducer(state = initialState, action: StudentAction.StudentAction) {
    switch (action.type) {
        case StudentAction.ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload ]
            };
        case StudentAction.ADD_STUDENTS:
            return {
                ...state,
                students: [...state.students, ...action.payload]
            };
        case StudentAction.UPDATE_STUDENT:
            const student = state.students[action.payload.index];
            const updatedStudent = {
                ...student,
                ...action.payload.student
            };
            const students = [...state.students];
            students[action.payload.index] = updatedStudent;
            return {
                ...state,
                students: students
            };
        case StudentAction.DELETE_STUDENT:
            const oldStudents = [...state.students];
            oldStudents.splice(action.payload, 1);
            return {
                ...state,
                students: oldStudents
            };
        default:
            return state;
    }
}
