import path from "path";
import fs from "fs/promises";

const urlPath = process.argv[2];
const args = process.argv.slice(3);

const filePath = path.resolve(urlPath);
const fileName = path.basename(filePath);

try {
  if (!args.length) {
    process.stderr.write(`error: please provide at least one environment variable name\n`);
    process.exit(1);
  }

  if (!fileName.endsWith(".env")) {
    process.stderr.write(`error: the file should have extension .env\n`);
    process.exit(1);
  }

  const entries = await fs.readFile(filePath, {
    encoding: "utf8",
  });

  const missingEnvs = []

  for(const arg of args) {
    if(!entries.includes(arg)) {
        missingEnvs.push(arg)
    }
  }

  if(missingEnvs.length > 0) {
    process.stderr.write(`error: missing environment variables: ${missingEnvs.join(", ")}\n`);
    process.exit(1);
  }

  console.log(`Set: ${filePath}`)
  console.log("All required environment variables are set.")  

} catch (error) {
  if (error.code === "ENOENT") {
    process.stderr.write(
      `error: the file ${fileName} doesn't exists in the folder\n`,
    );
  } else {
    process.stderr.write(`An unexpected error occurred: ${error}\n}`);
  }
  process.exit(1);
}
