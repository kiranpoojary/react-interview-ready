import React, { useReducer, useState } from "react";

function FileManager() {
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState(null);
  const [state, dispatch] = useReducer(fileHandling, [
    {
      id: 1,
      name: "root",
      type: "folder",
      children: [],
      isOpen: false,
    },
  ]);

  function toggleFolderItems(folderStructure, folderId, isOpen) {
    return folderStructure?.map((f) => {
      if (f?.id == folderId) {
        return { ...f, isOpen };
      } else if (f?.children?.length > 0) {
        return {
          ...f,
          children: toggleFolderItems(f?.children, folderId, isOpen),
        };
      } else return f;
    });
  }

  function addFolder(folderStructure, folderName, parentFolderId) {
    return folderStructure?.map((f) => {
      if (f?.id == parentFolderId) {
        const childId = new Date().getTime();
        f.children?.unshift({
          id: childId,
          name: folderName,
          type: "folder",
          children: [],
          isOpen: false,
        });
        f.isOpen = true;
        setEditingId(childId);
        setNewName(folderName);
        return f;
      } else if (f?.children?.length > 0) {
        return {
          ...f,
          children: addFolder(f?.children, folderName, parentFolderId),
        };
      } else return f;
    });
  }

  function addFile(folderStructure, fileName, parentFolderId) {
    return folderStructure?.map((f) => {
      if (f?.id == parentFolderId) {
        const childId = new Date().getTime();
        f.children?.push({
          id: childId,
          name: fileName,
          type: "file",
        });
        f.isOpen = true;
        setEditingId(childId);
        setNewName(fileName);
        return f;
      } else if (f?.children?.length > 0) {
        return {
          ...f,
          children: addFile(f?.children, fileName, parentFolderId),
        };
      } else return f;
    });
  }

  function deleteItem(folderStructure, id) {
    console.log(id);
    return folderStructure?.filter((f) => {
      if (f?.id == id) {
        return false;
      } else if (f?.children?.length > 0) {
        f.children = deleteItem(f?.children, id);
        return true;
      } else return true;
    });
  }

  function renameItem(folderStructure, newName, id) {
    console.log(id);
    return folderStructure?.map((f) => {
      if (f?.id == id) {
        setNewName(null);
        setEditingId(null);
        return { ...f, name: newName };
      } else if (f?.children?.length > 0) {
        f.children = renameItem(f?.children, newName, id);
        return f;
      } else return f;
    });
  }

  function fileHandling(state, action) {
    console.log({ state, action });
    switch (action.type) {
      case "EXPAND_FOLDER":
        return toggleFolderItems(state, action?.payload?.id, true);
      case "COLLAPSE_FOLDER":
        return toggleFolderItems(state, action?.payload?.id, false);
      case "ADD_FOLDER":
        return addFolder(
          state,
          action?.payload?.name,
          action?.payload?.parentFolderId
        );
      case "ADD_FILE":
        return addFile(
          state,
          action?.payload?.name,
          action?.payload?.parentFolderId
        );

      case "DELETE":
        return deleteItem(state, action?.payload?.id);

      case "RENAME":
        return renameItem(state, newName, editingId);

      default:
        return state;
    }
  }

  function getFileTree(state, level = 0) {
    return state?.map((it) => (
      <React.Fragment key={it.id}>
        <div
          style={{
            marginLeft: `${level * 30}px`,
            display: "flex",
            justifyContent: "space-around",
            width: it?.type == "folder" ? "25rem" : "15rem",
          }}
        >
          {it?.type == "folder" && it?.isOpen && (
            <div
              onClick={() =>
                dispatch({
                  type: "COLLAPSE_FOLDER",
                  payload: { id: it?.id },
                })
              }
            >
              [-]
            </div>
          )}
          {it?.type == "folder" && !it?.isOpen && (
            <div
              onClick={() =>
                dispatch({
                  type: "EXPAND_FOLDER",
                  payload: { id: it?.id },
                })
              }
            >
              [+]
            </div>
          )}

          {editingId == it?.id ? (
            <input
              autoFocus={true}
              defaultValue={it?.name}
              type="text"
              value={it?.newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={() =>
                dispatch({
                  type: "RENAME",
                  payload: { it: it?.it, name: newName },
                })
              }
            />
          ) : (
            <div
              onDoubleClick={() => {
                setEditingId(it?.id);
                setNewName(it?.name);
              }}
            >
              {it?.name}
            </div>
          )}

          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              level != 0 &&
              dispatch({
                type: "DELETE",
                payload: { id: it?.id },
              })
            }
          >
            Delete
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setEditingId(it?.id);
              setNewName(it?.name);
            }}
          >
            Rename
          </div>
          {it?.type == "folder" && (
            <>
              <div
                style={{ cursor: "pointer" }}
                onClick={() =>
                  dispatch({
                    type: "ADD_FOLDER",
                    payload: { name: "New folder", parentFolderId: it?.id },
                  })
                }
              >
                +Folder
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() =>
                  dispatch({
                    type: "ADD_FILE",
                    payload: { name: "File.txt", parentFolderId: it?.id },
                  })
                }
              >
                +File
              </div>
            </>
          )}
        </div>
        {it?.children?.length > 0 && it?.isOpen && (
          <div key={`children-${it?.id}`}>
            {getFileTree(it?.children, level + 1)}
          </div>
        )}
      </React.Fragment>
    ));
  }
  return <div>{getFileTree(state)}</div>;
}

export default FileManager;
