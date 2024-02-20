import { ChangeEvent } from "react";

interface IAdminSort {
  handleAdminSort: (e: ChangeEvent<HTMLInputElement>) => void;
  resetAdminSort: () => void;
}

export const AdminSort = ({ handleAdminSort, resetAdminSort }: IAdminSort) => {
  return (
    <div className="adminSortContainer">
      <span>Sortera efter datum: </span>
      <input type="date" onChange={handleAdminSort} />
      <button className="resetButton" onClick={resetAdminSort}>
        Återställ
      </button>
    </div>
  );
};
