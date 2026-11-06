# Guida rapida Meridiana

Il sito GEO-HUB collega Meridiana dalla homepage e dalla pagina WebGIS professionale.

## Attivazione dentro Meridiana

Nel template HTML dell'applicazione Meridiana, prima di chiudere body, inserire:

```html
<script src="https://www.geo-hub.it/assets/meridiana-guide.js?v=20261106" defer></script>
```

Il file non accede alle API e non modifica layer, autenticazione o dati.
Va incluso dal template dell'applicazione sul dominio Meridiana: pubblicarlo su
GitHub da solo non lo attiva dentro un sito ospitato separatamente.

## Comportamento

- La guida si apre nei primi tre accessi, contati come sessioni della scheda.
- I ricaricamenti nella stessa sessione non incrementano il conteggio.
- Il conteggio e' locale al browser e al dominio, senza account o tracciamento remoto.
- La preferenza Non mostrare piu' automaticamente interrompe le aperture automatiche.
- Il pulsante Guida rapida resta sempre disponibile nell'intestazione.
- Escape e Chiudi permettono di uscire; la scheda Guida esistente resta invariata.
- Se lo storage e' disabilitato, la guida resta disponibile manualmente.
- Cancellare i dati del sito o cambiare browser fa ripartire il conteggio.

## Verifica dopo l'integrazione

1. Aprire Meridiana in un profilo pulito: deve comparire la guida.
2. Scorrere i cinque passi e provare Indietro, Chiudi ed Escape.
3. Ricaricare: la guida non deve riaprirsi nella stessa sessione.
4. Dopo tre sessioni non deve aprirsi automaticamente.
5. Verificare che Guida rapida riapra sempre l'introduzione.
6. Provare su mobile e verificare che il pulsante non nasconda Accedi.
