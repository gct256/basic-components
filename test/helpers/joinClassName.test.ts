import { joinClassName } from "../../lib/helpers/joinClassName";

test("no arguments", () => {
  expect(joinClassName()).toBeUndefined();
});

test("undefined, null", () => {
  expect(joinClassName(undefined, undefined, undefined)).toBeUndefined();
  expect(joinClassName(null, null, null)).toBeUndefined();
});

test("boolean", () => {
  expect(joinClassName(false, true, false)).toBeUndefined();
});

describe("number", () => {
  test("unique number", () => {
    expect(joinClassName(42, 43, 44)).toBe("42 43 44");
  });
  test("not unique number", () => {
    expect(joinClassName(42, 43, 42)).toBe("42 43");
  });

  test("NaN, Infinity", () => {
    expect(joinClassName(NaN, Infinity, -Infinity)).toBe(
      "NaN Infinity -Infinity",
    );
  });
});

describe("string", () => {
  test("empty strings", () => {
    expect(joinClassName("", "", "")).toBeUndefined();
    expect(joinClassName(" ", " ", " ")).toBeUndefined();
  });

  test("unique strings", () => {
    expect(joinClassName("foo", "bar", "baz")).toBe("foo bar baz");
  });

  test("not unique strings", () => {
    expect(joinClassName("foo", "bar", "foo")).toBe("foo bar");
  });

  test("separated strings", () => {
    expect(joinClassName("foo bar", "  bar   baz  ", "baz qux")).toBe(
      "foo bar baz qux",
    );
  });
});

describe("object", () => {
  test("empty object", () => {
    expect(joinClassName({}, {}, {})).toBeUndefined();
  });

  test("unique truthy object", () => {
    expect(joinClassName({ foo: true }, { bar: 1 }, { baz: {} })).toBe(
      "foo bar baz",
    );
  });

  test("not unique truthy object", () => {
    expect(joinClassName({ foo: true }, { bar: 1 }, { foo: {} })).toBe(
      "foo bar",
    );
  });

  test("unique falsy object", () => {
    expect(
      joinClassName({ foo: false }, { bar: 0 }, { baz: "" }),
    ).toBeUndefined();
  });

  test("not unique truthy object", () => {
    expect(
      joinClassName({ foo: false }, { bar: 0 }, { foo: "" }),
    ).toBeUndefined();
  });

  test("unique mixed object", () => {
    expect(
      joinClassName(
        { foo: true },
        { bar: false },
        { baz: true },
        { qux: false },
      ),
    ).toBe("foo baz");
  });

  test("not unique mixed object", () => {
    expect(
      joinClassName(
        { foo: true },
        { bar: false },
        { foo: true },
        { bar: false },
      ),
    ).toBe("foo");
  });

  test("remove by object", () => {
    expect(
      joinClassName(
        "foo bar baz",
        { foo: true },
        { bar: false },
        { baz: true },
      ),
    ).toBe("foo baz");
  });
});

describe("array", () => {
  test("empty array", () => {
    expect(joinClassName([], [], [])).toBeUndefined();
  });

  test("unique array", () => {
    expect(joinClassName(["foo"], ["bar"], ["baz", "qux"])).toBe(
      "foo bar baz qux",
    );
  });

  test("not unique array", () => {
    expect(joinClassName(["foo"], ["bar"], ["foo", "bar"])).toBe("foo bar");
  });
});

test("mixed", () => {
  expect(
    joinClassName(
      undefined,
      null,
      false,
      true,
      42,
      "foo bar baz",
      {
        FOO: true,
        BAR: false,
        BAZ: true,
      },
      [
        undefined,
        null,
        false,
        true,
        42,
        "foo2 bar2 baz2",
        {
          FOO2: true,
          BAR2: false,
          BAZ2: true,
        },
      ],
      [
        undefined,
        null,
        false,
        true,
        42,
        "foo2 bar2 baz2",
        {
          FOO2: true,
          BAR2: false,
          BAZ2: true,
        },
      ],
    ),
  ).toBe("42 foo bar baz FOO BAZ foo2 bar2 baz2 FOO2 BAZ2");
});
