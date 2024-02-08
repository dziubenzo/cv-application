import '../styles/HeaderFooter.css';

export default function CreatorDetails() {
  return (
    <div className="creator-details">
      <h2>created by dziubenzo</h2>
      <a
        href="https://github.com/dziubenzo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Developer's repo, opens in new tab"
      >
        <img src="/github-logo.svg" alt="GitHub Logo" />
      </a>
    </div>
  );
}
