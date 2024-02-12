export default function ShowPreviewButton({ showPreview }) {
  return (
    <button className="show-preview-button" type="button" onClick={showPreview}>
      Display CV Preview
    </button>
  );
}
