import axios from "axios";
import { baseUrl } from "../../../utils/constants/Constants";

import {
  addMemberFailure,
  addMemberRequest,
  addMemberSuccess,
} from "../../types/members/membersTypes";
import {getMembers} from './getMembers.js'

export const addMember = (
  email,
  position,
  firstName,
  lastName,
  linkedIn,
  facebook,
  avatar,
  token
) => {
  return (dispatch) => {
    dispatch(addMemberRequest());
    axios
      .post(
        `${baseUrl}/admins/add-member`,
        {
          email: email,
          position: position,
          firstName: firstName,
          lastName: lastName,
          linkedIn: linkedIn,
          facebook: facebook,
          avatar: avatar,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("response ", response.data);
        const data = response?.data;
        dispatch(addMemberSuccess(data));
      })
      .catch((error) => {
        console.log("error: ", error);
        return dispatch(addMemberFailure(error?.response?.data?.message));
      })
      .finally(() => {
        dispatch(getMembers(token))
      });
  };
};