process.env.SKALE_RANDOM_SEED = 'skale';

var t = require('tape');
var sc = require('skale-engine').context();

t.test('sample', function (t) {
  t.plan(1);

  sc.env.SKALE_RANDOM_SEED = process.env.SKALE_RANDOM_SEED;

  sc.range(100)
    .sample(false, 0.1)
    .collect(function(err, res) {
      console.log(res);
      t.ok(res.length > 0 && res.length < 20);
      sc.end();
    });
});
