import qs from 'qs';
import fetchJSONP from 'fetch-jsonp';

const request = (method, url, data)=> {
  return fetchJSONP(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
    .then(response=> {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('error');
      }
    })
    .then(data => data)
    .catch(error=> {
      throw new Error(error.message);
    });
};

export const get = (url, query)=> request('GET', query ? `${url}${qs.stringify(query)}` : url);
export const post = (url, data)=> request('POST', url, data);
export const put = (url, data)=> request('PUT', url, data);
export const del = (url, data)=> request('DELETE', url, data);
