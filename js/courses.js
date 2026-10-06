const courses = [
    [
        'Full Stack Web Development (MERN)',
        'Build modern web applications with MongoDB, Express, React and Node.js.',
        'hero-learning.jpg',
        'Web Development',
        '3–6 Months',
        'Beginner → Advanced'
    ],

    [
        'Java Full Stack',
        'Learn Java, Spring Boot, SQL, APIs and frontend development through practical projects.',
        'classroom-3.jpg',
        'Programming',
        '3–6 Months',
        'Beginner → Advanced'
    ],

    [
        'Python Programming',
        'Learn Python, object-oriented programming, APIs, automation and practical application development.',
        'students-2.jpg',
        'Programming',
        '2–4 Months',
        'Beginner → Intermediate'
    ],

    [
        'Data Science & Machine Learning',
        'Build practical skills in Python, statistics, data analysis and machine learning.',
        'students-3.jpg',
        'Data & AI',
        '4–6 Months',
        'Intermediate'
    ],

    [
        'Cloud & DevOps',
        'Learn Linux, Git, Docker, CI/CD and cloud deployment fundamentals.',
        'lab-1.jpg',
        'Cloud & DevOps',
        '3–5 Months',
        'Intermediate'
    ],

    [
        'Software Testing',
        'Learn manual testing, API testing, automation concepts and modern QA workflows.',
        'lab-2.jpg',
        'Testing',
        '2–4 Months',
        'Beginner → Intermediate'
    ],

    [
        'UI/UX Design',
        'Learn user research, wireframing, design systems and practical portfolio development.',
        'lab-3.jpg',
        'Design',
        '2–4 Months',
        'Beginner'
    ],

    [
        'AI & Generative AI',
        'Learn AI concepts, prompt engineering and practical Generative AI workflows.',
        'internship.jpg',
        'Data & AI',
        '2–4 Months',
        'Beginner → Intermediate'
    ],

    [
        'SQL & Data Analytics',
        'Learn SQL, spreadsheets, dashboards and practical analytical thinking.',
        'blog-1.jpg',
        'Data & AI',
        '2–4 Months',
        'Beginner → Intermediate'
    ]
];


const grid = document.querySelector('#courseGrid');


function render(list) {

    if (!grid) return;

    grid.innerHTML = list.map((course) => {

        const [
            title,
            description,
            image,
            category,
            duration,
            level
        ] = course;

        return `
            <article class="card reveal show">

                <img
                    class="course-img"
                    src="assets/images/${image}"
                    alt="${title} course at Million Technology"
                    loading="lazy"
                >

                <div class="card-body">

                    <span class="pill">
                        ${category}
                    </span>

                    <h3>
                        ${title}
                    </h3>

                    <p class="muted">
                        ${description}
                    </p>

                    <div class="meta">

                        <span class="pill">
                            ${duration}
                        </span>

                        <span class="pill">
                            ${level}
                        </span>

                    </div>

                    <a
                        class="card-link"
                        href="course-details.html?course=${encodeURIComponent(title)}"
                    >
                        View Course
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

            </article>
        `;

    }).join('');
}


render(courses);


const search = document.querySelector('#courseSearch');
const category = document.querySelector('#courseCategory');


function filterCourses() {

    const searchText = (search?.value || '')
        .trim()
        .toLowerCase();

    const selectedCategory = category?.value || 'All';

    const filteredCourses = courses.filter((course) => {

        const title = course[0].toLowerCase();
        const description = course[1].toLowerCase();
        const courseCategory = course[3];

        const matchesSearch =
            title.includes(searchText) ||
            description.includes(searchText) ||
            courseCategory.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === 'All' ||
            courseCategory === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    render(filteredCourses);
}


search?.addEventListener('input', filterCourses);

category?.addEventListener('change', filterCourses);