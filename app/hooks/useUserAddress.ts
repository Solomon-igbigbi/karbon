'use client'
import { useState } from 'react';

const useUseraddress = () => {
  const [userAddress, setUserAddress] = useState<string | null>(null);

  // Method to set user address
  const setAddress = (address: string) => {
    setUserAddress(address);
    // Store the address in local storage
    localStorage.setItem('userAddress', address);
  };

  // Method to get user address
  const getAddress = () => {
    return userAddress;
  };

  return { setAddress, getAddress };
};

export default useUseraddress;
