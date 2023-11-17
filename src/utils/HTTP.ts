type Options = {
  data?: unknown;
  timeout?: number;
  method: string;
  headers?: unknown;
};

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;

const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

export class HTTPTransport {
  private queryStringify(data: { [s: string]: unknown } | ArrayLike<unknown>) {
    const entries = Object.entries(data).map(([key, val]) => `${key}=${val}`);
    return `?${entries.join('&')}`;
  }

  private request = (url: string, options: Options, timeout: number = 5000) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(options.method, url);

      if (options.headers) {
        Object.entries(options.headers).forEach(([key, val]) => {
          return xhr.setRequestHeader(key, val as string);
        });
      }

      xhr.onload = () => resolve(xhr);
      xhr.onabort = () => reject;
      xhr.onerror = () => reject;
      xhr.timeout = timeout;
      xhr.ontimeout = () => reject;

      if (options.method === METHODS.GET || !options.data) xhr.send();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      else xhr.send(options.data);
    });
  };

  get: HTTPMethod = (url, options) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const queryUrl = options?.data ? `${url}${this.queryStringify(options.data)}` : url;
    return this.request(queryUrl, { ...options, method: METHODS.GET }, options?.timeout);
  };

  put: HTTPMethod = (url, options) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options?.timeout);
  };

  post: HTTPMethod = (url, options) => {
    return this.request(url, { ...options, method: METHODS.POST }, options?.timeout);
  };

  delete: HTTPMethod = (url, options) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options?.timeout);
  };
}
