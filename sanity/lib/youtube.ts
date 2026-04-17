const YOUTUBE_ID_PATTERN = /^[a-zA-Z0-9_-]{11}$/

export function normalizeYouTubeId(input: string | null | undefined) {
  const value = input?.trim()
  if (!value) return ''

  if (YOUTUBE_ID_PATTERN.test(value)) {
    return value
  }

  try {
    const url = new URL(value)

    if (url.hostname.includes('youtu.be')) {
      const pathnameId = url.pathname.split('/').filter(Boolean)[0]
      return pathnameId && YOUTUBE_ID_PATTERN.test(pathnameId) ? pathnameId : ''
    }

    if (url.hostname.includes('youtube.com')) {
      const watchId = url.searchParams.get('v')
      if (watchId && YOUTUBE_ID_PATTERN.test(watchId)) {
        return watchId
      }

      const pathnameId = url.pathname.split('/').filter(Boolean).pop()
      return pathnameId && YOUTUBE_ID_PATTERN.test(pathnameId) ? pathnameId : ''
    }
  } catch {
    const fallback = value.split(/[?&/]/).find((part) => YOUTUBE_ID_PATTERN.test(part))
    return fallback || ''
  }

  return ''
}

export function uniqueYouTubeVideos<T extends {youtubeId: string}>(videos: T[]) {
  const seen = new Set<string>()

  return videos.filter((video) => {
    const normalizedId = normalizeYouTubeId(video.youtubeId)
    if (!normalizedId || seen.has(normalizedId)) return false
    seen.add(normalizedId)
    return true
  })
}

export function youtubeWatchUrl(input: string | null | undefined) {
  const id = normalizeYouTubeId(input)
  return id ? `https://www.youtube.com/watch?v=${id}` : ''
}
