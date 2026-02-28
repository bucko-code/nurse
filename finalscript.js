// ===============================
// QUIZ DATA
// ===============================

const questions = [

{
    question: "วันนี้เป็นอีกวันที่อากาศดีมีแดดอ่อน ๆ สาดลงมาพร้อมกับดอกไม้ที่ร่วงโปรยตามสายลมนอกหน้าต่าง เห็นดังนั้นคุณจึง…",
    image: "images/1.gif",
    answers: {
        T: {
            text: "เหลือบมองครู่เดียวแล้วหันไปทำอย่างอื่นต่อ",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "หยิบกล้องขึ้นมาถ่าย",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "พยายามเอื้อมมือไปคว้ากลีบดอกไม้ที่ร่วงลงมา",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},

{
    question: "ทันใดนั้นเองที่นอกหน้าต่างบานเดิมจู่ๆก็มีแมวดำตัวหนึ่งโผล่มา เชิญชวนให้คุณออกไปสำรวจวันอันแสนงดงามนี้ด้วยกัน คุณจะ…",
    image: "images/2.gif",
    answers: {
        T: {
            text: "ไม่ไป อยู่บ้านดีกว่า",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "วิ่งตามมันออกไปทันที",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "อุ้มมันขึ้นมาเล่นนึกสงสัยในใจว่าแมวอะไรพูดได้วะ…",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},

{
    question: "ยังไม่ทันตัดสินใจก็มีรถไฟขบวนยาวแล่นผ่านอากาศมาจอดนอกหน้าต่าง และหน้าต่างที่อยู่ตรงหน้าคุณก็กลายเป็นหน้าต่างของรถไฟก่อนจะรู้ตัวเสียอีก เจ้าแมวตัวเดิมนั่งอยู่ตรงข้ามที่นั่งของคุณ ทักว่าขาเก้าอี้ของเธอหักแน่ะ คุณจะ…",
    image: "images/3.gif",
    answers: {
        T: {
            text: "หาทางซ่อมมัน",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "มองหาเก้าอี้ตัวอื่น",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "นั่งต่อไปถ้ามันยังนั่งได้",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},

{
    question: "หลังจัดการกับเก้าอี้เจ้าปัญหาเสร็จ คุณมองออกไปนอกหน้าต่างเห็นป้ายบอกทางเขียนว่า “ทางไปสวรรค์” ไม่ช้ารถไฟก็แล่นผ่านสถานที่นั้น เจ้าแมวบอกกับคุณว่านั่นคือสวรรค์จริง ๆ นะ คุณจึงคิดว่า…",
    image: "images/4.gif",
    answers: {
        T: {
            text: "เชื่อที่เจ้าแมวบอกไม่ว่าที่นั่นจะเป็นสวรรค์จริงหรือไม่",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "คงจะใช่แหละมันดูรู้จักที่นี่ดีกว่าฉัน",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "โดนเจ้าแมวบ้านี่หลอกเข้าให้แล้วแน่",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},

{
    question: "จู่ ๆ รถไฟก็หยุดลงประตูเปิดออกเสียงจากลำโพงประกาศชื่อสถานี เจ้าแมวเดินนำหน้าลงจากรถไฟไปก่อนคุณลุกตามไปติด ๆ ภาพตรงหน้าคืองานคอนเสิร์ตที่กำลังบรรเลงอย่างสนุกสนาน เห็นดังนั้นคุณจึง…",
    image: "images/5.gif",
    answers: {
        T: {
            text: "เข้าไปร่วมวงทันที โดดทุกเพลงแม้จะเป็นเพลงเศร้า",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "ยืนมองดูอยู่ห่าง ๆ ก่อนเจอเพลงที่ชอบค่อยเข้าไปแจมแล้วกัน",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "หันหลังกลับเข้าขบวนรถไฟไปซ่อมเก้าอี้ที่ขาหัก คนเยอะขนาดนั้นฉันไม่อยากเข้าไปเต้นด้วยหรอก",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},

{
    question: "เดินถัดออกมาจากคอนเสิร์ตเล็กน้อยคุณพบร้านขายของที่ระลึก จึงตัดสินใจแวะเข้าไปดูเพื่อซื้ออะไรติดไม้ติดมือกลับไปฝากเพื่อน ๆ เสียหน่อย ทางร้านมีบริการห่อของขวัญฟรีคุณจะเลือก…",
    image: "images/6.gif",
    answers: {
        T: {
            text: "ให้ทางร้านห่อให้",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "ห่อด้วยตัวเอง",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "ไม่ห่อแล้วกันเปลืองกระดาษ",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},

{
    question: "ดูเหมือนคุณจะใช้เวลาในการเลือกของนานทีเดียว เมื่อเดินออกมาจากร้านค้าฟ้าก็มืดเสียแล้ว เจ้าแมวพูดขึ้น “แย่จริง ท่าจะไม่ทันบัสเที่ยวสุดท้ายไปโรงแรมที่จองไว้แล้วสิ” คุณจะ…",
    image: "images/7.gif",
    answers: {
        T: {
            text: "พยักหน้าเข้าใจ ไม่ว่าเจ้าแมวจะพาไปไหนก็จะตามไปเงียบ ๆ",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "ถามถึงระยะทางระหว่างที่นี่กับโรงแรมเพื่อหาวิธีอื่นไป",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "ถามเจ้าแมวว่า “ทำไมไม่บอกว่ารถเที่ยวสุดท้ายคือเที่ยวไหน”",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},

{
    question: "โชคดีของคุณ คุณแพนด้าของร้านขายของที่ระลึกสาอาพาคุณทั้งคู่ไปส่งที่โรงแรมหลังเห็นพวกคุณเดินไปเดินมาหน้าร้านอยู่พักใหญ่ กว่าจะถึงโรงแรมก็ปาเข้าไปเที่ยงคืนนึกขึ้นได้ว่ามีการ์ตูนที่อยากอ่านมาก ๆ อัพวันนี้คุณเลือกที่จะ...",
    image: "images/Q8.gif",
    answers: {
        T: {
            text: "ช่างมันนอนดีกว่า",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "วันนี้เหนื่อยมามากค่อยอ่านพรุ่งนี้แล้วกัน",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "ขออ่านก่อนแล้วค่อยนอน",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},

{
    question: "ก่อนนอนเมื่อคืนเจ้าแมวกับคุณนัดกันว่าจะทานอาหารเช้าด้วยกัน ตอนนี้เหลือเวลา 15 นาทีก่อนจะถึงเวลานัด แต่คุณพึ่งตื่น!! คุณจะทำอย่างไร…",
    image: "images/Q9.gif",
    answers: {
        T: {
            text: "ใช้เวลาทั้งหมดจัดการตัวเองแม้จะมีโอกาสไปสาย",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "ถูสบู่ไปแปรงฟันไปล้างหน้าไปพร้อม ๆ กันหยิบชุดที่ใกล้มือที่สุดแล้ววิ่งสุดชีวิต",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "แปรงฟัน 7 นาที อาบน้ำ 3 นาที ทาครีม 5 นาที",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},

{
    question: "แม้จะเฉียดไปนิดเดียวแต่อย่างไรก็ดีคุณมาตามนัดได้ตรงเวลา อาหารเช้านี้น่าตาน่าทานทีเดียวสิ่งนั้นคือ…",
    image: "images/Q10.gif",
    answers: {
        T: {
            text: "มะละกอสุก",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "อาหารเช้าโรงแรมทั่วไป ขนมปัง แฮม แยม เนยและไข่ดาวกับน้ำส้ม",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "ผัดเปรี้ยวหวาน",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},

{
    question: "หลังทานอาหารเช้าวันนี้เจ้าแมวพาคุณไปที่ทะเล พี่เต่าเจ้าถิ่นชวนคุณทั้งคู่ไปเล่นบานานาโบ๊ท แม้เจ้าแมวจะส่ายหน้าสุดกำลังสุดท้ายก็โดนจับใส่เสื้อชูชีพนั่งบนกล้วยสีเหลืองกลางน้ำ เมื่อถึงจังหวะที่เรือคว่ำทุกคนร่วงลงไปในน้ำ คุณจะ…",
    image: "images/Q11.gif",
    answers: {
        T: {
            text: "ช่วยให้ตัวเองขึ้นไปได้ก่อน",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "ช่วยเจ้าแมว",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "ช่วยพี่เต่า",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},

{
    question: "ก่อนจะได้ตัดสินใจช่วยใครคุณก็สะดุ้งตื่นขึ้นริมหน้าต่างบานเดิมในบ้านของคุณ เพียงแต่มีบางสิ่งแปลกไป โต๊ะตัวหนึ่งซึ่งไม่เคยอยู่ตรงนั้นมาก่อนโผล่เข้ามาในห้องของคุณ บนนั้นมีเค้กไอศกรีม ตุ๊กตาเจ้าแมว พี่เต่าและคุณแพนด้าวางอยู่เคียงกับกล่องของขวัญใบหนึ่ง คุณเปิดดูและพบว่าในนั้นมี…",
    image: "images/Q12.gif",
    answers: {
        T: {
            text: "ภาพถ่ายเหตุการณ์ต่าง ๆ ของตัวคุณ เจ้าแมว คุณแพนด้า และพี่เต่าที่เพิ่งเจอมา",
            scores: { T: 1, V: 0, J: 0 },
        },
        V: {
            text: "ดอกไม้กระดาษและภาพวาด",
            scores: { T: 0, V: 1, J: 0 },
        },
        J: {
            text: "เค้กอีกก้อนที่รสชาติต่างกัน",
            scores: { T: 0, V: 0, J: 1 },
        },
    },
},
];


let currentQuestion = 0;
let scores = { T: 0, V: 0, J: 0 };

// ===============================
// DISPLAY QUESTION
// ===============================

document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';

    currentQuestion = 0;
    userAnswers = { T: 0, V: 0, J: 0 };

    displayQuestion();
});

// =============================
// DISPLAY QUESTION
// =============================
function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];

    let html = `<p>${question.question}</p>`;

    // ✅ เพิ่มส่วนนี้
    if (question.image) {
        html += `<img src="${question.image}" class="question-image">`;
    }

    for (const option in question.answers) {
        html += `
            <button class="large-rectangular" value="${option}">
                ${question.answers[option].text}
            </button>
        `;
    }

    quizElement.innerHTML = html;
    attachButtonClickHandlers();
}

// =============================
// ATTACH CLICK
// =============================
function attachButtonClickHandlers() {
    const buttons = document.querySelectorAll('.large-rectangular');
    buttons.forEach(button => {
        button.addEventListener('click', handleAnswer);
    });
}

// =============================
// HANDLE ANSWER
// =============================
function handleAnswer(event) {
    const answerKey = event.target.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] += answer.scores[dimension];
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// =============================
// SHOW RESULT (สำคัญ)
// =============================
function showResult() {

    const T = userAnswers.T;
    const V = userAnswers.V;
    const J = userAnswers.J;

    const resultImage = document.getElementById('result-image');

    let finalType = "";

    if (T >= V && T >= J) {
        finalType = "T";
        resultImage.src = "images/T.jpg";
    }
    else if (V >= T && V >= J) {
        finalType = "V";
        resultImage.src = "images/V.png";
    }
    else {
        finalType = "J";
        resultImage.src = "images/J.png";
    }

    resultImage.alt = finalType + " Result";

    console.log("Scores:", userAnswers);
    console.log("Final Type:", finalType);

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}
