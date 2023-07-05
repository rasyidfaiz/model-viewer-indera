import React from 'react';

function ModelViewer2() {
  return (
    <>
      <h1 className='font-bold font-sans text-2xl text-center'>3D Viewer</h1>
      <model-viewer
        className='box'
        src='./models/g2_combat_pistol.glb'
        ar
        ar-modes='webxr scene-viewer quick-look'
        camera-controls
        shadow-intensity='2'
        exposure='2'
        style={{ width: '100vw', height: '70vh' }}
      >
        <button
          className='bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg'
          class='Hotspot'
          slot='hotspot-1'
          data-surface='1 0 28 35 29 0.369 0.105 0.526'
          data-visibility-attribute='visible'
        >
          <div class='HotspotAnnotation'>Gun</div>
        </button>
        <button
          class='Hotspot'
          slot='hotspot-3'
          data-surface='32 0 146 153 34 0.345 0.641 0.014'
          data-visibility-attribute='visible'
        >
          <div class='HotspotAnnotation'>Bullet</div>
        </button>
        <button
          class='Hotspot'
          slot='hotspot-4'
          data-surface='28 0 18 93 92 0.126 0.473 0.401'
          data-visibility-attribute='visible'
        >
          <div class='HotspotAnnotation'>Magazine</div>
        </button>
        <button
          class='Hotspot'
          slot='hotspot-5'
          data-surface='6 0 75 70 72 0.304 0.103 0.592'
          data-visibility-attribute='visible'
        >
          <div class='HotspotAnnotation'>Sight</div>
        </button>
      </model-viewer>
    </>
  );
}

export default ModelViewer2;
