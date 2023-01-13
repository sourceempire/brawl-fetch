# brawl-fetch

`brawlFetch` is a function that allows you to make HTTP requests, similar to the built-in `fetch` function. However, brawlFetch includes additional functionality to make authorized requests to the server. This includes handling XSRF protection and checking the response status.

The specialized hooks, such as `useDelete` and `useGet`, are designed to make it easier to make specific types of HTTP requests. These hooks are generally preferred over the more general `useFetch` and `useFetchImmediate` hooks, as they eliminate the need to specify the HTTP method each time you make a request.

The `useFetch` hook serves as the foundation for all of the other fetch-related hooks in the brawl-fetch package. This means that any changes made to the `useFetch` hook will also be applied to all of the other hooks.

To ensure that your code remains maintainable and easy to understand, it is generally a good idea to avoid adding additional functionality to the specialized hooks (such as `useDelete`, `useGet`, etc.) and instead make any necessary changes directly to the `useFetch` hook. This will ensure that all of the fetch-related hooks behave consistently and that any changes you make will be applied consistently across all of the hooks.

## Hooks

- `useFetch`: a hook for making any type of HTTP request
- `useGet`: a hook for making GET requests
- `useDelete`: a hook for making DELETE requests
- `usePost`: a hook for making POST requests
- `usePut`: a hook for making PUT requests
- `useUpload`: a hook for uploading files

</br >

- `useFetchImmediate`: a hook for making an HTTP request immediately after rendering
- `useGetImmediate`: a hook for making a GET request immediately after rendering

## Other files

- `brawlFetch.ts`: the main module for the package
- `index.ts`: the entry point for the package
- `types.ts`: type definitions for the package

## Example

Here's an example of how to use the `useFetch` hook to make a GET request to an API:

```typescript
import { useFetch } from 'brawl-fetch';

function MyComponent() {
  const [request, { data, loading, error }] = useFetch<MyDataType>('/api/endpoint');

  // Run the request when the component mounts
  useEffect(() => {
    request();
  }, [request]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Data: {data}</div>;
}
```

Here's an example of how to use the `useFetchImmediate` hook to make a GET request to an API:

```typescript
import { useFetchImmediate } from 'brawl-fetch';

function MyComponent() {
  const { data, error, loading } = useFetchImmediate('/api/endpoint');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return <p>The data from the API is: {data}</p>;
}
```

Here's an example of how to use the `usePost` hook to make a GET request to an API:

```typescript
import React from 'react';
import { usePost } from 'brawl-fetch';

function MyComponent() {
  const [postData, { data, error, loading }] = usePost<MyDataType>('/api/endpoint');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    postData({ body: { name: 'John', age: 30 } });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

Here's an example of how to use the `useUpload` hook to make a GET request to an API:

```typescript
import React, { useRef } from 'react';
import { useUpload } from './useUpload';

function MyComponent() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadFile, { data, error, loading }] = useUpload<MyDataType>('/api/upload');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      uploadFile(file, { body: { fileName: file.name } });
    }
  }

  if (loading) {
    return <p>Uploading file...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={fileInputRef} />
      <button type="submit">Upload</button>
    </form>
  );
}
```
# brawl-fetch
