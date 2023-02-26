# Templates-CICD-Nodejs-Angular14

## Web App ([repo](https://github.com/david-rachwalik/Templates-CICD-Nodejs-Angular14))

Template for Node.js server compatible with Angular v14 web application

### Project Commands Used (global)

Install linting (ESLint) & formatting (Prettier)

```bash
npm i -D eslint prettier
npm i -D eslint-config-prettier eslint-plugin-prettier
npm i -D eslint-config-airbnb-base eslint-plugin-import eslint-config-airbnb-typescript
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

[Prepare repository root for Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/deploy-local-git?tabs=cli#prepare-your-repository)

- _Node.js:_ server.js, app.js, or package.json with a start script

To [customize deployment](https://github.com/projectkudu/kudu/wiki/Customizing-deployments), include a `.deployment` file in the repository root with `SCM_DO_BUILD_DURING_DEPLOYMENT=true`. The only viable alternative I found to the file is including the node_modules/ in the \*.zip.
