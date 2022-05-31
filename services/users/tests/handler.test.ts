import * as handler from '../handler';

test('hello', async () => {
  const event = 'event';
  const context = 'context';
  const callback: any = (error: any, response: any) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
  };

  await handler.hello(event, context, callback);
});
