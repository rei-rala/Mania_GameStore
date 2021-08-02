import React, { createContext, useEffect, useState } from 'react';

import { database } from '../firebase/firebase';

export const Categories = createContext();

export const CategoriesContext = ({ children }) => {
  const [categoriesFirebase, setCategoriesFirebase] = useState(null)
  const manageCategoriesFirebase = categories => setCategoriesFirebase(categories);

  useEffect(() => {
    console.info('Fetch de categorias')
    const categoriesF = database.collection('categories');

    categoriesF.get().then(query =>
      query.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      }))
      .then(manageCategoriesFirebase)
      .catch(console.error)
  }, [])


  return <Categories.Provider value={{ categoriesFirebase }}> {children} </Categories.Provider>;
}