import React from "react";
import {
  SampleAppContextProvider,
  SampleAppContext,
} from "sample-app-shared/dist/esm/contexts/sample-app";

import { CommonModule2 } from "./components/CommonModule2";

function App() {
  return (
    <SampleAppContextProvider>
      <SampleAppContext.Consumer>
        {(data) => {
          return (
            <div style={{ padding: 16 }}>
              <div style={{ textAlign: "center" }}>
                <h1>Welcome to sample-app-common-module-2</h1>
                <p>Category: {data.product}</p>
              </div>

              <div style={{ marginTop: 32 }}>
                <CommonModule2 />
              </div>
            </div>
          );
        }}
      </SampleAppContext.Consumer>
    </SampleAppContextProvider>
  );
}

export default App;
