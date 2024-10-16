# SELFIE

Progetto incompleto (attualmente in sviluppo) per lo sviluppo di un'applicazione che gestisce eventi, note e sessioni di studio.

## Lanciare Server e Client insieme

```(bash)
./start.sh (anche per aggiornare la pagina sul browser)
```

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