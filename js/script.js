// Ketentuan 5 pasword

document.getElementById('membershipForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const passwordInput = this.querySelector('input[type="password"]');
    const messageEl = this.querySelector('.form-message');

    if (validatePassword(passwordInput.value)) {
        messageEl.textContent = "Pendaftaran Berhasil";
        messageEl.style.color = "green";
        messageEl.style.display = "block"; 

        setTimeout(() => {
            this.reset();
            messageEl.style.display = "none";
        }, 3000);
        
    } else {
        messageEl.textContent = "Password harus: 8+ karakter, mengandung huruf besar, kecil, dan angka";
        messageEl.style.color = "red";
        messageEl.style.display = "block";
        
       
    }
});

function validatePassword(password) {
    if (!password) return false;
    if(password.length < 8) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/\d/.test(password)) return false;

    return true;
}

// allert pada katalog
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.stock-badge.bg-danger').forEach(badge => {
        const btn = badge.closest('tr').querySelector('.btn-lyboo');
        btn.addEventListener('click', function(e) {
            if (badge.textContent.trim() === 'Habis') {
                e.preventDefault();
                alert('Maaf, Produk ini sedang habis. Silahkan Hubungi kami untuk info stok terbaru.');

                this.classList.add('btn-shake');
                setTimeout(() => {
                    this.classList.remove(btn-shake);
                }, 500);
            }
        });
    });
});


// Ketentuan 6

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('creativeContactForm');
    const nameInput = document.getElementById('creativeName');
    const messageInput = document.getElementById('creativeMessage');
    const nameCounter = document.getElementById('nameCounter');
    const messageCounter = document.getElementById('messageCounter');

    nameInput.addEventListener('input', function () {
        nameCounter.textContent = this.value.length;
        validateMessage();
    });

    messageInput.addEventListener('input', function() {
        messageCounter.textContent = this.value.length;
        validateMessage();
    });

    function validateName() {
        if (nameInput.value.length < 5 || nameInput.value.length > 20) {
            nameInput.setCustomValidity('Nama harus antara 5-20 karakter');
        } else {
            nameInput.setCustomValidity('');
        }
    }

    function validateMessage() {
        if (messageInput.value.length < 10 || messageInput.value.length > 500) {
            messageInput.setCustomValidity('Pesan harus antara 10-500 karakter');
        } else {
            messageInput.setCustomValidity('');
        }
    }

    form.addEventListener('submit', function(event) {
        validateName();
        validateMessage();

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');

        // allert 
        if (form.checkValidity()) {
            event.preventDefault();
            alert('Terimkasih!! Pesan Anda telah terkirim. Kami akan segers merespon.');
            form.reset();
            nameCounter.textContent = '0';
            messageCounter.textContent = '0';
            form.classList.remove('was-validated');
        }
    }, false);

    nameCounter.textContent = nameInput.value.length;
    messageCounter.textContent = messageInput.value.length;
});

    