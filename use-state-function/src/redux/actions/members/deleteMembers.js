import axios from "axios";
import { baseUrl } from "../../../pages/home/constants/Constants";
import {
  deleteMemberRequest,
  deleteMemberSuccess,
  deleteMemberFailure,
} from "../../types/members/membersTypes";
import {getMembers} from './getMembers.js'

export const deleteMember = (memberId, token) => {
  return (dispatch) => {
    dispatch(deleteMemberRequest());
  axios
    .delete(`${baseUrl}/admins/delete-member/${memberId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(response.data.message);
      const data = response?.data;
      dispatch(deleteMemberSuccess(data));
    })
    .catch((error) => {
      console.log(error);
      return dispatch(deleteMemberFailure(error?.message));
    })
    .finally(() => {
      dispatch(getMembers(token));
    });
}};