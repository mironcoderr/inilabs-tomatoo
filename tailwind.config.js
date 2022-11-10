/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{html,js,jsx}',
        './index.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                "inter": ["Inter", "sans-serif"],
                "rubik": ["Rubik", "sans-serif"],
				"material": ["'Material Icons'"],
            },
            colors: {
                "heading": "#1F1F39",
                "paragraph": "#6E7191",
                "placeholder": "#A0A3BD",
                "primary": {
                    1: "#FF006B",
                    2: "#FF3C8E",
                    3: "#FF63A4",
                    4: "#FF80B5",
                    5: "#FF8DBD",
                    6: "#FFB0D1",
                    7: "#FFD7E8",
                },
                "gray": {
                    1: "#D9DBE9",
                    2: "#EFF0F6",
                    3: "#F7F7FC",
                    4: "#FCFCFC",
                },
                "highlight": {
                    "default": "#008BBA",
                    "light": "#E2F8FF",
                    "dark": "#00749B",
                },
                "warning": {
                    "default": "#F6A609",
                    "light": "#FFBC1F",
                    "dark": "#E89806",
                },
                "positive": {
                    "default": "#2AC769",
                    "light": "#40DD7F",
                    "dark": "#1AB759",
                },
                "negative": {
                    "default": "#FB4E4E",
                    "light": "#FF6262",
                    "dark": "#E93C3C",
                },
            },
        },
    },
    plugins: [],
}