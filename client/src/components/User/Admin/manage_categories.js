import React from "react";
import UserLayout from "../../../Hoc/UserLayout";
import ManageBrands from "./manage_brands";
import ManageWoods from "./manage_woods";

const ManageCategories = ({}) => {
  return (
    <UserLayout>
      <ManageBrands />
      <ManageWoods />
    </UserLayout>
  );
};

export default ManageCategories;
