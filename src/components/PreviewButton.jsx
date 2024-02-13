export default function PreviewButton({
  hide,
  showPreview,
  handleShowPreview,
}) {
  return (
    <button
      className="preview-button"
      style={hide ? { display: 'none' } : { display: 'initial' }}
      type="button"
      onClick={handleShowPreview}
    >
      <>
        {showPreview ? 'Hide' : 'Show'}
        <br />
        CV
        <br />
        Preview
      </>
    </button>
  );
}
