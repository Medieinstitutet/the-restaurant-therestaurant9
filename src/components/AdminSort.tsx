import { ChangeEvent } from "react";

interface IAdminSort {
  handleAdminSort: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AdminSort = ({ handleAdminSort }: IAdminSort) => {
  return (
    <div className="adminSortContainer">
      <span>Sortera efter datum: </span>
      <input type="date" onChange={handleAdminSort} />
    </div>
  );
};
