/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assetMock } from "../mock/assetMock.js";

function ModelViewer() {
    const jsonMock = {
        modelGLB: [
            "./models/g2_combat_pistol.glb",
            "./models/base_transceiver_station.glb",
            "./models/oil_conditioning_unit.glb",
        ],
        modelAnot: [
            ["Barrel", "Magazine", "Handguard", "Grip", "Trigger"],
            ["Microwave antena", "Dist box", "Antenna cable", "BBU", "Top end"],
            ["Pump", "Nozzle", "Pressure Gauge", "Valve", "Controller"],
        ],
    };
    const models = [
        "G2 Combat",
        "Base Transceiver Station",
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
            <div className=" h-screen w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300">
                {/*  */}
                <div>
                    {show === jsonMock.modelGLB[0] && (
                        <model-viewer
                            class="model-viewer"
                            ar
                            modes="scene-viewer quick-look webxr"
                            src={jsonMock.modelGLB[0]}
                            auto-rotate
                            camera-controls
                            style={{ width: "100vw", height: "68vh" }}
                        >
                            <h1 className="pt-5 text-center font-sans text-2xl font-bold">
                                {models[0]}
                            </h1>
                            <button
                                slot="hotspot-1"
                                data-surface="1 0 28 35 29 0.369 0.105 0.526"
                                data-visibility-attribute="visible"
                            >
                                <div className="rounded-lg border border-slate-200 bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                                    Barrel
                                </div>
                            </button>
                            <button
                                slot="hotspot-3"
                                data-surface="32 0 146 153 34 0.345 0.641 0.014"
                                data-visibility-attribute="visible"
                            >
                                <div className="rounded-lg border border-slate-200 bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                                    Bullet
                                </div>
                            </button>
                            <button
                                slot="hotspot-4"
                                data-surface="28 0 18 93 92 0.126 0.473 0.401"
                                data-visibility-attribute="visible"
                            >
                                <div className="rounded-lg border border-slate-200 bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                                    Magazine
                                </div>
                            </button>
                            <button
                                slot="hotspot-5"
                                data-surface="6 0 75 70 72 0.304 0.103 0.592"
                                data-visibility-attribute="visible"
                            >
                                <div className="rounded-lg border border-slate-200 bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                                    Trigger
                                </div>
                            </button>
                        </model-viewer>
                    )}
                </div>
                {/*  */}
                <div>
                    {show === jsonMock.modelGLB[1] && (
                        <model-viewer
                            class="model-viewer"
                            ar
                            modes="scene-viewer quick-look webxr"
                            src={jsonMock.modelGLB[1]}
                            auto-rotate
                            camera-controls
                            style={{ width: "100vw", height: "68vh" }}
                        >
                            <h1 className="pt-5 text-center font-sans text-2xl font-bold">
                                {models[1]}
                            </h1>
                        </model-viewer>
                    )}
                </div>
                {/*  */}
                <div>
                    {show === jsonMock.modelGLB[2] && (
                        <model-viewer
                            class="model-viewer"
                            ar
                            modes="scene-viewer quick-look webxr"
                            src={jsonMock.modelGLB[2]}
                            auto-rotate
                            camera-controls
                            style={{ width: "100vw", height: "68vh" }}
                        >
                            <h1 className="pt-5 text-center font-sans text-2xl font-bold">
                                {models[2]}
                            </h1>
                            <button
                                slot="hotspot-2"
                                data-position="1.7008069332461013m 1.4013124195555258m 0.4024355205192265m"
                                data-normal="0.9998535808014419m -0.011414308928526252m 0.012748745437056964m"
                                data-visibility-attribute="visible"
                            >
                                <div className="rounded-lg border border-slate-200 bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                                    Pump
                                </div>
                            </button>
                            <button
                                slot="hotspot-4"
                                data-position="0.6963093910278757m 5.702550468961743m 3.0643924901148796m"
                                data-normal="-0.05353869163380376m 0.47236739293952146m 0.8797742065926122m"
                                data-visibility-attribute="visible"
                            >
                                <div className="rounded-lg border border-slate-200 bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                                    Pump
                                </div>
                            </button>
                            <button
                                slot="hotspot-5"
                                data-position="0.5555969882934562m 2.9480011336975247m -3.3932453992997025m"
                                data-normal="-0.19582219853180005m 0.853776465249567m -0.4824100060613663m"
                                data-visibility-attribute="visible"
                            >
                                <div className="rounded-lg border border-slate-200 bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                                    Nozzle
                                </div>
                            </button>
                            <button
                                slot="hotspot-6"
                                data-position="-0.7778496430815094m 2.963749201359758m -1.5876312192888036m"
                                data-normal="-0.980003544573453m -0.19390400857638257m -0.044657452698047925m"
                                data-visibility-attribute="visible"
                            >
                                <div className="rounded-lg border border-slate-200 bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                                    Pressure Gauge
                                </div>
                            </button>
                            <button
                                slot="hotspot-8"
                                data-position="0.15179142759806719m 5.3155507290777955m -2.845855249998478m"
                                data-normal="0.019731611878839962m 0.10556860028047511m -0.9942162411304113m"
                                data-visibility-attribute="visible"
                            >
                                <div className="rounded-lg border border-slate-200 bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                                    Valve
                                </div>
                            </button>
                            <button
                                slot="hotspot-11"
                                data-position="-1.1484805198428947m 5.607754013573949m 0.01664628347869801m"
                                data-normal="-0.9350926060297338m -0.1948091467438691m -0.29605947796591m"
                                data-visibility-attribute="visible"
                            >
                                <div className="rounded-lg border border-slate-200 bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                                    Controller
                                </div>
                            </button>
                        </model-viewer>
                    )}
                </div>
            </div>
            {/* Table */}
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
                                                handletab(
                                                    jsonMock.modelAnot[0]
                                                );
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
                                                handletab(
                                                    jsonMock.modelAnot[1]
                                                );
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
                                                handletab(
                                                    jsonMock.modelAnot[2]
                                                );
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
        </>
    );
}

export default ModelViewer;
