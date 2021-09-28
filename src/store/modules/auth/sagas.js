import { call, put, all, takeLatest } from 'redux-saga/effects'; // eslint-disable-line
import { toast } from 'react-toastify'; // eslint-disable-line
import { get } from 'lodash';
import * as actions from './actions'; // eslint-disable-line
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('User has been logged in successfully');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Invalid user or password.');
    yield put(actions.loginFailure());
  }
}
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}
// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { nome, email, password, id } = payload;
  try {
    if (id) {
      yield call(axios.put, '/users/', {
        nome,
        email,
        password: password || undefined,
      });
      toast.success('Account successfully edited!');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/users', { nome, email, password });
      toast.success('Account successfully created!');
      yield put(actions.registerCreatedSuccess());
      history.push('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);
    if (status === 401) {
      toast.warn('You must login again.');
      yield put(actions.registerFailure());
      return history.push('/login');
    }
    if (errors.length > 0) {
      errors.map((err) => toast.error(err));
    } else {
      toast.error('Unknown Error.');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
