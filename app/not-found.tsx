export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-6 text-lg">Sorry, this page does not exist.</p>
      <div className="mb-2">There are only 2 valid routes:</div>
      <ul className="mb-6 text-green-700 font-semibold">
        <li className="mb-2">
          <a href="/marketing" className="underline hover:text-green-900">/marketing</a>
        </li>
        <li>
          <a href="/apps/email" className="underline hover:text-green-900">/apps/email</a>
        </li>
      </ul>
      <a href="/marketing" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Go to Marketing</a>
    </div>
  );
}
