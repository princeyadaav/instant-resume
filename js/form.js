window.resumeFormMethods = {
    loadSampleData() {
        this.resume = window.resumeDataUtils.getSampleResume();
    },

    clearForm() {
        this.resume = window.resumeDataUtils.createEmptyResume();
    },

    addEducation() {
        this.resume.education.push({ institution: '', location: '', degree: '', dates: '' });
    },

    removeEducation(index) {
        this.resume.education.splice(index, 1);
    },

    addWork() {
        this.resume.workExperience.push({ role: '', company: '', link: '', dates: '', bullets: [''] });
    },

    removeWork(index) {
        this.resume.workExperience.splice(index, 1);
    },

    addWorkBullet(index) {
        this.resume.workExperience[index].bullets.push('');
    },

    removeWorkBullet(workIndex, bulletIndex) {
        this.resume.workExperience[workIndex].bullets.splice(bulletIndex, 1);
    },

    addProject() {
        this.resume.projects.push({ title: '', linkText: '', dates: '', bullets: [''] });
    },

    removeProject(index) {
        this.resume.projects.splice(index, 1);
    },

    addProjectBullet(index) {
        this.resume.projects[index].bullets.push('');
    },

    removeProjectBullet(projectIndex, bulletIndex) {
        this.resume.projects[projectIndex].bullets.splice(bulletIndex, 1);
    },

    addCertificate() {
        this.resume.certificates.push({ title: '', tag: '', date: '', bullets: [''] });
    },

    removeCertificate(index) {
        this.resume.certificates.splice(index, 1);
    },

    addCertBullet(index) {
        this.resume.certificates[index].bullets.push('');
    },

    removeCertBullet(certIndex, bulletIndex) {
        this.resume.certificates[certIndex].bullets.splice(bulletIndex, 1);
    }
};
