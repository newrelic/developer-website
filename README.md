[![Community Project header](https://github.com/newrelic/open-source-office/raw/master/examples/categories/images/Community_Project.png)](https://github.com/newrelic/open-source-office/blob/master/examples/categories/index.md#category-community-project)

# developer.newrelic.com

[View known vulnerabilities](https://snyk.io/test/github/newrelic/developer-website)

## 🚀 Local development

You can serve this site locally to quickly see your changes and additions before you PR them. To get started, navigate into your new site’s directory and start it up, as follows.

```shell
cd developer-website/
yarn
yarn start
```

Your site is now running at `http://localhost:8000`!

### Dependencies

Node v17 is used in this project as specified in [.nvmrc](https://github.com/newrelic/developer-website/blob/master/.nvmrc).

## 📝 Unit tests

To run the unit tests, run `yarn test` in the terminal. If you would like to
have the tests automatically re-run, use `yarn run test:watch`.

## 🌎 Community

New Relic hosts and moderates an online forum where customers can interact with
New Relic employees as well as other customers to get help and share best practices. If you're looking for configuration help or more information about New Relic's products, please visit the [New Relic Explorers Hub](https://discuss.newrelic.com/).

Like all official New Relic open source projects, there's a related
[Community topic](https://discuss.newrelic.com/t/developer-newrelic-com/108069)
in the New Relic Explorers Hub.

## 🚧 Contributing

We welcome contributions to the New Relic Developer Site. Please review our
[Contributors Guide](CONTRIBUTING.md) prior to submitting any code.

Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project. If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company, please drop us an email at opensource@newrelic.com.

## 🚦Code of conduct

Please review and agree to our [Code of Conduct](CODE_OF_CONDUCT.md) prior to submitting any code.

## 🐛 Issues / enhancement requests

Please submit any issues or enhancement requests using one of our
[Issue Templates](https://github.com/newrelic/developer-website/issues/new/choose).
Please search for and review the existing open issues before submitting a new
issue to prevent the submission of duplicate issues.

## CI/CD

### fetch-observability-packs

- Purpose: This workflow pulls down Observability Packs from the GraphQL API, writes them to src/data/observability-packs.json (overwriting any previous content), and commits that file to the `main` branch.
- Trigger: Schedule, 12am everyday
