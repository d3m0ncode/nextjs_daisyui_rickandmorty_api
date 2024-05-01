"use client";
import { getPersonajesApi } from "@/services/rick.services";
import React, { use, useEffect, useRef, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_RICK_AND_MORTY;

export const useRickAndMorty = () => {
  const [characters, setcharacters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const nextUrlPage = useRef(`${apiUrl}/character/?page=1`);

  useEffect(() => {
    (async () => {
      await loadCharacters();
    })();
  }, []);

  //////PERSONAJES
  const loadCharacters = async () => {
    try {
      setIsLoading(true);
      const response = await getPersonajesApi(nextUrlPage.current);
      if (response) {
        nextUrlPage.current = response.info.next;
        setcharacters([...characters, ...response.results]);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return { loadCharacters, characters, isLoading };
};
