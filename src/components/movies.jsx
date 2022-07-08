import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => {
      return m._id != movie._id;
    });
    this.setState({ movies: movies });
  };

  moviesCountFunction = (moviesCount) => {
    if (moviesCount === 0) return <p>There are no movies in the database.</p>;
    else return <p>Showing {moviesCount} movies in the database.</p>;
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    return (
      <main className="container">
        <div className="pt-20"></div>
        {this.moviesCountFunction(moviesCount)}
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      type="button"
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}

export default Movies;
