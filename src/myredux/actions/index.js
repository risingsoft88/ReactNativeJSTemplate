import * as ActionTypes from 'constants/ActionTypes';

export const setSkipOnboarding = (bool) => {
    return {
        type: ActionTypes.SKIP_ONBOARDING,
        payload: bool
    }
};

export const setSkipTerms = (bool) => {
    return {
        type: ActionTypes.SKIP_TERMS,
        payload: bool
    }
};

export const isLogged = (bool) => {
    return {
        type: ActionTypes.IS_LOGGED,
        payload: bool
    }
};
