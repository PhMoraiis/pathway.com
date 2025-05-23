function ArrowButton() {
  return (
    <button
      type="button"
      className="group flex h-8.5 lg:h-10 items-center gap-2 rounded-full bg-primary-dslight lg:pl-3 pl-3 pr-4 lg:pr-4 transition-all duration-300 ease-in-out hover:bg-foreground hover:pl-2 hover:text-background active:bg-neutral-700 cursor-pointer shadow-lg md:h-8 md:pl-2 md:pr-3 md:text-sm"
    >
      <span className="rounded-full bg-primary p-1 text-sm transition-colors duration-300 group-hover:bg-background">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45 dark:group-hover:text-white"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Arrow</title>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
      <span className="md:text-sm">Começar Agora</span>
    </button>
  )
}

export default ArrowButton
