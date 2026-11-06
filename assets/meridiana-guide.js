(() => {
  'use strict';
  function init() {
    if (document.getElementById('meridiana-welcome')) return;
    const key = 'meridiana.guide.visits.v1';
    const sessionKey = key + '.session';
    const steps = [
      ['Benvenuto in Meridiana', 'Meridiana raccoglie livelli cartografici, metadati e servizi GIS. Puoi consultare i contenuti pubblici senza accedere.'],
      ['Esplora la mappa', 'Nella scheda Mappa attiva o disattiva i livelli nel pannello laterale. Usa lo zoom e Inquadra per orientarti tra i dati disponibili.'],
      ['Consulta i metadati', 'Apri Metadati e scegli un layer: trovi descrizione, fonte, licenza, responsabile ed estensione geografica.'],
      ['Collega i tuoi strumenti GIS', 'Nella scheda Endpoint trovi gli indirizzi WMS, WFS e TMS disponibili, da copiare nei client GIS. La pubblicazione e la modifica richiedono un accesso autorizzato.'],
      ['La guida resta qui', 'Puoi riaprire questa introduzione con Guida rapida. Per gli approfondimenti usa la scheda Guida di Meridiana.']
    ];
    const style = document.createElement('style');
    style.textContent = '#meridiana-welcome{margin:auto;width:min(540px,calc(100% - 28px));max-height:85dvh;overflow:auto;padding:28px;border:1px solid #d5cdb6;border-radius:16px;background:#fbf9f1;color:#22322b;font-family:inherit;box-sizing:border-box}#meridiana-welcome::backdrop{background:rgba(14,31,25,.65)}#meridiana-welcome h2{font-size:1.5rem;margin:12px 0}#meridiana-welcome p{line-height:1.65;margin:12px 0}#meridiana-welcome .mg-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}#meridiana-welcome button,.meridiana-guide-open{padding:10px 14px;border:1px solid #2e8b62;border-radius:6px;background:#0e1f19;color:#fff;cursor:pointer;font:inherit}#meridiana-welcome button:focus-visible,.meridiana-guide-open:focus-visible{outline:3px solid #ff5a1f;outline-offset:3px}#meridiana-welcome .mg-skip{background:transparent;color:#22322b}#meridiana-welcome label{display:flex;align-items:center;gap:8px;margin-top:20px;font-size:.9rem}.meridiana-guide-open{font-size:12px;flex-shrink:0}';
    document.head.append(style);
    const dialog = document.createElement('dialog');
    dialog.id = 'meridiana-welcome';
    dialog.setAttribute('aria-labelledby', 'mg-title');
    dialog.innerHTML = '<p id="mg-progress"></p><h2 id="mg-title"></h2><p id="mg-description"></p><label><input id="mg-disable" type="checkbox"> Non mostrare più automaticamente</label><div class="mg-actions"><button type="button" id="mg-back">Indietro</button><button type="button" id="mg-next">Avanti</button><button type="button" class="mg-skip" id="mg-close">Chiudi</button></div>';
    document.body.append(dialog);
    let index = 0;
    let returnFocus;
    const get = id => dialog.querySelector('#' + id);
    function render() {
      get('mg-progress').textContent = 'Guida rapida · ' + (index + 1) + ' di ' + steps.length;
      get('mg-title').textContent = steps[index][0];
      get('mg-description').textContent = steps[index][1];
      get('mg-back').disabled = index === 0;
      get('mg-next').textContent = index === steps.length - 1 ? 'Inizia a esplorare' : 'Avanti';
    }
    function open() {
      returnFocus = document.activeElement;
      index = 0;
      render();
      dialog.showModal();
    }
    function close() { dialog.close(); }
    dialog.addEventListener('close', () => {
      if (get('mg-disable').checked) {
        try { localStorage.setItem(key + '.disabled', '1'); } catch {}
      }
      if (returnFocus && returnFocus.isConnected) returnFocus.focus();
    });
    get('mg-back').addEventListener('click', () => { if (index > 0) { index--; render(); } });
    get('mg-next').addEventListener('click', () => { if (index === steps.length - 1) close(); else { index++; render(); } });
    get('mg-close').addEventListener('click', close);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'meridiana-guide-open';
    button.textContent = 'Guida rapida';
    button.addEventListener('click', open);
    const host = document.querySelector('.head-right') || document.querySelector('#tabs');
    if (host) host.append(button);
    else { button.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:2000'; document.body.append(button); }
    let automatic = false;
    try {
      const visits = Math.max(0, Number(localStorage.getItem(key)) || 0);
      if (!sessionStorage.getItem(sessionKey)) {
        sessionStorage.setItem(sessionKey, '1');
        localStorage.setItem(key, String(visits + 1));
        automatic = visits < 3 && localStorage.getItem(key + '.disabled') !== '1';
      }
    } catch {
      // Without browser storage the guide remains available manually.
    }
    if (automatic && typeof dialog.showModal === 'function') open();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
