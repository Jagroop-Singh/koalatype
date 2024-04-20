'use client';

export default function KeyboardDisplay() {
  return (
    <div className='grid grid-rows-3 place-items-center gap-2'>
      <div id='row1' className='flex gap-4 place-items-center'>
        <span id='key-q' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>q</span>
        <span id='key-w' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>w</span>
        <span id='key-e' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>e</span>
        <span id='key-r' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>r</span>
        <span id='key-t' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>t</span>
        <span id='key-y' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>y</span>
        <span id='key-u' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>u</span>
        <span id='key-i' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>i</span>
        <span id='key-o' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>o</span>
        <span id='key-p' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>p</span>
        <span id='key-[' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>[</span>
        <span id='key-]' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>]</span>
        <span id='key-\' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>\</span>
      </div>
      <div id='row2' className='flex gap-4 place-items-center'>
        <span id='key-a' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>a</span>
        <span id='key-s' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>s</span>
        <span id='key-d' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>d</span>
        <span id='key-f' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>f</span>
        <span id='key-g' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>g</span>
        <span id='key-h' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>h</span>
        <span id='key-j' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>j</span>
        <span id='key-k' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>k</span>
        <span id='key-l' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>l</span>
        <span id='key-;' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>;</span>
        <span id='key-&' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>&apos;</span>
      </div>
      <div id='row3' className='flex gap-4 place-items-center'>
        <span id='key-z' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>z</span>
        <span id='key-x' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>x</span>
        <span id='key-c' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>c</span>
        <span id='key-v' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>v</span>
        <span id='key-b' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>b</span>
        <span id='key-n' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>n</span>
        <span id='key-m' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>m</span>
        <span id='key-,' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>,</span>
        <span id='key-.' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>.</span>
        <span id='key-/' className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>/</span>
      </div>
      <div id='row4'>
        <div id='key-' className='flex rounded bg-indigo-600 px-24 py-1 text-xs font-semibold text-white shadow-sm border-blue-400'>
          space
        </div>
      </div>
    </div>

  );
}
