export function windowPopup(url: string, width: number, height: number) {
  // Calculate the position of the popup so
  // it’s centered on the screen.
  var left = screen.width / 2 - width / 2,
    top = screen.height / 2 - height / 2;
  window.open(
    url,
    '',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' +
      width +
      ',height=' +
      height +
      ',top=' +
      top +
      ',left=' +
      left
  );
}
