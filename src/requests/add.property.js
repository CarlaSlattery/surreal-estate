// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

const postProperty = (fields) => {
  return axios
    .post("http://localhost:4000/api/v1/PropertyListing/", fields)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postProperty;
