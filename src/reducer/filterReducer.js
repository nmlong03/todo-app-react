// const initState = {
//     filter: {
//       search: "",
//       status: "All",
//       priority: [],
//     },
//     todoList: [
//       { id: 1, name: "Learn Redux", completed: false, priority: "Medium" },
//       { id: 2, name: "Learn Redux 2", completed: false, priority: "Medium" },
//       { id: 3, name: "Learn Redux 3", completed: false, priority: "Medium" },
//     ],
//   };
//   const filterReducer = (state = initState, action) => {
//       console.log(state,action);
//     switch (action.type) {
//         case "filter/searchFilterChange":
//         return {
//           ...state,
//           filter: {
//             ...state.filter,
//             search: action.payload
//           }
//         }
//       default:
//         return state;
//     }
//   };
//   export default filterReducer;