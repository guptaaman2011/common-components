import { POST, PUT, DELETE, GET } from '../../utils/HttpMethods';
import callApi from '../../utils/ApiCaller';

const url = process.env.REACT_APP_CHAT_SERVICE_URL;
const fileUrl = process.env.REACT_APP_FILE_SERVICE_URL;

const fetch = (payload, extraOptions = null) => {
  return callApi(POST, `${url}/message/search`, payload, extraOptions);
};

const create = (payload, extraOptions = null) => {
  return callApi(POST, `${url}/message`, payload, extraOptions);
};

const edit = (payload, extraOptions = null) => {
  return callApi(PUT, `${url}/message`, payload, extraOptions);
};

const remove = (payload, extraOptions = null) => {
  return callApi(DELETE, `${url}/message/delete`, payload, extraOptions);
};

const postFile = (payload, config) => {
  return callApi(POST, `${fileUrl}/${payload.application.code}/file`, payload, config);
};

const getRooms = (payload) => {
  const { appId, refId, userId } = payload;
  return callApi(GET, `${url}/room?appId=${appId}&refId=${refId}&userId=${userId}`)
};

const getCurrentUser = (payload) => {
  const { userId } = payload;
  return callApi(GET, `${url}/user/${userId}`)
}

const getAppConfigValue = (appCode, configKey) => {
  return callApi(GET, `${url}/config?appCode=${appCode}&configKeys=${configKey}`)
}

export { fetch, create, edit, remove, postFile, getRooms, getCurrentUser, getAppConfigValue };
