# NextJS + Typescript + i18n

### Technologies
- NextJS
- Typescript
- Sequelize, Sequelize CLI
- i18n
- JEST
- Styled / SCSS (NextJS feature)
- Others: babel, dotenv, ESLint
- Other files: gitlab-ci, Dockerfile, K8s configurations, pm2, prettier

---
### Prerequisite
- Make a copy of **.env.local** into **.env** in the same folder
---
### Usages
Install libs **npm i**  
Run development **npm run start:dev**  
Run production **npm run start**  
Build **npm run build**  

Required **NodeJS version 14 or above**  

Running at http://localhost:3003

_Edit your port in **.env**_

---
### K8s
```
kubectl create -f service-dev.yaml
kubectl create -f deployment-dev.yaml
```


_Last updated by Nhaht - 25/05/2020_