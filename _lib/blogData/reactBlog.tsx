import { BlogQuestionItem } from "./types";

export const react: BlogQuestionItem[] = [
    {
        q: "How does React work?",
        a: (
            <div>
                React creates a virtual DOM. When the state changes in a
                component it first runs a &quot;diffing&quot; algorithm, which
                identifies what has changed in the virtual DOM. The second step
                is reconciliation, where it updates the DOM with the results of
                diff.
            </div>
        ),
        r: "https://github.com/Vasu7389/ReactJs-Interview-Question",
    },
    {
        q: "What are the advantages of using React?",
        a: (
            <div>
                <p>
                    It is easy to know how a component is rendered, you just
                    need to look at the render function.
                </p>
                <p>
                    JSX makes it easy to read the code of your components. It is
                    also really easy to see the layout, or how components are
                    plugged/combined.
                </p>
                <p>
                    You can render React on the server side. This improves SEO
                    and performance.
                </p>
                <p>It is easy to test.</p>
                <p>
                    You can use React with any framework you wish as it is only
                    a view layer.
                </p>
            </div>
        ),
        r: "https://github.com/Vasu7389/ReactJs-Interview-Question",
    },
];
