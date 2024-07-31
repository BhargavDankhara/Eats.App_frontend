import { useCreateMyRestaurant } from "@/api/MyRestaurentApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-forms/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurent, isLoading } = useCreateMyRestaurant();
  return (
    <ManageRestaurantForm onSave={createRestaurent} isLoading={isLoading} />
  );
};

export default ManageRestaurantPage;
