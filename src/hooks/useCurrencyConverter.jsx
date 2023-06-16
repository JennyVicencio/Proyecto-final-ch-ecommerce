import { useState, useEffect } from "react";

export function useCurrencyConverter(price, selectedCurrency) {
  const [convertedPrice, setConvertedPrice] = useState(null);

  useEffect( () => {
    let newCurrency = Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: selectedCurrency, // Ej: CLP
    });
    setConvertedPrice(newCurrency.format(price));
  }, [price, selectedCurrency]);

  return convertedPrice;
}