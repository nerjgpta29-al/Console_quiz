const users = [
    {
        id: 1,
        name: "Administrator",
        email: "admin@example.com",
        username: "admin",
        password: "admin123",
        role: "admin",
        active: false
    }
];

let currentUser = null;

let quizState = {
    topic: null,

    questions: [],

    currentIndex: 0,

    score: 0,

    selectedAnswer: null,

    timer: 30,

    timerInterval: null,

    started: false
};

const questionBank = {

    python: [

        {
            question:
                "Which keyword defines a function in Python?",

            options: [
                "func",
                "def",
                "function",
                "define"
            ],

            answer: "def"
        },

        {
            question:
                "Which data type stores key-value pairs?",

            options: [
                "list",
                "tuple",
                "dict",
                "set"
            ],

            answer: "dict"
        },

        {
            question:
                "What is the output of len([10, 20, 30])?",

            options: [
                "2",
                "3",
                "4",
                "30"
            ],

            answer: "3"
        },

        {
            question:
                "Which symbol starts a comment in Python?",

            options: [
                "//",
                "#",
                "/*",
                "--"
            ],

            answer: "#"
        },

        {
            question:
                "Which collection is immutable?",

            options: [
                "list",
                "set",
                "dictionary",
                "tuple"
            ],

            answer: "tuple"
        },

        {
            question:
                "What does == compare?",

            options: [
                "Identity only",
                "Equality",
                "Assignment",
                "Types only"
            ],

            answer: "Equality"
        },

        {
            question:
                "Which function converts text to an integer?",

            options: [
                "str()",
                "float()",
                "int()",
                "number()"
            ],

            answer: "int()"
        },

        {
            question:
                "Which keyword is used to create a class?",

            options: [
                "object",
                "class",
                "struct",
                "type"
            ],

            answer: "class"
        },

        {
            question:
                "Which loop is commonly used to iterate over a sequence?",

            options: [
                "repeat",
                "foreach",
                "for",
                "loop"
            ],

            answer: "for"
        },

        {
            question:
                "What does append() do to a list?",

            options: [
                "Removes an item",
                "Adds an item",
                "Sorts it",
                "Copies it"
            ],

            answer: "Adds an item"
        },

        {
            question:
                "Which value represents absence of a value?",

            options: [
                "None",
                "Empty",
                "NullValue",
                "FalseOnly"
            ],

            answer: "None"
        },

        {
            question:
                "Which statement handles exceptions?",

            options: [
                "try/except",
                "if/error",
                "catch/error",
                "handle"
            ],

            answer: "try/except"
        }

    ],


    sql: [

        {
            question:
                "Which command retrieves data from a table?",

            options: [
                "GET",
                "SELECT",
                "FETCH",
                "READ"
            ],

            answer: "SELECT"
        },

        {
            question:
                "Which command adds a new row?",

            options: [
                "ADD",
                "INSERT",
                "APPEND",
                "CREATE"
            ],

            answer: "INSERT"
        },

        {
            question:
                "Which clause filters rows?",

            options: [
                "FILTER",
                "WHERE",
                "HAVING_ONLY",
                "LIMIT"
            ],

            answer: "WHERE"
        },

        {
            question:
                "Which keyword removes duplicate results?",

            options: [
                "UNIQUE",
                "DISTINCT",
                "DEDUP",
                "ONLY"
            ],

            answer: "DISTINCT"
        },

        {
            question:
                "Which command changes existing rows?",

            options: [
                "CHANGE",
                "UPDATE",
                "MODIFY",
                "ALTER ROW"
            ],

            answer: "UPDATE"
        },

        {
            question:
                "Which command removes rows?",

            options: [
                "REMOVE",
                "DELETE",
                "DROP ROW",
                "CLEAR"
            ],

            answer: "DELETE"
        },

        {
            question:
                "Which clause sorts query results?",

            options: [
                "SORT BY",
                "ORDER BY",
                "GROUP BY",
                "ARRANGE"
            ],

            answer: "ORDER BY"
        },

        {
            question:
                "Which function counts rows?",

            options: [
                "SUM()",
                "COUNT()",
                "ROWS()",
                "TOTAL()"
            ],

            answer: "COUNT()"
        },

        {
            question:
                "Which clause groups rows?",

            options: [
                "GROUP BY",
                "ORDER BY",
                "COLLECT BY",
                "CLUSTER"
            ],

            answer: "GROUP BY"
        },

        {
            question:
                "Which key uniquely identifies a row?",

            options: [
                "Foreign key",
                "Primary key",
                "Index key",
                "Join key"
            ],

            answer: "Primary key"
        },

        {
            question:
                "Which join returns matching rows from both tables?",

            options: [
                "INNER JOIN",
                "LEFT JOIN",
                "CROSS JOIN",
                "FULL JOIN"
            ],

            answer: "INNER JOIN"
        },

        {
            question:
                "Which command changes table structure?",

            options: [
                "ALTER",
                "UPDATE",
                "CHANGE",
                "REBUILD"
            ],

            answer: "ALTER"
        }

    ],


    "machine learning": [

        {
            question:
                "Which is supervised learning?",

            options: [
                "Clustering",
                "Classification",
                "PCA only",
                "Association rules"
            ],

            answer: "Classification"
        },

        {
            question:
                "What is overfitting?",

            options: [
                "Model too simple",
                "Good training but poor unseen-data performance",
                "No training",
                "Missing labels"
            ],

            answer:
                "Good training but poor unseen-data performance"
        },

        {
            question:
                "Which metric is common for classification?",

            options: [
                "Accuracy",
                "MSE only",
                "MAE only",
                "R-squared only"
            ],

            answer: "Accuracy"
        },

        {
            question:
                "Which algorithm can be used for classification?",

            options: [
                "Logistic Regression",
                "K-means only",
                "PCA only",
                "Apriori only"
            ],

            answer: "Logistic Regression"
        },

        {
            question:
                "What does PCA primarily perform?",

            options: [
                "Dimensionality reduction",
                "Password hashing",
                "Web routing",
                "Sorting"
            ],

            answer: "Dimensionality reduction"
        },

        {
            question:
                "Which algorithm is unsupervised?",

            options: [
                "Linear Regression",
                "K-means",
                "Logistic Regression",
                "Decision Tree with labels"
            ],

            answer: "K-means"
        },

        {
            question:
                "What is a feature?",

            options: [
                "Input variable",
                "Only target",
                "Model file",
                "Evaluation score"
            ],

            answer: "Input variable"
        },

        {
            question:
                "What is the target variable?",

            options: [
                "Output to predict",
                "Input only",
                "Random seed",
                "Learning rate"
            ],

            answer: "Output to predict"
        },

        {
            question:
                "Which method helps reduce overfitting?",

            options: [
                "Regularization",
                "Always increasing complexity",
                "Removing validation",
                "Ignoring data"
            ],

            answer: "Regularization"
        },

        {
            question:
                "What does train-test split create?",

            options: [
                "Training and evaluation subsets",
                "Two models only",
                "Two labels",
                "Two databases"
            ],

            answer:
                "Training and evaluation subsets"
        },

        {
            question:
                "Which metric is common for regression?",

            options: [
                "MSE",
                "Accuracy only",
                "Precision only",
                "Recall only"
            ],

            answer: "MSE"
        },

        {
            question:
                "What is a hyperparameter?",

            options: [
                "Setting chosen before/during training",
                "Always a label",
                "A row",
                "A test prediction"
            ],

            answer:
                "Setting chosen before/during training"
        }

    ]

};


const authSection =
    document.getElementById("authSection");

const dashboardSection =
    document.getElementById("dashboardSection");

const topicSection =
    document.getElementById("topicSection");

const quizSection =
    document.getElementById("quizSection");

const resultSection =
    document.getElementById("resultSection");

const profileSection =
    document.getElementById("profileSection");

const adminSection =
    document.getElementById("adminSection");

const loginBox =
    document.getElementById("loginBox");

const registerBox =
    document.getElementById("registerBox");

const headerUser =
    document.getElementById("headerUser");

const headerUsername =
    document.getElementById("headerUsername");

const headerLogoutBtn =
    document.getElementById("headerLogoutBtn");


function hideAllScreens() {

    authSection.classList.add("hidden");

    dashboardSection.classList.add("hidden");

    topicSection.classList.add("hidden");

    quizSection.classList.add("hidden");

    resultSection.classList.add("hidden");

    profileSection.classList.add("hidden");

    adminSection.classList.add("hidden");
}

function showScreen(screen) {

    hideAllScreens();

    screen.classList.remove("hidden");
}

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}

function shuffle(array) {

    const newArray = [...array];

    for (
        let i = newArray.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [
            newArray[i],
            newArray[j]
        ] =
            [
                newArray[j],
                newArray[i]
            ];
    }

    return newArray;
}


function getRandomQuestions(topic) {

    const questions =
        questionBank[topic];

    const shuffled =
        shuffle(questions);

    return shuffled
        .slice(0, 10)
        .map(question => {

            return {

                question:
                    question.question,

                options:
                    shuffle(question.options),

                answer:
                    question.answer
            };

        });
}


document
    .getElementById("showRegisterBtn")
    .addEventListener("click", () => {

        loginBox.classList.add("hidden");

        registerBox.classList.remove("hidden");

    });


document
    .getElementById("showLoginBtn")
    .addEventListener("click", () => {

        registerBox.classList.add("hidden");

        loginBox.classList.remove("hidden");

    });




document
    .getElementById("registerForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document
                .getElementById("registerName")
                .value
                .trim();

        const email =
            document
                .getElementById("registerEmail")
                .value
                .trim();

        const username =
            document
                .getElementById("registerUsername")
                .value
                .trim()
                .toLowerCase();

        const password =
            document
                .getElementById("registerPassword")
                .value;

        const confirmPassword =
            document
                .getElementById("registerConfirmPassword")
                .value;


        const message =
            document.getElementById(
                "registerMessage"
            );


        if (password !== confirmPassword) {

            message.textContent =
                "Passwords do not match.";

            message.style.color =
                "var(--red)";

            return;
        }


        const existingUser =
            users.find(
                user =>
                    user.username === username
            );


        if (existingUser) {

            message.textContent =
                "Username already exists.";

            message.style.color =
                "var(--red)";

            return;
        }


        users.push({

            id: users.length + 1,

            name: name,

            email: email,

            username: username,

            password: password,

            role: "user",

            active: false

        });


        message.textContent =
            "Registration successful!";

        message.style.color =
            "var(--green)";


        this.reset();


        showToast(
            "Registration successful"
        );


        setTimeout(() => {

            registerBox.classList.add(
                "hidden"
            );

            loginBox.classList.remove(
                "hidden"
            );

        }, 1000);

    });




document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const username =
            document
                .getElementById("loginUsername")
                .value
                .trim()
                .toLowerCase();

        const password =
            document
                .getElementById("loginPassword")
                .value;


        const user =
            users.find(
                user =>
                    user.username === username &&
                    user.password === password
            );


        const message =
            document.getElementById(
                "loginMessage"
            );


        if (!user) {

            message.textContent =
                "Invalid username or password.";

            message.style.color =
                "var(--red)";

            return;
        }


        currentUser = user;

        currentUser.active = true;


        this.reset();


        message.textContent = "";


        headerUsername.textContent =
            currentUser.username;

        headerUser.classList.remove(
            "hidden"
        );


        if (currentUser.role === "admin") {

            loadAdminDashboard();

        } else {

            loadDashboard();

        }

    });



function loadDashboard() {

    showScreen(
        dashboardSection
    );


    document.getElementById(
        "welcomeName"
    ).textContent =
        currentUser.name;


    document.querySelector(
        ".user-avatar"
    ).textContent =
        currentUser.name
            .charAt(0)
            .toUpperCase();

}



document
    .getElementById("profileBtn")
    .addEventListener(
        "click",
        loadProfile
    );


function loadProfile() {

    showScreen(
        profileSection
    );


    document.getElementById(
        "profileName"
    ).textContent =
        currentUser.name;


    document.getElementById(
        "profileUsername"
    ).textContent =
        currentUser.username;


    document.getElementById(
        "profileFullName"
    ).textContent =
        currentUser.name;


    document.getElementById(
        "profileEmail"
    ).textContent =
        currentUser.email;


    document.getElementById(
        "profileRole"
    ).textContent =
        currentUser.role;


    document.querySelector(
        ".profile-avatar"
    ).textContent =
        currentUser.name
            .charAt(0)
            .toUpperCase();

}


document
    .getElementById("startQuizBtn")
    .addEventListener(
        "click",
        loadTopics
    );


function loadTopics() {

    showScreen(
        topicSection
    );


    const container =
        document.getElementById(
            "topicContainer"
        );


    container.innerHTML = "";


    Object.keys(questionBank)
        .forEach(topic => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "topic-card";


            card.innerHTML = `

                <h2>
                    ${topic}
                </h2>

                <p>
                    10 random questions
                </p>

                <button
                    class="primary-btn"
                >
                    Start ${topic}
                </button>

            `;


            card
                .querySelector("button")
                .addEventListener(
                    "click",
                    () => startQuiz(topic)
                );


            container.appendChild(card);

        });

}


function startQuiz(topic) {

    clearTimer();


    quizState = {

        topic: topic,

        questions:
            getRandomQuestions(topic),

        currentIndex: 0,

        score: 0,

        selectedAnswer: null,

        timer: 30,

        timerInterval: null,

        started: true

    };


    document.getElementById(
        "quizTopic"
    ).textContent =
        topic;


    showScreen(
        quizSection
    );


    loadQuestion();

}


function loadQuestion() {

    clearTimer();


    quizState.selectedAnswer =
        null;


    const question =
        quizState.questions[
        quizState.currentIndex
        ];


    document.getElementById(
        "currentQuestion"
    ).textContent =
        quizState.currentIndex + 1;


    document.getElementById(
        "questionNumber"
    ).textContent =
        String(
            quizState.currentIndex + 1
        ).padStart(2, "0");


    document.getElementById(
        "currentScore"
    ).textContent =
        quizState.score;


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    const progress =
        (
            (quizState.currentIndex + 1)
            / 10
        ) * 100;


    document.getElementById(
        "progressFill"
    ).style.width =
        progress + "%";


    const container =
        document.getElementById(
            "optionsContainer"
        );


    container.innerHTML = "";


    question.options.forEach(
        (option, index) => {

            const label =
                document.createElement(
                    "label"
                );


            label.className =
                "option";


            label.innerHTML = `

                <input
                    type="radio"
                    name="quizOption"
                    value="${escapeHtml(option)}"
                >

                <span class="option-letter">
                    ${String.fromCharCode(
                65 + index
            )}
                </span>

                <span class="option-text">
                    ${escapeHtml(option)}
                </span>

            `;


            label
                .querySelector("input")
                .addEventListener(
                    "change",
                    () => {

                        document
                            .querySelectorAll(
                                ".option"
                            )
                            .forEach(
                                item =>
                                    item.classList.remove(
                                        "selected"
                                    )
                            );


                        label.classList.add(
                            "selected"
                        );


                        quizState.selectedAnswer =
                            option;

                    }
                );


            container.appendChild(label);

        }
    );


    document.getElementById(
        "quizMessage"
    ).textContent =
        "";


    startTimer();

}



function escapeHtml(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}




function startTimer() {

    quizState.timer = 30;


    updateTimer();


    quizState.timerInterval =
        setInterval(() => {

            quizState.timer--;

            updateTimer();


            if (
                quizState.timer <= 0
            ) {

                clearTimer();

                handleTimeout();

            }

        }, 1000);

}



function updateTimer() {

    const timer =
        document.getElementById(
            "timer"
        );


    timer.textContent =
        quizState.timer;


    timer.classList.remove(
        "warning",
        "danger"
    );


    if (
        quizState.timer <= 10 &&
        quizState.timer > 5
    ) {

        timer.classList.add(
            "warning"
        );

    }


    if (
        quizState.timer <= 5
    ) {

        timer.classList.add(
            "danger"
        );

    }

}




function clearTimer() {

    if (
        quizState.timerInterval
    ) {

        clearInterval(
            quizState.timerInterval
        );

        quizState.timerInterval =
            null;

    }

}



function handleTimeout() {

    document.getElementById(
        "quizMessage"
    ).textContent =
        "Time's up! Moving to next question...";


    setTimeout(() => {

        moveToNextQuestion();

    }, 700);

}



document
    .getElementById(
        "submitAnswerBtn"
    )
    .addEventListener(
        "click",
        submitAnswer
    );


function submitAnswer() {

    if (
        quizState.selectedAnswer === null
    ) {

        showToast(
            "Please select an answer."
        );

        return;
    }


    clearTimer();


    const question =
        quizState.questions[
        quizState.currentIndex
        ];


    if (
        quizState.selectedAnswer ===
        question.answer
    ) {

        quizState.score++;

        showToast(
            "Correct answer!"
        );

    } else {

        showToast(
            "Wrong answer!"
        );

    }


    setTimeout(() => {

        moveToNextQuestion();

    }, 500);

}




function moveToNextQuestion() {

    quizState.currentIndex++;


    if (
        quizState.currentIndex >=
        quizState.questions.length
    ) {

        finishQuiz();

        return;
    }


    loadQuestion();

}




function finishQuiz() {

    clearTimer();


    quizState.started = false;


    showScreen(
        resultSection
    );


    const score =
        quizState.score;


    const percentage =
        (score / 10) * 100;


    document.getElementById(
        "resultTopic"
    ).textContent =
        `${quizState.topic} Quiz`;


    document.getElementById(
        "finalScore"
    ).textContent =
        score;


    document.getElementById(
        "resultPercentage"
    ).textContent =
        percentage + "%";


    let message;


    if (percentage === 100) {

        message =
            "Perfect score! Excellent work.";

    } else if (percentage >= 80) {

        message =
            "Excellent performance!";

    } else if (percentage >= 60) {

        message =
            "Good job! Keep practicing.";

    } else if (percentage >= 40) {

        message =
            "Not bad. More practice will help.";

    } else {

        message =
            "Keep learning and try again.";

    }


    document.getElementById(
        "resultMessage"
    ).textContent =
        message;

}



document
    .getElementById(
        "retryQuizBtn"
    )
    .addEventListener(
        "click",
        () => {

            startQuiz(
                quizState.topic
            );

        }
    );




document
    .getElementById(
        "resultDashboardBtn"
    )
    .addEventListener(
        "click",
        loadDashboard
    );




document
    .getElementById(
        "backDashboardBtn"
    )
    .addEventListener(
        "click",
        loadDashboard
    );


document
    .getElementById(
        "profileBackBtn"
    )
    .addEventListener(
        "click",
        loadDashboard
    );




headerLogoutBtn.addEventListener(
    "click",
    logout
);


function logout() {

    clearTimer();




    quizState = {

        topic: null,

        questions: [],

        currentIndex: 0,

        score: 0,

        selectedAnswer: null,

        timer: 30,

        timerInterval: null,

        started: false

    };


    if (currentUser) {

        currentUser.active =
            false;

    }


    currentUser = null;


    headerUser.classList.add(
        "hidden"
    );


    showScreen(
        authSection
    );


    loginBox.classList.remove(
        "hidden"
    );


    registerBox.classList.add(
        "hidden"
    );


    showToast(
        "Logged out successfully"
    );

}



function loadAdminDashboard() {

    showScreen(
        adminSection
    );


    const total =
        users.length;


    const active =
        users.filter(
            user =>
                user.active
        ).length;


    document.getElementById(
        "totalUsers"
    ).textContent =
        total;


    document.getElementById(
        "activeUsers"
    ).textContent =
        active;


    const table =
        document.getElementById(
            "usersTableBody"
        );


    table.innerHTML = "";


    users.forEach(user => {

        const row =
            document.createElement(
                "tr"
            );


        row.innerHTML = `

            <td>
                ${escapeHtml(user.name)}
            </td>

            <td>
                ${escapeHtml(user.username)}
            </td>

            <td>
                ${escapeHtml(user.email)}
            </td>

            <td>
                ${escapeHtml(user.role)}
            </td>

            <td class="${user.active
                ? "status-active"
                : "status-inactive"
            }">

                ${user.active
                ? "Active"
                : "Inactive"
            }

            </td>

        `;


        table.appendChild(row);

    });

}



headerUser.classList.add(
    "hidden"
);



showScreen(
    authSection
);