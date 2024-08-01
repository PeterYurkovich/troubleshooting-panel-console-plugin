import { Map as ImmutableMap } from 'immutable';

import { ActionType, TPAction } from './redux-actions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TPState = ImmutableMap<string, any>;

export type State = {
  plugins: {
    tp: TPState;
  };
};

const reducer = (state: TPState, action: TPAction): TPState => {
  if (!state) {
    return ImmutableMap({
      isOpen: false,
      query: '',
      queryResponse: {
        nodes: [],
        edges: [],
      },
    });
  }

  switch (action.type) {
    case ActionType.CloseTroubleshootingPanel:
      return state.set('isOpen', false);

    case ActionType.OpenTroubleshootingPanel:
      return state.set('isOpen', true);

    default:
      break;
  }
  return state;
};

export default reducer;
