import requireIndex from 'es6-requireindex';

const dir = requireIndex(__dirname);
const mock = {};
Object.keys(dir).forEach(item => {
  mock[item] = dir[item];
});

export default mock;