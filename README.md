# Omarks3

## Introduction

## Inspiration

## Ecosystem

| System | Documentation | |
| ------ | ------ | ------ |
| Ionic |[Ionic](https://ionicframework.com/docs/) | [link](https://ionicframework.com/) |
| Firebase|[Hosting](https://firebase.google.com/docs/hosting/) | [link](https://firebase.google.com/) |
| Firebase|[Database](https://firebase.google.com/docs/database/) | [link](https://firebase.google.com/) |
| Firebase|[Functions](https://firebase.google.com/docs/functions/) | [link](https://firebase.google.com/) |
| Firebase|[Authentication](https://firebase.google.com/docs/auth/) | [link](https://firebase.google.com/) |
| ngx-auth-firebaseui|[ngx-auth-firebaseui](https://github.com/anthonynahas/ngx-auth-firebaseui) | [link](https://ngx-auth-firebaseui.firebaseapp.com/home) |
| Algolia |[Algolia](https://www.algolia.com/doc/) | [link](https://www.algolia.com/) |
| Pocket |[Pocket](https://help.getpocket.com/category/857-category) | [link](https://getpocket.com/a/queue/) |
| IFTTT |[IFTTT](https://ifttt.com)|  |
| scriptr.io |[script.io](https://www.scriptr.io/documentation) | [link](https://www.scriptr.io/) |


## Architecture

![Architecture Diagram](https://www.dropbox.com/s/mihz0y275zmu99s/Omarks3-Architecture.png?raw=1 "Architecture Diagram")

## Coding
### Prerequisites
- Git
- Node js ( ```sudo apt install nodejs; sudo apt install npm``` )
- Ionic (```sudo npm install -g ionic```)
- Firebase (```sudo npm install -g firebase-tools```)

### Prepare

```shell
$ npm i -g @ionic/cli
$ npm i -g cordova
```

```shell
$ git clone https://github.com/samuele-cozzi/Omarks3.git
$ code .\Omarks3\
$ npm install
$ cd functions
$ npm install
$ cd ..
```

|Path|Description|
| ------ | ------ |
| /src | Ionic APP source code |
| /www | Ionic Builded source code |
| /resources | Images of the Ionic app (IOS & Android) |
| /functions | Firebase function source code |
| ionic.config.json | Configuration file of Ionic |
| firebase.json | Configuration file of Firebase |


### Execute

```shell
$ ionic build
$ ionic serve
$ ionic serve --lab
```

### Delivery

```shell
$ ionic build --prod
$ firebase deploy
$ firebase deploy --only functions,hosting,database
```

## References

[Firebase](https://console.firebase.google.com/project/omarks4/overview)
[Azure Devops](https://dev.azure.com/samuelecozzi0829/Omarks4)

[Firebase deploy CI](https://stackoverflow.com/questions/34192993/how-can-i-get-firebase-deploy-email-or-token-parameters-to-work)
[Firebase keys](https://console.developers.google.com/apis/credentials?project=omarks4)

## License
- [MIT License](/LICENSE)
