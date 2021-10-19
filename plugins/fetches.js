const apiKey = '9e0e3fea734301f2135b9ab28c9d8be5'
import axios from 'axios'
export default {

  async fetchMovies(page) {
    const requestedPage = page || '1'

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${requestedPage}`
    )
    const movies = await response.json()

    return movies
  },

  async fetchMovie(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
    const movie = await response.json()

    return movie
  },

  async fetchApiGallery(id) {
    const response = await fetch(
      `https://cms.demo.nypr.digital/api/v2/pages/${id}`
    )
    const gallery = await response.json()

    return gallery
  },

}
