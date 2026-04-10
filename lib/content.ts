export function assetPath(value?: string | null) {
  if (!value) return ''
  if (value.startsWith('http://') || value.startsWith('https://')) return value
  return value.startsWith('/') ? value : `/${value}`
}
