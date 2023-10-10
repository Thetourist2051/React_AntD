import React from "react";
import classes from "./CodeSnippet.module.scss";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as darkTheme } from 'react-syntax-highlighter/dist/esm/styles/hljs'


interface CodeSnippetProps {
  heading?: string;
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ heading, code }) => {
  return (
    <div className={classes["code-snippet"]}>
      <div className={classes["snippet-header"]}>
        <h6 className="m-0">{heading || "Code Snippet"}</h6>
        <i className="pi pi-copy"></i>
      </div>
      <div className={classes["snippet-content"]}>
        <SyntaxHighlighter language="javascript" style={darkTheme}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
