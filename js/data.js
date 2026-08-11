window.resumeDataUtils = {
    createEmptyResume() {
        return {
            personal: {
                fullName: '',
                location: '',
                phone: '',
                email: '',
                linkedin: '',
                github: ''
            },
            education: [],
            skills: {
                languages: '',
                frameworks: '',
                tools: '',
                platforms: '',
                softSkills: ''
            },
            workExperience: [],
            projects: [],
            certificates: []
        };
    },

    getSampleResume() {
        return {
            personal: {
                fullName: 'PRINCE YADAV',
                location: 'Deoria,Uttar Pradesh,274601',
                phone: '+91926490XXXX',
                email: 'princeyadaXXXX@gmail.com',
                linkedin: 'linkedin.com/in/prince-yadaav',
                github: 'github.com/princeyadaav'
            },
            education: [
                {
                    institution: 'Babu Banarasi Das University',
                    location: 'Lucknow, India',
                    degree: 'Bachelor of Technology in Computer Science; GPA: 8.5',
                    dates: 'May 2024 - June 2028'
                }
            ],
            skills: {
                languages: 'Python, SQL, JAVA, C, C++',
                frameworks: 'Pandas, Numpy, Scikit-Learn, Matplotlib,Seaborn,Plotly',
                tools: 'Power BI, Excel, PowerPoint, Tableau, MySQL, SQLite',
                platforms: ' Jupyter Notebook, Visual Studio Code, IntelliJ IDEA',
                softSkills: 'Rapport Building, People Management, Excellent communication'
            },
            workExperience: [
                {
                    role: 'GENERATIVE AI INTERN',
                    company: 'IBM',
                    link: 'LINK',
                    dates: 'February 2026 - March 2026',
                    bullets: [
                        'Streamlined data collection and reporting procedures, reducing processing time by 20% enhancing efficiency.',
                        'Implemented process improvements and automation solutions, resulting in 15% increase in productivity.',
                        'Collaborated with 3+ cross-functional teams to gather requirements, define project scopes, and ensure alignment with business objectives.',
                        'Produced 15+ comprehensive reports and presentations summarizing findings and recommendations.',
                        'Conducted in-depth market research and analysis, resulting in the identification of 10+ key trends.'
                    ]
                }
            ],
            projects: [
                {
                    title: 'Student Performance Prediction',
                    linkText: 'LINK',
                    dates: 'December 23- February 2024',
                    bullets: [
                        'Achieved a 96% accuracy rate in forecasting student academic performance by developing and deploying a machine learning model.',
                        'Managed data integrity by handling missing values and encoding categorical variables, enhancing quality by 33%.',
                        'Conducted experiments with both classification algorithms to identify the most suitable approach.'
                    ]
                }
            ],
            certificates: [
                {
                    title: 'Programming in Python (Meta)',
                    tag: 'CERTIFICATE',
                    date: 'March 2023',
                    bullets: [
                        'Mastered fundamental Python syntax, efficiently utilizing control flow, loops, functions, and data structures.'
                    ]
                }
            ]
        };
    }
};
