export const questions=[
    {
        id:1,
        Question:'What is a Virtual DOM?',
        Answer:"DOM stands for Document Object model"
    },
      {
        id:2,
        Question:'What is JSX?',
        Answer:"JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code."
    },
       {
        id:3,
        Question:"Can web browsers read JSX directly?",
        Answer:"Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel"
    },
       {
        id:4,
        Question:'What is an event in React?',
        Answer:"An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc. React events are named using camelCase, rather than lowercase in HTML. With JSX, you pass a function as the event handler, rather than a string in HTML."
    },
       {
        id:5,
        Question:' What are synthetic events in React?',
        Answer:"Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers. The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event."
    }
]