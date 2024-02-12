export default function Preview({ showPreview }) {
  return (
    <div
      className="preview"
      style={showPreview ? { display: 'block' } : { display: 'none' }}
    ></div>
  );
}
