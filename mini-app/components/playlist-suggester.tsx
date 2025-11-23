"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function PlaylistSuggester() {
  const [mood, setMood] = useState("");
  const [event, setEvent] = useState("");
  const [playlist, setPlaylist] = useState<string | null>(null);

  const suggest = () => {
    if (mood === "happy") {
      setPlaylist("Happy Vibes Playlist");
    } else if (event === "party") {
      setPlaylist("Party Hits Playlist");
    } else {
      setPlaylist("Mixed Playlist");
    }
  };

  return (
    <div className="w-full max-w-md p-4 border rounded">
      <h2 className="text-xl font-semibold mb-2">Playlist Suggester</h2>
      <div className="mb-2">
        <label className="block mb-1">Mood</label>
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="e.g., happy, sad"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Event</label>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="e.g., party, workout"
        />
      </div>
      <Button onClick={suggest} className="w-full">
        Suggest Playlist
      </Button>
      {playlist && (
        <div className="mt-4 p-2 bg-muted rounded">
          Suggested: <strong>{playlist}</strong>
        </div>
      )}
    </div>
  );
}
