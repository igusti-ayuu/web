let totalHarga = 0;
let keranjang = [];
let posisiSlider = 0;

function tambahKeKeranjang(namaMakanan, harga) {
    keranjang.push({ nama: namaMakanan, harga: harga });
    totalHarga += harga;

    updateKeranjang();
}

function updateKeranjang() {
    const keranjangList = document.getElementById("keranjang-list");
    keranjangList.innerHTML = "";

    keranjang.forEach((item) => {
        const itemElement = document.createElement("p");
        itemElement.textContent = `${item.nama} - Rp${item.harga}`;
        keranjangList.appendChild(itemElement);
    });

    document.getElementById("total-harga").textContent = totalHarga;
}

function checkout() {
    const pengiriman = document.getElementById("pengiriman").value;
    let ongkir = 0;

    if (pengiriman === "Ongkir Normal") ongkir = 5000;
    else if (pengiriman === "Ongkir Cepat") ongkir = 10000;

    const totalBayar = totalHarga + ongkir;

    if (keranjang.length === 0) {
        alert("Keranjang Anda masih kosong!Segera isi keranjang Anda sebelum kesempatan hilang, seperti hati yang pernah menunggu tanpa kepastian");
    } else {
        alert(`Total belanja Anda: Rp${totalBayar} (${pengiriman}). Setiap langkah Anda menjauh, rasanya seperti ada bagian dari hati kami yang ikut pergi. Terima kasih atas kunjungannya. Semoga kita bisa bertemu lagi, menyatukan hati yang sempat terpisah.`);
        keranjang = [];
        totalHarga = 0;
        updateKeranjang();
    }
}

function geserMenu(arah) {
    const slider = document.querySelector(".menu-slider");
    const items = document.querySelectorAll(".menu-item"); // Ambil semua item menu
    const itemWidth = items[0].offsetWidth + 10; // Ukuran setiap item (termasuk margin)
    const maxGeser = (items.length - 1) * itemWidth;
    posisiSlider += arah * itemWidth;

    if (posisiSlider < 0) {
        posisiSlider = 0; // Tidak bisa geser ke kiri lebih dari batas awal
    } else if (posisiSlider > maxGeser) {
        posisiSlider = maxGeser; // Tidak bisa geser ke kanan lebih dari jumlah menu
    }

    slider.style.transform = `translateX(-${posisiSlider}px)`;
}