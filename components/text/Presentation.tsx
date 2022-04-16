import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {};

const markdown = `
Hello everyone,

My name is Pascal Zhang.

My parents are from china 🇨🇳 but I was born in the beautiful Paris 🇫🇷🗼.

I love computer science 💻 and building products 🌐.

I come from the school 42 in Paris.


<br/>

**What can i say more about me ?**

  - I do boxing 🥊 as a hobby.
  - I spend 2 week in japan 🗻, with only my backpack, visiting one city everyday.
`;

const Presentation: React.FC<Props> = () => {
  return (
    <div className="card mb-3">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Presentation;
