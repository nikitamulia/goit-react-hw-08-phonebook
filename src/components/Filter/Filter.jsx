import React from "react";
import { useDispatch } from 'react-redux';
import { setStatusFilter } from "redux/filterSlice";
import { Box, Text, Input } from "./FilterStyled";

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => {
    const filter = e.target.value;
    dispatch(setStatusFilter(filter))
    };


  return(
      <Box>
        <Text> Find contacts by name</Text>
        <Input type="text" placeholder="Enter search name" onChange = {onChange} />
      </Box>
  )
}
