import sinon, { SinonFakeXMLHttpRequestStatic, SinonFakeXMLHttpRequest } from 'sinon';
import { expect } from 'chai';
import { HTTPTransport, queryStringify } from '../utils/HTTPTransport';

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-expect-error tsignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = req => {
      requests.push(req);
    };

    instance = new HTTPTransport('');
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });

  it('method get() should be called with GET method', () => {
    instance.get('/');

    const [request] = requests;
    expect(request.method).to.equal('Get');
  });

  it('convert formData into string', () => {
    const str = '?login=login&password=password';
    const testData = {
      login: 'login',
      password: 'password',
    };
    expect(queryStringify(testData)).to.equal(str);
  });
});
