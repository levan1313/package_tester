import React, { useEffect, useRef } from "react";
import { initializeBuilderData, renderBuilder } from "promotion_builder";

const App: React.FC = () => {
  const ref = useRef(null);
  useEffect(() => {
    // Initialize the package
    initializeBuilderData({
      data,
      editorConfig,
    });

    // Render the package UI
    renderBuilder(ref);
  }, []);

  return <div ref={ref}></div>;
};

export default App;

const data = {
  user: "Standalone User",
  buttonLabel: "Development Mode Button",
  leaderBoards: {
    "0": {
      title: "daily leaderboard",
      iconUrl: "/lb_header_icon.png",
      entries: [
        {
          id: 0,
          playerId: 1,
          userName: "test",
          segment: null,
          place: 1,
          score: 1,
          prizeType: "gold",
          prizeValue: 1000,
        },
        {
          id: 1,
          playerId: 2,
          userName: "player2",
          segment: null,
          place: 2,
          score: 950,
          prizeType: "silver",
          prizeValue: 750,
        },
      ],
    },
    "1": {
      title: "weekly leaderboard",
      iconUrl: "/lb_header_icon.png",
      entries: [
        {
          id: 2,
          playerId: 3,
          userName: "player3",
          segment: "A",
          place: 3,
          score: 900,
          prizeType: "bronze",
          prizeValue: 500,
        },
        {
          id: 3,
          playerId: 4,
          userName: "player4",
          segment: "B",
          place: 4,
          score: 850,
          prizeType: "gold",
          prizeValue: 1000,
        },
        {
          id: 4,
          playerId: 5,
          userName: "player5",
          segment: "C",
          place: 5,
          score: 800,
          prizeType: "silver",
          prizeValue: 750,
        },
      ],
    },
  },
}

let editorConfig = {
  toolbar: {
    exportButton: {
      callBack: (doc: Document) => {
        console.log("React-provided callback executed");
        console.log(doc.documentElement.outerHTML); // Logs iframe content
      },
    }
  },
  colors: {base: '#00141E', secondary: '#062733',  main: "#189541", textColor: "#000000"}
}