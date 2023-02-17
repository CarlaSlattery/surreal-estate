// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

const postProperty = (fields, setAlert) => {
  return axios
    .post("http://localhost:4000/api/v1/PropertyListing/", fields)
    .then((res) => {
      setAlert({
        message: "Success! Property Added",
        success: true,
      });
      console.log(res.data);
    })
    .catch((err) => {
      setAlert({
        message: "Error - server not working, please try later.",
        success: false,
      });
      console.log(err);
    });
};

export default postProperty;
