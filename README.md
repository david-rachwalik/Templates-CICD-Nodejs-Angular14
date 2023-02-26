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

[Prepare repository root for Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/deploy-local-git#prepare-your-repository)

- _Node.js:_ server.js, app.js, or package.json with a start script

---

[Enable/disable build actions](https://github.com/projectkudu/kudu/wiki/Configurable-settings#enabledisable-build-actions)

Depending on the type of site you are deploying and the deployment method you are using, Kudu will executes build steps on your site during deployment. The default for _zip_ deployments is false, and for all other deployment methods is true.

Only viable options I found through testing:

- If archiving the build, include the "node_modules" directory in the zip
- [Customize the deployment](https://github.com/projectkudu/kudu/wiki/Customizing-deployments) by including a `.deployment` file at repository root with `SCM_DO_BUILD_DURING_DEPLOYMENT=true`
