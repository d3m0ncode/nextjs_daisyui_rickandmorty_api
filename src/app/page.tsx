"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InputSearch from "@/components/InputSearch";
import Loading from "@/components/Loading";
import { useRickAndMorty } from "@/hooks/useRickAndMorty";
import { Result } from "@/interfaces/CharactersInterface";
import Image from "next/image";
import React, { use, useEffect } from "react";
import InfinityScroll from "react-infinite-scroll-component";
export default function Home() {
  const { characters, isLoading, loadCharacters } = useRickAndMorty();

  return (
    <>
      <Header />
      <div>
        <InputSearch />
      </div>

      {/* SCROLLCARDS */}

      <InfinityScroll
        dataLength={characters.length}
        next={loadCharacters}
        hasMore={true}
        loader={
          <div style={{ justifyContent: "center", display: "flex" }}>
            <Loading />
          </div>
        }
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            padding: "10px",
            justifyContent: "center",
          }}
        >
          {characters.map((character: Result) => (
            <Card key={character.id} {...character} />
          ))}
        </div>
      </InfinityScroll>

      <Footer />
    </>
  );
}
