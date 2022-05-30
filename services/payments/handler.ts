import * as DateLib from '../../libs/date.js';
import samplePackage from 'sample-package';

export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v2.0! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
      date: DateLib.getCurrentTime(),
      samplePackageResponse: samplePackage(),
    }),
  };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay).`);
  }, time * 1000)
);
