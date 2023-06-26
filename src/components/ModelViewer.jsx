/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function ModelViewer() {
  const jsonMock = {
    modelGLB: [
      "./models/g2_combat_pistol.glb",
      "./models/cell_tower.glb",
      "./models/broadcast_tower_game_ready.glb",
      "./models/oil_conditioning_unit.gltf",
    ],
    modelAnot: [
      ["Barrel", "Magazine", "Handguard", "Grip", "Trigger"],
      ["Pole", "Radar", "Controller", "Generator", "Monitor room"],
      ["Microwave antena", "Dist box", "Antenna cable", "BBU", "Top end"],
      ["Pump", "Nozzle", "Pressure Gauge", "Valve", "Controller"],
    ],
  };
  const models = [
    "G2 Combat",
    "Cell Tower",
    "Broadcast Tower",
    "Oil Conditioning Unit",
  ];

  const [modelGLB, setModelGLB] = useState([]);

  const onSelectModel = (glb) => {
    setModelGLB(glb);
  };

  const [showtab, setShowtab] = useState([]);

  const handletab = (anot) => {
    setShowtab(anot);
  };

  const [show, setShow] = useState();

  return (
    <>
      {/* Model Viewer */}
      <div className="w-screen h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300">
        {/*  */}
        <div>
          {show === jsonMock.modelGLB[0] && (
            <>
              <model-viewer
                class="model-viewer"
                ar
                modes="scene-viewer quick-look webxr"
                src={jsonMock.modelGLB[0]}
                auto-rotate
                camera-controls
                style={{ width: "100vw", height: "68vh" }}
              >
                <h1 className="font-bold font-sans text-2xl text-center pt-5">
                  {models[0]}
                </h1>
                <button
                  slot="hotspot-1"
                  data-surface="1 0 28 35 29 0.369 0.105 0.526"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Barrel
                  </div>
                </button>
                <button
                  slot="hotspot-3"
                  data-surface="32 0 146 153 34 0.345 0.641 0.014"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Bullet
                  </div>
                </button>
                <button
                  slot="hotspot-4"
                  data-surface="28 0 18 93 92 0.126 0.473 0.401"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Magazine
                  </div>
                </button>
                <button
                  slot="hotspot-5"
                  data-surface="6 0 75 70 72 0.304 0.103 0.592"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Trigger
                  </div>
                </button>
              </model-viewer>
            </>
          )}
        </div>
        {/*  */}
        <div>
          {show === jsonMock.modelGLB[1] && (
            <>
              <model-viewer
                class="model-viewer"
                ar
                modes="scene-viewer quick-look webxr"
                src={jsonMock.modelGLB[1]}
                auto-rotate
                camera-controls
                style={{ width: "100vw", height: "68vh" }}
              >
                <h1 className="font-bold font-sans text-2xl text-center pt-5">
                  {models[1]}
                </h1>
                <button
                  slot="hotspot-1"
                  data-position="-31.833250959691384m 1097.3859396496084m 3.0934687943752124m"
                  data-normal="-0.9951698417044923m 0.005486081238283315m 0.09801473906766615m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Pole
                  </div>
                </button>
                <button
                  slot="hotspot-2"
                  data-position="-464.1635539223069m 273.16208996816147m -1351.491519517322m"
                  data-normal="-0.9999999999995336m -1.573722771123018e-13m -9.65944152263064e-7m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Control Room
                  </div>
                </button>
                <button
                  slot="hotspot-3"
                  data-position="-377.081198477985m 144.18719397341988m -681.0616264828946m"
                  data-normal="-0.707106781186516m 0.7071067811865559m -1.809156595698719e-7m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Generator
                  </div>
                </button>
                <button
                  slot="hotspot-4"
                  data-position="-20.979722939772884m 1881.346722461429m 176.7305914689505m"
                  data-normal="0.4406356288636705m -0.004354803478883887m 0.8976754860541631m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Cell Antenna
                  </div>
                </button>
                <button
                  slot="hotspot-5"
                  data-position="-464.1632810743881m 346.73388302646254m -1607.9850206947258m"
                  data-normal="-0.9999999999994966m -1.6348328624185085e-13m -0.000001003453258958532m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Controller
                  </div>
                </button>
              </model-viewer>
            </>
          )}
        </div>
        {/*  */}
        <div>
          {show === jsonMock.modelGLB[2] && (
            <>
              <model-viewer
                class="model-viewer"
                ar
                modes="scene-viewer quick-look webxr"
                src={jsonMock.modelGLB[2]}
                auto-rotate
                camera-controls
                style={{ width: "100vw", height: "68vh" }}
              >
                <h1 className="font-bold font-sans text-2xl text-center pt-5">
                  {models[2]}
                </h1>
                <button
                  slot="hotspot-1"
                  data-position="-125.05191258048782m 1092.9195703974742m 122.94456534309013m"
                  data-normal="-0.7709862088944953m -0.07291843759189531m 0.6326635497273811m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Microwave Antenna
                  </div>
                </button>
                <button
                  slot="hotspot-2"
                  data-position="21.29069700351849m 40.000004580585596m 34.264222492432296m"
                  data-normal="0m 0.9999999999999932m -1.1628860985268869e-7m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Dist Box
                  </div>
                </button>
                <button
                  slot="hotspot-3"
                  data-position="-95.82112936678939m 573.0325617696956m -93.00571604915292m"
                  data-normal="-0.9979264996330836m 0.06436381904087285m -0.000011337339238533744m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Antenna Cable
                  </div>
                </button>
                <button
                  slot="hotspot-4"
                  data-position="24.567791915645287m 39.9999897760805m -93.04407598375504m"
                  data-normal="0m 0.9999999999999932m -1.1628860985268869e-7m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    BBU
                  </div>
                </button>
                <button
                  slot="hotspot-5"
                  data-position="51.29126171666485m 1410.3849421745203m 9.230644278260769m"
                  data-normal="0m 0.9999999999999932m -1.1628860985268869e-7m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Top End
                  </div>
                </button>
              </model-viewer>
            </>
          )}
        </div>
        {/*  */}
        <div>
          {show === jsonMock.modelGLB[3] && (
            <>
              <model-viewer
                class="model-viewer"
                ar
                modes="scene-viewer quick-look webxr"
                src={jsonMock.modelGLB[3]}
                auto-rotate
                camera-controls
                style={{ width: "100vw", height: "68vh" }}
              >
                <h1 className="font-bold font-sans text-2xl text-center pt-5">
                  {models[3]}
                </h1>
                <button
                  slot="hotspot-2"
                  data-position="1.7008069332461013m 1.4013124195555258m 0.4024355205192265m"
                  data-normal="0.9998535808014419m -0.011414308928526252m 0.012748745437056964m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Pump
                  </div>
                </button>
                <button
                  slot="hotspot-4"
                  data-position="0.6963093910278757m 5.702550468961743m 3.0643924901148796m"
                  data-normal="-0.05353869163380376m 0.47236739293952146m 0.8797742065926122m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Pump
                  </div>
                </button>
                <button
                  slot="hotspot-5"
                  data-position="0.5555969882934562m 2.9480011336975247m -3.3932453992997025m"
                  data-normal="-0.19582219853180005m 0.853776465249567m -0.4824100060613663m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Nozzle
                  </div>
                </button>
                <button
                  slot="hotspot-6"
                  data-position="-0.7778496430815094m 2.963749201359758m -1.5876312192888036m"
                  data-normal="-0.980003544573453m -0.19390400857638257m -0.044657452698047925m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Pressure Gauge
                  </div>
                </button>
                <button
                  slot="hotspot-8"
                  data-position="0.15179142759806719m 5.3155507290777955m -2.845855249998478m"
                  data-normal="0.019731611878839962m 0.10556860028047511m -0.9942162411304113m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Valve
                  </div>
                </button>
                <button
                  slot="hotspot-11"
                  data-position="-1.1484805198428947m 5.607754013573949m 0.01664628347869801m"
                  data-normal="-0.9350926060297338m -0.1948091467438691m -0.29605947796591m"
                  data-visibility-attribute="visible"
                >
                  <div className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
                    Controller
                  </div>
                </button>
              </model-viewer>
            </>
          )}
        </div>
      </div>
      {/* Table */}
      <div className="fixed bottom-0 w-screen">
        <div className="flex w-full max-h-screen">
          {/* Asset Browser */}
          <div className="w-1/3 bg-gray-200 border-r border-gray-300 overflow-auto">
            <h2 className="text-xl font-semibold font-sans px-5 py-5 bg-gray-400 text-center ">
              Asset Browser
            </h2>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
                <th className="py-2 px-6">Asset</th>
                <th className="py-2 px-6">Type</th>
                <th className="py-2 px-8">Actions</th>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    {models[0]}
                  </td>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    3D model
                  </td>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    <button
                      onClick={() => {
                        setShow(jsonMock.modelGLB[0]);
                        // onSelectModel(jsonMock.modelGLB[0]);
                        handletab(jsonMock.modelAnot[0]);
                      }}
                      className="font-medium bg-red-400 hover:bg-red-500 m-1 px-3 py-1 rounded text-white active"
                    >
                      Select
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    {models[1]}
                  </td>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    3D model
                  </td>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    <button
                      onClick={() => {
                        setShow(jsonMock.modelGLB[1]);
                        // onSelectModel(jsonMock.modelGLB[1]);
                        handletab(jsonMock.modelAnot[1]);
                      }}
                      className="font-medium bg-red-400 hover:bg-red-500 m-1 px-3 py-1 rounded text-white active"
                    >
                      Select
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    {models[2]}
                  </td>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    3D model
                  </td>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    <button
                      onClick={() => {
                        setShow(jsonMock.modelGLB[2]);
                        // onSelectModel(jsonMock.modelGLB[2]);
                        handletab(jsonMock.modelAnot[2]);
                      }}
                      className="font-medium bg-red-400 hover:bg-red-500 m-1 px-3 py-1 rounded text-white"
                    >
                      Select
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    {models[3]}
                  </td>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    <p>3D model (not optimized/lazy load)</p>
                  </td>
                  <td className="py-2 px-6 font-medium text-gray-900">
                    <button
                      onClick={() => {
                        setShow(jsonMock.modelGLB[3]);
                        // onSelectModel(jsonMock.modelGLB[3]);
                        handletab(jsonMock.modelAnot[3]);
                      }}
                      className="font-medium bg-red-400 hover:bg-red-500 m-1 px-3 py-1 rounded text-white"
                    >
                      Select
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Annotation List */}
          <div className="w-1/3 bg-gray-200 border-r border-gray-300">
            <h2 className="text-xl font-semibold font-sans px-5 py-5 bg-gray-400 text-center">
              Annotation List
            </h2>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                <th className="py-2 px-6">Annotation</th>
                <th className="py-2">Actions</th>
              </thead>
              <tbody>
                {showtab.map((anot) => (
                  <tr key={anot}>
                    <td className="py-2.5 px-3 font-medium text-gray-900">
                      {anot}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Document List */}
          <div className="w-1/3 bg-gray-200 border-r border-gray-300">
            <h2 className="text-xl font-semibold font-sans px-5 py-5 bg-gray-400 text-center">
              Document List
            </h2>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                <th className="py-2 px-6">Document</th>
                <th className="py-2 px-6">Type</th>
                <th className="py-2">Actions</th>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelViewer;
