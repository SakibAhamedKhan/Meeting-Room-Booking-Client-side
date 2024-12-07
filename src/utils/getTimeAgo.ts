import React, { useState, useEffect } from "react";
import moment from "moment";

const getTimeAgo: React.FC<string> = (dateString) => {
  const date = moment(dateString);
  const now = moment();

  if (now.diff(date, "days") < 7) {
    return date.fromNow(); 
  }


  return date.format("MMMM Do YYYY"); 
};

export default getTimeAgo;
