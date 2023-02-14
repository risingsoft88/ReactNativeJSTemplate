import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import OnboardingReducer from './OnboardingReducer';
import TermsReducer from './TermsReducer';

const reducers = combineReducers({
    LoginReducer,
    OnboardingReducer,
    TermsReducer,
});

export default reducers;
