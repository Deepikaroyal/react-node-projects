import { Constants } from "../constants/alertConstants";
import React from 'react';

export  const alertAction=(data)=> {
  return {
        type:Constants.ADDUSER,
        payload: data
  }
}
