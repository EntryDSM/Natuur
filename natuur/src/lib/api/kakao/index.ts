import axios from "axios";

import { SearchAddressApiType } from "../../../core/redux/actions/personal";

const connectionUrl = "https://dapi.kakao.com/v2/local/search/address.json";

export const getMapDataApi = async (payload: { query: string }) => {
  const response = await axios.get<SearchAddressApiType>(connectionUrl, {
    headers: {
      Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_ID}`
    },
    params: {
      query: payload.query
    }
  });

  return response.data;
};
