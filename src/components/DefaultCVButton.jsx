export default function DefaultCVButton({ hide, showDefaultCV }) {
  return (
    <button
      className="default-cv-button"
      style={hide ? { display: 'none' } : { display: 'initial' }}
      type="button"
      onClick={showDefaultCV}
    >
      Load Default CV
    </button>
  );
}
