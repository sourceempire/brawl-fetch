import { FetchOptions, ServerResponse } from './types';

function createSerarchParams(params: Record<string, string | number | boolean>): URLSearchParams {
  return new URLSearchParams(
    // Convert the params object into an object with string values only
    Object.entries(params).reduce((acc, [key, value]) => {
      return { ...acc, [key]: value.toString() };
    }, {} as Record<string, string>)
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

async function checkStatus<TResponseData>(res: Response) {
  const token = res.headers.get('X-XSRF-TOKEN');

  if (token) {
    localStorage.setItem('XSRF-TOKEN', token);
  }

  const body: ServerResponse<TResponseData> = await res.json();
  const succeeded = body.succeeded;

  delete body.succeeded;

  if (res.ok && succeeded) {
    return body as TResponseData;
  } else {
    throw {
      statusText: res.statusText,
      status: res.status,
      ...body
    };
  }
}

export async function brawlFetch<TResponseData>(
  url: string,
  options: FetchOptions = {}
): Promise<TResponseData> {
  const { method = 'GET', headers = {}, params = {}, body, signal } = options;

  const searchParams = createSerarchParams(params);
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
