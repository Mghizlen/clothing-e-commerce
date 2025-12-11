export function readableTextColor(hex?: string) {
  if (!hex) return '#111111';
  const c = hex.replace('#','');
  const r = parseInt(c.substr(0,2),16);
  const g = parseInt(c.substr(2,2),16);
  const b = parseInt(c.substr(4,2),16);
  const lum = 0.2126*(r/255) + 0.7152*(g/255) + 0.0722*(b/255);
  return lum < 0.55 ? '#ffffff' : '#111111';
}

export function useAutoContrast(bgColor?: string) {
  return readableTextColor(bgColor);
}
