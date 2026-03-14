export default function CoursesListSkeleton() {
  const bgs = ["#F7FAF9", "#E6EFEA", "#D2E4DA"];

  return (
    <section className="scroll-smooth bg-white px-4 pb-5 sm:pb-5 md:pb-8 xl:pb-9 2xl:pb-10">
      {[0, 1, 2].map((index) => {
        const customBg = bgs[index % bgs.length];
        const reversed = index % 2 === 0;

        return (
          <div
            key={index}
            className="relative mb-5 flex w-full scroll-mt-20 animate-pulse flex-col items-center justify-center rounded-2xl md:sticky md:top-0 md:mb-[50vh] md:h-screen"
            style={{ zIndex: index + 1, scrollMarginTop: "5rem", backgroundColor: customBg }}
          >
            <div className="mx-auto h-full w-full overflow-hidden rounded-2xl p-2 sm:py-5 md:rounded-3xl md:py-5 lg:px-10 lg:py-20">
              <div className={`flex h-full flex-col-reverse p-5 ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                <div className={`flex h-full w-full flex-col justify-between lg:w-1/2 ${reversed ? "lg:pl-10 xl:pl-15" : "lg:pr-10 xl:pr-15"}`}>
                  <div>
                    <div className="mb-2 inline-flex h-7 w-40 rounded-full bg-gray-300" />
                    <div className="mb-4 space-y-2">
                      <div className="h-8 w-full rounded bg-gray-300" />
                      <div className="h-8 w-4/5 rounded bg-gray-300" />
                    </div>
                    <div className="mt-4 mb-8 space-y-2">
                      <div className="h-4 w-full rounded bg-gray-200" />
                      <div className="h-4 w-full rounded bg-gray-200" />
                      <div className="h-4 w-3/4 rounded bg-gray-200" />
                    </div>
                    <ul className="space-y-3">
                      {[1, 2, 3, 4].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div className="h-5 w-5 shrink-0 rounded bg-gray-400" />
                          <div className="h-4 max-w-xs flex-1 rounded bg-gray-200" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full">
                    <div className="mt-10 mb-4 border-t border-gray-300" />
                    <div className="mb-4 flex flex-col gap-2 lg:mb-8">
                      {[1, 2].map((item) => (
                        <div key={item} className="grid grid-cols-[110px_1fr] items-start gap-1 lg:grid-cols-[140px_1fr]">
                          <div className="flex items-center gap-3 shrink-0">
                            <div className="h-5 w-5 shrink-0 rounded bg-gray-400" />
                            <div className="h-4 w-16 rounded bg-gray-300" />
                          </div>
                          <div className="h-4 w-3/4 rounded bg-gray-200" />
                        </div>
                      ))}
                    </div>
                    <div className="h-12 w-full max-w-45 rounded-lg bg-gray-400" />
                  </div>
                </div>

                <div className="mb-8 flex w-full items-center justify-center lg:mb-0 lg:w-1/2">
                  <div className="relative aspect-4/3 w-full max-h-125 overflow-hidden rounded-2xl bg-gray-200 lg:h-full lg:aspect-auto lg:rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}