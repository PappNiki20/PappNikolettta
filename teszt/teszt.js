QUnit.module(`masodfokuEgyenletMegoldasa(a, b, c)`, function () {
  QUnit.test(`Létezik-e main?`, function (assert) {
    assert.ok(masodfokuEgyenletMegoldasa, "Létezik-e a main?");
  });
  QUnit.test(`Függvény létezik-e?`, function (assert) {
    assert.ok(
      typeof masodfokuEgyenletMegoldasa == "function",
      "Függvény-e a masodfokuEgyenlet?"
    );
  });

  QUnit.test(`masodfokuEgyenletMegoldasa(1,4,4)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(1, 4, 4), {
      X1: -2,
      X2: "nincs",
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(-1,1,2)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(1, 1, 2), {
      X1: -1,
      X2: -2,
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(1,1,-2)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(1, 1, -2), {
      X1: 1,
      X2: -2,
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(1,-1,2)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(1, -1, 2), {
      X1: "*komplex",
      X2: "*komplex",
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(0,2,2)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(0, 2, 2), {
      X1:"Nincs ilyen szám",
      X2: "-Infinity",
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(2,0,2)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(2, 0, 2), {
      X1: "*komplex",
      X2: "*komplex",
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(2,2,0)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(2, 2, 0), {
      X1: 0,
      X2: -1,
    });
  });

  QUnit.test(`masodfokuEgyenletMegoldasa(0,0,2)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(0, 0, 2), {
      X1: "Nincs ilyen szám",
      X2: "Nincs",
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(0,2,0)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(0, 2, 0), {
      X1:"Nincs ilyen szám",
      X2: "-Infinity",
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(2,0,0)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(2, 0, 0), {
      X1: 0,
      X2: "Nincs",
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(0,0,0)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(0, 0, 0), {
      X1: "Nincs ilyen szám",
      X2: "*komplex",
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(-1,-1,-1)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(-1, -1, -1), {
      X1: "*komplex",
      X2: "*komplex",
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(100,100,100)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(100, 100, 100), {
      X1: "*komplex",
      X2: "*komplex",
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(1.2,1.2,1.2)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(1.2,1.2,1.2), {
      X1: "*komplex",
      X2: "*komplex",
    });
  });
  QUnit.test(`masodfokuEgyenletMegoldasa(-1.2,-1.2,-1.2)`, function (assert) {
    assert.equal(masodfokuEgyenletMegoldasa(-1.2,-1.2,-1.2), {
      X1: "*komplex",
      X2: "*komplex",
    });
  });
  
});
