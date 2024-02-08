# Quiz App

## Introduction

This repository contains a simple quiz application implemented using HTML, CSS, and JavaScript. The quiz consists of multiple-choice questions on various topics. Users can answer questions, and their score is displayed at the end of the quiz.

## Getting Started

To use the quiz application, follow these steps:

1. **HTML Structure**: Ensure you have an HTML file with the required structure, including elements with the IDs "question," "answer-buttons," and "next-btn."

2. **JavaScript Code**: Copy and paste the provided JavaScript code into a `<script>` tag or link to an external JavaScript file in your HTML document.

3. **Styling (Optional)**: Customize the CSS styles to match your preferred appearance.

4. **Start the Quiz**: The quiz will automatically start when the page loads. Users can answer questions by clicking on the provided answer buttons.

## Quiz Configuration

Configure the quiz questions and answers in the `questions` array within the JavaScript code. Each question object includes a prompt and an array of answer options. The correct answer is specified using the `correct` property.

```javascript
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            // ... other answer options
        ]
    },
    // ... other questions
];
