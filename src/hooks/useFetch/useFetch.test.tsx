import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import * as brawlFetch from '../../brawlFetch';
import { useFetch } from './useFetch';

describe('useFetch', () => {
  let brawlFetchSpy: jest.SpyInstance;

  beforeEach(() => {
    brawlFetchSpy = jest.spyOn(brawlFetch, 'brawlFetch');
  });

  test('onComplete callback should work for multiple requests', async () => {
    const expectedData = 'test-data';
    brawlFetchSpy.mockReturnValue(Promise.resolve(expectedData));

    const onComplete = jest.fn();
    const { result } = renderHook(() => useFetch<string>('https://example.com', { onComplete }));

    act(() => {
      const request1 = result.current[0];
      request1();
    });

    await waitFor(() => {
      expect(onComplete).toHaveBeenCalledTimes(1);
      expect(onComplete).toHaveBeenCalledWith(expectedData);
    });

    act(() => {
      const request2 = result.current[0];
      request2();
    });

    await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(2));
  });

  test('state flow should be correct', async () => {
    const expectedData = 'test-data';
    brawlFetchSpy.mockReturnValue(Promise.resolve(expectedData));

    const { result } = renderHook(() => useFetch<string>('https://example.com'));
    const request = result.current[0];
    const clearError = result.current[1].clearError;

    console.log(result.current[1]);

    expect(result.current).toStrictEqual([
      request,
      {
        clearError,
        loading: false,
        requestMade: false
      }
    ]);

    act(() => {
      request();
    });

    expect(result.current).toStrictEqual([
      request,
      {
        clearError,
        loading: true,
        requestMade: true
      }
    ]);

    await waitFor(() =>
      expect(result.current).toStrictEqual([
        request,
        {
          clearError,
          data: expectedData,
          loading: false,
          error: null,
          requestMade: true
        }
      ])
    );
  });

  test('onError callback on reject', async () => {
    const expectedError = {
      errorCode: 'UNCAUGHT_ERROR',
      message: 'Uncaught error in useFetch'
    };

    brawlFetchSpy.mockReturnValue(Promise.reject(new Error('test-error')));

    const onError = jest.fn();
    const { result } = renderHook(() => useFetch('https://example.com', { onError }));

    const request = result.current[0];

    act(() => {
      request();
    });

    await waitFor(() => {
      expect(onError).toHaveBeenCalledTimes(1);
      expect(onError).toHaveBeenCalledWith(expectedError);
    });
  });

  test('clearError should make error null', async () => {
    const expectedError = {
      errorCode: 'UNCAUGHT_ERROR',
      message: 'Uncaught error in useFetch'
    };

    brawlFetchSpy.mockReturnValue(Promise.reject(new Error('test-error')));

    const { result } = renderHook(() => useFetch('https://example.com'));

    const request = result.current[0];
    const clearError = result.current[1].clearError;

    const expectedAttributes = {
      loading: false,
      clearError,
      error: expectedError,
      requestMade: true
    };

    act(() => {
      request();
    });

    await waitFor(() => expect(result.current).toStrictEqual([request, expectedAttributes]));

    act(() => {
      clearError();
    });

    if (result.current[1].loading) {
      return fail('should not be loading');
    }

    expect(result.current[1].error).toBeNull();
  });

  it('should not consider AbortError as an error ', async () => {
    const expectedError = { name: 'AbortError' }; //mock for AbortController.abort() func;
    brawlFetchSpy.mockReturnValue(Promise.reject(expectedError));

    const onError = jest.fn();
    const { result } = renderHook(() => useFetch('/test', { onError }));

    const request = result.current[0];

    act(() => {
      request();
    });

    await waitFor(() => {
      expect(onError).not.toHaveBeenCalled();
    });
  });
});
