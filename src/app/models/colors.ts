export let colors: {
  values: string[];
}[] = [
  {
    values: [
      "-gray-100",
      "-gray-200",
      "-gray-300",
      "-gray-400",
      "-gray-500",
      "-gray-600",
      "-gray-700",
      "-gray-800",
      "-gray-900",
    ],
  },
  {
    values: [
      "-red-100",
      "-red-200",
      "-red-300",
      "-red-400",
      "-red-500",
      "-red-600",
      "-red-700",
      "-red-800",
      "-red-900",
    ],
  },
  {
    values: [
      "-orange-100",
      "-orange-200",
      "-orange-300",
      "-orange-400",
      "-orange-500",
      "-orange-600",
      "-orange-700",
      "-orange-800",
      "-orange-900",
    ],
  },
  {
    values: [
      "-yellow-100",
      "-yellow-200",
      "-yellow-300",
      "-yellow-400",
      "-yellow-500",
      "-yellow-600",
      "-yellow-700",
      "-yellow-800",
      "-yellow-900",
    ],
  },
  {
    values: [
      "-green-100",
      "-green-200",
      "-green-300",
      "-green-400",
      "-green-500",
      "-green-600",
      "-green-700",
      "-green-800",
      "-green-900",
    ],
  },
  {
    values: [
      "-teal-100",
      "-teal-200",
      "-teal-300",
      "-teal-400",
      "-teal-500",
      "-teal-600",
      "-teal-700",
      "-teal-800",
      "-teal-900",
    ],
  },
  {
    values: [
      "-blue-100",
      "-blue-200",
      "-blue-300",
      "-blue-400",
      "-blue-500",
      "-blue-600",
      "-blue-700",
      "-blue-800",
      "-blue-900",
    ],
  },
  {
    values: [
      "-indigo-100",
      "-indigo-200",
      "-indigo-300",
      "-indigo-400",
      "-indigo-500",
      "-indigo-600",
      "-indigo-700",
      "-indigo-800",
      "-indigo-900",
    ],
  },
  {
    values: [
      "-purple-100",
      "-purple-200",
      "-purple-300",
      "-purple-400",
      "-purple-500",
      "-purple-600",
      "-purple-700",
      "-purple-800",
      "-purple-900",
    ],
  },
  {
    values: [
      "-pink-100",
      "-pink-200",
      "-pink-300",
      "-pink-400",
      "-pink-500",
      "-pink-600",
      "-pink-700",
      "-pink-800",
      "-pink-900",
    ],
  },
  {
    values: ["-transparent", "-current", "-black", "-white"],
  },
];

export let backgroundColors: any[] = [
  {
    values: [
      "bg-gray-100",
      "bg-gray-200",
      "bg-gray-300",
      "bg-gray-400",
      "bg-gray-500",
      "bg-gray-600",
      "bg-gray-700",
      "bg-gray-800",
      "bg-gray-900",
    ],
  },
  {
    values: [
      "bg-red-100",
      "bg-red-200",
      "bg-red-300",
      "bg-red-400",
      "bg-red-500",
      "bg-red-600",
      "bg-red-700",
      "bg-red-800",
      "bg-red-900",
    ],
  },
  {
    values: [
      "bg-orange-100",
      "bg-orange-200",
      "bg-orange-300",
      "bg-orange-400",
      "bg-orange-500",
      "bg-orange-600",
      "bg-orange-700",
      "bg-orange-800",
      "bg-orange-900",
    ],
  },
  {
    values: [
      "bg-yellow-100",
      "bg-yellow-200",
      "bg-yellow-300",
      "bg-yellow-400",
      "bg-yellow-500",
      "bg-yellow-600",
      "bg-yellow-700",
      "bg-yellow-800",
      "bg-yellow-900",
    ],
  },
  {
    values: [
      "bg-green-100",
      "bg-green-200",
      "bg-green-300",
      "bg-green-400",
      "bg-green-500",
      "bg-green-600",
      "bg-green-700",
      "bg-green-800",
      "bg-green-900",
    ],
  },
  {
    values: [
      "bg-teal-100",
      "bg-teal-200",
      "bg-teal-300",
      "bg-teal-400",
      "bg-teal-500",
      "bg-teal-600",
      "bg-teal-700",
      "bg-teal-800",
      "bg-teal-900",
    ],
  },
  {
    values: [
      "bg-blue-100",
      "bg-blue-200",
      "bg-blue-300",
      "bg-blue-400",
      "bg-blue-500",
      "bg-blue-600",
      "bg-blue-700",
      "bg-blue-800",
      "bg-blue-900",
    ],
  },
  {
    values: [
      "bg-indigo-100",
      "bg-indigo-200",
      "bg-indigo-300",
      "bg-indigo-400",
      "bg-indigo-500",
      "bg-indigo-600",
      "bg-indigo-700",
      "bg-indigo-800",
      "bg-indigo-900",
    ],
  },
  {
    values: [
      "bg-purple-100",
      "bg-purple-200",
      "bg-purple-300",
      "bg-purple-400",
      "bg-purple-500",
      "bg-purple-600",
      "bg-purple-700",
      "bg-purple-800",
      "bg-purple-900",
    ],
  },
  {
    values: [
      "bg-pink-100",
      "bg-pink-200",
      "bg-pink-300",
      "bg-pink-400",
      "bg-pink-500",
      "bg-pink-600",
      "bg-pink-700",
      "bg-pink-800",
      "bg-pink-900",
    ],
  },
  {
    values: ["bg-transparent", "bg-current", "bg-black", "bg-white"],
  },
];

interface colorEntry {
  [key: string]: string;
}

export const borderColor: colorEntry = {
  "border-gray-50": "border-gray-50",
  "border-gray-100": "border-gray-100",
  "border-gray-200": "border-gray-200",
  "border-gray-300": "border-gray-300",
  "border-gray-400": "border-gray-400",
  "border-gray-500": "border-gray-500",
  "border-gray-600": "border-gray-600",
  "border-gray-700": "border-gray-700",
  "border-gray-800": "border-gray-800",
  "border-gray-900": "border-gray-900",
  "border-red-50": "border-red-50",
  "border-red-100": "border-red-100",
  "border-red-200": "border-red-200",
  "border-red-300": "border-red-300",
  "border-red-400": "border-red-400",
  "border-red-500": "border-red-500",
  "border-red-600": "border-red-600",
  "border-red-700": "border-red-700",
  "border-red-800": "border-red-800",
  "border-red-900": "border-red-900",
  "border-yellow-50": "border-yellow-50",
  "border-yellow-100": "border-yellow-100",
  "border-yellow-200": "border-yellow-200",
  "border-yellow-300": "border-yellow-300",
  "border-yellow-400": "border-yellow-400",
  "border-yellow-500": "border-yellow-500",
  "border-yellow-600": "border-yellow-600",
  "border-yellow-700": "border-yellow-700",
  "border-yellow-800": "border-yellow-800",
  "border-yellow-900": "border-yellow-900",
  "border-green-50": "border-green-50",
  "border-green-100": "border-green-100",
  "border-green-200": "border-green-200",
  "border-green-300": "border-green-300",
  "border-green-400": "border-green-400",
  "border-green-500": "border-green-500",
  "border-green-600": "border-green-600",
  "border-green-700": "border-green-700",
  "border-green-800": "border-green-800",
  "border-green-900": "border-green-900",
  "border-blue-50": "border-blue-50",
  "border-blue-100": "border-blue-100",
  "border-blue-200": "border-blue-200",
  "border-blue-300": "border-blue-300",
  "border-blue-400": "border-blue-400",
  "border-blue-500": "border-blue-500",
  "border-blue-600": "border-blue-600",
  "border-blue-700": "border-blue-700",
  "border-blue-800": "border-blue-800",
  "border-blue-900": "border-blue-900",
  "border-indigo-50": "border-indigo-50",
  "border-indigo-100": "border-indigo-100",
  "border-indigo-200": "border-indigo-200",
  "border-indigo-300": "border-indigo-300",
  "border-indigo-400": "border-indigo-400",
  "border-indigo-500": "border-indigo-500",
  "border-indigo-600": "border-indigo-600",
  "border-indigo-700": "border-indigo-700",
  "border-indigo-800": "border-indigo-800",
  "border-indigo-900": "border-indigo-900",
  "border-purple-50": "border-purple-50",
  "border-purple-100": "border-purple-100",
  "border-purple-200": "border-purple-200",
  "border-purple-300": "border-purple-300",
  "border-purple-400": "border-purple-400",
  "border-purple-500": "border-purple-500",
  "border-purple-600": "border-purple-600",
  "border-purple-700": "border-purple-700",
  "border-purple-800": "border-purple-800",
  "border-purple-900": "border-purple-900",
  "border-pink-50": "border-pink-50",
  "border-pink-100": "border-pink-100",
  "border-pink-200": "border-pink-200",
  "border-pink-300": "border-pink-300",
  "border-pink-400": "border-pink-400",
  "border-pink-500": "border-pink-500",
  "border-pink-600": "border-pink-600",
  "border-pink-700": "border-pink-700",
  "border-pink-800": "border-pink-800",
  "border-pink-900": "border-pink-900",
  "border-rose-50": "border-rose-50",
  "border-rose-100": "border-rose-100",
  "border-rose-200": "border-rose-200",
  "border-rose-300": "border-rose-300",
  "border-rose-400": "border-rose-400",
  "border-rose-500": "border-rose-500",
  "border-rose-600": "border-rose-600",
  "border-rose-700": "border-rose-700",
  "border-rose-800": "border-rose-800",
  "border-rose-900": "border-rose-900",
  "border-cyan-50": "border-cyan-50",
  "border-cyan-100": "border-cyan-100",
  "border-cyan-200": "border-cyan-200",
  "border-cyan-300": "border-cyan-300",
  "border-cyan-400": "border-cyan-400",
  "border-cyan-500": "border-cyan-500",
  "border-cyan-600": "border-cyan-600",
  "border-cyan-700": "border-cyan-700",
  "border-cyan-800": "border-cyan-800",
  "border-cyan-900": "border-cyan-900",
  "border-teal-50": "border-teal-50",
  "border-teal-100": "border-teal-100",
  "border-teal-200": "border-teal-200",
  "border-teal-300": "border-teal-300",
  "border-teal-400": "border-teal-400",
  "border-teal-500": "border-teal-500",
  "border-teal-600": "border-teal-600",
  "border-teal-700": "border-teal-700",
  "border-teal-800": "border-teal-800",
  "border-teal-900": "border-teal-900",
  "border-orange-50": "border-orange-50",
  "border-orange-100": "border-orange-100",
  "border-orange-200": "border-orange-200",
  "border-orange-300": "border-orange-300",
  "border-orange-400": "border-orange-400",
  "border-orange-500": "border-orange-500",
  "border-orange-600": "border-orange-600",
  "border-orange-700": "border-orange-700",
  "border-orange-800": "border-orange-800",
  "border-orange-900": "border-orange-900",
  "border-lime-50": "border-lime-50",
  "border-lime-100": "border-lime-100",
  "border-lime-200": "border-lime-200",
  "border-lime-300": "border-lime-300",
  "border-lime-400": "border-lime-400",
  "border-lime-500": "border-lime-500",
  "border-lime-600": "border-lime-600",
  "border-lime-700": "border-lime-700",
  "border-lime-800": "border-lime-800",
  "border-lime-900": "border-lime-900",
  "border-emerald-50": "border-emerald-50",
  "border-emerald-100": "border-emerald-100",
  "border-emerald-200": "border-emerald-200",
  "border-emerald-300": "border-emerald-300",
  "border-emerald-400": "border-emerald-400",
  "border-emerald-500": "border-emerald-500",
  "border-emerald-600": "border-emerald-600",
  "border-emerald-700": "border-emerald-700",
  "border-emerald-800": "border-emerald-800",
  "border-emerald-900": "border-emerald-900",
  "border-fuchsia-50": "border-fuchsia-50",
  "border-fuchsia-100": "border-fuchsia-100",
  "border-fuchsia-200": "border-fuchsia-200",
  "border-fuchsia-300": "border-fuchsia-300",
  "border-fuchsia-400": "border-fuchsia-400",
  "border-fuchsia-500": "border-fuchsia-500",
  "border-fuchsia-600": "border-fuchsia-600",
  "border-fuchsia-700": "border-fuchsia-700",
  "border-fuchsia-800": "border-fuchsia-800",
  "border-fuchsia-900": "border-fuchsia-900",
  "border-violet-50": "border-violet-50",
  "border-violet-100": "border-violet-100",
  "border-violet-200": "border-violet-200",
  "border-violet-300": "border-violet-300",
  "border-violet-400": "border-violet-400",
  "border-violet-500": "border-violet-500",
  "border-violet-600": "border-violet-600",
  "border-violet-700": "border-violet-700",
  "border-violet-800": "border-violet-800",
  "border-violet-900": "border-violet-900",
  "border-amber-50": "border-amber-50",
  "border-amber-100": "border-amber-100",
  "border-amber-200": "border-amber-200",
  "border-amber-300": "border-amber-300",
  "border-amber-400": "border-amber-400",
  "border-amber-500": "border-amber-500",
  "border-amber-600": "border-amber-600",
  "border-amber-700": "border-amber-700",
  "border-amber-800": "border-amber-800",
  "border-amber-900": "border-amber-900",
  "border-lightBlue-50": "border-lightBlue-50",
  "border-lightBlue-100": "border-lightBlue-100",
  "border-lightBlue-200": "border-lightBlue-200",
  "border-lightBlue-300": "border-lightBlue-300",
  "border-lightBlue-400": "border-lightBlue-400",
  "border-lightBlue-500": "border-lightBlue-500",
  "border-lightBlue-600": "border-lightBlue-600",
  "border-lightBlue-700": "border-lightBlue-700",
  "border-lightBlue-800": "border-lightBlue-800",
  "border-lightBlue-900": "border-lightBlue-900",
  "border-lightGreen-50": "border-lightGreen-50",
  "border-lightGreen-100": "border-lightGreen-100",
  "border-lightGreen-200": "border-lightGreen-200",
  "border-lightGreen-300": "border-lightGreen-300",
  "border-lightGreen-400": "border-lightGreen-400",
  "border-lightGreen-500": "border-lightGreen-500",
  "border-lightGreen-600": "border-lightGreen-600",
  "border-lightGreen-700": "border-lightGreen-700",
  "border-lightGreen-800": "border-lightGreen-800",
  "border-lightGreen-900": "border-lightGreen-900",
  "border-lightGray-50": "border-lightGray-50",
  "border-lightGray-100": "border-lightGray-100",
  "border-lightGray-200": "border-lightGray-200",
  "border-lightGray-300": "border-lightGray-300",
  "border-lightGray-400": "border-lightGray-400",
  "border-lightGray-500": "border-lightGray-500",
  "border-lightGray-600": "border-lightGray-600",
  "border-lightGray-700": "border-lightGray-700",
  "border-lightGray-800": "border-lightGray-800",
  "border-lightGray-900": "border-lightGray-900",
  "border-coolGray-50": "border-coolGray-50",
  "border-coolGray-100": "border-coolGray-100",
  "border-coolGray-200": "border-coolGray-200",
  "border-coolGray-300": "border-coolGray-300",
  "border-coolGray-400": "border-coolGray-400",
  "border-coolGray-500": "border-coolGray-500",
  "border-coolGray-600": "border-coolGray-600",
  "border-coolGray-700": "border-coolGray-700",
  "border-coolGray-800": "border-coolGray-800",
  "border-coolGray-900": "border-coolGray-900",
  "border-trueGray-50": "border-trueGray-50",
  "border-trueGray-100": "border-trueGray-100",
  "border-trueGray-200": "border-trueGray-200",
  "border-trueGray-300": "border-trueGray-300",
  "border-trueGray-400": "border-trueGray-400",
  "border-trueGray-500": "border-trueGray-500",
  "border-trueGray-600": "border-trueGray-600",
  "border-trueGray-700": "border-trueGray-700",
  "border-trueGray-800": "border-trueGray-800",
  "border-trueGray-900": "border-trueGray-900",
  "border-warmGray-50": "border-warmGray-50",
  "border-warmGray-100": "border-warmGray-100",
  "border-warmGray-200": "border-warmGray-200",
  "border-warmGray-300": "border-warmGray-300",
  "border-warmGray-400": "border-warmGray-400",
  "border-warmGray-500": "border-warmGray-500",
  "border-warmGray-600": "border-warmGray-600",
  "border-warmGray-700": "border-warmGray-700",
  "border-warmGray-800": "border-warmGray-800",
  "border-warmGray-900": "border-warmGray-900",
  "border-sky-50": "border-sky-50",
  "border-sky-100": "border-sky-100",
  "border-sky-200": "border-sky-200",
  "border-sky-300": "border-sky-300",
  "border-sky-400": "border-sky-400",
  "border-sky-500": "border-sky-500",
  "border-sky-600": "border-sky-600",
  "border-sky-700": "border-sky-700",
  "border-sky-800": "border-sky-800",
  "border-sky-900": "border-sky-900",
};

export const textColor: colorEntry = {
  "text-gray-50": "text-gray-50",
  "text-gray-100": "text-gray-100",
  "text-gray-200": "text-gray-200",
  "text-gray-300": "text-gray-300",
  "text-gray-400": "text-gray-400",
  "text-gray-500": "text-gray-500",
  "text-gray-600": "text-gray-600",
  "text-gray-700": "text-gray-700",
  "text-gray-800": "text-gray-800",
  "text-gray-900": "text-gray-900",
  "text-red-50": "text-red-50",
  "text-red-100": "text-red-100",
  "text-red-200": "text-red-200",
  "text-red-300": "text-red-300",
  "text-red-400": "text-red-400",
  "text-red-500": "text-red-500",
  "text-red-600": "text-red-600",
  "text-red-700": "text-red-700",
  "text-red-800": "text-red-800",
  "text-red-900": "text-red-900",
  "text-yellow-50": "text-yellow-50",
  "text-yellow-100": "text-yellow-100",
  "text-yellow-200": "text-yellow-200",
  "text-yellow-300": "text-yellow-300",
  "text-yellow-400": "text-yellow-400",
  "text-yellow-500": "text-yellow-500",
  "text-yellow-600": "text-yellow-600",
  "text-yellow-700": "text-yellow-700",
  "text-yellow-800": "text-yellow-800",
  "text-yellow-900": "text-yellow-900",
  "text-green-50": "text-green-50",
  "text-green-100": "text-green-100",
  "text-green-200": "text-green-200",
  "text-green-300": "text-green-300",
  "text-green-400": "text-green-400",
  "text-green-500": "text-green-500",
  "text-green-600": "text-green-600",
  "text-green-700": "text-green-700",
  "text-green-800": "text-green-800",
  "text-green-900": "text-green-900",
  "text-blue-50": "text-blue-50",
  "text-blue-100": "text-blue-100",
  "text-blue-200": "text-blue-200",
  "text-blue-300": "text-blue-300",
  "text-blue-400": "text-blue-400",
  "text-blue-500": "text-blue-500",
  "text-blue-600": "text-blue-600",
  "text-blue-700": "text-blue-700",
  "text-blue-800": "text-blue-800",
  "text-blue-900": "text-blue-900",
  "text-indigo-50": "text-indigo-50",
  "text-indigo-100": "text-indigo-100",
  "text-indigo-200": "text-indigo-200",
  "text-indigo-300": "text-indigo-300",
  "text-indigo-400": "text-indigo-400",
  "text-indigo-500": "text-indigo-500",
  "text-indigo-600": "text-indigo-600",
  "text-indigo-700": "text-indigo-700",
  "text-indigo-800": "text-indigo-800",
  "text-indigo-900": "text-indigo-900",
  "text-purple-50": "text-purple-50",
  "text-purple-100": "text-purple-100",
  "text-purple-200": "text-purple-200",
  "text-purple-300": "text-purple-300",
  "text-purple-400": "text-purple-400",
  "text-purple-500": "text-purple-500",
  "text-purple-600": "text-purple-600",
  "text-purple-700": "text-purple-700",
  "text-purple-800": "text-purple-800",
  "text-purple-900": "text-purple-900",
  "text-pink-50": "text-pink-50",
  "text-pink-100": "text-pink-100",
  "text-pink-200": "text-pink-200",
  "text-pink-300": "text-pink-300",
  "text-pink-400": "text-pink-400",
  "text-pink-500": "text-pink-500",
  "text-pink-600": "text-pink-600",
  "text-pink-700": "text-pink-700",
  "text-pink-800": "text-pink-800",
  "text-pink-900": "text-pink-900",
  "text-rose-50": "text-rose-50",
  "text-rose-100": "text-rose-100",
  "text-rose-200": "text-rose-200",
  "text-rose-300": "text-rose-300",
  "text-rose-400": "text-rose-400",
  "text-rose-500": "text-rose-500",
  "text-rose-600": "text-rose-600",
  "text-rose-700": "text-rose-700",
  "text-rose-800": "text-rose-800",
  "text-rose-900": "text-rose-900",
  "text-cyan-50": "text-cyan-50",
  "text-cyan-100": "text-cyan-100",
  "text-cyan-200": "text-cyan-200",
  "text-cyan-300": "text-cyan-300",
  "text-cyan-400": "text-cyan-400",
  "text-cyan-500": "text-cyan-500",
  "text-cyan-600": "text-cyan-600",
  "text-cyan-700": "text-cyan-700",
  "text-cyan-800": "text-cyan-800",
  "text-cyan-900": "text-cyan-900",
  "text-teal-50": "text-teal-50",
  "text-teal-100": "text-teal-100",
  "text-teal-200": "text-teal-200",
  "text-teal-300": "text-teal-300",
  "text-teal-400": "text-teal-400",
  "text-teal-500": "text-teal-500",
  "text-teal-600": "text-teal-600",
  "text-teal-700": "text-teal-700",
  "text-teal-800": "text-teal-800",
  "text-teal-900": "text-teal-900",
  "text-orange-50": "text-orange-50",
  "text-orange-100": "text-orange-100",
  "text-orange-200": "text-orange-200",
  "text-orange-300": "text-orange-300",
  "text-orange-400": "text-orange-400",
  "text-orange-500": "text-orange-500",
  "text-orange-600": "text-orange-600",
  "text-orange-700": "text-orange-700",
  "text-orange-800": "text-orange-800",
  "text-orange-900": "text-orange-900",
  "text-lime-50": "text-lime-50",
  "text-lime-100": "text-lime-100",
  "text-lime-200": "text-lime-200",
  "text-lime-300": "text-lime-300",
  "text-lime-400": "text-lime-400",
  "text-lime-500": "text-lime-500",
  "text-lime-600": "text-lime-600",
  "text-lime-700": "text-lime-700",
  "text-lime-800": "text-lime-800",
  "text-lime-900": "text-lime-900",
  "text-emerald-50": "text-emerald-50",
  "text-emerald-100": "text-emerald-100",
  "text-emerald-200": "text-emerald-200",
  "text-emerald-300": "text-emerald-300",
  "text-emerald-400": "text-emerald-400",
  "text-emerald-500": "text-emerald-500",
  "text-emerald-600": "text-emerald-600",
  "text-emerald-700": "text-emerald-700",
  "text-emerald-800": "text-emerald-800",
  "text-emerald-900": "text-emerald-900",
  "text-fuchsia-50": "text-fuchsia-50",
  "text-fuchsia-100": "text-fuchsia-100",
  "text-fuchsia-200": "text-fuchsia-200",
  "text-fuchsia-300": "text-fuchsia-300",
  "text-fuchsia-400": "text-fuchsia-400",
  "text-fuchsia-500": "text-fuchsia-500",
  "text-fuchsia-600": "text-fuchsia-600",
  "text-fuchsia-700": "text-fuchsia-700",
  "text-fuchsia-800": "text-fuchsia-800",
  "text-fuchsia-900": "text-fuchsia-900",
  "text-violet-50": "text-violet-50",
  "text-violet-100": "text-violet-100",
  "text-violet-200": "text-violet-200",
  "text-violet-300": "text-violet-300",
  "text-violet-400": "text-violet-400",
  "text-violet-500": "text-violet-500",
  "text-violet-600": "text-violet-600",
  "text-violet-700": "text-violet-700",
  "text-violet-800": "text-violet-800",
  "text-violet-900": "text-violet-900",
  "text-amber-50": "text-amber-50",
  "text-amber-100": "text-amber-100",
  "text-amber-200": "text-amber-200",
  "text-amber-300": "text-amber-300",
  "text-amber-400": "text-amber-400",
  "text-amber-500": "text-amber-500",
  "text-amber-600": "text-amber-600",
  "text-amber-700": "text-amber-700",
  "text-amber-800": "text-amber-800",
  "text-amber-900": "text-amber-900",
  "text-lightBlue-50": "text-lightBlue-50",
  "text-lightBlue-100": "text-lightBlue-100",
  "text-lightBlue-200": "text-lightBlue-200",
  "text-lightBlue-300": "text-lightBlue-300",
  "text-lightBlue-400": "text-lightBlue-400",
  "text-lightBlue-500": "text-lightBlue-500",
  "text-lightBlue-600": "text-lightBlue-600",
  "text-lightBlue-700": "text-lightBlue-700",
  "text-lightBlue-800": "text-lightBlue-800",
  "text-lightBlue-900": "text-lightBlue-900",
  "text-lightGreen-50": "text-lightGreen-50",
  "text-lightGreen-100": "text-lightGreen-100",
  "text-lightGreen-200": "text-lightGreen-200",
  "text-lightGreen-300": "text-lightGreen-300",
  "text-lightGreen-400": "text-lightGreen-400",
  "text-lightGreen-500": "text-lightGreen-500",
  "text-lightGreen-600": "text-lightGreen-600",
  "text-lightGreen-700": "text-lightGreen-700",
  "text-lightGreen-800": "text-lightGreen-800",
  "text-lightGreen-900": "text-lightGreen-900",
  "text-lightGray-50": "text-lightGray-50",
  "text-lightGray-100": "text-lightGray-100",
  "text-lightGray-200": "text-lightGray-200",
  "text-lightGray-300": "text-lightGray-300",
  "text-lightGray-400": "text-lightGray-400",
  "text-lightGray-500": "text-lightGray-500",
  "text-lightGray-600": "text-lightGray-600",
  "text-lightGray-700": "text-lightGray-700",
  "text-lightGray-800": "text-lightGray-800",
  "text-lightGray-900": "text-lightGray-900",
  "text-coolGray-50": "text-coolGray-50",
  "text-coolGray-100": "text-coolGray-100",
  "text-coolGray-200": "text-coolGray-200",
  "text-coolGray-300": "text-coolGray-300",
  "text-coolGray-400": "text-coolGray-400",
  "text-coolGray-500": "text-coolGray-500",
  "text-coolGray-600": "text-coolGray-600",
  "text-coolGray-700": "text-coolGray-700",
  "text-coolGray-800": "text-coolGray-800",
  "text-coolGray-900": "text-coolGray-900",
  "text-trueGray-50": "text-trueGray-50",
  "text-trueGray-100": "text-trueGray-100",
  "text-trueGray-200": "text-trueGray-200",
  "text-trueGray-300": "text-trueGray-300",
  "text-trueGray-400": "text-trueGray-400",
  "text-trueGray-500": "text-trueGray-500",
  "text-trueGray-600": "text-trueGray-600",
  "text-trueGray-700": "text-trueGray-700",
  "text-trueGray-800": "text-trueGray-800",
  "text-trueGray-900": "text-trueGray-900",
  "text-warmGray-50": "text-warmGray-50",
  "text-warmGray-100": "text-warmGray-100",
  "text-warmGray-200": "text-warmGray-200",
  "text-warmGray-300": "text-warmGray-300",
  "text-warmGray-400": "text-warmGray-400",
  "text-warmGray-500": "text-warmGray-500",
  "text-warmGray-600": "text-warmGray-600",
  "text-warmGray-700": "text-warmGray-700",
  "text-warmGray-800": "text-warmGray-800",
  "text-warmGray-900": "text-warmGray-900",
  "text-sky-50": "text-sky-50",
  "text-sky-100": "text-sky-100",
  "text-sky-200": "text-sky-200",
  "text-sky-300": "text-sky-300",
  "text-sky-400": "text-sky-400",
  "text-sky-500": "text-sky-500",
  "text-sky-600": "text-sky-600",
  "text-sky-700": "text-sky-700",
  "text-sky-800": "text-sky-800",
  "text-sky-900": "text-sky-900",
  "text-white": "text-white",
  "text-black": "text-black",
};
