'use strict';

module.exports.randomMessage = async (event) => {
  const messages = [
    "Hello, Sir I completed this assignment",
    "Looking forward! hahaha...",
    "Not sure what to say....",
    "Greetings from my side....",
    "Never give up! use AI! hahaha"
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];

  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};
