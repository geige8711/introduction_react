import { BlogQuestionItem } from "./types";

export const typescript: BlogQuestionItem[] = [
  {
    q: "Explain TypeScript and its use?",
    a: (
      <div>
        <p>
          TypeScript is an open-source programming language developed and
          maintained by Microsoft, which acts as a statically-typed superset of
          JavaScript. By extending JavaScript with type annotations and
          interfaces, it enables developers to catch errors during the
          compilation process rather than at runtime, thus ensuring safer and
          more efficient code.
        </p>
        <p>
          TypeScript is also highly scalable, allowing for the development of
          large applications with features like namespaces, decorators, and
          abstract classes. One of its most significant strengths is its
          seamless integration with the JavaScript ecosystem and modern
          frameworks like Angular, React, or Vue.js, making it an invaluable
          tool for any developer looking to create maintainable and robust web
          applications.
        </p>
      </div>
    ),
    r: "https://www.turing.com/interview-questions/typescript",
  },
  {
    q: "Can you tell the names of some of the built-in types in TypeScript?",
    a: (
      <div>
        <p>
          In TypeScript, there are several built-in types available for
          developers to ensure safer, more accurate code. Some of the most
          common built-in types include:
        </p>
        <p>
          <strong>any</strong>: Represents any type of value and allows a
          variable to store multiple types.
        </p>
        <p>
          <strong>boolean</strong>: Represents a boolean value, which can be
          either true or false.
        </p>
        <p>
          <strong>number</strong>: Represents any numeric value, including
          integers and floating-point numbers.
        </p>
        <p>
          <strong>string</strong>: Represents a sequence of characters, commonly
          used for storing textual data.
        </p>
        <p>
          <strong>null</strong>: Represents the absence of a value intentionally
          assigned to a variable.
        </p>
        <p>
          <strong>undefined</strong>: Represents a variable that has not yet
          been assigned a value.
        </p>
        <p>
          <strong>void</strong>: Represents the lack of a type, commonly used as
          the return type for functions that do not return a value.
        </p>
      </div>
    ),
    r: "https://www.turing.com/interview-questions/typescript",
  },
  {
    q: "What is TypeScript and how is it different from JavaScript?",
    a: (
      <p>
        "TypeScript is an open-source programming language developed and
        maintained by Microsoft. It is a superset of JavaScript, which means it
        includes all JavaScript features and adds additional features such as
        static types, classes, and interfaces."
      </p>
    ),
    r: "https://codewithpawan.medium.com/typescript-interview-questions-from-beginners-to-advanced-part-1-b749513faab0",
  },
  {
    q: "How do you install TypeScript?",
    a: (
      <div className="flex flex-col">
        <div>
          TypeScript can be installed globally using npm (Node Package Manager)
          with the following command:
        </div>
        <code>npm install -g typescript</code>
        <code>tsc -v</code>
      </div>
    ),
    r: "https://codewithpawan.medium.com/typescript-interview-questions-from-beginners-to-advanced-part-1-b749513faab0",
  },
];
