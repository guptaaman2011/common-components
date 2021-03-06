import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

import Compare from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

const properties = {
  ian: { title: "IAN", type: "string" },
  theme: { title: "Theme", type: "string" },
  description: { title: "Description", type: "string" },
  specification: { title: "Specification", type: "string" },
  color: { title: "Color", type: "string" },
  material: { title: "Material", type: "string" },
  "unit weight": { title: "Unit Weight", type: "string" },
  dimension: { title: "Dimension", type: "string" },
  "primary buyer": { title: "Primary Buyer", type: "string" },
  "product creator": { title: "Product Creator", type: "string" },
  "number of styles": {title: "Number of Styles", type:"string"},
  "style description" : { title: "Description", type: "string" },
};

const productDetailsData = {
  IAN_1: {
    "product name": "LED Table Lamp, 2 assorted",
    "product identifier": "HGEE2010102",
    "ian": "HGEE2010102",
    "product thumbnail": "data:image/png;base64,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",
    "primary buyer": "Joe Johnston",
    "product creator": "Jan Schulmann",
    material: "ABS, Mild Steel, Glass",
    "unit weight": "640.00 g",
    dimension: "145 x 145 x 350 mm",
    theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
    description: "Colourful Table Lamp for Kids",
    specification:
      "- 15 ?? LEDs, approx.4.5W - Lumen : 350 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base - Cord Length : >1.6 m",
      "number of styles":2,
      "style description": "Style B   Pink/white"
  },
  IAN_2: {
    "product name": "LED Table Lamp, 2 assorted",
    "product identifier": "HGEE2010097",
    "ian": "HGEE2010097",
    "primary buyer": "Jim Anderson",
    "product creator": "Bianca Ng",
    material: "ABS, Mild Steel",
    "product thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAACQCAYAAABap7TNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABrISURBVHgB7V15cFVVmv9CyJ4ASchCCJIAJiwB0wFakInYsi86hXTTjdrY2o7jPs5YPeUfVo1lV1la6pRloVX+oTPqOLijuKKIgmCjgjgKIiiGRfZFICF74tzf0e/1l+O9b8vjvXMf51d16953333v3fud8/vWc85LoQjw448/1jq7AWRh4QOkpKR8EPa1FAEcIjQ4uwqysDAfuxwiVIZ7cR+ysLCwRLCIHI5nQMmGvnQWghuyra2NTp06RY2NjZSZmUllZWXwK8miJyAv3iS6u7upb9+fupDf5XbWEIEb8dixY7R582b6+OOPaefOndTS0qLO9+nTh6699lq66KKL1PHZDJYV9l1dXarDA+js6Pjc6bFvbm6m7Oxs8juSngjcqDt27KA33niDXn31VUWGjIwMysnJoby8vEBDvvjii3TeeedRQUHBWWsZWF7o4J2dnUoppKWlBeSB93HMr1NTU6mjo6PHNX5E0hIBDQZNtmrVKnr88cfp008/VefQcNBqaGC4RmhAnMvKylIEefrpp+nWW28964jA8jp+/LhyFSGj9PR05TJCVpARgGukRcA1ra2tPSyFH5F0ROAGXbZsGT322GO0e/fuHloM78HcQ4uhcUEGbnTsN2zYQPX19VRXV3dWkIF9/wMHDtDhw4eVTCALAASAVcA5dhdZvkwMJgPkCNL4VWZJRQQ0Gvz/u+++m7788suAmUfjSL+XyYDr29vblVWAVoOLhGthFWpra1XjJysZWB6wAN98842SBRMAstE3yAKbHjhDPqxQJEH8Bt8TgbX9nj176IEHHqB3331XdW40GhpGz3bwa7yHxodlYBcJHQF7aEfEE5dccgklI/D8IP727dvp0KFDyhLiuVlByE1aBCYCu0fSKsAaSGXiN/ieCGgUdNr77ruPjh49GmgkPaiThJBWQbpI6AxobHSM559/ns4991waOXJkUlkFPPvevXuV5QRAfsiC5YHn14kAefB7kBW7mNiz1cR5yA9yRCLCbzLzdZ4QjXr//ffTHXfcoQJdIJwGcLMKsCK84T2cAxmwTxbguRoaGmjdunUBV4atJh/LTZKB06jS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",
    "unit weight": "730.00 g",
    dimension: "145 x 145 x 400 mm",
    theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
    theme: "29.1 - Living (Good)",
    description: "Entry level table lamp with integrated LED module",
    specification:
      "- 24 ?? LEDs, approx.4.5W - Lumen : 250 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base - Cord Length : >1.6 m",
      "number of styles":2,
      "style description": "Style A  Black"
    }
};

const comparisonPanelProps = {
  productDetails: {
    title: "Product Details",
    options: [
      "ian",
      "theme",
      "description",
      "specification",
      "number of styles"
    ]
  },
  styleDetails: {
    title: "Style Details",
    options: [
      "style description",
      "color",
      "material",
      "unit weight",
      "dimension"
    ]
  },
  productInfo: {
    title: "Product Info",
    options: [
      "primary buyer",
      "product creator"
    ]
  }
};

const savedComparisons = [
  {
    "templateId": "3122f458-3f86-4899-b366-cc166d4ab28e",
    "name": "new test for updated new comparison",
    "selectedItems": [
      "ian",
      "theme"
    ],
    "selectedProperties": {
      "products": [],
      "styles": []
    },
    "addedBy": {
      "id": "puneet@dummy",
      "name": "Puneet"
    },
    "addedAt": "Tue, 15 Sep 2020 06:14:00 GMT",
    "id": "7390e144-b062-469c-9d78-cd829e63a41b",
    "_rid": "CEolAKHoAUWHhB4AAAAAAA==",
    "_self": "dbs/CEolAA==/colls/CEolAKHoAUU=/docs/CEolAKHoAUWHhB4AAAAAAA==/",
    "_etag": "\"2f009dc4-0000-0700-0000-5f62f5a80000\"",
    "_attachments": "attachments/",
    "_ts": 1600320936
  },
  {
    "templateId": "3122f458-3f86-4899-b366-cc166d4ab28e",
    "name": "test comparison",
    "selectedItems": [
      "ian",
      "theme"
    ],
    "selectedProperties": {
      "products": [],
      "styles": []
    },
    "addedBy": {
      "id": "puneet@dummy",
      "name": "Puneet"
    },
    "addedAt": "Tue, 15 Sep 2020 06:28:17 GMT",
    "id": "6946467d-f1f9-4dcd-97b8-5827a9bae618",
    "_rid": "CEolAKHoAUWIhB4AAAAAAA==",
    "_self": "dbs/CEolAA==/colls/CEolAKHoAUU=/docs/CEolAKHoAUWIhB4AAAAAAA==/",
    "_etag": "\"1800c752-0000-0700-0000-5f605f020000\"",
    "_attachments": "attachments/",
    "_ts": 1600151298
  },
  {
    "templateId": "3122f458-3f86-4899-b366-cc166d4ab28e",
    "name": "test comparison",
    "selectedItems": [
      "ian",
      "theme"
    ],
    "selectedProperties": {
      "products": [],
      "styles": []
    },
    "addedBy": {
      "id": "rishabh@dummy",
      "name": "Rishabh"
    },
    "addedAt": "Wed, 16 Sep 2020 08:51:08 GMT",
    "id": "7e5067f7-2578-400b-862c-017cc02177bb",
    "_rid": "CEolAKHoAUWphB4AAAAAAA==",
    "_self": "dbs/CEolAA==/colls/CEolAKHoAUU=/docs/CEolAKHoAUWphB4AAAAAAA==/",
    "_etag": "\"1f003b9c-0000-0700-0000-5f61d1fc0000\"",
    "_attachments": "attachments/",
    "_ts": 1600246268
  },
  {
    "templateId": "3122f458-3f86-4899-b366-cc166d4ab28e",
    "name": "test comparison",
    "selectedItems": [
      "ian",
      "theme"
    ],
    "selectedProperties": {
      "products": [
        "ian",
        "theme"
      ],
      "styles": []
    },
    "addedBy": {
      "id": "rishabh@dummy",
      "name": "Rishabh"
    },
    "addedAt": "Wed, 16 Sep 2020 08:52:24 GMT",
    "id": "d74580e3-5baf-4392-96ac-9c6bcf5f9399",
    "_rid": "CEolAKHoAUWqhB4AAAAAAA==",
    "_self": "dbs/CEolAA==/colls/CEolAKHoAUU=/docs/CEolAKHoAUWqhB4AAAAAAA==/",
    "_etag": "\"1f0076a1-0000-0700-0000-5f61d2480000\"",
    "_attachments": "attachments/",
    "_ts": 1600246344
  },
  {
    "templateId": "3122f458-3f86-4899-b366-cc166d4ab28e",
    "name": "test comparison",
    "selectedItems": [
      "ian",
      "theme"
    ],
    "selectedProperties": {
      "products": [
        "ian",
        "theme"
      ],
      "styles": []
    },
    "addedBy": {
      "id": "rishabh@dummy",
      "name": "Rishabh"
    },
    "addedAt": "Wed, 16 Sep 2020 08:58:42 GMT",
    "id": "d555ce48-3803-462d-8168-490a0b486ab6",
    "_rid": "CEolAKHoAUWshB4AAAAAAA==",
    "_self": "dbs/CEolAA==/colls/CEolAKHoAUU=/docs/CEolAKHoAUWshB4AAAAAAA==/",
    "_etag": "\"1f0034bc-0000-0700-0000-5f61d3c20000\"",
    "_attachments": "attachments/",
    "_ts": 1600246722
  },
  {
    "templateId": "3122f458-3f86-4899-b366-cc166d4ab28e",
    "name": "test comparison",
    "selectedItems": [
      "ian",
      "theme"
    ],
    "selectedProperties": {
      "products": [
        "ian",
        "theme"
      ],
      "styles": []
    },
    "addedBy": {
      "id": "rishabh@dummy",
      "name": "Rishabh"
    },
    "addedAt": "Wed, 16 Sep 2020 08:59:18 GMT",
    "id": "e03a6792-df15-49fc-9304-002875256d50",
    "_rid": "CEolAKHoAUWthB4AAAAAAA==",
    "_self": "dbs/CEolAA==/colls/CEolAKHoAUU=/docs/CEolAKHoAUWthB4AAAAAAA==/",
    "_etag": "\"1f0008be-0000-0700-0000-5f61d3e60000\"",
    "_attachments": "attachments/",
    "_ts": 1600246758
  }
];

const savedComparisonKeys = Object.keys(savedComparisons);

const selectedProperties = {
  "productDetails": ["ian", "theme", "description", "specification", "number of styles"],
  "productInfo": ["primary buyer", "product creator"],
  "styleDetails": ["style description", "material", "dimension"]
};
const propertiesUISchema={
  "ian": {
    "type": "string",
    "uiWidget": "textWidget"
  },
  "product name": {
    "type": "string",
    "uiWidget": "textWidget"
  },
  "product thumbnail": {
    "type": "string",
    "uiWidget": "imageWidget"
  }
};

let currentComparisonId = '';
let name = 'Products to compare';

const itemSelectorProp = {
  title:'IAN',
  placeholder: 'Type IAN or Product No'
}
const onHighlightChange = () => { console.log('onHighlightChange clicked') };
const highlightSelected = false;

const saveCurrentComparisonId = (id) => {
  const currentComparisonName = savedComparisonKeys[id].name;
  currentComparisonId = id;
  name = currentComparisonName;
}


const productDetailsData2 = {
  ...productDetailsData,
  IAN_5: {
    "product name": "LED Table Lamp, 2 assorted",
    "product identifier": "HGXX567890",
    "ian": "HGEE2010102",
    "product thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAACQCAYAAABap7TNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB4xSURBVHgB7V1ZkxvXdT6NHRjMvg8XkUOKJk3RdiSVSEq26EWxKymXq/KYh7iUys/xk5OX+DX+AbbzkAcrcaUqrqTikk1HliVSIiXuHM4MZx/s6M757u3buOhpAAMOMN0A7ye2etBoNNDf2c+93W1RF3Ac59tkYDAgsCzrPw+9L3UBNgSHDAwGBGwIh9bvGBkYGFCCDALRLvh14WgMAhBFbo0huNCFY9s21et1qlSrVClXqFavUcyKUS6XpVQqRfF4XOxnDOJwOMBtrSa5rTC3tbrgU3Ebi8kk5bi5fekNQQkJAiqXy1TY26Pizg6VC0Wq8et6pUqlaoXur6/S/OISXbx4kUZHxyiZTIjPGmNoDcUtnEqRudzeLdKznQJt7ldpv8zGwAbhlAvkbD6kc2dO0/LyMo2NjXmO5jjxUhqC56F4XSyVaW9rk0qbW2Tz3w57f8dmBef3krxLghU9lUzRSN2hJ0+e0KlTp6hUKtHs7CwbQ5IMmqG4xbrAzuTp1j7d3yzTVqlO/I+YWuY2xusUCYbTWXq2fZ/yz57RzMwMVdnpTE/PCGM4TifzUhmCElKVw3JhZ5f2NzaourtHDjwT/rMbQtQFiv3v3rtHV9/7Hm1vbwsDgJAgOGUML3tkUJxVOIKustd/8HyfnuxyelkHs8LniP9hZbv74u9SYZ8211fo7PXv0u7urojK2BfGkEgcnzG8FO3ThpAqtPP8ORWfb7L3L0nBaIvaV18jZbp19w6deu0yJTiHRZiHt0qn0zQ+Pi4iw3F7ryhBcVfiaHp/fZe+2Cix91eK7gilFgv2ZS4danBbq1XpyWd/or9+81VKxuS2RCIhuJ2cnGRjmBY1w4ty2037dGgNQf+pxWKRNp+uUJW9ucPFmePYQjKHMYLP7t+jU5cuksMCwWtwC+FA+TOZTE8ENniQCo713t4+3VrZoQfbNSrVHJH6OIpbcrnU/lbcwilV1u7TNy+dIMuuNXELYwC34BX8YvuLcPvSG4L6mYV9DrvPVqnC+b9Vrx9Q+iAjcI9Ae/sF2uV6YeaV0yJcQ1BqH11g2WyW5ubmRJH3ogIbLLCys7bvsAHcXdmiL7aqVLZjDc+vR1nyp5ny88X9HZqiPXpjeYHriH0RZRUUt0g5c7mc4HZ0dNR7rxt0YwhDVSNIwi3hbdaerFBhbY0SrMCA3cH76+stzlWTUxO0MDUloknQPupvGMkG1xpKcMMMnDPO9/NHq/TZ8woVbHTOoGsyQgRx7PUlSHaPnNI2/cVsiqbzc5xOtecW3INbpEporfYTQ2MIiryVJ49p+8lTStZtiuvhmXxRAAschp5CcRSw8zmauXCexw7qokgG4Fj8x1DOBkYHD6YENoz1gjrnLx8+pj+tFGnPTrLSJwI9v+MWBI72WeQdxb1dujidoLOnprk2wPhBzTs++PJHXAD873NUB7f9rsUG3hAUeXvc/3/0xZcUY2VOumTp3sV2I4NHttwovJjNSl/jcYHx88sU53WZlVvBT7wTUGDDS+L70VGanJzCXkNhDOocd7iz9sfPH9DDcoYcK+Vut70I0Ni38Vnb7cLZ9SrNZWz6xmVWZKoLxwEofnQno3+n2gYns8PjOtlsjpsTY9QvDEVEWFtdpS/+/AnNZLLitV/p9XEDcvNU/MOIsZNK0uipE5TJ592RzlqTkFrl/bqw8D6MYWtri0ZG8hwZ+hvGjwPq/B49fkr/ffsxlbNzQvnl4miK7zRo9f52xOjxQs6iKyfGaTybZH4qhFIgpjUdWvGqrxEV8JntbXCbE3VZP5zMwBqC5Ilbm7du0+6jJzQzMuJub/YogAXPZJEYJLN4cx2CYFJn2QBSnNdD+ZUBqEUJLPi7myONCvPIaSGwmZlZwkyBQY0K4vyYsw9//yF9uh0nJzfbbACuI1EG4G5xP1enM+MJunxijibYAKrMDZRZ5zZoUd+rr72pLuygkCIhMkxNTVE/MJCGoARy69YtWrlzl07x4Is/CuhVmhATBnY47clweB1bWKBsfkQoMIhuJZigbfpv0NdKYBDWxMRE34u7fgHng3O5efMmfbRWo9j4jEghVQTwzpuaDWCENenMVJYuL41TLp0UNZbqBh3GCIKM4WDE3RZjN4gKvcbARgQUUP/z29/SOxe/2hwBGnHa82IJjhajc7M0sTAvSISA/OG5k6CC4K8/YFhyZHQwawR5PphK8pT+63c3aeJr35ODYE4j5ZF7kGihcolLi/kkXVwco+W5CYrFYx63Ct3wqaAKZ1VE45iKW1MsuwBBIOfBgwf0nEeJEXaTiaSsfm14M3h5m1JjozS5uECj01OU5l4/Uh31WT/8xqBv07fr24JasRAWet7oHg0qKpUa3bv3JW3vFShbqVIcvKG5xtxWED0dTn0mMnR+cYJOTo9SLpMSM3P1rg/QzgA6RQUFf1SYnJzwZqf2GgMZEaBwJ0+epAuXLtFnqyu0MDFJeVbAzGieZuD5udWW8k2I85Oqr/3bDuPBlLdSwN/5/CgtLS3RIAOO5Ny5c7TKDYiNtduUmpijcfA6mqHTs1O0NM2pieBWjh90g3actjICxTNqg/n5eRMRdCiFfvfdd73rA7DAW+hTHfx5p//zfsNQ6PQ66BgjnH5dufLawI8jQOkwOPjee++JNBKLmlJysLgld93ZIFrVX0H76cCxp6amhXH2k9eBMwTV0UFUwNpf7Or5eZABHEZo+nf5jSpIUJgGcOHChb4UcccNy5KcYtFbnVi3Skv8nTo/x904Gn+xfPr0K7S8fLZtdO4FBlJySiAq51dC0oXmb8v5CfYP4gDdeit4yVdeeUUsgxwFdMRilsepWnQno9Cqy9PKGILQrj5ApD99+rRIgY+D24E0BCUU3Wt147k6odM+eB/zis6eXeawPTk0RgDAuBW3+Fs3BF1pgxxJt9E26BhAngc3X331VbE+Lm4H1hCwqPRIpUtBnkvBT7p/0fdpH8otOnHihPBU/RrlDAs4F90QggYZAWUcQdA7c0HR1/99OnB8XAG4wOM85gq1Q0AJDK3TlZUVcaWYbgiAHhWCwner9KiV4HDcUfZQJ9gApKcSW2nYoNdgarKb2tYq2irl75QatYoA4BEDZUiFcB1CGM5lYKs7GAIGWNRYAvJ05c30RY8QQcLqFB0AeP7FxSWa5jGJfhdt4cMS54tJhGtra8IgwG0r796KQ79xtHI+GHNBs0FegCO/PwwM5IAagAvoMbcHF8TAEHBh/ZkzZw4ocielbyVchcXFRfEduH52GCOADnnejuAWC84baxgEeFCDko19G59r51CCXsd5FHph/iSNjUfjgqaBMgQQqNIhTHkG4HUwvweRQXUY/MWd+qwukFbeCgs8IkaIMYjTr5HMKEFxAm4fPHjIDqYgXqNOALeYVYvBLJX7+zlpFQGCOMYYBbw/UqEocTswhgAS4Z3u37/vzecpFAoihG9ubgrDgNBAMhB0DXE7AakCEBPmUAO8XNcgk5jdee/ePW+uELjFXSVQJ4DX119/vall2orbVgvSVkQY1QmKGreRNwRF5Pr6uvD6SIcgJDXTE8JSRoD3MMKr32LFP5YQZACIAPBQ6F0Pfw3QgOIAERbOBA4GBoHIoDjFGnxju7rxlr8x0c4AkskUc5v15l9FldtIGwKIhIdaW1tnhd8REUGFakQCvIZwoPhou0Fg2Kb3u/XBt+b0yBKKn8lkj/X+OVGBTDMrtLq65nEJpVfcwijgIMAR2plwOEqZ1bQLQDUj9EiL99D9wTIokTWyhqDqARUFxC1Z2GupUA0P/s473xSR4c6dz4XgVJEHQalw7O95w2jU8rIpP6DqAfCGKCtuc8kORHELhUcXB6kQ3scsXzgjxa0yANXnV2kSFhgNIgBuhwkMEr+RNARlBBAO1vBQemr0rW99S9wnE0LB652dbSFEOWe95KVGeF8KJ+lNynuZUp9WwGWTW1uSWzgVcKv4+/73f8ADhkuCI8ymhZEgUsBwisWSN4gob7mS8ibmoQsEDCq3kbuvkUqHQL66VcqzZ8+EsDCt4Z133vFu+qT2B3BXZYR6eb+hpCcYCYtect0XAFdQdlzpBYcBxwJusZ6YmKQbN94V92nycwuDkaP4ceHt/d2eqCq/1cUPi1REULkmvBDWCNMwACxQ/hs3vs0evjmlUX9DQCokGxyEdDA2F73g1vYigWo7X79+/cC0BvU3ouqgXnp6WEROc9QNtVQ6hAXF2ltvXT1gBAbdATfUwoAZHAwGyWAEmDj4xhuvD8UU8qMgMmcP5VfXpKIo0yMB0qGX+Ua7R4Uag8EUa7RBFbeLC4t09epbZBChZ6ip9hvqAxTJEBRy+7ffftsYwRGgai4At2xX3GLk/Nr1a2K74TYihiCfVlMRCq/qAqRG11lQYc1GHCZUqzXBLRoQqvN27dq1oZtGfhSEbggqEqhp1egSwWvhwgw1BdjgxaDa0OigQflhBBgw+8bXvyEiguG2gUhEBHk1lLzHJQwBuHTpq0ZQPQA6oOr+oXAwGElfPrdsuPUhVENQLT0ICp4L3goCu3TpkmmFHhGqNoCDQaGsRo0vXzYOJggRSI1kWoRuBgwBQsKVSkZYR4e6pltxi3QI1xUYbg8i5IjQuC4AxTE8Fq6GMk+rPDrUHCAYA3gFv8vL516K6yteBCEbgowGGL6HsDCfZdDvFBcFqLQIXSGMzYBbpJ4LC/MmGrRAaIagd4uQw8JjYS4RZpUaYR0VjbtxKG7xYL5BvidrvxF6sQxjgLAwvwhXh5nQ3QtYTfO20DrF1GrjYFojVK1T89khKBjD9MwMGRwdqj6AkwG3SI+MIbRHqKmRLizUCdOTU0ZYPYDg1r0vLLhF+tnP548NAyJhCOrJlLmR4X4863HAG5txO0YokuW12CblbIdQDQGouc/YQiFn6oNeQToZ8Aonk3EfsmjQGqFoniqS1W0EYQyYXGfQW6iHJMqnfPb94sKBRogRodHvxmIG0XoLxa168Mew36XvqAjNEFATqxpB3V3OoDdQvr9xcy3DbSeEFxHs5nthmm5RD+EYbrtFeBEh1nwTLhR2Br2BrvjyFu+G204IxRAgJ/3OMGoqgMHRoWxAv9sfLtE0aI+QukYHH+1qhNUbKG5VSiSjbYUM2iMSjXv5dMwaHcP9w14K+KMtxhIM2iMyI1j6w7sNjgbHCX5YikFrRMYQTGfDIEyYOQ1DDHPD48Mj1JFlA4OoINSRZYN+ofnZcSYqdEbEUiMjsN6g9VNCDYIRsdTICKwXsKh5jMZEhM4IMSIYpe8XDLPdI0RDOPhACoNewZhCt4hURDCprEFYiFSxbAJDr3CQSBN12yMSqZF4ZQTVQwRFWxNu2yFiqZERVr9gHE17RCYitN5mcBT4HxVrEIxIRISGtzLCMggHkSiWjbfqD0w6dHhEwhCMwPqDxvUIZNABkYoIRmAGYSFixbJBf2A8TCdEbK6REZhBOIjY7FMTJQzCQSQuzDHFcn9h4mxnhP7oKH1tRNYfGDfTGaZ9amBAEXiGmg7TPu0PzIBlZ0QsNTI4KoKjq4m4nRCJiGBSo37DOJpOCP2JOQYGUUDEbudiDOOokM7F8NgtImMIJjr0BjLNNDdG6Bbm3qdDBsdEgxeCMYShw8EIYIJtZxhDGDLADPyKb7KjzgjdEExt0Fv4i2X1ZE2D9gh9GrYp5noLw+eLwaRGQwbj/V8MIRlCgNcy8usLTIQ4HKIzjmAsoSc4OJHR8HoYmNRoyGAU/8UQia5RYyGDIyI4FTLEdkLos09NDtt/GAfTGZG4HkHbQgZHh2Gxe4RiCCYG9BF4iiYZdItwIoIrKaRFprjrLXQ2DbeHR2QuzDFC6w38t4E3UywOB9M+HTKY7tuLIfS5Rs1RgQyOCBkRDJHdImI3ATYC7AeMg+mMSNwE2OSxvYOfR3MN8+EQqRrBGENvYe4bdXhEZoqFQW9hOnLdIcT2qdP2tUEPYajtiMhMsTCG0BugaeQfQzDcdkaoEcEIqX/QuTXXenRGpKZhG/QG/khrqO2MkAzBaZpiYYyhlwiaYmGTQXtE5vGyxnP1Bs0XOpn26WERiiGoaGDbtk9YJpvtBUyk7R6ht0/9HszMpT8a1NR2fbFtYwidEOoUCxURjNfqLfx8mhqhMyLTPjWG0DuotFN3NAbtEZohIFw3h2/jtXoBlQqZu4N0hwSFBvtAanQY79WTyzst1WQcvopE8dPMrXQyHbmlo8/GUN8/aHcnCc0Q4LX84btWqVLFKpJdr/FS54XfE+9j7ci/bdFykp+B2Bz3YhRxaxiS61issfDrGNbxOMW8JUbxREK834BUg2G4vQz40nkF1/vlGlVrNlV5e4XXNea2Zsv36rw/v3T3hYtqGI3l8hoTzsMipo/iFvPHG2L8RoK5TMYtXmJySch1oolaK/Iup++GoHshKHalUKBKschCqVIsl/OMAQJZuXWb0slk02fbKqYrHLEvqWcDOJ7wvK/W9nMPLPaHMcRTKUpmMrxOinUql6UUr/WHCkTVOHRuy7U6bReqtFko06hTY4WNe4ZQZafybx89EvvpZ9IpAujnHSSLoOdk43gxy6E0c5tLx2ksk6RMMkFj2SRN5JKU59dWm2OEhb4YghJQvVaj0s4uFXd2qLy3T/VKxasFrLFRSqTT4nUd3t+uCw8vvJJGuqNqB6XZ3qWIlivFhiibBUeN/R05QlHh7y9WygS3BkWJsTHS/h4l2MOl2CDUp2OJOCXTGUqyUeSnJik1MhKdm5E58NgOlas2Pd4s0OpuiTb2K1SqSg7xC6/MxCmVjFON+a/V6iK6kteUaIzWeOfjOoag+6ZajTzygDHohlgpM6/VImU4FCQ4QtSrcVrbtWnFSlKK5azMLs3cSqNI0cnpEZrkdUwcMlxu+xYRNh4+ov2NDXLqzUWwyiEhpDKTB+XE3zAGLDWrdf1uNbl558Bzmj3BeAZDpFeKOH6RoxGU3Ea65biRwrIpzcJSonDcyFXlfffXn3OUyNHkqSVKj+RDNQbp3W3648NNerRR5HTGafLqnKygKU21KqeYlbjgti7STKSU9cCi2fEpujwONfjrEDaEPG3Is0p1lmfc4dzJ5t/hVPk9XltxjTOLKvxb1vfKvFTo7touzY5m6WsnJ4RxhMltzw0BZMIIdldXKejpjsoQqiwsq1SiEi/4G5GhWCpTPVkXyilye/czMTeX171yEGmeQeBv1xgs7b0spzy5bLbl5/TXeo4Mg1i98yWdvHJZ1Bph4n/vrtPT7ZLHhdOc//HJx6jMUa9YdISjqVY5KrARVEtFkv7d3Y+VNKZx6XEAR6SOG5OOxy+7A1GBX+bYSRAWkjUGAKllgpTblQt+zxpHtA/vbdB3Ls2HGhP6EhGgOOViSSqN68VVyiOMgCPAvlOnHHvlInteeLCYA8GVuAjLUoLzSwgJ6YsSUpMRqC/yGUUTkdo2yw29gR7H9Xh+Ias1DBTGWleFerh2QNvFKu2yw8gmLKFoYtBYdIXc5gNz+4zTPc49qMAyQO1QZg8dKxYozpEwHpdNAuFcrJj3OFrZb2h4bku7CZsO1ZggrxazRKoF1W5b01kHC2b83gLrilOr8HvzFCb6VCMg22BSWNmhQMj+xRrdDBgDv1fZ3aXSxiYrfIymQcPsHM1OTctcvYW317108/d12e1RHkl5U4uaPKyoJVhAe3t7QlBQmqmpqaO3bXuAGv+GAit2scIdGxTFzHGcPX6M16J6YG5v7ZTp0/WSUPR6bJ7iMymanpzj5kDcPcemXkAbNJyJrCEa70jO5buNqBt8DIsa10WUyhUq7Bdol421zNymuUmRXZijsNEXQ7DduiDOzKQzadFugzLBA9RQCzAhec7JK9wuRfcIEQIkIodvp+z6OgitDMIfyh3UIqw8FRYKlL7MS4lThxILBl4UvwcRCa3WJHexspxO6f34sCA5cs8/xl2hBDcbOAd3mFvRVLA5svJ5ZZN5blRwfVCtcHiuiRZnrc7vIYTEEtRUagV+T6PBID2+hOc3mrpwunWQcHhVrkuqLq9Iz4rMabFUFIqP1ngsJqN9mp1eijtKqHUcouFLjVSW+K///gH98te/pr/90Y/oR9/7S+4xJ4THj4mQTKKYAqBkspftuJ0jWcjapI0ZOLKDZLsdjoMDcbIFK4rgui0Egi6KKMCxiA6KtsAg7bochXWPqyCE32RQ0ZgPha+vO1Jlfv0v/0RP7vyZvvk379Pla99h/eZ0MpYSnKbET4+5DTMMENTluIF7HpbIp2w1DdjjW6RY3nnKVJbsRkrrCL4kt3U+HpQaXSnFab3eWIsuYF3NLra9VCoW4Kjq7nhGLD5ExTLguLMdkVZ8dOtTunLxK8IQ5Juk2hLen2LAiwUXjzeUHGgeFLKF51PjDlAImbfbXgu2abHh9RvbbWEcDUE6Wvepk3p7u0ZgFmfd/Q0lrq3ufvQ7Wv76VTaE75JqJ6t0RREdE73JhKhcVTrYWGRb1XH5sG01gClbrvgqW/AHjmteB8p2nYvYt1b3eBXKb8tjNhIiFyqyONpvILnBEcZGoaIvc43UiC3ODWlFnvvwQsEtt2Oh+ti+2z76B73a5rGOPrvSx6KrB03bLWpTR/jSMDp4bOfwiXVf4TlNHrRCByyXG2n8Xr1r5i9yiQ4V0dRovXzRmKfkOJa3veFCiDpN2tBlrHfw9A5fPAZZdz5aP9EXQ5g7v0zWSI4LI9kajcfcVOjAufoV0N0qGxlNeaxOnFq3Gtxhi8O/lnVG8zdb5BeApX05/l/n33/+zdfliHPI+MFrSzSfrsmxAl6cmNtZw5uO43ZwXGgcOi0K2UDVs4K2OgGf9vkG6+C6IVOr6TepVGsiyef0+jIlhPMcotQIJ5zgOmDq7Cv02//7I2WyGdri0eWHT5/S6aUlSnL7ToZIpzFwY3k9TNeTizfcoq45auh/63m75cvptcDT+G36Hp7+67WB3GuP047n21u0ziPiu1zk/dUPf0j58fFwqzmS54iBp8tjNdq99zEXmkketFyjnfUVmphbEimm4MSSXl2MGriuTpyuZvNeu5haqTg1pY/KOelwOn3WObh/aW+HStvrVNlZo1S1QD/8h7+nqXy2u65fH9DVtztdVIvY9ec//zn95Cc/Ea1IdBAm8nm6eO48XTh7lpbmF+jsqVN0enGJZqenKcM9bovzWVXk6lOJbS2Htd2iWE7LaK4P9L/RFapp25sm9/E2RKuN7W1ae/6c1ngEfJOVfn1zk1Y3nou5OTkeTV5eXqb333+fbty4IeuYCKRGAM7hpz/9R/rZz/6ZI25FTG/IT83R4vIlWjjzKk0unKDZpTM0tXiKRqdmKJlKy1FeW+b+TTWC22Cw3cmNsk6QhW5j+ossjGURrPNdFzWC7TSaGnXuTlXYeextbdDu+jNer1FxZ4v2N1epuLUu2rzg9vKVK/Tjv/sxXbt2tW+8Wl0cuG+G4O5PT548pd/85j/oF7/4JX366SfCKJRSodhCPYE2GuqI8dFRGs2PUp6JynEkyaWzlE6nxPQHTMbDJLl0Qh+Kd8cnanK8Aq1QKDhShoI7al3ibQXRFsVSEN5+330PQhURDJPvuJ2XZ0N966236NrVa/TGm2/Qa6+9JrZHDaqr88UXX9IHH3xAv/rVr+ju3bsiDSW3MwNuRfuXuctk85Qbm6BsfpzSzG06M0JJri8SbCAwkkSSu00cqcWaGimo7RbHUPpqtSQMrgbDYx6h7FUewa4W96ksWqP7XMDv8Xv7VGMZ4DdCznF3XtfExAQr/TW6evWqWM6fP99UK/QDkTEE9zNiDaXDANXHH39Mf/jDTRbcHTrLkWF1dY022Atvbm7RNnvobU5JYCxq2oWaRq2O5b/gX80ZcjSvr3+v+lt0ONzfgWOijTszO0snOF07xZHp/PlX6c0336Tr1681yIlIBGgHxcnW1hZ99NGf6ObNm3T//n06d26Znj5dcbndFO+D3xKmsbDXRidIjdwDDe4cLYd3I7HjBHKrUlw5kdIRx4SsMlxLzTK3J0+eFNxeuPAVevvt63SFo4DCcXAbKUMIPI7bMmtMlqOmegAeaIdTla2tbfqU269PHj8W28Y5T0+LgTg5UU+lT/gspg5AufcL+/T7Dz/kblWOBZIW+8PTT05O0uzcHM2xgBYXF2l+ft4zMEFEn73TcUGlPa0aCeAN3D5ff05//uQTWltbFYo8OTnFkTHucuumT+6AWoINBtyurq7S7du3mdes4BYKL7jlUffZmRmaY07hWKY51fWivuOExm3kDaGL7yN9asWLHsM/z6XRazfoh0ij4lCGxhAMDI6CbgzBPEzQwIC6H0f4DhkYDCH+H8Wwkmm1ZHBOAAAAAElFTkSuQmCC",
    "primary buyer": "Joe Johnston",
    "product creator": "Jan Schulmann",
    material: "ABS, Mild Steel, Glass",
    "unit weight": "640.00 g",
    dimension: "145 x 145 x 350 mm",
    theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
    description: "Colourful Table Lamp for Kids",
    specification:
      "- 15 ?? LEDs, approx.4.5W - Lumen : 350 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base - Cord Length : >1.6 m",
      "number of styles":2,
      "style description": "Style B   Pink/white"
  },
  IAN_6: {
    "product name": "LED Table Lamp, 2 assorted",
    "product identifier": "HGXX567890",
    "ian": "HGEE2010097",
    "primary buyer": "Jim Anderson",
    "product creator": "Bianca Ng",
    material: "ABS, Mild Steel",
    "product thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAACQCAYAAABap7TNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABrISURBVHgB7V15cFVVmv9CyJ4ASchCCJIAJiwB0wFakInYsi86hXTTjdrY2o7jPs5YPeUfVo1lV1la6pRloVX+oTPqOLijuKKIgmCjgjgKIiiGRfZFICF74tzf0e/1l+O9b8vjvXMf51d16953333v3fud8/vWc85LoQjw448/1jq7AWRh4QOkpKR8EPa1FAEcIjQ4uwqysDAfuxwiVIZ7cR+ysLCwRLCIHI5nQMmGvnQWghuyra2NTp06RY2NjZSZmUllZWXwK8miJyAv3iS6u7upb9+fupDf5XbWEIEb8dixY7R582b6+OOPaefOndTS0qLO9+nTh6699lq66KKL1PHZDJYV9l1dXarDA+js6Pjc6bFvbm6m7Oxs8juSngjcqDt27KA33niDXn31VUWGjIwMysnJoby8vEBDvvjii3TeeedRQUHBWWsZWF7o4J2dnUoppKWlBeSB93HMr1NTU6mjo6PHNX5E0hIBDQZNtmrVKnr88cfp008/VefQcNBqaGC4RmhAnMvKylIEefrpp+nWW28964jA8jp+/LhyFSGj9PR05TJCVpARgGukRcA1ra2tPSyFH5F0ROAGXbZsGT322GO0e/fuHloM78HcQ4uhcUEGbnTsN2zYQPX19VRXV3dWkIF9/wMHDtDhw4eVTCALAASAVcA5dhdZvkwMJgPkCNL4VWZJRQQ0Gvz/u+++m7788suAmUfjSL+XyYDr29vblVWAVoOLhGthFWpra1XjJysZWB6wAN98842SBRMAstE3yAKbHjhDPqxQJEH8Bt8TgbX9nj176IEHHqB3331XdW40GhpGz3bwa7yHxodlYBcJHQF7aEfEE5dccgklI/D8IP727dvp0KFDyhLiuVlByE1aBCYCu0fSKsAaSGXiN/ieCGgUdNr77ruPjh49GmgkPaiThJBWQbpI6AxobHSM559/ns4991waOXJkUlkFPPvevXuV5QRAfsiC5YHn14kAefB7kBW7mNiz1cR5yA9yRCLCbzLzdZ4QjXr//ffTHXfcoQJdIJwGcLMKsCK84T2cAxmwTxbguRoaGmjdunUBV4atJh/LTZKB06jS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",
    "unit weight": "730.00 g",
    dimension: "145 x 145 x 400 mm",
    theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
    theme: "29.1 - Living (Good)",
    description: "Entry level table lamp with integrated LED module",
    specification:
      "- 24 ?? LEDs, approx.4.5W - Lumen : 250 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base - Cord Length : >1.6 m",
      "number of styles":2,
      "style description": "Style A  Black"
    },
  IAN_7: {
    "product name": "LED Table Lamp, 2 assorted",
    "product identifier": "HGXX567890",
    "ian": "HGEE2010102",
    "product thumbnail": "data:image/png;base64,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",
    "primary buyer": "Joe Johnston",
    "product creator": "Jan Schulmann",
    material: "ABS, Mild Steel, Glass",
    "unit weight": "640.00 g",
    dimension: "145 x 145 x 350 mm",
    theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
    description: "Colourful Table Lamp for Kids",
    specification:
      "- 15 ?? LEDs, approx.4.5W - Lumen : 350 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base - Cord Length : >1.6 m",
      "number of styles":2,
      "style description": "Style B   Pink/white"
  },
  IAN_8: {
    "product name": "LED Table Lamp, 2 assorted",
    "product identifier": "HGXX567890",
    "ian": "HGEE2010097",
    "primary buyer": "Jim Anderson",
    "product creator": "Bianca Ng",
    material: "ABS, Mild Steel",
    "product thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAACQCAYAAABap7TNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABrISURBVHgB7V15cFVVmv9CyJ4ASchCCJIAJiwB0wFakInYsi86hXTTjdrY2o7jPs5YPeUfVo1lV1la6pRloVX+oTPqOLijuKKIgmCjgjgKIiiGRfZFICF74tzf0e/1l+O9b8vjvXMf51d16953333v3fud8/vWc85LoQjw448/1jq7AWRh4QOkpKR8EPa1FAEcIjQ4uwqysDAfuxwiVIZ7cR+ysLCwRLCIHI5nQMmGvnQWghuyra2NTp06RY2NjZSZmUllZWXwK8miJyAv3iS6u7upb9+fupDf5XbWEIEb8dixY7R582b6+OOPaefOndTS0qLO9+nTh6699lq66KKL1PHZDJYV9l1dXarDA+js6Pjc6bFvbm6m7Oxs8juSngjcqDt27KA33niDXn31VUWGjIwMysnJoby8vEBDvvjii3TeeedRQUHBWWsZWF7o4J2dnUoppKWlBeSB93HMr1NTU6mjo6PHNX5E0hIBDQZNtmrVKnr88cfp008/VefQcNBqaGC4RmhAnMvKylIEefrpp+nWW28964jA8jp+/LhyFSGj9PR05TJCVpARgGukRcA1ra2tPSyFH5F0ROAGXbZsGT322GO0e/fuHloM78HcQ4uhcUEGbnTsN2zYQPX19VRXV3dWkIF9/wMHDtDhw4eVTCALAASAVcA5dhdZvkwMJgPkCNL4VWZJRQQ0Gvz/u+++m7788suAmUfjSL+XyYDr29vblVWAVoOLhGthFWpra1XjJysZWB6wAN98842SBRMAstE3yAKbHjhDPqxQJEH8Bt8TgbX9nj176IEHHqB3331XdW40GhpGz3bwa7yHxodlYBcJHQF7aEfEE5dccgklI/D8IP727dvp0KFDyhLiuVlByE1aBCYCu0fSKsAaSGXiN/ieCGgUdNr77ruPjh49GmgkPaiThJBWQbpI6AxobHSM559/ns4991waOXJkUlkFPPvevXuV5QRAfsiC5YHn14kAefB7kBW7mNiz1cR5yA9yRCLCbzLzdZ4QjXr//ffTHXfcoQJdIJwGcLMKsCK84T2cAxmwTxbguRoaGmjdunUBV4atJh/LTZKB06jS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",
    "unit weight": "730.00 g",
    dimension: "145 x 145 x 400 mm",
    theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
    theme: "29.1 - Living (Good)",
    description: "Entry level table lamp with integrated LED module",
    specification:
      "- 24 ?? LEDs, approx.4.5W - Lumen : 250 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base - Cord Length : >1.6 m",
      "number of styles":2,
      "style description": "Style A  Black"
  }
}

storiesOf("organisms / Compare", module).add("Default", () => {
  return (
    <Compare
      comparisonPanelProps={object("comparisonPanelProps", comparisonPanelProps)}
      properties={object("properties", properties)}
      selectedProperties={object("selectedProperties", selectedProperties)}
      primary={text("primary", "IAN_1")}
      data={object("data", { ...productDetailsData })}
      itemSelectorProp={object("itemSelectorProp", itemSelectorProp)}
      compareKey={text("compareKey", 'IAN')}
      savedComparisons={object("savedComparisons", savedComparisons)}
      savedComparisonKeys={savedComparisonKeys}
      saveCurrentComparisonId={saveCurrentComparisonId}
      currentComparisonId={currentComparisonId}
      templateName={name}
      itemCardProps={["ian", "product name", "product thumbnail"]}
      propertiesUISchema={propertiesUISchema}
      onHighlightChange={onHighlightChange}
      highlightSelected={highlightSelected}
    />
  );
}).add("itemsToCompareCount", () => {
  return (
    <Compare
      comparisonPanelProps={object("comparisonPanelProps", comparisonPanelProps)}
      properties={object("properties", properties)}
      selectedProperties={object("selectedProperties", selectedProperties)}
      primary={text("primary", "IAN_1")}
      data={object("data", { ...productDetailsData2 })}
      compareKey={text("compareKey", 'IAN')}
      savedComparisons={object("savedComparisons", savedComparisons)}
      savedComparisonKeys={savedComparisonKeys}
      saveCurrentComparisonId={saveCurrentComparisonId}
      currentComparisonId={currentComparisonId}
      templateName={name}
      itemSelectorProp={itemSelectorProp}
      itemCardProps={["ian", "product name", "product thumbnail"]}
      propertiesUISchema={propertiesUISchema}
      onHighlightChange={onHighlightChange}
      highlightSelected={highlightSelected}
      itemsToCompareCount={text("itemsToCompareCount", 8)}
    />
  );
}).add("no products", () => {
  return (
    <Compare
      comparisonPanelProps={object("comparisonPanelProps", comparisonPanelProps)}
      properties={object("properties", properties)}
      selectedProperties={object("selectedProperties", selectedProperties)}
      primary={text("primary", "IAN_1")}
      data={object("data", {})}
      compareKey={text("compareKey", 'IAN')}
      savedComparisons={object("savedComparisons", savedComparisons)}
      savedComparisonKeys={savedComparisonKeys}
      saveCurrentComparisonId={saveCurrentComparisonId}
      currentComparisonId={currentComparisonId}
      templateName={name}
      itemSelectorProp={itemSelectorProp}
      itemCardProps={["ian", "product name", "product thumbnail"]}
      propertiesUISchema={propertiesUISchema}
      onHighlightChange={onHighlightChange}
      highlightSelected={highlightSelected}
      itemsToCompareCount={text("itemsToCompareCount", 8)}
      currentItemKey="IAN_1"
      compareKey="IAN"
    />
  );
});
