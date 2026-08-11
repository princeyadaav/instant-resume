# Instant Resume

A modern and simple resume builder web app that helps you create a professional resume with a live preview and PDF export.

## Features
- Live resume preview
- Editable personal details
- Add or remove education, work experience, projects, and certificates
- Load sample resume data instantly
- Print or download as PDF

## Project Structure
- index.html — main page
- css/style.css — styles for the app
- js/data.js — resume data and sample content
- js/form.js — form actions and section management
- js/preview.js — preview helpers
- js/pdf.js — PDF export and print logic
- js/app.js — main app initialization

## How to Run
Open the project folder in a browser and open index.html.

You can also run a local server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```


## Notes
The app uses CDN-based libraries such as Tailwind CSS, Alpine.js, FontAwesome, and html2pdf, so internet access is required for those assets.
