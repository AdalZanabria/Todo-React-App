import { CogIcon } from "@heroicons/react/solid";

function TodosLoading() {
  return (
    <>
      <div className="p-4 mb-4 rounded-lg bg-pink-100 animate-pulse text-pink-400 outline outline-2 outline-pink-400 gap-2">
        <div className="flex">
          <CogIcon className="animate-spin-slow w-10 h-10 m-0" />
          <div className="w-28">
            <div className="h-2 rounded bg-pink-400"></div>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="h-2 bg-pink-400 rounded col-span-2"></div>
              <div className="h-2 bg-pink-400 rounded col-span-1"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="h-2 bg-pink-400 rounded col-span-1"></div>
              <div className="h-2 bg-pink-400 rounded col-span-2"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <div className="w-4 h-4 m-1 bg-pink-400 rounded-full p-2"></div>
          <div className="w-4 h-4 m-1 bg-pink-400 rounded-full p-2"></div>
        </div>
      </div>

      <div className="p-4 mb-4 rounded-lg bg-pink-100 animate-pulse text-pink-400 outline outline-2 outline-pink-400 gap-2">
        <div className="flex">
          <CogIcon className="animate-spin-slow w-10 h-10 m-0" />
          <div className="w-28">
            <div className="h-2 rounded bg-pink-400"></div>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="h-2 bg-pink-400 rounded col-span-2"></div>
              <div className="h-2 bg-pink-400 rounded col-span-1"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="h-2 bg-pink-400 rounded col-span-1"></div>
              <div className="h-2 bg-pink-400 rounded col-span-2"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <div className="w-4 h-4 m-1 bg-pink-400 rounded-full p-2"></div>
          <div className="w-4 h-4 m-1 bg-pink-400 rounded-full p-2"></div>
        </div>
      </div>

    </>
  );
}

export { TodosLoading };
