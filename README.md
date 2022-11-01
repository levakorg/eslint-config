# @levakorg/eslint-config

Eslint config levakorg org's

### Setup

**1. Installation**

```
npm install --save-dev eslint prettier @levakorg/eslint-config
```

or

```
yarn add --dev eslint prettier @levakorg/eslint-config
```

**2. Configuration**

package.json

```JSON
{
  "eslintConfig": {
    "extends": ["@levakorg/eslint-config"]
  }
}
```

.eslintrc | .eslintrc.json

```JSON
{
  "extends": ["@levakorg/eslint-config"]
}
```

.eslintrc.js

```JS
module.exports = {
  extends: ['@levakorg/eslint-config']
}
```

**3. Add scripts**

```JSON
{
  "eslint": "eslint . --ext .json,.cjs,.mjs,.js,.ts,.jsx,.tsx,.vue,.svelte",
  "eslint:fix": "eslint . --ext .json,.cjs,.mjs,.js,.ts,.jsx,.tsx,.vue,.svelte --fix",
}
```

**4. Using scripts**

```
npm run eslint
```

```
npm run eslint:fix
```

or

```
yarn eslint
```

```
yarn eslint:fix
```

### Notes

**1. Using library or frameworks**

```
@levakorg/eslint-config/typescript
```

```
@levakorg/eslint-config/node
```

```
@levakorg/eslint-config/react
```

```
@levakorg/eslint-config/react-typescript
```

```
@levakorg/eslint-config/angular
```

```
@levakorg/eslint-config/vue
```

```
@levakorg/eslint-config/svelte
```

**2. Config / Performance**

- [ ] javascript
- [ ] typescript
- [ ] node
- [ ] react
- [ ] react-typescript
- [ ] angular
- [ ] vue
- [ ] svelte
