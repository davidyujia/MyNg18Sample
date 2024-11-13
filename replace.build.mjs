import { replaceInFileSync } from 'replace-in-file'
import { readFile } from 'fs/promises';
const json = JSON.parse(
  await readFile('./package.json')
);

var buildVersion = new Date().toISOString();

const options = {
  files: 'src/environments/environment.ts',
  from: [/{BUILD_VERSION}/g, /{FILE_VERSION}/g],
  to: [buildVersion, json.version]
};

try {
  let results = replaceInFileSync(options)
  console.log('Replacement results:', results)
}
catch (error) {
  console.error('Error occurred:', error);
}

// node ./replace.build.mjs && ng build
// https://stackoverflow.com/questions/41733660/how-to-insert-a-build-number-or-timestamp-at-build-time-in-angularcli
// https://github.com/adamreisnz/replace-in-file
