export const BASE_URL = "http://localhost:3000";

export const initialNodes = [
  {
    id: 'n1', position: { x: 0, y: 0 }, data: {
      label: <div className="flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        < div className='text-xs' > Add first step...</div>
      </div>
    },

  },
  {
    id: 'n2',
    position: { x: 0, y: 100 },
    data: {
      label: <div className='flex justify-center items-center'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    }
  },
];
