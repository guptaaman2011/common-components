import { GET, POST, DELETE } from '../../utils/HttpMethods';
import callApi from '../../utils/ApiCaller';

const compareUrl = process.env.REACT_APP_COMPARE_SERVICE_URL;

const fetch = (url) => {
  console.log("Need to call url currently calling json file", url);
  return callApi(GET, url);
};

const getTemplate = (templateId) => {
  return callApi(GET, `${compareUrl}/api/template/${templateId}`);
};

const getSavedComparison = (comparisonId,  extraOptions = null) => {
  const url = `${compareUrl}/api/comparison/${comparisonId}`
  return callApi(GET, url, null, extraOptions);
};

const createComparison = (payload, extraOptions = null) => {
  return callApi(POST, `${compareUrl}/api/comparison`, payload, extraOptions);
};

const deleteComparisonById = (id, extraOptions = null) => {
  return callApi(DELETE, `${compareUrl}/api/comparison/${id}`, null, extraOptions);
}

const fetchAllComparisons = (extraOptions = null) => {
  return callApi(GET, `${compareUrl}/api/fetch/comparisons`, null, extraOptions);
}

export { fetch, getTemplate, getSavedComparison, createComparison, deleteComparisonById, fetchAllComparisons };
