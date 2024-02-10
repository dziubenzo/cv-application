export default function DefaultCVButton({ showDefaultCV }) {
  return (
    <button className="default-cv-button" type="button" onClick={showDefaultCV}>
      Load Default CV
    </button>
  );
}
