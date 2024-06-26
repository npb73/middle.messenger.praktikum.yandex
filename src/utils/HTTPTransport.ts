export enum Method {
  Get = 'Get',
  Post = 'Post',
  Put = 'Put',
  Patch = 'Patch',
  Delete = 'Delete',
}

type Options = {
  method: Method;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
};

export function queryStringify(data: Record<string, string>): string {
  return `?${Object.keys(data)
    .map(key => `${key}=${data[key]}`)
    .join('&')}`;
}

export class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';

  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(path = '/'): Promise<Response> {
    return this.request<Response>(this.endpoint + path);
  }

  public post<Response = void>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Post,
      data,
    });
  }

  public put<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Put,
      data,
    });
  }

  public patch<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Patch,
      data,
    });
  }

  public delete<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Delete,
      data,
    });
  }

  private request<Response>(url: string, options: Options = { method: Method.Get }): Promise<Response> {
    const { method, data } = options;

    const isFormData = data;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      let link = url || '';
      if (method === Method.Get && data) {
        link += queryStringify(data);
      }
      xhr.open(method, link);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject();
      xhr.onerror = () => reject();
      xhr.ontimeout = () => reject();

      if (!isFormData) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === Method.Get || !data) {
        xhr.send();
      } else {
        xhr.send(isFormData ? data : JSON.stringify(data));
      }
    });
  }
}
