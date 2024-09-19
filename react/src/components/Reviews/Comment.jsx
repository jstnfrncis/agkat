import { useState, useRef } from 'react';

export default function Comment() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
    console.log(uploadedFiles);
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click(); // Trigger the hidden input click
  };

  return (
    <>
      <div className="font-Manregular flex flex-col gap-10 md:mt-12 mt-12">
        <div className="text-left flex flex-col gap-4">
          <h1 htmlFor="OrderNotes" className="block font-Manbold font-medium text-primary md:text-2xl">
            Write your comment
          </h1>
          <p>Share your experiences and help others discover the best spots in San Fernando.</p>
          <textarea
            id="OrderNotes"
            className="mt-2 w-full outline-none bg-none p-6 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm focus:ring-2 focus:ring-accent"
            rows="4"
            placeholder="Share your thoughts and experiences here"
          ></textarea>
        </div>

        <div className="text-left flex flex-col gap-4">
          <h1 htmlFor="fileUpload" className="block font-Manbold font-medium text-primary md:text-2xl">
            Upload photos
          </h1>
          <div
            className="flex  flex-col items-center justify-center bg-white outline-none px-6 py-12 border-2 border-dashed  rounded-lg border-gray-300 cursor-pointer active:scale-[0.98] active-duration-75"
            onClick={triggerFileUpload}
          ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
        </svg>
            Click to upload photos

            

          </div>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
          />

          <div className="mt-4">
            {files.length > 0 && (
              <ul>
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
