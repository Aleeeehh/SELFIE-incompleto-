# SELFIE

Progetto incompleto (attualmente in sviluppo) di un'applicazione che gestisce eventi, note e sessioni di studio.

## Lanciare Server e Client insieme, visualizzare applicazione su browser ed effetturare login

```(bash)
./start.sh
```
su browser, accedere a http://localhost:8000/
utente valido per il login
username: fv1
password: 12345678




## Lanciare MongoDB

```(bash)
brew services start mongodb-community@7.0
mongo
mongosh 
```

## Visualizzare Eventi creati su MongoDB
```(bash)
mongosh
use selfie_db
db.events.find()
```
