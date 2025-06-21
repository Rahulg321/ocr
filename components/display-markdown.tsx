import ReactMarkdown from "react-markdown";

const DisplayMarkdown = ({ result }: { result: string }) => {
  return (
    <div className="prose">
      <ReactMarkdown>{result}</ReactMarkdown>
    </div>
  );
};

export default DisplayMarkdown;
