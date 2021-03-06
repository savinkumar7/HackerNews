import React from "react";
import Hackernews from "./Hackernews";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./index.css";

class StoryBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stories: [], currentPage: 0, totalPages: 0 };
  }

  componentDidMount() {
    sessionStorage.getItem("stories")
      ? this.setState((prevState) => {
          return {
            ...prevState,
            stories: JSON.parse(sessionStorage.getItem("stories")),
            totalPages: JSON.parse(sessionStorage.getItem("totalPages")),
          };
        })
      : this.fetchResults();
  }

  fetchResults() {
    fetch("http://hn.algolia.com/api/v1/search?tags=story")
      .then((res) => res.json())
      .then(({ hits, page, nbPages: totalPages }) => {
        this.setState({ stories: hits, currentPage: page, totalPages });
        sessionStorage.setItem("stories", JSON.stringify(hits));
        sessionStorage.setItem("totalPages", JSON.stringify(totalPages));
      })
      .catch((e) => console.error(e));
  }

  fetchNextResults() {
    window.scrollTo(0, 0);
    const currentPage = this.state.currentPage;
    if (currentPage + 1 <= this.state.totalPages) {
      fetch(
        `http://hn.algolia.com/api/v1/search?tags=story&page=${currentPage + 1}`
      )
        .then((res) => res.json())
        .then(({ hits }) =>
          this.setState((prevState, currentProps) => {
            return {
              stories: [...hits],
              currentPage: prevState.currentPage + 1,
            };
          })
        )
        .catch((e) => console.error(e));
    }
  }

  fetchPreviousResults() {
    window.scrollTo(0, 0);
    const currentPage = this.state.currentPage;
    if (currentPage + 1 <= this.state.totalPages) {
      fetch(
        `http://hn.algolia.com/api/v1/search?tags=story&page=${currentPage - 1}`
      )
        .then((res) => res.json())
        .then(({ hits }) =>
          this.setState((prevState, currentProps) => {
            return {
              stories: [...hits],
              currentPage: prevState.currentPage - 1,
            };
          })
        )
        .catch((e) => console.error(e));
    }
  }

  hideStory(id) {
    const index = this.state.stories.findIndex((item) => item.objectID === id);
    this.setState((prevState, currentProps) => {
      const updatedStories = prevState.stories.splice(index, 1);
      sessionStorage.setItem("stories", JSON.stringify(prevState.stories));
      return { stories: prevState.stories };
    });
    sessionStorage.removeItem(id);
  }

  render() {
    return (
      <div className="story-board-container">
        <Table
          style={{ width: "-webkit-fill-available" }}
          className="stories-container width"
        >
          <Thead className="story-board-header">
            <Tr key="head">
              <Th>Comments</Th>
              <Th>Vote counts</Th>
              <Th>UpVote</Th>
              <Th>Name Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.stories &&
              this.state.stories.map((story, index) => (
                <Hackernews
                  key={index}
                  story={story}
                  hideStory={() => this.hideStory(story.objectID)}
                />
              ))}
          </Tbody>
        </Table>
        {this.state.currentPage > 0 ? (
          <div className="paging">
            <span
              style={{ margin: "20px" }}
              onClick={() => this.fetchPreviousResults()}
            >
              Previous page
            </span>
            <span onClick={() => this.fetchNextResults()}>Next page</span>
          </div>
        ) : (
          <div className="paging">
            <span onClick={() => this.fetchNextResults()}>Next page</span>
          </div>
        )}
      </div>
    );
  }
}

export default StoryBoard;
