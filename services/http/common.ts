import axiosFactory  from "../../api/apiNew";

/* #region  Beers */
export const getAllBeersApi = (getRequestParams ): Promise<string> => {
	return axiosFactory().get(`/beers?page=${getRequestParams.page}&per_page=${getRequestParams.per_page}`);
};
/* #endregion */

