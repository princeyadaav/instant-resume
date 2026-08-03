window.resumePreviewHelpers = {
    getDisplayName(resume) {
        return resume?.personal?.fullName || 'YOUR NAME';
    },

    getContactHref(url) {
        if (!url) return '#';
        return url.startsWith('http') ? url : `https://${url}`;
    },

    getLinkLabel() {
        return 'Link';
    },

    getLinkHref(value) {
        if (!value) return '#';
        const trimmed = String(value).trim();
        if (!trimmed) return '#';
        if (/^https?:\/\//i.test(trimmed) || /^mailto:/i.test(trimmed)) return trimmed;
        return `https://${trimmed}`;
    }
};
