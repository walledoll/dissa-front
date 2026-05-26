export default {
  plugins: [
    {
      rules: {
        "header-pattern": (parsed, when, pattern) => {
          const regex = new RegExp(pattern);
          return [
            regex.test(parsed.header),
            `Сообщение коммита должно соответствовать формату: FIX | Описание, Feature | Описание, Refactor | Описание или Test | Описание`,
          ];
        },
      },
    },
  ],
  rules: {
    "header-pattern": [2, "always", "^([A-Z]+-\\d+|FIX|Feature|Refactor|Test) \\| .+"],
    "header-min-length": [2, "always", 10],
    "header-max-length": [2, "always", 120],
  },
};
