## E-commerce Prices
> This is the repository

### Software dependency

- Install NVM: https://github.com/creationix/nvm
- Get the credentials [`st-marche-lambda-production`, `st-marche-lambda-staging` and `st-marche-elasticsearch-staging`] at https://lastpass.com and put in `~/.aws/config` and `~/.aws/credentials` files
- Use the current node version, run `nvm use`
- To finish, install the dependencies, run `npm i`
- Enjoy!

### Useful commands

Interactive setup SSM variables:
```sh
npm run setup-ssm
```

#### Serverless
Deploy:
```sh
npx sls deploy -s <dev|staging|production>
```

Execute offline:
```sh
npx sls offline
```

Consult logs:
```sh
npx sls logs -t -f import -s production
```

#### Run test

```sh
npm test
```

GitHub Action on Local:
> Install [act](https://github.com/nektos/act#installation-through-package-managers)

```sh
act -s AWS_LAMBDA_PROFILES="$(cat ~/.aws/credentials)"
```
