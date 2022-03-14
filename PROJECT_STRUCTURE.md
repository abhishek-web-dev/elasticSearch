# node-express-starting-project
node express starting project  

### Project file structure
 - **app** : contains all business logics
 - **bin** : server initialization
 - **lib** : all custom library

```
root/
|
|--- app/
|    |
|    |--- constants/
|    |    |
|    |    |--- error.js
|    |    |
|    |    |--- http.js
|    |    |
|    |    |--- index.js
|    |    | 
|    |--- modules/
|    |    |
|    |    |--- search/
|    |    |    |
|    |    |    |--- controller.js
|    |    |    |
|    |    |    |--- DAL.js
|    |    |    |     
|    |    |    |--- constant.js
|    |    |    |
|    |    |    |--- error.js
|    |    |    |
|    |    |    |--- model.js
|    |    |    |
|    |    |    |--- service.js
|    |    |    |
|    |    |    |--- validator.js
|    |    |    |
|    |    |--- bucket/
|    |    |
|    |    | 
|--- bin/
|    |
|    |--- app.js
|    |
|    |--- middleware.js
|    |
|    |--- mongoConnection.js
|    | 
|    |--- routes.js
|    |  
|--- lib/
|    |
|    |--- config/
|    |    |
|    |    |--- index.js 
|    |
|    |--- middlewares/
|    |    |
|    |    |--- 404.js 
|    | 
|--- node_modules/
|
|--- .env
|
|--- .gitignore
|
|--- package-lock.json
|
|--- package.json
|
|--- README.md
|
|
```

