# GEO-HUB Website

Sito vetrina statico per **GEO-HUB**, pensato per presentare servizi GIS rivolti a Comuni ed enti pubblici.

## Caratteristiche

- Sito statico puro, compatibile con GitHub Pages
- Nessun database
- Nessun framework complesso
- Layout responsive
- Testi in italiano
- Palette coerente con blu scuro, verde e bianco

## Struttura

```text
.
|-- index.html
`-- assets/
    |-- img/
    |   |-- favicon.svg
    |   |-- geohub-icon.svg
    |   `-- geohub-wordmark.svg
    `-- style.css
```

## Pubblicazione su GitHub Pages

1. Carica i file nel repository `mcfabgeo/geohub-website`.
2. Vai nelle impostazioni del repository.
3. Abilita **GitHub Pages** scegliendo il branch principale e la cartella root.
4. Attendi la pubblicazione del sito.

## Personalizzazioni consigliate

- Sostituire l'indirizzo email `info@geo-hub.it` con il contatto reale
- Aggiornare eventuali testi istituzionali o commerciali
- Eventualmente sostituire le varianti del logo con versioni ufficiali definitive

## Logo e favicon

Il progetto include ora:

- wordmark ottimizzata per il layout in `assets/img/geohub-wordmark.svg`
- icona quadrata per piccoli spazi in `assets/img/geohub-icon.svg`
- favicon SVG in `assets/img/favicon.svg`

Le immagini sono usate direttamente in HTML e restano compatibili con GitHub Pages senza build o dipendenze.

## Obiettivo del sito

Presentare in modo chiaro e professionale i servizi GEO-HUB:

- servizi GIS per Comuni
- WebGIS
- PostGIS gestito
- VPS e server GIS
- Lizmap
- G3W-Suite
- GeoNetwork
- CKAN
- MapStore
- manutenzione e supporto tecnico
