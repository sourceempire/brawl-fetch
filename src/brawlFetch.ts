import { FetchBody, FetchOptions, FetchParams } from './types';

function createSearchParams(params: Record<string, string | number | boolean>): URLSearchParams {
  return new URLSearchParams(
    // Convert the params object into an object with string values only
    Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null)
      .reduce((acc, [key, value]) => {
        return { ...acc, [key]: value.toString() };
      }, {})
  );
}

function getDefaultHeaders(isFormData: boolean) {
  const headers: Record<string, string> = {};

  const token = localStorage.getItem('XSRF-TOKEN');
  if (token) {
    headers['X-XSRF-TOKEN'] = token;
  }

  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  return headers;
}

async function checkStatus<TResponseData>(res: Response): Promise<TResponseData> {
  const token = res.headers.get('X-XSRF-TOKEN');

  if (token) {
    localStorage.setItem('XSRF-TOKEN', token);
  }

  const body: TResponseData = await res.json();

  if (res.ok) {
    return body;
  } else {
    throw {
      status: res.status,
      ...body
    };
  }
}

export async function brawlFetch<TResponseData, U = FetchParams, V = FetchBody>(
  url: string,
  options: FetchOptions<U, V> = {}
): Promise<TResponseData> {
  const { method = 'GET', headers = {}, params = {}, body, signal } = options;

  const searchParams = createSearchParams(params || {});
  const finalUrl = `${url}?${searchParams}`;

  const isFormData = body instanceof FormData;

  const response = await fetch(finalUrl, {
    method,
    signal,
    credentials: 'include',
    headers: {
      ...getDefaultHeaders(isFormData),
      ...headers
    },
    ...(body && {
      body: isFormData ? body : JSON.stringify(body)
    })
  });

  return await checkStatus<TResponseData>(response);
}
