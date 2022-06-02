
import faker from '@faker-js/faker/locale/id_ID'

export class Movie {
  constructor ({
    id = null,
    available_end = new Date(),
    available_start = new Date(),
    currentDateTime = new Date(),
    description = '',
    episodes = [],
    seasons = [],
    status = 0,
    paid = false,
    statusText = '',
    release_date = new Date(),
    genre = [],
    genres = [],
    items = [],
    hashed_id = null,
    movies = {},
    images = {},
    image_thumbnail = null,
    image_thumbnail_portrait = null,
    duration = null,
    persons = [],
    productions = [],
    limit = 0,
    name = '',
    title = '',
    price = {},
    rating = {},
    wishlist = false,
    trailers = [],
    video_code = null,
    history_watch = {currentTime: '243.608711', duration: '5229.24'},
    available_rent = new Date(),

    // dummy for votes
    total_votes = 0,
    total_scores = 0,

    // dummy watch status,
    watch_status = ''
  } = {}) {
    this.id = hashed_id || id
    this.title = name
    this.duration = duration || movies.duration || 0
    const genreList = genres.length > 0 ? genres.map((v) => v.name) : genre.map((v) => v.name) || []
    const seriesGenre = genres.map((v) => v.genre) || []
    this.genre = genreList
    this.seriesGenre = seriesGenre
    this.rating = rating ? rating.text || rating || '-' : '-'
    this.description = description
    this.price = price

    this.cover = images
    this.cover.landscape = images.thumbnail

    this.seriesTitle = title
    this.seriesCover = {}
    this.seriesCover.portrait = image_thumbnail_portrait
    this.seriesCover.landscape = image_thumbnail

    const seasonList = seasons.map((v) => { return { id: v.id, hashed_id: v.hashed_id, season: v.season }}) || []
    this.episodes = episodes
    this.seasons = seasonList
    this.limit = limit
    this.items = items
    this.persons = persons
    this.studio = productions
    this.status = status
    this.statusText = statusText
    this.releaseDate = release_date
    this.wishlist = wishlist
    this.movies = movies
    this.paid = paid
    this.trailers = trailers.length > 0 ? trailers : [{url: video_code}]
    this.timestamp = {
      // updated_at: currentDateTime,
      start_date: available_start,
      end_date: available_end,
      current: currentDateTime,
      rent_duration: available_rent
    }
    this.historyWatch = history_watch

    // dummy for votes
    this.totalVotes = total_votes
    this.totalScores = total_scores

    // dummy watch status
    this.watchStatus = watch_status
  }

  createItem (data) {
    return Object.freeze(new Movie(data))
  }

  createDummy(id = 1) {
    const totalVotes = faker.random.numeric()
    const scores = [50, 55, 60, 65, 70 ,75 , 80, 85, 90, 95, 100]
    let totalScores = 0
    for (let i in totalVotes) {
      const vote = totalVotes[i]
      totalScores += vote * faker.helpers.arrayElement(scores)
    }
    
    const data = {
      id: faker.datatype.uuid(),
      available_end: faker.date.future(),
      available_start: faker.date.future(),
      currentDateTime: new Date(),
      description: faker.commerce.productDescription(),
      episodes: [],
      seasons: [],
      status: faker.helpers.arrayElement([0,1,2,3]),
      paid: false,
      statusText: '',
      release_date: new Date(),
      genre: [{name:faker.music.genre()}, {name: faker.music.genre()}],
      genres: [{name:faker.music.genre()}, {name: faker.music.genre()}],
      items: [],
      hashed_id: null,
      movies: {},
      images: {},
      image_thumbnail: null,
      image_thumbnail_portrait: null,
      duration: null,
      persons: [],
      productions: [],
      limit: 0,
      name: faker.commerce.productName(),
      title: faker.commerce.productName(),
      price: {},
      rating: {},
      wishlist: false,
      trailers: [],
      video_code: null,
      history_watch: {currentTime: '243.608711', duration: '5229.24'},
      available_rent: new Date(),

      // dummy for votes
      total_votes: totalVotes,
      total_scores: totalScores,

      // dummy watch status
      watch_status: faker.helpers.arrayElement(['Belum menonton', 'Sedang menonton', 'Sudah menonton']),
    }
    return Object.freeze(new Movie(data))
  }
}

export default Movie
