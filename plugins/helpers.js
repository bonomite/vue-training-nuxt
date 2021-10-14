export default {
  processUrl(movie) {
    const value = `${movie.id}-${movie.title}`
    return value === undefined
      ? ''
      : value
        .replace(/'/, '')
        .replace(/[^a-z0-9_]+/gi, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase()
  },
}
