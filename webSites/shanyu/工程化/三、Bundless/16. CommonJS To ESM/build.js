const rollup = require("rollup");
const commonjs = require("@rollup/plugin-commonjs")

let f;

f = async () => {
  const bundle = await rollup.rollup({
    input: ["./index.js"],
    plugins: [
      commonjs({ defaultIsModuleExports: true })
    ]
  })
  await bundle.write({
    file: "dist/main.mjs",
    format: "es"
  })
}

f()