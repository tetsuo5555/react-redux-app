// reducer側でも活用するため定数として定義してexportして置く
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => {
  type: INCREMENT
}

export const decrement = () => {
  type: DECREMENT
}
