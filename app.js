(function(){
  var items = [
    {n:'Рукоять «Модель А», орех',   c:'Рукояти'},
    {n:'Рукоять «Модель А», чёрный граб', c:'Рукояти'},
    {n:'Рукоять «Модель Б», орех',   c:'Рукояти'},
    {n:'Набор отделки, латунь',      c:'Тюнинг'},
    {n:'Индивидуальная гравировка',  c:'Тюнинг'},
    {n:'Футляр для хранения',        c:'Аксессуары'}
  ];
  var grid = document.getElementById('grid'), empty = document.getElementById('empty'),
      q = document.getElementById('q'), cnt = document.getElementById('cnt'),
      tabs = document.querySelectorAll('.tabs button'), f = 'all', n = 0;
  var icon = '<svg viewBox="0 0 120 160" aria-hidden="true"><path d="M44 10C30 12 26 28 28 44C30 60 20 66 22 82C24 98 18 104 22 120C26 140 44 150 62 150C82 150 92 130 94 106C96 84 100 70 96 52C92 30 82 12 44 10Z"/></svg>';
  function render(){
    var s = q.value.trim().toLowerCase(), html = '', shown = 0;
    items.forEach(function(it){
      if ((f !== 'all' && it.c !== f) || (s && it.n.toLowerCase().indexOf(s) < 0)) return;
      shown++;
      html += '<article class="card"><div class="ph">'+icon+'</div><div class="in"><h4>'+it.n+'</h4><small>'+it.c+'</small><span class="ask">&lt;&lt;цена: запросить у заказчика&gt;&gt;</span><button type="button">В корзину</button></div></article>';
    });
    grid.innerHTML = html;
    empty.classList.toggle('on', shown === 0);
  }
  tabs.forEach(function(b){ b.addEventListener('click', function(){
    f = b.dataset.f; tabs.forEach(function(x){ x.setAttribute('aria-pressed', x === b); }); render();
  });});
  document.querySelectorAll('.plate').forEach(function(p){ p.addEventListener('click', function(){
    f = p.dataset.go; tabs.forEach(function(x){ x.setAttribute('aria-pressed', x.dataset.f === f); }); render();
  });});
  grid.addEventListener('click', function(e){ if (e.target.tagName === 'BUTTON') cnt.textContent = ++n; });
  q.addEventListener('input', render);
  render();
})();
