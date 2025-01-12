import { Component } from "react";

class MyLordOfTheRings extends Component {
  state = {
    movies: [],
    isLoading: false,
    isError: false,
  };
  fetchMovies = () => {
    const movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=895d39b1&s=Lord Of The Rings`;
    this.setState({ isLoading: true });
    fetch(movieUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        data.Search && this.setState({ movies: data.Search });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isError: true });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    if (this.state.isError) {
      return <div style={{backgroundColor:"red"}}>Something went wrong. Please try again later.</div>;
    }

    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <h4 className="text-white">New Realeseas</h4>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4"
          style={{ "--bs-gutter-x": "0" }}
        >
          {this.state.movies.map((movie) => (
            <div key={movie.imdbID} className="col mb-2 text-center px-1">
              <img
                className="img-fluid"
                src={movie.Poster}
                alt={movie.Title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <p className="mt-2 text-white">{movie.Title}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default MyLordOfTheRings;
