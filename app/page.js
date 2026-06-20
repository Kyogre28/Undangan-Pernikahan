"use client";

import { useState, useEffect, useRef } from "react";
import config from "@/data/config";

import LoadingScreen from "@/components/LoadingScreen";
import Cover from "@/components/Cover";
import MusicPlayer from "@/components/MusicPlayer";
import ScrollProgress from "@/components/ScrollProgress";
import Opening from "@/components/Opening";
import Couple from "@/components/Couple";
import Countdown from "@/components/Countdown";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Rsvp from "@/components/Rsvp";
import Wishes from "@/components/Wishes";
import Gift from "@/components/Gift";
import Footer from "@/components/Footer";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  // Nama tamu dari parameter URL  (?to=Nama%20Tamu)
  const [guest, setGuest] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) setGuest(decodeURIComponent(to.replace(/\+/g, " ")));
  }, []);

  // Selesai loading
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  // Kunci scroll selama cover belum dibuka
  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
    window.scrollTo({ top: 0 });
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}

      <ScrollProgress active={opened} />

      <Cover opened={opened} guest={guest} onOpen={handleOpen} />

      {/* audio di-load tapi tidak autoplay sampai user menekan "Buka Undangan" */}
      <audio ref={audioRef} src={config.music.src} loop preload="auto" />
      {opened && <MusicPlayer playing={playing} onToggle={toggleMusic} />}

      <main className={`content ${opened ? "content--visible" : ""}`} aria-hidden={!opened}>
        <Opening />
        <Couple />
        <Countdown />
        <Events />
        <Gallery />
        {config.rsvp.enabled && <Rsvp />}
        {config.wishes.enabled && <Wishes />}
        {config.gift.enabled && <Gift />}
        <Footer />
      </main>
    </>
  );
}
