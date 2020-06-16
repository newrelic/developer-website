const copyToClipboard = (text) => {
  const textArea = document.createElement('textarea');

  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};

export default copyToClipboard;
