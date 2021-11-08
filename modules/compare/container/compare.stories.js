import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import CompareContainer from './compare';
import { CompareContextProvider } from "../context";
import { withKnobs, text, select, number } from "@storybook/addon-knobs";
import {
  fetch
} from '../request';

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

const BASE_URL = process.env.REACT_APP_STORYBOOK_URL;
const users = ['puneet@dummy', 'soham@dummy', 'rishabh@dummy', 'parag@dummy', 'priyanka@dummy'];

storiesOf("containers / CompareContainer", module).add(
  "With FetchData callback from consumer", () => {

    const fetchData = async (value) => {
      try {
        let url = "";
        if(value == 2 || value == "F342-23422") {
          throw new Error("Product not found. Please try again.");
        }
        if(["1","5","3","4", "HGXX567890", "HGEE2010097", "HGEE2010102", "6", "7", "8", "9", "10", "11"].includes(value)) {
          if(value === "HGXX567890") value = 1;
          if(value === "HGEE2010097") value = 3;
          if(value === "HGEE2010102") value = 4;
          url = `${BASE_URL}/productIAN${value}.json`
        } else {
          url = `${BASE_URL}/productIAN1.json`
        }
        const { data } = await fetch(url);
        return {url, data};
      }
      catch (error) {
        throw error;
      }
    }


  return (
    <CompareContextProvider>
      <CompareContainer
        compareKey={text("compareKey", 'IAN')}
        fetchData={fetchData}
        templateId={text("templateId", 'f21a6961-573a-4dad-8b9b-6535ba75257f')}
        authKey={select("user", users, users[0])}
        itemsToCompareCount={number("itemsToCompareCount", 4)}
      />
    </CompareContextProvider>
  );
}).add("With transformResponse callback from consumer", () => {

  //eg transformResponse callback from consumer, 
  //consumer can transform this response to suit the data which product compare needs
  const transformResponse = async (response) => {
    try {
      const transformedResponse = {
        "primary buyer": response.product.productInfoData['primary buyer'],
        "product creator": response.product.productInfoData['product creator'],
        "material": response.style.styleDetailsData['material'],
        "unit weight": response.style.styleDetailsData['unit weight'],
        "dimension": response.style.styleDetailsData.dimension,
        "theme": response.product.productDetailsData.theme,
        "description": response.product.productDetailsData.description,
        "specification": response.product.productDetailsData.specification,
        "ian": response.product.productDetailsData.ian,
      }
      return transformedResponse;
    }
    catch (error) {
      throw error;
    }
  }

  const fetchData = async (value) => {
    try {
      const url = `${BASE_URL}/productIAN1.json`
      const { data } = await fetch(url);
      return {url, data};
    }
    catch (error) {
      throw error;
    }
  }


  return (
    <CompareContextProvider>
      <CompareContainer
        compareKey={text("compareKey", 'IAN')}
        fetchData={fetchData}
        transformResponse={transformResponse}
        templateId={text("templateId", '5fd4f966-1ca8-4ac7-b3d3-b60c123e4922')}
        authKey={select("user", users, users[0])}
        itemsToCompareCount={number("itemsToCompareCount", 4)}
      />
    </CompareContextProvider>
  );
}).add("With highlight differences 40 fields", () => {

  const fetchData = async (value) => {
    try {
      let url = "";
      if(value == 2 || value == "F342-23422") {
        throw new Error("Product not found. Please try again.");
      }
      if(["1","5","3","4", "HGXX567890", "HGEE2010097", "HGEE2010102"].includes(value)) {
        if(value === "HGXX567890") value = 1;
        if(value === "HGEE2010097") value = 3;
        if(value === "HGEE2010102") value = 4;
        url = `${BASE_URL}/productIAN${value}.json`
      } else {
        url = `${BASE_URL}/productIAN1.json`
      }
      const { data } = await fetch(url);
      return {url, data};
    }
    catch (error) {
      throw error;
    }
  }

  return (
    <CompareContextProvider>
      <CompareContainer
        compareKey={text("compareKey", 'IAN')}
        fetchData={fetchData}
        templateId={text("templateId", '5fd4f966-1ca8-4ac7-b3d3-b60c123e4922')}
        authKey={select("user", users, users[0])}
        itemsToCompareCount={number("itemsToCompareCount", 6)}
      />
    </CompareContextProvider>
  );
})
