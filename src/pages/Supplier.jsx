import React, { useState } from 'react'
import Transactions from '../components/Transactions/Transactions'
import { useFetching } from '../hooks/useFetching';
import Get from '../API/Get';
import { useEffect } from 'react';
const Suppliers = () => {

  const [suppliers, setSuppliers] = useState([]);

  const [fetchPriceById, isLoading] = useFetching(async () => {
    const response = await Get.getSuppliers();
    setSuppliers(response.data);
  })

  useEffect(() => {
    fetchPriceById();
  }, [])

  return (
    <div className="content-grid-two">
      <div className="grid-two-item">
        <div className="subgrid-two">
          <Transactions suppliers={suppliers} />
        </div>
      </div>
    </div>
  )
}

export default Suppliers