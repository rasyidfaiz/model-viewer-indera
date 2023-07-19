import React from "react";

function ModelTable() {
  return (
    <div className="fixed bottom-0 w-screen">
      <div className="flex max-h-screen w-full">
        {/* Asset Browser */}
        <div className="w-1/3 overflow-auto border-r border-gray-300 bg-gray-200">
          <h2 className="bg-gray-400 px-5 py-5 text-center font-sans text-xl font-semibold ">
            Asset Browser
          </h2>
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-300 text-xs uppercase text-gray-700 ">
              <th className="px-6 py-2">Asset</th>
              <th className="px-6 py-2">Type</th>
              <th className="px-8 py-2">Actions</th>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-2 font-medium text-gray-900">
                  {models[0]}
                </td>
                <td className="px-6 py-2 font-medium text-gray-900">
                  3D model
                </td>
                <td className="px-6 py-2 font-medium text-gray-900">
                  <button
                    onClick={() => {
                      setShow(jsonMock.modelGLB[0]);
                      // onSelectModel(jsonMock.modelGLB[0]);
                      handletab(jsonMock.modelAnot[0]);
                    }}
                    className="active m-1 rounded bg-red-400 px-3 py-1 font-medium text-white hover:bg-red-500"
                  >
                    Select
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 font-medium text-gray-900">
                  {models[1]}
                </td>
                <td className="px-6 py-2 font-medium text-gray-900">
                  3D model
                </td>
                <td className="px-6 py-2 font-medium text-gray-900">
                  <button
                    onClick={() => {
                      setShow(jsonMock.modelGLB[1]);
                      // onSelectModel(jsonMock.modelGLB[1]);
                      handletab(jsonMock.modelAnot[1]);
                    }}
                    className="active m-1 rounded bg-red-400 px-3 py-1 font-medium text-white hover:bg-red-500"
                  >
                    Select
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 font-medium text-gray-900">
                  {models[2]}
                </td>
                <td className="px-6 py-2 font-medium text-gray-900">
                  3D model
                </td>
                <td className="px-6 py-2 font-medium text-gray-900">
                  <button
                    onClick={() => {
                      setShow(jsonMock.modelGLB[2]);
                      // onSelectModel(jsonMock.modelGLB[2]);
                      handletab(jsonMock.modelAnot[2]);
                    }}
                    className="m-1 rounded bg-red-400 px-3 py-1 font-medium text-white hover:bg-red-500"
                  >
                    Select
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Annotation List */}
        <div className="w-1/3 border-r border-gray-300 bg-gray-200">
          <h2 className="bg-gray-400 px-5 py-5 text-center font-sans text-xl font-semibold">
            Annotation List
          </h2>
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-300 text-xs uppercase text-gray-700">
              <th className="px-6 py-2">Annotation</th>
              <th className="py-2">Actions</th>
            </thead>
            <tbody>
              {showtab.map((anot) => (
                <tr key={anot}>
                  <td className="px-3 py-2.5 font-medium text-gray-900">
                    {anot}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Document List */}
        <div className="w-1/3 border-r border-gray-300 bg-gray-200">
          <h2 className="bg-gray-400 px-5 py-5 text-center font-sans text-xl font-semibold">
            Document List
          </h2>
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-300 text-xs uppercase text-gray-700">
              <th className="px-6 py-2">Document</th>
              <th className="px-6 py-2">Type</th>
              <th className="py-2">Actions</th>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ModelTable;
