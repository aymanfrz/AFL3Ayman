class ModalHandler {
    constructor() {
        this.modal = document.getElementById("photoModal");
        this.modalImage = document.getElementById("modalImage");
        this.closeButton = document.getElementById("closeModal");
        
        // ngejalanin event listener
        if (this.modal) {
            this.initEvents();
        }
    }

    openModal(imageSrc) {
        this.modalImage.src = imageSrc;
        this.modal.classList.remove("hidden");
        this.modal.classList.add("flex");
    }

    closeModal() {
        this.modal.classList.add("hidden");
        this.modal.classList.remove("flex");
    }

    initEvents() {
        // event buat Foto Profil
        const profilePhoto = document.getElementById("profilePhoto");
        if (profilePhoto) {
            profilePhoto.addEventListener("click", (e) => this.openModal(e.target.src));
        }

        // event buat Kartu Hobi (Gallery)
        document.querySelectorAll(".hobby-card").forEach((card) => {
            card.addEventListener("click", () => {
                const imgSrc = card.querySelector("img").src;
                this.openModal(imgSrc);
            });
        });

        // Event Tutup Modal
        this.closeButton?.addEventListener("click", () => this.closeModal());

        this.modal.addEventListener("click", (e) => {
            if (e.target.id === "photoModal") this.closeModal();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") this.closeModal();
        });
    }
}

// ngestart modal
document.addEventListener("DOMContentLoaded", () => {
    new ModalHandler();
});