export default function PreviewButton({ showPreview, handleShowPreview }) {
  return (
    <button
      className="preview-button"
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
