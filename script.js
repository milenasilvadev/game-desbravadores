/* =========================================
   DESBRAVADORES
   A GRANDE AVENTURA
========================================= */


/* =========================================
   DADOS DO JOGADOR
========================================= */

let player = {

    xp: 0,

    level: 1,

    completedMissions: [],

    badges: []

};


/* =========================================
   ELEMENTOS
========================================= */

const homeScreen =
    document.getElementById("homeScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");

const headerXP =
    document.getElementById("headerXP");

const currentXP =
    document.getElementById("currentXP");

const levelElement =
    document.getElementById("level");

const progressBar =
    document.getElementById("progressBar");

const nextLevelXP =
    document.getElementById("nextLevelXP");

const quizCategory =
    document.getElementById("quizCategory");

const quizXP =
    document.getElementById("quizXP");

const questionText =
    document.getElementById("questionText");

const answersContainer =
    document.getElementById("answers");

const questionNumber =
    document.getElementById("questionNumber");

const correctCount =
    document.getElementById("correctCount");

const questionProgressBar =
    document.getElementById("questionProgressBar");

const nextButton =
    document.getElementById("nextButton");

const questionIcon =
    document.getElementById("questionIcon");


/* =========================================
   VARIÁVEIS DO QUIZ
========================================= */

let currentQuiz = null;

let currentQuestion = 0;

let correctAnswers = 0;

let answered = false;


/* =========================================
   BANCO DE PERGUNTAS
========================================= */

const quizzes = {


    natureza: {

        title: "🌿 EXPLORADOR DA NATUREZA",

        icon: "🌿",

        questions: [

            {

                question:
                    "Qual é o maior animal terrestre do planeta?",

                answers: [
                    "Elefante",
                    "Girafa",
                    "Hipopótamo",
                    "Rinoceronte"
                ],

                correct: 0

            },


            {

                question:
                    "Qual elemento é essencial para a fotossíntese?",

                answers: [
                    "Luz solar",
                    "Areia",
                    "Plástico",
                    "Ferro"
                ],

                correct: 0

            },


            {

                question:
                    "Qual destes animais é um mamífero?",

                answers: [
                    "Tubarão",
                    "Golfinho",
                    "Tartaruga",
                    "Cobra"
                ],

                correct: 1

            },


            {

                question:
                    "Qual gás as plantas absorvem durante a fotossíntese?",

                answers: [
                    "Oxigênio",
                    "Hélio",
                    "Gás carbônico",
                    "Hidrogênio"
                ],

                correct: 2

            },


            {

                question:
                    "Qual é o maior bioma brasileiro em extensão?",

                answers: [
                    "Caatinga",
                    "Amazônia",
                    "Pantanal",
                    "Pampa"
                ],

                correct: 1

            }

        ]

    },


    /* =====================================
       BÍBLIA
    ===================================== */

    biblia: {

        title: "📖 DESAFIO BÍBLICO",

        icon: "📖",

        questions: [

            {

                question:
                    "Qual é o primeiro livro da Bíblia?",

                answers: [
                    "Êxodo",
                    "Gênesis",
                    "Salmos",
                    "Mateus"
                ],

                correct: 1

            },


            {

                question:
                    "Quem construiu a arca?",

                answers: [
                    "Moisés",
                    "Abraão",
                    "Noé",
                    "Davi"
                ],

                correct: 2

            },


            {

                question:
                    "Quem derrotou Golias?",

                answers: [
                    "Davi",
                    "Salomão",
                    "Josué",
                    "Samuel"
                ],

                correct: 0

            },


            {

                question:
                    "Qual destes livros pertence ao Novo Testamento?",

                answers: [
                    "Gênesis",
                    "Isaías",
                    "Mateus",
                    "Salmos"
                ],

                correct: 2

            },


            {

                question:
                    "Quem foi lançado na cova dos leões?",

                answers: [
                    "Daniel",
                    "Pedro",
                    "Paulo",
                    "Elias"
                ],

                correct: 0

            }

        ]

    },


    /* =====================================
       ACAMPAMENTO
    ===================================== */

    acampamento: {

        title: "🏕️ VIDA DE ACAMPAMENTO",

        icon: "🏕️",

        questions: [

            {

                question:
                    "Qual equipamento ajuda a encontrar direções?",

                answers: [
                    "Bússola",
                    "Lanterna",
                    "Cantil",
                    "Mochila"
                ],

                correct: 0

            },


            {

                question:
                    "Qual destes é um tipo de nó?",

                answers: [
                    "Direito",
                    "Triangular",
                    "Redondo",
                    "Oval"
                ],

                correct: 0

            },


            {

                question:
                    "O que devemos fazer antes de acender uma fogueira?",

                answers: [
                    "Ignorar o local",
                    "Verificar as regras e segurança",
                    "Usar gasolina",
                    "Acender dentro da barraca"
                ],

                correct: 1

            },


            {

                question:
                    "Qual item é importante para transportar água?",

                answers: [
                    "Cantil",
                    "Travesseiro",
                    "Caderno",
                    "Bússola"
                ],

                correct: 0

            },


            {

                question:
                    "Qual atitude ajuda a preservar a natureza?",

                answers: [
                    "Deixar lixo",
                    "Destruir plantas",
                    "Recolher seu lixo",
                    "Assustar animais"
                ],

                correct: 2

            }

        ]

    }

};


/* =========================================
   INICIAR QUIZ
========================================= */

function startQuiz(type) {

    currentQuiz =
        quizzes[type];

    currentQuestion = 0;

    correctAnswers = 0;

    answered = false;

    quizCategory.textContent =
        currentQuiz.title;

    quizXP.textContent =
        player.xp;

    questionIcon.textContent =
        currentQuiz.icon;


    homeScreen.style.display =
        "none";

    quizScreen.style.display =
        "block";

    resultScreen.style.display =
        "none";


    showQuestion();

}


/* =========================================
   MOSTRAR PERGUNTA
========================================= */

function showQuestion() {

    const question =
        currentQuiz.questions[currentQuestion];


    answered = false;


    questionText.textContent =
        question.question;


    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${currentQuiz.questions.length}`;


    correctCount.textContent =
        correctAnswers;


    const progress =
        ((currentQuestion + 1) /
        currentQuiz.questions.length) * 100;


    questionProgressBar.style.width =
        `${progress}%`;


    answersContainer.innerHTML =
        "";


    nextButton.style.display =
        "none";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer";

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );

}


/* =========================================
   SELECIONAR RESPOSTA
========================================= */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {
        return;
    }


    answered = true;


    const question =
        currentQuiz.questions[currentQuestion];


    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    if (
        selectedIndex ===
        question.correct
    ) {

        selectedButton.classList.add(
            "correct"
        );

        correctAnswers++;

    }

    else {

        selectedButton.classList.add(
            "wrong"
        );


        buttons[
            question.correct
        ].classList.add(
            "correct"
        );

    }


    correctCount.textContent =
        correctAnswers;


    nextButton.style.display =
        "block";


    if (
        currentQuestion ===
        currentQuiz.questions.length - 1
    ) {

        nextButton.textContent =
            "Ver resultado 🏆";

    }

}


/* =========================================
   PRÓXIMA PERGUNTA
========================================= */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        currentQuiz.questions.length
    ) {

        finishQuiz();

        return;

    }


    nextButton.textContent =
        "Próxima pergunta →";


    showQuestion();

}


/* =========================================
   FINALIZAR QUIZ
========================================= */

function finishQuiz() {

    const total =
        currentQuiz.questions.length;


    /*
       Cada resposta correta vale 30 XP.
    */

    const earnedXP =
        correctAnswers * 30;


    player.xp +=
        earnedXP;


    updateLevel();


    const missionName =
        currentQuiz.title;


    if (
        !player.completedMissions.includes(
            missionName
        )
    ) {

        player.completedMissions.push(
            missionName
        );

    }


    updatePlayerInterface();


    showResult(
        total,
        earnedXP
    );

}


/* =========================================
   CALCULAR NÍVEL
========================================= */

function updateLevel() {

    player.level =
        Math.floor(
            player.xp / 500
        ) + 1;

}


/* =========================================
   ATUALIZAR INTERFACE
========================================= */

function updatePlayerInterface() {

    updateLevel();


    headerXP.textContent =
        player.xp;


    currentXP.textContent =
        player.xp % 500;


    levelElement.textContent =
        player.level;


    nextLevelXP.textContent =
        500;


    const progress =
        (
            (player.xp % 500)
            / 500
        ) * 100;


    progressBar.style.width =
        `${progress}%`;

}


/* =========================================
   MOSTRAR RESULTADO
========================================= */

function showResult(
    total,
    earnedXP
) {

    quizScreen.style.display =
        "none";

    resultScreen.style.display =
        "flex";


    document.getElementById(
        "finalCorrect"
    ).textContent =
        `${correctAnswers}/${total}`;


    document.getElementById(
        "finalXP"
    ).textContent =
        `+${earnedXP} XP`;


    const resultMessage =
        document.getElementById(
            "resultMessage"
        );


    if (
        correctAnswers === total
    ) {

        resultMessage.textContent =
            "Perfeito! Você acertou todas as perguntas. Que desempenho incrível!";

    }

    else if (
        correctAnswers >= 3
    ) {

        resultMessage.textContent =
            "Muito bem! Você está avançando na sua jornada de desbravador.";

    }

    else {

        resultMessage.textContent =
            "Boa tentativa! Continue estudando e tente novamente.";

    }


    const newBadge =
        document.getElementById(
            "newBadge"
        );


    /*
       Mostra o aviso de distintivo
       apenas quando a missão é concluída
       pela primeira vez.
    */

    const missionName =
        currentQuiz.title;


    if (
        player.completedMissions.filter(
            mission =>
                mission === missionName
        ).length === 1
    ) {

        newBadge.style.display =
            "block";

    }

    else {

        newBadge.style.display =
            "none";

    }

}


/* =========================================
   VOLTAR PARA HOME
========================================= */

function backHome() {

    quizScreen.style.display =
        "none";

    resultScreen.style.display =
        "none";

    homeScreen.style.display =
        "block";

    updatePlayerInterface();

}


/* =========================================
   CONTINUAR APÓS RESULTADO
========================================= */

function finishResult() {

    resultScreen.style.display =
        "none";

    homeScreen.style.display =
        "block";


    updatePlayerInterface();


    /*
       Verifica se o jogador ganhou
       XP suficiente para desbloquear
       a próxima aventura.
    */

    checkUnlocks();

}


/* =========================================
   MISSÃO BLOQUEADA
========================================= */

function lockedMission() {

    if (player.xp >= 300) {

        alert(
            "🚧 Essa aventura será desbloqueada na próxima versão do jogo!"
        );

    }

    else {

        alert(
            "🔒 Continue completando missões para avançar!"
        );

    }

}


/* =========================================
   INICIALIZAÇÃO
========================================= */

function checkUnlocks() {

    /*
       Futuramente vamos transformar
       isso em um sistema real de
       desbloqueio.
    */

}


/* =========================================
   INICIAR
========================================= */

updatePlayerInterface();
