import { React,} from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/modal/Modal";
import SearchForm from "./SearchForm/SearchForm";
import {setIsSearch} from "../../redux/reducers/searchFormReducer";
const SearchModal = () => {
  const searchActive = useSelector((state) => state.searchForm.isSearch);
  const dispatch = useDispatch();

  const handlerSetIsSearch = () => {
    dispatch(setIsSearch(false));
  };

  return (
    <Modal active={searchActive} setActive={handlerSetIsSearch} text={"Поиск"}>
      <SearchForm active={searchActive} close={handlerSetIsSearch} />
    </Modal>
  );
};

export default SearchModal;
