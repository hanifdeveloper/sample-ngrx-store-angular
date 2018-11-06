import * as StudentAction from './../actions/student.action';
import { Student } from './../../interface/student';

const initialState = {
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
        default:
            return state;
    }
}
