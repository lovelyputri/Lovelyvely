document.addEventListener('DOMContentLoaded', function () {
    const book = document.getElementById('book');
    const loadingText = document.getElementById('loadingText');
    const progress = document.getElementById('progress');

    let loadPercent =0;

    function openBook() {
        book.style.transform = 'rotateY(-180deg)';

        const loadInterval = setInterval(() => {
            loadPercent +=1;
            progress.style.width = loadPercent + '%';

            if (loadPercent <30) {
                loadingText.textContent = 'Membuka Buku...';
            } else if (loadPercent <70) {
                loadingText.textContent = 'Memuat Konten...';
            } else {
                loadingText.textContent = 'Hampir Selesai...';
            }

            if (loadPercent >= 100) {
                clearInterval(loadInterval);
                loadingText.textContent = 'Siap!';
                setTimeout(function() {
                    const loading = document.getElementById('loading');
                    loading.style.opacity = '0';
                    setTimeout(function() {
                        loading.style.display = 'none';
                    }, 500);
                }, 500);
            }
        }, 30);
    }

    setTimeout(openBook, 500);

});

