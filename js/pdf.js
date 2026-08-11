window.resumePdfMethods = {
    downloadPDF() {
        const element = document.getElementById('resume-preview');
        if (!element) return;

        this.isGenerating = true;

        const fileName = (this.resume.personal.fullName || 'Resume')
            .trim()
            .toUpperCase()
            .replace(/\s+/g, '_') + '_Resume.pdf';

        const opt = {
            margin: 0,
            filename: fileName,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, logging: false },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

<<<<<<< HEAD
        // Be robust when checking for the html2pdf library (some bundles expose it differently).
        if (!window.html2pdf) {
            console.error('html2pdf is not available. Falling back to browser print.');
            try { this.isGenerating = false; } catch (e) { /* noop */ }
=======
        if (typeof window.html2pdf !== 'function') {
            console.error('html2pdf is not available. Falling back to browser print.');
            this.isGenerating = false;
>>>>>>> 66623d262ff9cde6e1860d96a1bb3fbfc01545cc
            window.print();
            return;
        }

        window.html2pdf().set(opt).from(element).save().then(() => {
            this.isGenerating = false;
        }).catch(err => {
            console.error('PDF export failed, falling back to window print', err);
            this.isGenerating = false;
            window.print();
        });
    },

    printPDF() {
        window.print();
    }
};
