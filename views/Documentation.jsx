import React, { Component } from "react";

export default class Documentation extends Component {
  render() {
    return (
    <>
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="/documentationStyle.css" />
        </head>
        <body>
          <h1>Documentation Page</h1>
          <div className="apiDocumentation">
            <h2>API Information</h2>
            <div className="eachApiName">
              <div>
                <a className="linkToApi" href="/api/zyn"><h3>Zyn Api</h3></a>
                <div className="aceessInfo">
                  <div>Api url for full data: <strong>/api/zyn</strong></div>
                  <div>Api url for individual data: <strong>/api/zyn/"insert _id of entry"</strong></div>
                </div>
              </div>
              <div>
                <a className="linkToApi" href="/api/programming"><h3>Programming Api</h3></a>
                <div className="aceessInfo">
                  <div>Api url for full data: <strong>/api/programming</strong></div>
                  <div>Api url for individual data: <strong>/api/programming/"insert _id of entry"</strong></div>
                </div>
              </div>
              <div>
                <a className="linkToApi" href="/api/movie"><h3>Movie Api</h3></a>
                <div className="aceessInfo">
                  <div>Api url for full data: <strong>/api/movie</strong></div>
                  <div>Api url for individual data: <strong>/api/movie/"insert _id of entry"</strong></div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
    )
  }
}