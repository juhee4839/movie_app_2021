import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    const {
      data: {
        data : { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
      this.setState({movies});
  };

  componentDidMount (){
   this.getMovies();
  }
 
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>
  }
}
export default App; 
