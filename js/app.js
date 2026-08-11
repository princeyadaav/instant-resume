window.resumeApp = function resumeApp() {
    const appState = {
        resume: window.resumeDataUtils.createEmptyResume(),
        isGenerating: false,

        init() {
            this.loadSampleData();
        }
    };

    return Object.assign(appState, window.resumeFormMethods, window.resumePdfMethods, window.resumePreviewHelpers);
};
