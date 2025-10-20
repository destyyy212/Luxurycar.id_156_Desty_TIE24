const cars = [
    {
        id: 1,
        name: "Mercedes-AMG G 63",
        price: "Rp 7.950.000.000",
        image: "https://autosearch.pl/wp-content/uploads/2023/10/Mercedes-AMG-G63-Czern-Obsydianu-Sylwetka-Lewa.webp",
        year: "2023",
        fuel: "Bensin",
        transmission: "Automatic",
        description: "SUV mewah dengan performa tinggi."
    },
    {
        id: 2,
        name: "Audi SQ8 4.0 TDI Quattro",
        price: "Rp 8.500.000.000",
        image: "https://i.i-sgcm.com/news/article_news/2019/21466_1_l.jpg",
        year: "2019",
        fuel: "Diesel",
        transmission: "Automatic",
        description: "SUV mewah diesel bergaya elegan."
    },
    {
        id: 3,
        name: "BMW M4 CS",
        price: "Rp 3.499.000.000",
        image: "https://www.automoblog.com/wp-content/uploads/2024/05/2025-BMW-M4-CS-16-scaled.jpg",
        year: "2025",
        fuel: "Bensin",
        transmission: "Automatic",
        description: "Coupe sport bertenaga tinggi."
    },
    {
        id: 4,
        name: "Porsche Taycan 4S",
        price: "Rp 4.900.000.000",
        image: "https://imgcdn.oto.com/large/gallery/exterior/31/2340/porsche-taycan-front-angle-low-view-450516.jpg",
        year: "2020",
        fuel: "Electric",
        transmission: "Automatic",
        description: "Sedan listrik mewah berperforma tinggi."
    },
    {
        id: 5,
        name: "Mini Countryman SE ALL4",
        price: "Rp 1.452.000.000",
        image: "https://i.gaw.to/content/photos/61/04/610472-mini-countryman-se-2025.jpeg",
        year: "2025",
        fuel: "Hybrid",
        transmission: "Automatic",
        description: "Hatchback hybrid bergaya modern."
    },
    {
        id: 6,
        name: "Lexus LX 600 VIP",
        price: "Rp 1.867.000.000",
        image: "https://static.carmudi.co.id/dUYPGA8Wg1umqFIcbfUo5QOON8g=/900x405/http://trenotomotif.com/ncs/images/Thumbnail/Thumbnail2022/Lexus-LX600-VIP.jpg",
        year: "2022",
        fuel: "Bensin",
        transmission: "Automatic",
        description: "SUV mewah dengan kenyamanan maksimal."
    },
    {
        id: 7,
        name: "Lamborghini Urus Performante",
        price: "Rp 8.900.000.000",
        image: "https://cdn.motor1.com/images/mgl/YA7AoW/s1/4x3/lamborghini-urus-s.webp",
        year: "2022",
        fuel: "Bensin",
        transmission: "Automatic",
        description: "SUV super bertenaga dan mewah."
    },
    {
        id: 8,
        name: "McLaren Artura Spyder",
        price: "Rp 14.800.000.000",
        image: "https://www.mclarencf.com/imagetag/431/main/l/New-2025-McLaren-Artura-Spider-Performance.jpg",
        year: "2025",
        fuel: "Hybrid",
        transmission: "Automatic",
        description: "Supercar hybrid bertenaga tinggi."
    },
    {
        id: 9,
        name: "Ferrari F80",
        price: "Rp 60.000.000.000",
        image: "https://www.topgear.com/sites/default/files/images/big-read/2024/10/de1dbf8ab50f8fa13d5b79e3eb58d6b5/New_Ferrari_Supercar_media_-4.jpg",
        year: "2024",
        fuel: "Hybrid",
        transmission: "Automatic",
        description: "Supercar hybrid berperforma ekstrem."
    },
    {
        id: 10,
        name: "Toyota GR Supra",
        price: "Rp 2.245.200.000",
        image: "https://scene7.toyota.eu/is/image/toyotaeurope/SUP0003b_22:Large-Landscape?ts=1656512149917&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=png-alpha",
        year: "2019",
        fuel: "Bensin",
        transmission: "Automatic",
        description: "Sport coupe ikonik dua pintu."
    },
    {
        id: 11,
        name: "Rolls-Royce Ghost",
        price: "Rp 25.000.000.000",
        image: "https://www.europeanprestige.co.uk/blobs/stock/547/images/1695b8d3-ffbe-4f64-b669-de012126d528/hi4a7681.jpg?width=2000&height=1333",
        year: "2020",
        fuel: "Bensin",
        transmission: "Automatic",
        description: "Sedan ultra mewah penuh kemewahan."
    },
    {
        id: 12,
        name: "Defender 110 3.0 X-Dynamic SE",
        price: "Rp 3.995.000.000",
        image: "https://m.smedata.sk/api-media/media/image/sme/2/89/8979612/8979612_1200x.jpg?rev=3",
        fuel: "Bensin",
        transmission: "Automatic",
        description: "SUV 5 seater tangguh siap segala medan."
    },
    {
        id: 13,
        name: "Ford Mustang EcoBoost",
        price: "Rp 1.964.000.000",
        image: "https://imgcdn.oto.com/large/gallery/exterior/12/3181/ford-mustang-2025-front-deep-low-angle-view-964738.jpg",
        fuel: "Bensin",
        transmission: "Automatic",
        description: "Muscle car modern bertenaga turbo."
    },
    {
        id: 14,
        name: "Tesla Model X Plaid",
        price: "Rp 4.400.000.000",
        image: "https://s3xycars.ru/uploads/UV_7_A1863_33c8e719ce.jpg",
        fuel: "Electric",
        transmission: "Automatic",
        description: "SUV listrik modern dan futuristik."
    },
    {
        id: 15,
        name: "Bentley Bentayga",
        price: "Rp 10.350.000.000",
        image: "https://imgcdnblog.carbay.com/wp-content/uploads/2021/01/27101210/Bentley-Bentayga-Hybrid_01-500x333.jpg",
        fuel: "Diesel",
        transmission: "Automatic",
        description: "SUV mewah dengan performa elegan."
    },
];

function showPage(page) {
    const container = document.getElementById('pageContainer');
    
    if (page === 'home') {
        container.innerHTML = getHomePage();
    } else if (page === 'catalog') {
        container.innerHTML = getCatalogPage();
        initializeFilters();
    } else if (page === 'contact') {
        container.innerHTML = getContactPage();
        initializeContactForm();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getHomePage() {
    return `
        <section class="hero-section">
            <div class="container">
                <h1 class="animate-title">Selamat Datang di LuxuryCar.id</h1>
                <p>Dealer Mobil Mewah Terpercaya dengan Garansi Premium 7G+</p>
                <button class="btn btn-custom btn-lg" onclick="showPage('catalog')">
                    Lihat Koleksi <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </section>

        <section class="py-5">
            <div class="container">
                <h2 class="text-center mb-5" style="color: var(--primary-dark); font-weight: bold;">Mengapa Memilih Kami?</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="feature-box">
                            <i class="fas fa-certificate"></i>
                            <h4>Kualitas Terjamin</h4>
                            <p>Semua mobil telah melalui inspeksi ketat dan bergaransi resmi</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature-box">
                            <i class="fas fa-headset"></i>
                            <h4>Pelayanan 24/7</h4>
                            <p>Tim profesional siap membantu Anda kapan saja</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature-box">
                            <i class="fas fa-hand-holding-usd"></i>
                            <h4>Harga Kompetitif</h4>
                            <p>Dapatkan penawaran terbaik dengan sistem kredit fleksibel</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Langkah Beli Mobil -->
        <section class="py-5" style="background: white;">
            <div class="container">
                <h2 class="text-center mb-3" style="color: var(--primary-dark); font-weight: bold;">Cara Mudah Beli Mobil di LuxuryCar.id</h2>
                <p class="text-center mb-5" style="color: var(--primary-medium);">Proses cepat dan aman hanya dalam 4 langkah</p>
                <div class="row">
                    <div class="col-md-3 mb-4">
                        <div class="text-center">
                            <div class="step-circle mb-3">
                                <i class="fas fa-search"></i>
                            </div>
                            <h5 style="color: var(--primary-dark); font-weight: bold;">1. Pilih Mobil</h5>
                            <p style="color: #666;">Cari dan pilih mobil impian Anda dari katalog kami</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="text-center">
                            <div class="step-circle mb-3">
                                <i class="fas fa-clipboard-check"></i>
                            </div>
                            <h5 style="color: var(--primary-dark); font-weight: bold;">2. Inspeksi</h5>
                            <p style="color: #666;">Lakukan test drive dan inspeksi menyeluruh</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="text-center">
                            <div class="step-circle mb-3">
                                <i class="fas fa-file-signature"></i>
                            </div>
                            <h5 style="color: var(--primary-dark); font-weight: bold;">3. Proses Dokumen</h5>
                            <p style="color: #666;">Kami bantu urus semua dokumen dan administrasi</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="text-center">
                            <div class="step-circle mb-3">
                                <i class="fas fa-car"></i>
                            </div>
                            <h5 style="color: var(--primary-dark); font-weight: bold;">4. Mobil Siap</h5>
                            <p style="color: #666;">Terima mobil dan mulai berkendara dengan aman</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Proteksi Garansi 7G+ -->
        <section class="py-5" style="background: var(--light-cream);">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 style="color: var(--primary-dark); font-weight: bold;">Proteksi Garansi 7G+ Premium</h2>
                    <p style="color: var(--primary-medium); font-size: 1.1rem;">Berkendara dengan tenang, dilindungi garansi komprehensif</p>
                </div>
                
                <div class="guarantee-carousel">
                    <button class="carousel-btn carousel-btn-prev" onclick="moveCarousel(-1)">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="carousel-btn carousel-btn-next" onclick="moveCarousel(1)">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    
                    <div class="guarantee-carousel-inner" id="guaranteeCarousel">
                        <div class="guarantee-carousel-item">
                            <div class="guarantee-card">
                                <div class="guarantee-icon">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <h5>Garansi Mesin</h5>
                                <p>Perlindungan penuh untuk mesin hingga 1 tahun atau 20.000 km</p>
                            </div>
                        </div>
                        <div class="guarantee-carousel-item">
                            <div class="guarantee-card">
                                <div class="guarantee-icon">
                                    <i class="fas fa-cogs"></i>
                                </div>
                                <h5>Garansi Transmisi</h5>
                                <p>Jaminan transmisi bebas masalah hingga 1 tahun</p>
                            </div>
                        </div>
                        <div class="guarantee-carousel-item">
                            <div class="guarantee-card">
                                <div class="guarantee-icon">
                                    <i class="fas fa-tools"></i>
                                </div>
                                <h5>Service Gratis</h5>
                                <p>3x service gratis di bengkel authorized</p>
                            </div>
                        </div>
                        <div class="guarantee-carousel-item">
                            <div class="guarantee-card">
                                <div class="guarantee-icon">
                                    <i class="fas fa-undo"></i>
                                </div>
                                <h5>Money Back Guarantee</h5>
                                <p>Garansi uang kembali 7 hari jika tidak puas</p>
                            </div>
                        </div>
                        <div class="guarantee-carousel-item">
                            <div class="guarantee-card">
                                <div class="guarantee-icon">
                                    <i class="fas fa-car-crash"></i>
                                </div>
                                <h5>Asuransi Gratis</h5>
                                <p>Asuransi all risk gratis 6 bulan pertama</p>
                            </div>
                        </div>
                        <div class="guarantee-carousel-item">
                            <div class="guarantee-card">
                                <div class="guarantee-icon">
                                    <i class="fas fa-road"></i>
                                </div>
                                <h5>Roadside Assistance</h5>
                                <p>Bantuan 24/7 jika terjadi masalah di jalan</p>
                            </div>
                        </div>
                        <div class="guarantee-carousel-item">
                            <div class="guarantee-card">
                                <div class="guarantee-icon">
                                    <i class="fas fa-file-alt"></i>
                                </div>
                                <h5>Dokumen Legal</h5>
                                <p>Jaminan dokumen lengkap dan bebas sengketa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5" style="background: white;">
            <div class="container">
                <h2 class="text-center mb-5" style="color: var(--primary-dark); font-weight: bold;">Koleksi Terbaru</h2>
                <div class="row">
                    ${cars.slice(0, 3).map(car => `
                        <div class="col-md-4">
                            <div class="car-card">
                                <img src="${car.image}" alt="${car.name}">
                                <div class="car-card-body">
                                    <h5 class="car-card-title">${car.name}</h5>
                                    <p class="car-price">${car.price}</p>
                                    <div class="car-specs">
                                        <span><i class="fas fa-calendar"></i> ${car.year}</span>
                                        <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                                        <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                                    </div>
                                    <button class="btn btn-custom w-100" onclick="showCarDetail(${car.id})">
                                        Lihat Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="text-center mt-4">
                    <button class="btn btn-custom btn-lg" onclick="showPage('catalog')">
                        Lihat Semua Mobil <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    `;
}

function getCatalogPage() {
    return `
        <div class="page-title">
            <h2><i class="fas fa-car"></i> Katalog Mobil</h2>
            <p class="mb-0">Temukan mobil impian Anda</p>
        </div>

        <section class="py-5">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="card p-3" style="border: 1px solid var(--accent-beige);">
                            <div class="row align-items-center">
                                <div class="col-md-3 mb-2">
                                    <input type="text" id="searchInput" class="form-control" placeholder="Cari mobil...">
                                </div>
                                <div class="col-md-3 mb-2">
                                    <select id="fuelFilter" class="form-select">
                                        <option value="">Semua Bahan Bakar</option>
                                        <option value="Bensin">Bensin</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Hybrid">Hybrid</option>
                                        <option value="Electric">Electric</option>
                                    </select>
                                </div>
                                <div class="col-md-3 mb-2">
                                    <select id="sortBy" class="form-select">
                                        <option value="">Urutkan</option>
                                        <option value="price-low">Harga Terendah</option>
                                        <option value="price-high">Harga Tertinggi</option>
                                        <option value="name">Nama (A-Z)</option>
                                    </select>
                                </div>
                                <div class="col-md-3 mb-2">
                                    <button class="btn btn-custom w-100" onclick="applyFilters()">
                                        <i class="fas fa-filter"></i> Terapkan Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row" id="carList">
                    ${cars.map(car => `
                        <div class="col-md-4 car-item" data-name="${car.name.toLowerCase()}" data-fuel="${car.fuel}" data-price="${car.price}">
                            <div class="car-card">
                                <img src="${car.image}" alt="${car.name}">
                                <div class="car-card-body">
                                    <h5 class="car-card-title">${car.name}</h5>
                                    <p class="car-price">${car.price}</p>
                                    <div class="car-specs">
                                        <span><i class="fas fa-calendar"></i> ${car.year}</span>
                                        <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                                        <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                                    </div>
                                    <p style="color: #666; font-size: 0.9rem;">${car.description}</p>
                                    <button class="btn btn-custom w-100" onclick="showCarDetail(${car.id})">
                                        Lihat Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function getContactPage() {
    return `
        <div class="page-title">
            <h2><i class="fas fa-envelope"></i> Hubungi Kami</h2>
            <p class="mb-0">Kami siap membantu Anda</p>
        </div>

        <section class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card p-4" style="border: 1px solid var(--accent-beige); height: 100%;">
                            <h4 class="mb-4" style="color: var(--primary-dark);">Informasi Kontak</h4>
                            <div class="mb-3">
                                <i class="fas fa-map-marker-alt" style="color: var(--primary-medium); width: 30px;"></i>
                                <strong>Alamat:</strong><br>
                                <span style="color: #666;">Jl. Jatisari Permai IV Blok H 1-2, Pepelegi, Waru, Sidoarjo</span>
                            </div>
                            <div class="mb-3">
                                <i class="fas fa-phone" style="color: var(--primary-medium); width: 30px;"></i>
                                <strong>Telepon:</strong><br>
                                <span style="color: #666;">+62 821-4125-3901</span>
                            </div>
                            <div class="mb-3">
                                <i class="fas fa-envelope" style="color: var(--primary-medium); width: 30px;"></i>
                                <strong>Email:</strong><br>
                                <span style="color: #666;">luxurycar@gmail.com</span>
                            </div>
                            <div class="mb-3">
                                <i class="fas fa-user-circle" style="color: var(--primary-medium); width: 30px;"></i>
                                <strong>Owner:</strong><br>
                                <span style="color: #666;">Desty Putri Puspitasari</span>
                            </div>
                            <div class="mb-3">
                                <i class="fas fa-clock" style="color: var(--primary-medium); width: 30px;"></i>
                                <strong>Jam Operasional:</strong><br>
                                <span style="color: #666;">
                                    Senin - Jumat: 09.00 - 18.00<br>
                                    Sabtu: 09.00 - 15.00<br>
                                    Minggu: Tutup
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="card p-4" style="border: 1px solid var(--accent-beige);">
                            <h4 class="mb-4" style="color: var(--primary-dark);">Kirim Pesan</h4>
                            <form id="contactForm">
                                <div class="mb-3">
                                    <label class="form-label">Nama Lengkap *</label>
                                    <input type="text" class="form-control" id="contactName" required>
                                    <div class="invalid-feedback">Nama harus diisi minimal 3 karakter</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email *</label>
                                    <input type="email" class="form-control" id="contactEmail" required>
                                    <div class="invalid-feedback">Email tidak valid</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Nomor Telepon *</label>
                                    <input type="tel" class="form-control" id="contactPhone" required>
                                    <div class="invalid-feedback">Nomor telepon harus 10-13 digit</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Minat Mobil</label>
                                    <select class="form-select" id="carInterest">
                                        <option value="">-- Pilih Mobil --</option>
                                        ${cars.map(car => `<option value="${car.name}">${car.name}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Pesan *</label>
                                    <textarea class="form-control" id="contactMessage" rows="4" required></textarea>
                                    <div class="invalid-feedback">Pesan harus diisi minimal 10 karakter</div>
                                </div>
                                <button type="submit" class="btn btn-custom w-100">
                                    <i class="fas fa-paper-plane"></i> Kirim Pesan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-12">
                        <div class="card p-4 text-center" style="border: 1px solid var(--accent-beige);">
                            <h4 class="mb-3" style="color: var(--primary-dark);">Ikuti Media Sosial Kami</h4>
                            <div>
                                <a href="#" class="btn btn-custom me-2 mb-2">
                                    <i class="fab fa-facebook-f"></i> Facebook
                                </a>
                                <a href="#" class="btn btn-custom me-2 mb-2">
                                    <i class="fab fa-instagram"></i> Instagram
                                </a>
                                <a href="#" class="btn btn-custom me-2 mb-2">
                                    <i class="fab fa-twitter"></i> Twitter
                                </a>
                                <a href="#" class="btn btn-custom mb-2">
                                    <i class="fab fa-youtube"></i> YouTube
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function showCarDetail(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;

    const modalHTML = `
        <div class="modal fade" id="carDetailModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header" style="background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-medium) 100%); color: white;">
                        <h5 class="modal-title">${car.name}</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${car.image}" alt="${car.name}" class="img-fluid mb-3 rounded">
                        <h3 class="car-price text-center mb-3">${car.price}</h3>
                        <div class="row mb-3">
                            <div class="col-md-4 text-center">
                                <i class="fas fa-calendar fa-2x" style="color: var(--primary-medium);"></i>
                                <p class="mt-2"><strong>Tahun</strong><br>${car.year}</p>
                            </div>
                            <div class="col-md-4 text-center">
                                <i class="fas fa-gas-pump fa-2x" style="color: var(--primary-medium);"></i>
                                <p class="mt-2"><strong>Bahan Bakar</strong><br>${car.fuel}</p>
                            </div>
                            <div class="col-md-4 text-center">
                                <i class="fas fa-cog fa-2x" style="color: var(--primary-medium);"></i>
                                <p class="mt-2"><strong>Transmisi</strong><br>${car.transmission}</p>
                            </div>
                        </div>
                        <h5 style="color: var(--primary-dark);">Deskripsi:</h5>
                        <p>${car.description}</p>
                        <div class="alert alert-custom">
                            <i class="fas fa-info-circle"></i> <strong>Dilindungi Garansi 7G+ Premium!</strong><br>
                            Hubungi kami untuk test drive dan penawaran terbaik dengan proteksi lengkap.
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                        <button type="button" class="btn btn-custom" onclick="showPage('contact'); bootstrap.Modal.getInstance(document.getElementById('carDetailModal')).hide();">
                            <i class="fas fa-phone"></i> Hubungi Kami
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const existingModal = document.getElementById('carDetailModal');
    if (existingModal) {
        existingModal.remove();
    }

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = new bootstrap.Modal(document.getElementById('carDetailModal'));
    modal.show();
}

function initializeFilters() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        filterCars();
    });
}

function applyFilters() {
    filterCars();
}

function filterCars() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const fuelType = document.getElementById('fuelFilter').value;
    const sortType = document.getElementById('sortBy').value;

    let carItems = Array.from(document.querySelectorAll('.car-item'));

    carItems.forEach(item => {
        const name = item.getAttribute('data-name');
        const fuel = item.getAttribute('data-fuel');
        
        const matchesSearch = name.includes(searchTerm);
        const matchesFuel = !fuelType || fuel === fuelType;

        if (matchesSearch && matchesFuel) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    if (sortType) {
        const carList = document.getElementById('carList');
        const visibleItems = carItems.filter(item => item.style.display !== 'none');

        if (sortType === 'name') {
            visibleItems.sort((a, b) => {
                return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
            });
        } else if (sortType === 'price-low' || sortType === 'price-high') {
            visibleItems.sort((a, b) => {
                const priceA = parseInt(a.getAttribute('data-price').replace(/\D/g, ''));
                const priceB = parseInt(b.getAttribute('data-price').replace(/\D/g, ''));
                return sortType === 'price-low' ? priceA - priceB : priceB - priceA;
            });
        }

        visibleItems.forEach(item => carList.appendChild(item));
    }
}

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        
        let isValid = true;
        
        if (name.length < 3) {
            document.getElementById('contactName').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('contactName').classList.remove('is-invalid');
            document.getElementById('contactName').classList.add('is-valid');
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('contactEmail').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('contactEmail').classList.remove('is-invalid');
            document.getElementById('contactEmail').classList.add('is-valid');
        }
        
        const phoneRegex = /^[0-9]{10,13}$/;
        if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
            document.getElementById('contactPhone').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('contactPhone').classList.remove('is-invalid');
            document.getElementById('contactPhone').classList.add('is-valid');
        }
        
        if (message.length < 10) {
            document.getElementById('contactMessage').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('contactMessage').classList.remove('is-invalid');
            document.getElementById('contactMessage').classList.add('is-valid');
        }
        
        if (isValid) {
            alert('✅ Terima kasih! Pesan Anda telah berhasil dikirim.\n\nTim LuxuryCar.id akan segera menghubungi Anda untuk memberikan informasi lebih lanjut tentang mobil impian Anda dengan proteksi Garansi 7G+ Premium.');
            form.reset();
            form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
        } else {
            alert('❌ Mohon lengkapi form dengan benar!');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});

let currentSlide = 0;
const totalSlides = 3;

function moveCarousel(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.getElementById('guaranteeCarousel');
    if (!carousel) return;
    
    const isMobile = window.innerWidth <= 768;
    const itemsPerView = isMobile ? 1 : 3;
    const offset = currentSlide * (100 / itemsPerView);
    
    carousel.style.transform = `translateX(-${offset}%)`;
    
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

setInterval(() => {
    if (document.getElementById('guaranteeCarousel')) {
        moveCarousel(1);
    }
}, 5000);

window.addEventListener('resize', updateCarousel);