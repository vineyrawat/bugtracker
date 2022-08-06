import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const useTitle = (title: String) => {
  const { setTitle }: any = useOutletContext();

  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);
};

export const LayoutProvider = ({ title, children }: any) => {
  useTitle(title);
  return children;
};
