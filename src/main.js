import { createEodash, store } from "@eodash/eodash";
const { currentUrl } = store.states;

export default createEodash({
  id: "template-id",
  stacEndpoint:
    "https://ramintagmx.github.io/eodash/template_catalog/catalog.json",
  brand: {
    name: "Dashboard",
    font: {
      family: "Poppins",
      link: new URL("./assets/poppins.css", import.meta.url).href,
    },
    logo: "/logo.png",
    errorMessage:
      "something went wrong, please contact demo@email.com if the issue persists",
    footerText: "eodash instance template",
    theme: {
      colors: {
        primary: "#004170",
        secondary: "#004170",
        background: "#fff",
        surface: "#fff",
      },
    },
  },
  template: {
    gap: 0,
    background: {
      id: Symbol(),
      type: "internal",
      widget: {
        name: "EodashMap",
        properties: {
          // enableCompare: true,
        },
      },
    },
    widgets: [
      {
        id: Symbol(),
        type: "internal",
        title: "Indicators",
        layout: { x: 0, y: 0, w: 3, h: 8 },
        widget: {
          name: "EodashItemFilter",
          properties: {
            // enableCompare: true,
            aggregateResults: "collection_group",
          },
        },
      },
      {
        id: Symbol(),
        type: "internal",
        title: "Layer Control",
        layout: { x: 0, y: 8, w: 3, h: 4 },
        widget: {
          name: "EodashLayerControl",
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "Information",
                title: "Information",
                layout: { x: 9, y: 0, w: 3, h: 12 },
                type: "web-component",
                widget: {
                  link: async () => await import("@eox/stacinfo"),
                  properties: {
                    for: currentUrl,
                    allowHtml: "true",
                    styleOverride: `.single-property {columns: 1!important;}
                      h1 {margin:0px!important;font-size:16px!important;}
                      header h1:after {
                        content:' ';
                        display:block;
                        border:1px solid #d0d0d0;
                      }
                      h2 {font-size:15px}
                      h3 {font-size:14px}
                      summary {cursor: pointer;}
                      #properties li > .value { font-weight: normal !important;}
                      main {padding-bottom: 10px;}
                      .footer-container {line-height:1;}
                      .footer-container button {margin-top: -10px;}
                      .footer-container small {font-size:10px;line-height:1;}`,
                    header: '["title"]',
                    tags: '["themes"]',
                    subheader: "[]",
                    properties: '["satellite","sensor","agency","extent"]',
                    featured: '["description","providers","assets","links"]',
                    footer: '["sci:citation"]',
                  },
                  tagName: "eox-stacinfo",
                },
              }
            : null;
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "Datepicker",
                type: "internal",
                layout: { x: 5, y: 10, w: 1, h: 1 },
                title: "Datepicker",
                widget: {
                  name: "EodashDatePicker",
                },
              }
            : null;
        },
      },
      {
        defineWidget: (selected) => {
          return selected
            ? {
                id: "Buttons",
                layout: { x: 8, y: 0, w: 1, h: 1 },
                title: "Buttons",
                type: "internal",
                widget: {
                  name: "EodashMapBtns",
                },
              }
            : null;
        },
      },
    ],
  },
});
