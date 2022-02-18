import React from "react";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-solarizedlight.css";

type CodeProps = {
  code: string;
  language: string;
}

export default function Code({ code, language }:CodeProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code.substring(1)}</code>
      </pre>
    </div>
  );
}