
import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto md:p-5 bg-black text-white text-[8px] md:text-sm lg:text-md">
      <div className="block flex justify-between items-center p-5  md:text-start">
        <div className="py-5">
          <h1 className="py-5">Contact US</h1>
          <a 
            href="mailto:officialaquafoundation@gmail.com" 
            className="text-blue-500 py-10 hover:underline"
          >
            officialaquafoundation@gmail.com
          </a>
          
          <ul className="flex justify-center md:justify-start py-5 space-x-4">
            <li>
              <a href="https://instagram.com/aqua_foundation_wop" target="_blank" rel="noopener noreferrer">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbnN0YWdyYW0iPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMiIgeT0iMiIgcng9IjUiIHJ5PSI1Ii8+PHBhdGggZD0iTTE2IDExLjM3QTQgNCAwIDEgMSAxMi42MyA4IDQgNCAwIDAgMSAxNiAxMS4zN3oiLz48bGluZSB4MT0iMTcuNSIgeDI9IjE3LjUxIiB5MT0iNi41IiB5Mj0iNi41Ii8+PC9zdmc+"
                  className="w-6 h-6"
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/aqua_foundation_wop" target="_blank" rel="noopener noreferrer">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mYWNlYm9vayI+PHBhdGggZD0iTTE4IDJoLTNhNSA1IDAgMCAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAgMSAxLTFoM3oiLz48L3N2Zz4="
                  className="w-6 h-6"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="https://x.com/aqua_foundation_wop" target="_blank" rel="noopener noreferrer">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10d2l0dGVyIj48cGF0aCBkPSJNMjIgNHMtLjcgMi4xLTIgMy40YzEuNiAxMC05LjQgMTcuMy0xOCAxMS42IDIuMi4xIDQuNC0uNiA2LTJDMyAxNS41LjUgOS42IDMgNWMyLjIgMi42IDUuNiA0LjEgOSA0LS45LTQuMiA0LTYuNiA3LTMuOCAxLjEgMCAzLTEuMiAzLTEuMnoiLz48L3N2Zz4="
                  className="w-6 h-6"
                  alt="Twitter/X"
                />
              </a>
            </li>
          </ul>
          <small className="italic">@emmycoder</small>
        </div>
        
        <div className="py-5">
          <h1 className="py-5">PROJECT</h1>
          <ul className="space-y-2">
            <li>AID</li>
            <li>Guidance</li>
            <li>Change</li>
            <li>Increment</li>
          </ul>
        </div>
       
        <div className="py-5">
          <h1 className="py-5">BIO PROJECT</h1>
          <ul className="space-y-2">
            <li>Water Purity</li>
            <li>Food Availability</li>
            <li>Medical Assist</li>
            <li>Proper Hygiene</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}