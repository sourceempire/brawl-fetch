# brawl-fetch

## Installation

```bash
npm install git+git@github.com:sourceempire/brawl-fetch.git#v1.2.0
```

Note that it might be a good idea to download the latest version

</br >

## Docs

`brawlFetch` is a function that allows you to make HTTP requests, similar to the built-in `fetch` function. However, brawlFetch includes additional functionality to make authorized requests to the server. This includes handling XSRF protection and checking the response status.

The specialized hooks, such as `useDelete` and `useGet`, are designed to make it easier to make specific types of HTTP requests. These hooks are generally preferred over the more general `useFetch` and `useFetchImmediate` hooks, as they eliminate the need to specify the HTTP method each time you make a request.

The `useFetch` hook serves as the foundation for all of the other fetch-related hooks in the brawl-fetch package. This means that any changes made to the `useFetch` hook will also be applied to all of the other hooks.

To ensure that your code remains maintainable and easy to understand, it is generally a good idea to avoid adding additional functionality to the specialized hooks (such as `useDelete`, `useGet`, etc.) and instead make any necessary changes directly to the `useFetch` hook. This will ensure that all of the fetch-related hooks behave consistently and that any changes you make will be applied consistently across all of the hooks.

### Hooks

- `useFetch`: a hook for making any type of HTTP request
- `useGet`: a hook for making GET requests
- `useDelete`: a hook for making DELETE requests
- `usePost`: a hook for making POST requests
- `usePut`: a hook for making PUT requests
- `useUpload`: a hook for uploading files

</br >

- `useFetchImmediate`: a hook for making an HTTP request immediately after rendering
- `useGetImmediate`: a hook for making a GET request immediately after rendering

### Other files

- `brawlFetch.ts`: the main module for the package
- `index.ts`: the entry point for the package
- `types.ts`: type definitions for the package

</br>

### Example

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

</br>

## Using `brawl-fetch` in a Local Environment with `npm link`

1. Clone the `brawl-fetch` project to your local machine.
2. Navigate to the `brawl-fetch` directory.
3. Run the `link` script defined in the `package.json` file:

    ```bash
    npm run link
    ```

    This script will first run the `build` script (`webpack`) to build the project, and then run `npm link` to link the project globally. The `npm link` command creates a symbolic link between the local project and the global environment, allowing the project to be used as a globally linked package.

4. Check that the `brawl-fetch` project has been linked globally by running the following command:

    ```bash
    npm ls -g --depth=0
    ```

    You should see `brawl-fetch` listed in the output of the command, indicating that the project has been linked globally.

5. In another project where you want to use the `brawl-fetch` package, run the following command:

    ```bash
    npm link brawl-fetch
    ```

    This will link the `brawl-fetch` project in the current project, allowing you to use the `brawl-fetch` package in the current project as if it were installed from npm registry.

6. To unlink the `brawl-fetch` project from the current project, run the following command:

    ```bash
    npm unlink brawl-fetch
    ```

    This will remove the symbolic link between the `brawl-fetch` project and the current project.

7. To unlink the brawl-fetch project globally, run the following command in the brawl-fetch directory:

    ```bash
    npm run unlink
    ```

    This script runs the `npm unlink -g brawl-fetch` command, which removes the global symbolic link of the brawl-fetch project, effectively uninstalling it from the global environment.

## Versioning

To update this package, follow the steps below:

1. When satisfied with the code, start by running

    ```bash
    npm run build
    ```

2. Commit and push the changes.

3. We need to create a new tag, choose release type `(patch, minor, major)` wisely, run:

    ```bash
    npm version <release_type>
    ```

    *Remember to update the Reademe's installation with the new version*

4. The new tag should be shown, it´s time to push that tag, run:

    ```bash
    git push --tags
    ```

5. Now go to the repository and click on `Tags`.

6. Clcik on the tag that you just created, it should be at the top of the list.

7. Now click on `Create release from tag`.

8. Enter a **Release title** and a description to describe whats new in the release.

9. Done! Now it is possible to install the new version in our other projects.
