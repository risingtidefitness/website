document.addEventListener('DOMContentLoaded', function() {
    // Modal handling
    const modals = {
        programs: document.getElementById('programs-modal'),
        about: document.getElementById('about-modal'),
        services: document.getElementById('services-modal'),
        credentials: document.getElementById('credentials-modal'),
        contact: document.getElementById('contact-modal')
    };

    // Open modal buttons
    document.querySelectorAll('[data-modal]').forEach(button => {
        button.addEventListener('click', () => {
            const modalName = button.getAttribute('data-modal');
            if (modals[modalName]) {
                openModal(modals[modalName]);
            }
        });
    });

    // Program CTAs
    document.querySelectorAll('[data-action="contact"]').forEach(button => {
        button.addEventListener('click', () => {
            closeAllModals();
            openModal(modals.contact);
        });
    });

    // Close buttons
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const modal = button.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });

    // Close on outside click
    Object.values(modals).forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal(modal);
                }
            });
        }
    });

    function openModal(modal) {
        if (!modal) return;
        modal.style.display = 'flex';
        // Force a reflow before adding the active class
        modal.offsetHeight;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300); // Match this with CSS transition time
    }

    function closeAllModals() {
        Object.values(modals).forEach(modal => {
            if (modal) {
                closeModal(modal);
            }
        });
    }

    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}); 