import { request } from "../../../utils/api.config/axios-config";
import {
  deleteMemberRequest,
  deleteMemberSuccess,
  deleteMemberFailure,
} from "../../types/members/membersTypes";

export const deleteMember = (memberId, token, onFinish = () => undefined) => {
  return (dispatch) => {
    dispatch(deleteMemberRequest());
  request
    .delete(`/admins/delete-member/${memberId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(response.data.message);
      const data = response?.data;
      dispatch(deleteMemberSuccess(data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(deleteMemberFailure(error?.message));
    })
    .finally(() => {
      onFinish();
      console.log(token)
    });
}};