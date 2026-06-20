import { DownloadIcon } from "./Icons";

function LabResults({ labResults }) {
  return (
    <div className="lab-results">
      <h2>Lab Results</h2>

      <div className="lab-list">
        {labResults.map((result, index) => (
          <div key={index} className="lab-item">
            <span>{result}</span>

            <button
              className="lab-download"
              type="button"
              aria-label={`Download ${result}`}
            >
              <DownloadIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabResults;
