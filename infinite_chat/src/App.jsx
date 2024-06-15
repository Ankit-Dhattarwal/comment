import { useState } from "react";
import "./index.css";
import Comment from "./components/Comment";
import useNode from "./Hooks/useNode";
const comments = {
  id: 1,
  items: [],
};

function App() {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };
  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };
  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div className="App">
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  );
}

export default App;
//
//
//
///
///
///
///

// {
//   id: 2452154125,
//   name: "ankit",
//   items: [
//     {
//       id: 245231334,
//       name: "hello ankit",
//       items: [
//         {
//           id: 243214312412,
//           name: "hello ankit again",
//           items: [],
//         },
//       ],
//     },
//   ],
// },
// {
//   id: 7312154125,
//   name: "amit",
//   items: [
//     {
//       id: 799231334,
//       name: "hello amit",
//       items: [
//         {
//           id: 783214312412,
//           name: "hello amit again",
//           items: [],
//         },
//       ],
//     },
//   ],
// },
