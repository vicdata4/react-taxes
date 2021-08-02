const initState = {
  list: [],
  formInfo: { inputFields: [] },
  submissionList: [],
  selectedSubmission: {},
  error: {},
}

const taxesReducer = (state = initState, action) => {
  switch (action.type) {
      case 'GET_TAXES':
        return { ...state, list: [...action.payload] }
      case 'SET_FORM_INFO':
        return { ...state, formInfo: {...action.payload} }
      case 'SET_SUBMISSIONS':
        return { ...state, submissionList: [...action.payload] }
      case 'SET_SELECTED_SUBMISSION':
        return { ...state, selectedSubmission: {...action.payload} }
      case 'DELETE_SUBMISSIONS':
        const updateList = state.submissionList.filter((x, i) => x.id !== action.payload);
        return { ...state, submissionList: [...updateList] }
      case 'TAXES_ERROR':
          return { ...state, error: action.payload }
      default:
          return state
  }
}

export default taxesReducer;