import Theme from "./theme-interface";

export const light: Theme = {
  bg: {
    default: "#FFFEF2",
    divider: "#F6F7F8",
    border: "#EBECED",
  },
  primary: {
    default: "#B3005C",
    dark: "#661F43"
  },
  secondary: {
    default: "#3F88C5",
  },
  text: {
    default: "#24292E",
    secondary: "#384047",
    placeholder: "#7C8894",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};
