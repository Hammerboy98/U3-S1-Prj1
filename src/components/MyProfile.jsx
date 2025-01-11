import { Component } from "react";

class MyProfile extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div>
              <h2 className="display-2">Edit Profile</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-4">
              <div className="position-relative">
                <img src="assets/avatar.png" className="avatarDiv" />

                <button className="btn btn-dark btn-sm text-white rounded-circle border border-1 position-absolute start-0 bottom-0 mb-2 ms-2">
                  <i className="bi bi-pencil-fill"></i>
                </button>
              </div>
            </div>

            <div className="col-md-8">
              <form className="mt-3 mt-md-0">
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control bg-white text-white"
                    placeholder="Strive Student"
                  />
                </div>

                <div className="mb-4">
                  <h5 className="mb-3">Language:</h5>
                  <div>
                    <select
                      className="form-select bg-white"
                      aria-label="Default select example"
                    >
                      <option>English</option>
                      <option>Italian</option>
                      <option>French</option>
                    </select>
                  </div>
                  <hr />
                </div>
                <div className="mb-4">
                  <h5 className="mb-3">Maturity settings:</h5>
                  <div className=" d-md-inline-block">
                    <p>ALL MATURITY RATINGS</p>
                  </div>
                  <div className="my-2 text-dark">
                    Show titles of all maturity ratings for this profile.
                  </div>
                  <button
                    type="button"
                    className="btn btn-custom btn-outline-secondary px-4 py-1"
                  >
                    EDIT
                  </button>
                  <hr />
                </div>
                <div className="mb-4">
                  <h5 className="mb-3">Autoplay controls</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input bg-transparent border-secondary p-2"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      Autoplay next episode in a series on all devices.
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input bg-transparent border-secondary p-2"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      Autoplay previews while browsing on all devices.
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col d-flex flex-wrap gap-3 mb-3">
              <div className="">
                <button
                  type="button"
                  className="btn-custom btn btn-outline-secondary px-4 py-2"
                >
                  SAVE
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-custom btn btn-outline-secondary px-4 py-2"
                >
                  CANCEL
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-custom btn btn-outline-secondary px-4 py-2"
                >
                  DELETE PROFILE
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MyProfile;
