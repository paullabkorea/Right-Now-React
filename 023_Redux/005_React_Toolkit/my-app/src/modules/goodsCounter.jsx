import {createSlice} from '@reduxjs/toolkit'

// import React from 'react'

// // 액션생성함수
// export const addNumber = () => {
//     return { type: "ADD" }
// }

// export const substractNumber = () => {
//     return { type: "SUBSTRACT" }
// }

// // 초기 값
// const initialState = {
//     stock: 10, // 재고
//     goods: 1    // 구매한 개수
// };

// const goodsReducer = (state = initialState, action) => {
//     console.log(action)
//     console.log(action.type)
//     console.log(state)
//     switch (action.type) {
//         case "ADD":
//             return {
//                 ...state,
//                 stock: state.stock - 1,
//                 goods: state.goods + 1
//             }
//         case "SUBSTRACT":
//             return {
//                 ...state,
//                 stock: state.stock + 1,
//                 goods: state.goods - 1
//             }
//         default:
//             return state
//     }
// }

// 초기 값
const initialState = {
    stock: 10, // 재고
    goods: 1    // 구매한 개수
};

export const counterSlice = createSlice({
    name: 'counter', // 이 리듀서의 이름
    initialState, // 초기값
    reducers: { // 함수로 바뀐 것이 중요한 특징, 기존처럼 유니크한 이름이 아니어도 됩니다.
        increment: (state) => {
            state.stock -= 1 // ...state가 없어졌습니다.
            state.goods += 1
        },
        decrement: (state) => {
            state.stock += 1 // ...state가 없어졌습니다.
            state.goods -= 1
        }
    }
})

console.log(counterSlice)

export const { increment, decrement } = counterSlice.actions // console.log로 찍어보면 알 수 있습니다.

export default counterSlice.reducer // reducers처럼 s붙지 않습니다. console.log로 찍어보면 알 수 있습니다.