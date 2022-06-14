import React from "react";

export default function Stats() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-start">
            <div
              className="nav flex-column nav-pills me-1"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Artists
              </button>
              <button
                className="nav-link"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Genres
              </button>
              <button
                className="nav-link"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Tracks
              </button>
              <button
                className="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Albums
              </button>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                tabIndex="0"
              >
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><span className="fw-bold">Nas</span></li>
                  <li className="list-group-item"><span className="fw-bold">Kid Cudi</span></li>
                  <li className="list-group-item"><span className="fw-bold">Lord Huron</span></li>
                  <li className="list-group-item"><span className="fw-bold">The Roots</span></li>
                  <li className="list-group-item"><span className="fw-bold">Pritam</span></li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
                tabIndex="0"
              >
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><span className="fw-bold">Hip Hop</span></li>
                  <li className="list-group-item"><span className="fw-bold">RnB/Soul</span></li>
                  <li className="list-group-item"><span className="fw-bold">Hindi Soul</span></li>
                  <li className="list-group-item"><span className="fw-bold">Indie Pop</span></li>
                  <li className="list-group-item"><span className="fw-bold">Rock</span></li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
                tabIndex="0"
              >
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><span className="fw-bold"> When the Night is Over </span> - Lord Huron</li>
                  <li className="list-group-item"><span className="fw-bold"> Make My </span> - The Roots</li>
                  <li className="list-group-item"><span className="fw-bold"> Tere Jeya Hor Disda </span> - The Yellow Diary</li>
                  <li className="list-group-item"><span className="fw-bold"> Ms. Fat Booty </span> - Mos Def</li>
                  <li className="list-group-item"><span className="fw-bold"> Score (feat. SZA & 6LACK) </span> - Isaiah Rashad</li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
                tabIndex="0"
              >
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><span className="fw-bold">1999 </span> - Joey Bada$$</li>
                  <li className="list-group-item"><span className="fw-bold">Illmatic </span> - Nas</li>
                  <li className="list-group-item"><span className="fw-bold">Things Fall Apart </span> - The Roots</li>
                  <li className="list-group-item"><span className="fw-bold">The House is Burning </span> - Isaiah Rashad</li>
                  <li className="list-group-item"><span className="fw-bold">Man On The Moon III: The Chosen </span> - Kid Cudi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
