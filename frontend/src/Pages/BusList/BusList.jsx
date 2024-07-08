import React, { useEffect, useState } from "react";
import "./BusList.css";
import BusDetailsCard from "../../Components/BusDetailsCard/BusDetailsCard";
import { useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import Axios from "../../api/Axios";
import BusDetailsSkeleton from "../../Components/BusDetailsCard/BusDetailsSkeleton/BusDetailsSkeleton";

const BusList = () => {
  const [filteredBus, setfilteredBus] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const source = searchParams.get("source");
  const destination = searchParams.get("destination");
  const date = searchParams.get("availableDate");

  const navigate = useNavigate();

  useEffect(() => {
    fetchBusList();
  }, [source, destination, date]);

  const fetchBusList = async () => {
    try {
      setLoading(true);
      const response = await Axios.get(
        `/search?source=${source}&destination=${destination}&availableDate=${date}`
      );
      if (response.status === 200) {
        setLoading(false)
        setfilteredBus(response.data);
      }
      // console.log(response)
    } catch (error) {
      if (error?.response?.status === 403) {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.reload();
      }
    }
  };

  return (
    <div className="BusList_wrapper">
      {loading ? (
        <>
        <BusDetailsSkeleton />
        <BusDetailsSkeleton />
        <BusDetailsSkeleton />
        </>
      ) : (
        <>
          {filteredBus?.map((item, index) => (
            <BusDetailsCard key={index} item={item} date={date} />
          ))}
        </>
      )}
    </div>
  );
};

export default BusList;
