# userdata-extractor

An npm package that runs in the browser, to extract contents of user's social data in a meaningful way.

# Development

## Local setup

```sh
# Install dependencies
yarn install

# Run tests
yarn test
```

## Adding a new extractor

- Copy/paste an existing extractor in the appropriate `extractor/<integration>/<html|json>/` directory
- Initialize the extractor at the bottom of the file, ex:

```js
export const accountInformationJson = new AccountInformationJson(
  config.SERVICE_INSTAGRAM, // integration name
  "account_information/account_information.json", // File regex
  "account_information" // Table name
);
```

- Add the extractor to `src/extractor/<integration>/index.ts`

## Adding new sample data

When adding sample data (ex: `tests/data/social.zip`), please ensure all PII and media has been stripped out. Here are some CLI commands to speed up this process.

```bash
# Find and replace text in all json files recursively, starting from current directory
find . -name '*.json' -print0 | xargs -0 perl -pi -e 's/FIND_TEXT/REPLACE_WITH/g'

# Remove all jpg files recursively, starting from current directory
find . -type f -name '*.jpg' -delete
```

## Development notes

- All project file imports must end in `.js`, ex:
  `import { Table } from "../models/table/index.js";`

# Deployment

## Create a new release

When we're ready to release a new version of this package, visit [Github Releases](https://github.com/corsali/userdata-extractor/releases/new). Enter the following:

- Create a tag (ex: v0.0.2)
- Enter a release title: same as tag (ex: v0.0.2)
- Enter a description in this format:

```
# v0.0.2 - July 14, 2022
- Added a feature
- Fixed a bug
```

- Publish release. A github action will be triggered that creates the package.

## General TODOs

- Instagram exports either all HTML or all JSON. Need extractors for both
- Check non-english exports. Perhaps the column names will be different

# Current Coverage

[Track the currently supported services here.](https://vana.slab.com/posts/userdata-extractor-progress-29ci6256)
