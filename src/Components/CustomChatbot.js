import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };
  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#00B2B2",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
   };
   const steps = [
    {
       id: "Greet",
       message: "Hello, Welcome to KyuQuiz",
       trigger: "Ask Name"
    },
    {
       id: "Ask Name",
       message: "Please type your name?",
       trigger: "Waiting user input for name"
    },
    {
       id: "Waiting user input for name",
       user: true,
       trigger: "Asking options to eat"
    },
    {
       id: "Asking options to eat",
       message: "Hi {previousValue}, Please select your role!",
       trigger: "Displaying your role"
    },
    {
       id: "Displaying your role",
       options: [
                  {
                    value: "trainer",
                    label: "Trainer",
                    trigger: "You can create and host a quiz for your students. Also you can track their performance. "
                  },
                  { 
                    value: "trainee",
                    label: "Trainee",
                    trigger: "You can give quizes assigned by your trainer. And also see your performance"
                  } 
                ]
    },
    {
        id: "You can create and host a quiz for your students. Also you can track their performance. ",
        message: "You can create and host a quiz for your students. Also you can track their performance. ",
        trigger: "abc"
     },
     {
        id: "abc",
        message: "To get the role of trainee you have to login through your trainer id. Will you provide your email",
        trigger: "Asking for email"
     },{
        id: "You can give quizes assigned by your trainer. And also see your performance",
        message: "You can give quizes assigned by your trainer. And also see your performance",
        trigger: "def"
     },
    {
       id: "def",
       message: "You have to login first. Can you share your email address",
       trigger: "Asking for email"
    },
    {
       id: "Asking for email",
       options: [
                  {
                    value: true,
                    label: "Yes",
                    trigger: "Asking for the name of quizes"
                  },
                  { 
                    value: "false",
                    label: "No",
                    trigger: "Done"
                  } 
                ]
    },
    {
       id: "Asking for the name of quizes",
       message: "We provide quizes of different categories like technical and non technical. And all the details will be shared to your mail",
       trigger: "Done"
    },
    {
        id: "Done",
        message: "Have a great day !!",
        end: true
    }
];
   return (
    <ThemeProvider theme={theme}>
       <ChatBot steps={steps} {...config} />
    </ThemeProvider>
   );
 }
 export default CustomChatbot;