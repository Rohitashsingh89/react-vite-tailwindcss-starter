import "./App.css";

export default function App() {
  return (
    <>
      <div class="mx-auto max-w-2xl sm:py-40">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to react + vite project with tailwindcss
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            start your project by editing App.js
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://tailwindcss.com/docs/utility-first"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </>
  );
}
