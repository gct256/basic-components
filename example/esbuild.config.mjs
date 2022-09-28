import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    entryPoints: ["./example/script.tsx"],
    bundle: true,
    outfile: "./example/script.js",
    platform: "browser",
    target: "esnext",
    define: {
      "process.env.NODE_ENV": JSON.stringify("development"),
    },
    sourcemap: true,
  },
  {
    port: 3030,
    root: "./example",
  },
);
