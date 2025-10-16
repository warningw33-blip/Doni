
// ===== PROVIDER SLIDER ARROWS (opsional) =====
function scrollProvider(dir = 1){
  const list = document.getElementById('providerList');
  const step = list.clientWidth * 0.8; // geser ~80% lebar tampilan
  list.scrollBy({ left: dir * step, behavior: 'smooth' });
}

// ====== PILIH PROVIDER & FILTER GRID ======
function selectProvider(el, providerName){
  // 1) tandai active di slider
  document.querySelectorAll('.provider-item.active').forEach(i => i.classList.remove('active'));
  el.classList.add('active');

  // 2) ganti judul provider
  const display = document.getElementById('providerNameDisplay');
  if (display) display.textContent = providerName;

  // 3) filter kartu di grid
  filterRTPGrid(providerName);

  // 4) reset pencarian (jika ada)
  const search = document.getElementById('searchInput');
  if (search) search.value = '';
}

function filterRTPGrid(providerName){
  const container = document.getElementById('rtpContainer');
  if (!container) return;

  // Catatan: pastikan tiap .rtp-card punya <span class="provider">Nama Provider</span> seperti contohmu
  const cards = container.querySelectorAll('.rtp-card');

  cards.forEach(card => {
    const provEl = card.querySelector('.provider');
    const name = provEl ? provEl.textContent.trim() : '';
    // Tampilkan hanya yang providernya sama persis
    const show = (name === providerName);
    card.style.display = show ? '' : 'none';
  });
}

// ====== (Opsional) SEMUA PERMAINAN ======
// Kalau kamu nanti menambah tab lain (mis. "SEMUA PERMAINAN") dan ingin memunculkan semua:
function showAllProviders(){
  const container = document.getElementById('rtpContainer');
  if (!container) return;
  container.querySelectorAll('.rtp-card').forEach(card => card.style.display = '');
  const display = document.getElementById('providerNameDisplay');
  if (display) display.textContent = 'Semua Provider';
  document.querySelectorAll('.provider-item.active').forEach(i => i.classList.remove('active'));
}
