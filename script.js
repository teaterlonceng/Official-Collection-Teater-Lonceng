  const ADMINS = [
    { label: "Admin 1", number: "6285772166096" },
    { label: "Admin 2", number: "6285881357017" }
  ];

  const products = [
    {
      id: 1,
      name: "KEY CHAIN 1",
      category: "MERCHANDISE",
      price: "Rp10.000",
      priceRaw: 10000,
      description: "Wah, ternyata mahakarya ini 100% terbuat dari kawat bulu (pipecleaner)! Lupakan mawar dari kebun, kenalkan flora mutan generasi now yang lahir dari hasil pelintiran penuh kesabaran tingkat dewa.",
      image: "fotoproduk1.jpeg",
      info: { "Bahan Utama": "100% Kawat bulu", "Size": "6-8 cm"}
    },
    {
      id: 2,
      name: "KEY CHAIN 2",
      category: "MERCHANDISE",
      price: "Rp10.000",
      priceRaw: 10000,
      description: "Bosan dengan gantungan kunci logam yang membosankan? Sambutlah 'Starla', bintang yang baru saja mendarat di bumi dengan misi menyebarkan keimutannya! Dibuat dengan cinta dan sedikit pelintiran penuh keajaiban, Starla siap menjadi pusat perhatian di gantungan kuncimu.",
      image: "fotoproduk2.jpeg",
      info: { "Bahan Utama": "100% Kawat bulu", "Size": "Tinggi Sekitar 8-10, Diameter Bintang sekitar 6-7 cm"}
    },
     {
      id: 3,
      name: "KEY CHAIN 3",
      category: "MERCHANDISE",
      price: "Rp10.000",
      priceRaw: 10000,
      description: "Kalau kamu pikir bunga kawat bulu yang pertama tadi sudah cukup unik, bersiaplah untuk terpukau dengan Minty! Dia tidak hanya berbulu dan menggemaskan, tapi dia juga membawa kejutan ekstra di tengah-tengahnya. Ini adalah flower-ception (bunga di dalam bunga)",
      image: "fotoproduk3.jpeg",
      info: { "Bahan Utama": "Kawat bulu (Chenille stems) berkualitas", "Size": "Diameter Bintang sekitar 6-7 cm"}
    },
     {
      id: 4,
      name: "KEY CHAIN 4",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Buat apa repot merogoh tas mencari cermin besar kalau ada versi portabel yang super gemas? Cermin saku berkedok gantungan kunci ini adalah penyelamat sejati untuk mengecek tatanan rambut atau memastikan tidak ada sisa makanan yang menyelip di gigi sebelum presentasi di kampus.",
      image: "fotoproduk4.jpg",
      info: { "Deskripsi Utama": "Cermin yang dibingkai rajutan kawat bulu", "Ornamen": "Ditaburi manik-manik mutiara putih" }
    },
     {
      id: 5,
      name: "KEY CHAIN 5",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Warna birunya begitu terang dan mencolok—mengingatkan pada langit siang yang cerah, atau mungkin sebiru layar Blue Screen of Death (BSOD) saat sedang sibuk-sibuknya mengeksekusi coding tugas Operating Systems. Bedanya, melihat bunga kawat bulu yang satu ini dijamin bikin hati tenang dan mood kembali naik, bukan malah panik!",
      image: "fotoproduk5.jpg",
      info: { "Karakteristik": "Memiliki kelopak tebal berwarna biru", "Pusat Bunga": "Dilengkapi putik kawat bulu berwarna putih" }
    },
     {
      id: 6,
      name: "KEY CHAIN 6",
      category: "MERCHANDISE",
      price: "Rp12.000",
      priceRaw: 12000,
      description: "Bunga yang satu ini jelas menolak untuk tampil basic! Dengan pinggiran kelopak bergelombang layaknya renda gaun pesta tropis, dia siap mencuri semua perhatian. Ukurannya yang cukup oversized dan warnanya yang ngejreng adalah jaminan mutlak bahwa kuncimu tidak akan pernah lagi terselip secara misterius di dasar tas.",
      image: "fotoproduk6.jpg",
      info: { "Visual Kelopak": "Perpaduan warna kuning dan hijau muda", "Pusat Bunga": "Putik spiral rapat berwarna merah muda", "Size": "Jauh lebih besar dan lebar dari model standar" }
    },
     {
      id: 7,
      name: "KEY CHAIN 7",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Cermin saku ini bukan sekadar alat untuk touch-up, tapi juga fashion statement! Dengan sepasang telinga mungil di bagian atasnya, cermin ini seolah-olah sedang menyamar menjadi kucing ajaib yang siap menemani hari-harimu.",
      image: "fotoproduk7.jpg",
      info: { "Desain Utama": "Cermin portabel dengan bingkai kawat bulu", "Saran Penggunaan": "Sangat pas digantung di tas jinjing" }
    },
     {
      id: 8,
      name: "KEY CHAIN 8",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Jika cermin kucing sebelumnya terasa kurang feminin, perkenalkan saudari perempuannya yang super girly! Cermin ini hadir dengan telinga bulat ala beruang teddy dan tambahan bunga kawat bulu yang mekar sempurna di bagian bawah.",
      image: "fotoproduk8.jpg",
      info: { "Karakteristik": "Tampilannya jauh lebih bertekstur dan chunky" }
    },
     {
      id: 9,
      name: "KEY CHAIN 9",
      category: "MERCHANDISE",
      price: "Rp10.000",
      priceRaw: 10000,
      description: "Nah, ini dia bintang utamanya yang paling mencuri perhatian! Gantungan kunci yang satu ini hadir dalam wujud karakter yang super unik. Karakternya yang nyentrik dan ekspresif ini bahkan punya aura yang pas banget kalau dijadikan inspirasi karakter maskot visual untuk sebuah aplikasi digital kekinian.",
      image: "fotoproduk9.jpg",
      info: { "Bahan Utama": "Kawat bulu berwarna biru elektrik cerah",}
    },
     {
      id: 10,
      name: "KEY CHAIN 10",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Bagi pecinta earth tones atau kaum cewek/cowok bumi, cermin ini adalah jodoh yang ditakdirkan untuk tasmu. Dengan sepasang telinga runcing yang selalu siaga, cermin ini seakan-akan bertugas memantau apakah makeup-mu luntur atau ada sisa bumbu Indomie yang tertinggal di sudut bibir.",
      image: "fotoproduk10.jpg",
      info: { "Karakteristik": "Warnanya netral dan unisex"}
    },
     {
      id: 11,
      name: "KEY CHAIN 11",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Peringatan: Menatap cermin ini terlalu lama dapat memunculkan ilusi bahwa kamu adalah karakter utama di anime bergenre magical girl. Ini adalah cermin yang sangat demure, sangat mindful.",
      image: "fotoproduk11.jpg",
      info: { "Karakteristik": "Desain asimetris dengan pita" }
    },
     {
      id: 12,
      name: "KEY CHAIN 12",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Cermin yang satu ini seolah berasal dari dimensi lain! Warnanya tabrakan, bentuknya liar, dan auranya sangat nyentrik. Ekor spiralnya yang menjuntai panjang ke bawah itu ibarat pointer yang nyasar di diagram linked list—tapi tenang, yang ini murni seni, jadi kamu nggak perlu pusing-pusing mengoreksi logikanya!",
      image: "fotoproduk12.jpg",
      info: { "Karakteristik": "Ukurannya paling memakan tempat"}
    },
     {
      id: 13,
      name: "KEY CHAIN 13",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Kombinasi warna cokelat tua dan krem putihnya benar-benar bikin ngiler, persis seperti secangkir cappuccino atau latte hangat. Cermin ini adalah teman nongkrong yang sempurna!",
      image: "fotoproduk13.jpg",
      info: { "Ornamen": "Sepasang telinga bulat beruang cokelat", "Karakteristik": "Tampilannya sangat warm dan earthy"}
    },
     {
      id: 14,
      name: "KEY CHAIN 14",
      category: "MERCHANDISE",
      price: "Rp10.000",
      priceRaw: 10000,
      description: "Apakah ini bunga mekar? Apakah ini bintang laut? Yang pasti, desainnya sangat memukau dan simetris! Warnanya yang cerah siap mencerahkan hari-harimu yang paling suntuk sekalipun.",
      image: "fotoproduk14.jpg",
      info: { "Ornamen": "Putik spiral merah muda", "Karakteristik": "Ekstra girly dan fabulous" }
    },
     {
      id: 15,
      name: "KEY CHAIN 15",
      category: "MERCHANDISE",
      price: "Rp10.000",
      priceRaw: 10000,
      description: "Kalau sebelumnya ada gurita biru elektrik yang nyentrik, sekarang hadir versi pastelnya yang lebih kalem! Wajahnya yang innocent bikin siapa saja nggak rela kalau sampai kunci berharga ini hilang.",
      image: "fotoproduk15.jpg",
      info: { "Desain Utama": "Karakter gurita/ubur-ubur 3D", "Karakteristik": "Desain sudah matang dan memorable"}
    },
     {
      id: 16,
      name: "KEY CHAIN 16",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Gantungan kunci ini sedang mengalami krisis identitas yang luar biasa menggemaskan! Apakah dia anak ayam? Anak bebek? Atau katak yang kelebihan pigmen kuning? Yang pasti, kelucuannya tidak bisa diperdebatkan.",
      image: "fotoproduk16.jpg",
      info: { "Desain Utama": "Karakter bebek/anak ayam kuning 3D", "Karakteristik": "Desain unik dan menggemaskan" }
    },
     {
      id: 17,
      name: "KEY CHAIN 17",
      category: "MERCHANDISE",
      price: "Rp10.000",
      priceRaw: 10000,
      description: "Tinggalkan sejenak kelopak bundar yang basic, karena bunga ini hadir membawa nuansa flora eksotis nan mewah! Tampilannya mengingatkan pada bunga anggrek langka atau pansy mekar yang biasa menjadi kebanggaan di taman botani.",
      image: "fotoproduk17.jpg",
      info: { "Desain Utama": "Berukuran besar dengan kelopak lebar", "Karakteristik": "Eksekusi warnanya sangat kontras dan berani" }
    },
     {
      id: 18,
      name: "KEY CHAIN 18",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Kembali ke lini cermin saku, kali ini hadir dengan desain yang paling menenangkan jiwa. Tidak ada telinga hewan nyentrik atau ekor spiral panjang, hanya kesederhanaan awan dan langit biru yang memanjakan mata.",
      image: "fotoproduk18.jpg",
      info: { "Karakteristik": "Tampilannya sangat rapi, simetris, dan clean" }
    },
     {
      id: 19,
      name: "KEY CHAIN 19",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Kalau cermin biasa cuma memantulkan wajah, cermin yang satu ini memantulkan aura bintang pop! Dengan telinga panjang yang dihiasi payet bunga, dia siap menjadi pusat perhatian di mana pun kamu berada.",
      image: "fotoproduk19.jpg",
      info: { "Ornamen Bintang": "Sepasang telinga kelinci panjang", "Karakteristik": "Ekstra girly dan flashy" }
    },
     {
      id: 20,
      name: "KEY CHAIN 20",
      category: "MERCHANDISE",
      price: "Rp10.000",
      priceRaw: 10000,
      description: "Gantungan kunci ini tidak berfungsi sebagai cermin atau bunga, melainkan sebagai teman ngobrol imajiner yang sangat suportif! Wujudnya yang bulat dan empuk membuatnya terlihat seperti gumpalan blueberry yang hidup.",
      image: "fotoproduk20.jpg",
      info: { "Desain Utama": "Karakter monster/alien 3D", "Detail Visual": "Memiliki kaki/dasar berwarna ungu muda" }
    },
     {
      id: 21,
      name: "KEY CHAIN 21",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Ada sedikit vibe Halloween, tapi tetap menggemaskan sepanjang tahun! Kombinasi warnanya yang sangat berani membuktikan bahwa cermin saku tidak harus selalu berwarna pastel atau feminin.",
      image: "fotoproduk21.jpg",
      info: { "Ornamen Menarik": "Sepasang telinga hitam runcing ala rubah", "Karakteristik": "Warnanya secerah senja" }
    },
     {
      id: 22,
      name: "KEY CHAIN 22",
      category: "MERCHANDISE",
      price: "Rp15.000",
      priceRaw: 15000,
      description: "Tinggalkan sejenak warna pastel yang kalem, karena cermin ini hadir untuk mendobrak rutinitas! Warnanya yang menyala dijamin bikin mata langsung melek.",
      image: "fotoproduk22.jpg",
      info: { "Ornamen": "Dilengkapi aksen berbentuk pita/telinga", "Karakteristik": "Hijaunya sangat optimis—persis seperti grafik" }
    },
     {
      id: 23,
      name: "KEY CHAIN 23",
      category: "MERCHANDISE",
      price: "Rp12.000",
      priceRaw: 12000,
      description: "Tunggu dulu, ini bukan cermin! Ini adalah karangan bunga melingkar (wreath) mini yang siap menyebarkan aura estetik ke mana pun dia dibawa pergi.",
      image: "fotoproduk23.jpg",
      info: { "Ornamen Bawah": "Tiga kuntum bunga biru muda", "Ornamen Atas": "Pita plastik mungil berwarna krem/putih" }
    },
     {
      id: 24,
      name: "KEY CHAIN 24",
      category: "MERCHANDISE",
      price: "Rp12.000",
      priceRaw: 12000,
      description: "Gantungan kunci yang satu ini sukses bikin perut keroncongan mendadak. Bentuknya begitu meyakinkan sampai-sampai rasanya ingin dicelupkan ke dalam secangkir kopi panas!",
      image: "fotoproduk24.jpg",
      info: { "Detail Visual": "Tekstur kawat bulu yang fuzzy", "Karakteristik": "Ide yang sangat brilian dan out of the box"}
    },
  ];

  const TICKET_EMPTY_MESSAGE = "Belum ada tiket yang tersedia saat ini — nantikan kabar selanjutnya dari kami.";
  const SEARCH_EMPTY_MESSAGE = "Tidak ada produk yang cocok — coba kata kunci lain.";

  const grid = document.getElementById('productGrid');
  const countLabel = document.getElementById('productCount');
  const searchInput = document.getElementById('searchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');

  let currentFilter = "ALL";
  let currentSearch = "";

  function waLink(number, message){
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  /* ---- Admin Chooser ---- */
  const adminOverlay = document.getElementById('adminOverlay');
  const adminOptions = document.getElementById('adminOptions');
  const adminClose = document.getElementById('adminClose');
  let pendingMessage = "";

  function buildAdminOptions(){
    adminOptions.innerHTML = ADMINS.map((a, i) =>
      `<button class="admin-option" data-admin="${i}">
         <span class="admin-option-label">${a.label}</span>
         <span class="admin-option-number">+${a.number}</span>
       </button>`
    ).join('');
    adminOptions.querySelectorAll('[data-admin]').forEach(btn => {
      btn.addEventListener('click', () => {
        const admin = ADMINS[Number(btn.dataset.admin)];
        window.open(waLink(admin.number, pendingMessage), '_blank');
        closeAdminChooser();
      });
    });
  }
  buildAdminOptions();

  function openAdminChooser(message){
    pendingMessage = message;
    adminOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAdminChooser(){
    adminOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  adminClose.addEventListener('click', closeAdminChooser);
  adminOverlay.addEventListener('click', (e) => {
    if(e.target === adminOverlay) closeAdminChooser();
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && adminOverlay.classList.contains('open')) closeAdminChooser();
  });

  function buyMessage(product){
    const noun = product.category === "TICKET" ? "tiketnya" : "produknya";
    return `Halo Teater Lonceng 👋\n\nSaya tertarik untuk membeli:\n\nProduk: ${product.name}\nHarga: ${product.price}\n\nApakah ${noun} masih tersedia?\n\nTerima kasih.`;
  }

  function renderGrid(){
    const term = currentSearch.trim().toLowerCase();
    const filtered = products.filter(p => {
      const matchFilter = currentFilter === "ALL" || p.category === currentFilter;
      const matchSearch = !term || p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term) || p.category.toLowerCase().includes(term);
      return matchFilter && matchSearch;
    });

    grid.innerHTML = "";

    if(filtered.length === 0){
      const message = (currentFilter === "TICKET" && !term) ? TICKET_EMPTY_MESSAGE : SEARCH_EMPTY_MESSAGE;
      grid.innerHTML = `<div class="no-results">${message}</div>`;
      countLabel.textContent = "00 PRODUCTS";
      return;
    }

    countLabel.textContent = String(filtered.length).padStart(2,'0') + " PRODUCTS";

    filtered.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = "product-card";
      card.style.animationDelay = (i * 90) + "ms";
      card.innerHTML = `
        <div class="card-img-wrap">
          <span class="card-index">${String(p.id).padStart(2,'0')} / ${String(products.length).padStart(2,'0')}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-category uppercase">${p.category}</div>
          <div class="card-name">${p.name}</div>
          <p class="card-desc">${p.description}</p>
          <div class="card-price">${p.price}</div>
          <div class="card-actions">
            <button class="btn-view uppercase" data-view="${p.id}">View Details</button>
            <button class="btn-buy uppercase" data-buy="${p.id}">Buy Now</button>
          </div>
        </div>
      `;
      grid.appendChild(card);

      requestAnimationFrame(() => card.classList.add('reveal'));
    });

    grid.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', () => openModal(Number(btn.dataset.view)));
    });
    grid.querySelectorAll('[data-buy]').forEach(btn => {
      btn.addEventListener('click', () => {
        const product = products.find(p => p.id === Number(btn.dataset.buy));
        openAdminChooser(buyMessage(product));
      });
    });

  }

  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderGrid();
  });

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderGrid();
    });
  });

  /* ---- Modal ---- */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalName = document.getElementById('modalName');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalInfoList = document.getElementById('modalInfoList');
  const modalBuyBtn = document.getElementById('modalBuyBtn');
  const modalClose = document.getElementById('modalClose');

  function openModal(id){
    const p = products.find(p => p.id === id);
    if(!p) return;
    modalImg.src = p.image;
    modalImg.alt = p.name;
    modalCategory.textContent = p.category;
    modalName.textContent = p.name;
    modalPrice.textContent = p.price;
    modalDesc.textContent = p.description;
    modalInfoList.innerHTML = Object.entries(p.info).map(([k,v]) => `<li><span>${k}</span><span>${v}</span></li>`).join('');
    modalBuyBtn.onclick = () => openAdminChooser(buyMessage(p));
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if(e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeModal();
  });

  /* ---- Floating WhatsApp & Footer button ---- */
  const genericMessage = "Halo Teater Lonceng 👋 Saya ingin bertanya mengenai produk yang tersedia.";
  document.getElementById('fabWhatsapp').addEventListener('click', (e) => {
    e.preventDefault();
    openAdminChooser(genericMessage);
  });
  document.getElementById('footerWaBtn').addEventListener('click', (e) => {
    e.preventDefault();
    openAdminChooser(genericMessage);
  });

  /* ---- Navbar scroll state ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 40){ navbar.classList.add('scrolled'); }
    else{ navbar.classList.remove('scrolled'); }
  });

  /* ---- Mobile menu ---- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');

  function toggleMenu(open){
    mobileMenu.classList.toggle('open', open);
    menuOverlay.classList.toggle('open', open);
    hamburgerBtn.classList.toggle('open', open);
  }
  hamburgerBtn.addEventListener('click', () => toggleMenu(!mobileMenu.classList.contains('open')));
  menuOverlay.addEventListener('click', () => toggleMenu(false));
  mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  /* ---- Scroll reveal for catalog head/controls ---- */
  const revealTargets = document.querySelectorAll('.catalog-head, .controls');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.animation = 'fadeUp 800ms ease forwards';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(t => { t.style.opacity = 0; io.observe(t); });

  /* ---- Initial render ---- */
  renderGrid();
