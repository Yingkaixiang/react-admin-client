import mocks from './mock/';

const mock = {};
for (let item of Object.keys(mocks)) {
  Object.assign(mock, mocks[item])
}

export default mock;
