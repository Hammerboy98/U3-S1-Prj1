import { Component } from "react";
import MyFooter from "./MyFooter";
import MyHarryPotter from "./MyHarrypotter";
import MyJamesBond from "./MyJamesBond";
import MyLordOfTheRings from "./MyLordOfTheRings";
import MyAlien from "./MyAlien";
import MyNavbar from "./MyNavbar";
import { Container, Alert, Spinner } from "react-bootstrap";

class MyHome extends Component {
  state = {
    isError: false,
    isLoading: true,
  };

  handleError = () => {
    this.setState({ isError: true });
  };

  handleGet = () => {
    this.setState({ isError: false });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }
  render() {
    return (
      <>
        <MyNavbar />
        {this.state.isLoading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Spinner animation="border" variant="danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {!this.state.isLoading && (
          <>
            <MyJamesBond />
            <MyHarryPotter />
            <MyLordOfTheRings />
            <MyAlien/>
            <MyFooter />
          </>
        )}

        {this.state.isError && (
          <Container>
            <Alert variant="danger">Si è verificato un errore</Alert>
          </Container>
        )}
      </>
    );
  }
}
export default MyHome;
