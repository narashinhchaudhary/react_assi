import { SET_FILTER } from './Action';

const initialState = {
  fruits: ['apple', 'banana', 'orange', 'pear','pipepple','Apricots',
  'Annatto',
  'Annona',
  'Asian Pears',
  'Arava Melon',
  'Asam Kumbang',
  'Avocado'],
  filter: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export default reducer;