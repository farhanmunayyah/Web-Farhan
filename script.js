document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah perilaku default dari tautan
        img.classList.toggle('zoomed'); // Menambahkan atau menghapus kelas 'zoomed'
    });
});

function createWaterDrop() {
    const drop = document.createElement('div');
    drop.className = 'water-drop';

    // Menentukan tinggi footer
    const footer = document.querySelector('footer');
    const footerHeight = footer.offsetHeight;
    const bodyHeight = document.body.scrollHeight;

    // Menempatkan bulir air di posisi acak dalam rentang tampilan
    drop.style.left = Math.random() * window.innerWidth + 'px';

    // Batasi posisi agar bulir air bisa muncul di footer tetapi tidak mengganggu tampilannya
    const maxHeight = bodyHeight - footerHeight; // Menghitung batas maksimal
    drop.style.top = Math.random() * maxHeight + 'px';
    
    document.body.appendChild(drop);

    // Hapus bulir air setelah beberapa waktu
    setTimeout(() => {
        drop.remove();
    }, 2000);
}

// Buat bulir air setiap 200ms
setInterval(createWaterDrop, 300);