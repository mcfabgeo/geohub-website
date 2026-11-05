# WebGIS demo — Database topografico, Piano Operativo e Protezione civile

Mappa web dimostrativa, **in sola lettura**, con dati **interamente fittizi**: nessun
riferimento a comuni, enti o territori reali. L'area, le strade, gli edifici, le particelle,
le zone del piano e gli scenari di protezione civile sono generati a scopo dimostrativo.

## Come si apre

Serve la cartella **intera**: apri `index.html` con un doppio clic. Non serve un web server.
La connessione internet serve solo per lo sfondo OpenStreetMap, per l'esportazione in
GeoPackage e per Street View.

```
index.html   pagina e logica
stile.js     vestizione dei layer (regole, colori, simboli, etichette)
dati.js      geometrie e attributi dei layer + perimetro dell'area demo
catasto.js   particelle catastali
lib/         OpenLayers
```

## Cosa è rimasto uguale

Pannello laterale con elenco livelli, filtro per codice, ricerca catastale per foglio e
particella, "Solo codici presenti", "Ignora soglia di scala", sfondo con velatura, esportazione
GeoJSON/GeoPackage, "Accendi/Spegni tutto", "Inquadra", Street View, misura di lunghezza e di
area con snap, "Seleziona geometrie", "Pulisci strumenti", stampa con nord, scala e legenda,
scheda attributi con navigatore, Statistiche GIS, legenda a gruppi richiudibili con spunta per
livello, memoria delle preferenze nel browser (livelli accesi, sfondo, posizione della mappa).

## Cosa è stato tolto

Tutta la parte di modifica: nuovi elementi, modifica di geometrie e attributi, sposta punto,
unione di geometrie, eliminazione, campi tabellari personalizzati, foto JPEG, salvataggio sul
server (`api.php`, Docker, `server_data`). Sono stati tolti anche gli sfondi e i servizi di
enti esterni (ortofoto, catasti storici): resta solo OpenStreetMap. Il perimetro comunale è
sostituito dal "Perimetro area demo".

## I livelli (18, compreso il catasto)

Disegnati dal basso verso l'alto. All'avvio sono accesi: Zonizzazione del Piano Operativo,
database topografico (poligoni, linee, punti, scritte), numeri civici, targhe via.

| Gruppo | Livello | Elementi |
|---|---|---|
| Database topografico | Poligoni, Linee, Punti, Scritte | 639, 594, 2.127, 69 |
| Base | Stradario, Unità volumetriche, Numeri civici, Targhe via | 107, 610, 573, 56 |
| **Piano Operativo** | Zonizzazione (zone A, B, C, D, F, V, E1–E4) | 81 |
| | Vincoli e rispetti (fluviale, cimiteriale, stradale, elettrodotto, paesaggistico) | 7 |
| | Aree di trasformazione e schede norma (TR, CP, RQ) | 8 |
| | Perimetro del territorio urbanizzato | 5 |
| **Protezione civile** | Pericolosità e scenari (idraulica P1–P3, frana P2–P4, incendio di interfaccia) | 35 |
| | Aree di emergenza (attesa, ammassamento, ricovero) con capienza | 10 |
| | Strutture strategiche e rilevanti (COC, sanitario, volontariato, scuole…) | 11 |
| | Cancelli, punti critici e stazioni di monitoraggio | 12 |
| | Vie di fuga (primarie, secondarie, pedonali) | 6 |
| Catasto | Particelle (6 fogli, sola lettura) | 1.563 |

Gli elementi del Piano Operativo riportano zona, indice fondiario, altezza massima, rapporto
di copertura, destinazioni, interventi ammessi, articolo delle NTA ed elaborato. Quelli di
protezione civile riportano scenario, tempo di ritorno, capienza, servizi, funzione e scheda
del piano. Le aree di emergenza hanno un campo `in_area_rischio` calcolato sul modello di
pericolosità.

## Soglia di scala

Il database topografico (poligoni, linee, punti, scritte) è visibile fino a 1:10.000, come
nella versione originale; i livelli tematici sono sempre visibili. Le etichette compaiono
con lo zoom (zonizzazione da 1:9.000, strutture da 1:4.500, civici da 1:2.500).

## Per sostituire i dati fittizi con dati veri

Basta rimpiazzare `dati.js` e `catasto.js` mantenendo i nomi dei layer (tabelle) e dei campi
di classificazione usati in `stile.js` (`zona`, `vincolo`, `tipo`, `pericolosita`,
`tipologia`, `accesso`, `classe_h`, `classe_str`…), poi aggiornare conteggi e regole in
`stile.js`.
