## Keenon robot제어를 위한 Server제작 프로젝트입니다.

### requirement
* nodeJS

### 1. clone the repository to your local device

```shell
git clone https://github.com/janghanie1/keenonServer.git
cd keenonServer
```
### 2. type your id and password in _.env_example_ file
```
client_id = your_id
password = your_password
```
### 3. change the file name _.env_example_ to _.env_
```shell
mv .env_example .env
```
### 4. run

```
npm install
pm2 start index.js
```



