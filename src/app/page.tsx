'use client';
import { convertToNumbers } from '@/lib/converter';
export default function Home() {
  function handleConvert() {
    const normalWords = document.getElementById('1')?.value || '';
    const numberizedWords = convertToNumbers({ input: normalWords });
    document.getElementById('2').value = numberizedWords;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bigBoi">
        <label htmlFor="1" className="m-4">
          Input normal words
        </label>
        <textarea id="1" name="input"></textarea>
        <label htmlFor="2" className="m-4">
          Output:
        </label>
        <textarea id="2" name="output" readOnly></textarea>
        <button
          onClick={handleConvert}
          className="bg-blue-600 p-4 m-4 rounded-2xl text-white hover:bg-blue-500 active:bg-blue-400">
          Convert
        </button>
      </div>
    </>
  );
}
