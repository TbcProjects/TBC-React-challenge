import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // fetch and set data on mount
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("./contact-data.json");
      const json = await data.json();
      setData(json);
    };

    getData();
  }, []);

  const getModalContent = id => {
    setModalContent(data.filter(profile => profile.id === id));
  };

  const toggleSort = () => {
    if (toggle) {
      data.sort((a, b) => (a.first_name > b.first_name ? 1 : -1));
    } else if (!toggle) {
      data.sort(() => 0.5 - Math.random());
    }
    return data;
  };

  // toggle between alpha and random order
  const handleSort = () => {
    setToggle(!toggle);
    setData([...toggleSort()]);
  };

  //   dark theme switcher
  const handleTheme = () => {
    setDarkTheme(prevState => !prevState);
  };

  const handleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        toggle,
        isOpen,
        darkTheme,
        modalContent,
        getModalContent,
        handleSort,
        handleTheme,
        handleModal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
