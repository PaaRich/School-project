/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "engineering-students": "url('/public/engineering_student.jpg')",
        university: "url('/public/university_building.jpg')",
      },
    },
  },
  plugins: [],
};
