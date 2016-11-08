module.exports = [
  {
    pug: './views/index.pug',
    router: false,
    redux: false,
    component: require('./lib/components/index/Index').default,
    name: 'index'
  }
];
